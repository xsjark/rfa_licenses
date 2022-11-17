import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

interface UserState {
    email: string,
    password: string
}

const initialState = { email: "" , password: ""} as UserState

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addEmail(state, email: any,) {
      state.email = email
    },
  },
})

export const selectCount = (state: RootState) => state.user.email;

export const { addEmail } = userSlice.actions
export default userSlice.reducer