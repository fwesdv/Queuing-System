// userReducer.ts
 const FETCH_USERS_START = 'FETCH_USERS_START';
 const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
 const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
  
  const initialState = {
    loading: false,
    users: [],
    error: null,
  };
  
  const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case FETCH_USERS_START:
        return {
          ...state,
          loading: true,
        };
      case FETCH_USERS_SUCCESS:
        return {
          ...state,
          loading: false,
          users: action.payload,
          error: null,
        };
      case FETCH_USERS_FAILURE:
        return {
          ...state,
          loading: false,
          users: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  export {}; 