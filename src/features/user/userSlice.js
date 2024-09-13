import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  profile: {
    email: "",
    userName: "",
  },
  log: false,
  contacts: [],
  loading: false,
  contactLoading: {
    adding: false,
    deleting: false,
  },
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userActions: (state, action) => {
       console.log(action.payload);
      switch (action.payload.type) {
        case "FETCH_PROFILE_SUCCESS":
          return {
            ...state,
            log: true,
            profile: action.payload.payload,
            loading: false,
            error: null,
          };
        case "FETCH_PROFILE_FAILURE":
          return {
            ...state,
            loading: false,
            error: "Error while fetching profile",
          };
        case "FETCH_CONTACTS_SUCCESS":
          return {
            ...state,
            contacts: action.payload.payload,
            loading: false,
            error: null,
          };
        case "FETCH_CONTACTS_FAILURE":
          return {
            ...state,
            loading: false,
            error: "Error while fetching contacts",
          };
        case "FETCH_TODAY_CONTACTS_SUCCESS":
          return {
            ...state,
            contacts: action.payload.payload,
            loading: false,
            error: null,
          };
        case "FETCH_TODAY_CONTACTS_FAILURE":
          return {
            ...state,
            loading: false,
            error: "Error while fetching contacts",
          };
        case "FETCH_DATA_LOADING":
          return {
            ...state,
            loading: true,
          };
        case "ADD_CONTACT_LOADING":
          return {
            ...state,
            contactLoading: {
              adding: true,
              deleting: false,
            },
          };
        case "DELETE_CONTACT_LOADING":
          return {
            ...state,
            contactLoading: {
              adding: false,
              deleting: true,
            },
          };
        case "UPDATE_CONTACT_LOADING":
          return {
            ...state,
            contactLoading: {
              adding: false,
              deleting: true,
            },
          };
        case "ADD_CONTACT_SUCCESS":
          return {
            ...state,
            contacts: [action.payload.payload, ...state.contacts],
            contactLoading: {
              adding: false,
              deleting: false,
            },
            error: null,
          };
        case "ADD_DATA_FAILURE":
          return {
            ...state,
            error: "Something went wrong try again",
            contactLoading: {
              adding: false,
              deleting: false,
            },
          };
        case "UPDATE_CONTACT_SUCCESS":
          return {
            ...state,
            contacts: action.payload.payload,
            contactLoading: {
              adding: false,
              deleting: false,
            },
            error: null,
          };
        case "DELETE_CONTACT_SUCCESS":
          return {
            ...state,
            contacts: action.payload.payload,
            contactLoading: {
              adding: false,
              deleting: false,
            },
            error: null,
          };
        case "DELETE_DATA_FAILURE":
          return {
            ...state,
            error: "Something went wrong try again",
          };
        case "LOGOUT_SUCCESS":
          return {
            profile: {
              email: "",
              userName: "",
            },
            log: false,
            contacts: [],
            loading: false,
            contactLoading: {
              adding: false,
              deleting: false,
            },
            error: null,
          };
        default:
          return state;
      }
    },
  },
});

export default userSlice.reducer;

export const { userActions } = userSlice.actions;

export const selectUser = (state) => state.user;
