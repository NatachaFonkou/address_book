import { useSelector } from "react-redux";
import {
  ADD_CONTACT_ERROR,
  ADD_CONTACT_SUCCESS,
  GET_CONTACTS,
  SORT_CONTACT,
} from "../actions/contact.action";

const initialState = {
  contacts: [],
  error: null,
};

export function contactReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        contacts: action.payload,
        error: null,
      };
    case ADD_CONTACT_SUCCESS:
      return {
        contacts: [...state.contacts, action.payload],
        error: null,
      };
    case ADD_CONTACT_ERROR:
      return {
        error: action.payload,
      };
    case SORT_CONTACT:
      const sortedContacts = [...state.contacts];
      sortedContacts.sort(function (a, b) {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });

      console.log("sortedContacts: ", sortedContacts);
      return {
        ...state,
        contacts: sortedContacts,
      };
    default:
      return state;
  }
}
