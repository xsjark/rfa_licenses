import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

interface UserState {
    email: string,
}

const initialState = { email: "" } as UserState

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addEmail(state, email: any,) {
      state.email = email.payload
    },
  },
})

export const selectUser = (state: RootState) => state.user.email;

export const { addEmail } = userSlice.actions
export default userSlice.reducer