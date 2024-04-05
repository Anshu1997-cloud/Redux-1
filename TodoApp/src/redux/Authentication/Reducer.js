import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "./actionItem";


const initialState = {
      isAuthenticated: !!localStorage.getItem('token'),
      error : null
};

export const authReducer = (state = initialState, action) => {
      switch(action.type){
        case LOGIN_SUCCESS:
            return{
                ...state,
                isAuthenticated: true,
                error: null
            }
            case LOGIN_FAILURE:
                return {
                    ...state,
                    isAuthenticated: false,
                    error : action.payload
            };
            case LOGOUT:
                return {
                    ...state,
                    isAuthenticated: false,
                    error : null
                };
            default:
                return state;    
      }
     
}