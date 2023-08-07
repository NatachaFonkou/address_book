import { type } from "@testing-library/user-event/dist/type";
import ApiRoute from "../api/ApiRoute";

export const GET_CONTACTS = "GET_CONTACTS";
export const ADD_CONTACT_SUCCESS = "ADD_CONTACT_SUCCESS";
export const ADD_CONTACT_ERROR = "ADD_CONTACT_ERROR";
export const SORT_CONTACT = "SORT_CONTACT"

export const getContacts = () => async (dispatch) => {
  try {
    const res = await ApiRoute.get("/contacts");
    dispatch({
      type: GET_CONTACTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addContact = (contact) => async (dispatch) => {
  try {
    ApiRoute.post("contacts", contact)
      .then((res) => {
        // si l'ajout est réussi, on dispatch une action
        dispatch({
          type: ADD_CONTACT_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        // en cas d'erreur, on dispatch une action d'erreur
        dispatch({
          type: ADD_CONTACT_ERROR,
          payload: err.res.data,
        });
      });
  } catch (err) {
    console.log(err);
  }
};

export const sortContact = ()  => {
  return {
    type : SORT_CONTACT
  }
}
