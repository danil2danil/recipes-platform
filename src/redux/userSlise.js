import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {}
}

const userSlise = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setProfile: (state, action)=>{
            state.user = action.payload
        }
    }
})

export const {setProfile} = userSlise.actions
export default userSlise.reducer