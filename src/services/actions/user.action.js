import ApiRoute from "../api/ApiRoute";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const LOGOUT = "LOGOUT";

export const loginAction = (email, password) => async (dispatch) => {
  try {
    const res = await ApiRoute.get("/users", {
      params: {
        email,
        password,
      },
    });

    console.log('res.data: ', res.data)

    if (res.data.length > 0){
        dispatch({  
            type: LOGIN_SUCCESS,
            payload: res.data[0]
        }); 
        localStorage.setItem('isAuthenticated', true)
        localStorage.setItem('userId', res.data[0]['id'])
        // console.log("Okay")
    }
    else{
        dispatch({
            type: LOGIN_FAIL,
            payload: "Email ou Mot de Passe Erroné"
        })
    }

  } catch (err) {
    dispatch({
        type: LOGIN_FAIL,
        payload: err.res.data
    })
    console.log(err);
  }
};

export const registerAction = (user) => async (dispatch) => {
  try {
    ApiRoute.post("/users", user)
      .then((res) => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: REGISTER_FAIL,
          payload: err.res.data,
        });
      });
  } catch (err) {
    console.log(err);
  }
};

export const logoutAction = () => async (dispacth) => {
  return {
    type: LOGOUT,
  };
};

export const GET_USER_BY_ID = "GET_USER_BY_ID";

export const getUserById = (id) => async (dispatch) => {
  try {
    const res = await ApiRoute.get(`/users/${id}`);
    dispatch({
      type: GET_USER_BY_ID,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
