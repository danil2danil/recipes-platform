import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {}
}

const userSlise = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action)=>{
            state.user = action.payload
        }
    }
})

export const {setUser} = userSlise.actions
export default userSlise.reducer