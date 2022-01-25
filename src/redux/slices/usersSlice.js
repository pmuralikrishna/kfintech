import { createSlice } from "@reduxjs/toolkit";
import { ofType } from "redux-observable";
import { switchMap, map, filter } from "rxjs/operators";
import axios from "../../utils/axios";

const initialState = {
  data: [],
  user:{},
  error: null,
  loading: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUsers(state, action) {
      state.loading = true;
    },
    fetchedUsers(state, action) {
      state.data = action.payload.data;
      state.loading = false;
      state.error = null;
    },
    },

});

export const {
  fetchUsers,
  fetchedUsers,
 } = usersSlice.actions;

export function fetchUsersEpic(action$, state$) {
  return action$.pipe(
    ofType(fetchUsers.type),
    switchMap(async (action) => {
      try {
        let res = await axios.get(`/users?page=1`);
        return {
          data: res.data.data,
        };
      } catch (err) {
        return {
          data: [],
        };
      }
    }),
    map((data) => fetchedUsers(data))
  );
}

export default usersSlice.reducer;
