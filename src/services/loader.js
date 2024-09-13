import contactServices from "./contactServices";
import userServices from "./userServices";

export const fetchContacts = async (dispatch, userActions) => {
  try {
    dispatch(userActions({ type: "FETCH_DATA_LOADING" }));
    const { data } = await contactServices.get();
    dispatch(userActions({ type: "FETCH_CONTACTS_SUCCESS", payload: data }));
  } catch (error) {
    console.error("Error while fetching contacts:", error);
    dispatch(userActions({ type: "FETCH_CONTACTS_FAILURE" }));
  }
};
export const profile = async (dispatch, userActions) => {
  try {
    
    dispatch(userActions({ type: "FETCH_DATA_LOADING" }));
    const {data} = await userServices.checkAuth();
    console.log(data)
    dispatch(
      userActions({ type: "FETCH_PROFILE_SUCCESS", payload: data.user })
    );
  } catch (error) {
    dispatch(userActions({ type: "FETCH_PROFILE_FAILURE" }));
  }
};
