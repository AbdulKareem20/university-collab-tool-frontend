import axios from "axios";

import { setUser } from "../../redux/features/user/userSlice";

export const loginUser = (userData) => async (dispatch) => {  
    axios.post('/api/users/login', userData).then(res => {
        const {token} = res.data;
        console.log(res.data)
        localStorage.setItem('jwtToken', token)
        dispatch(setUser(res.data.user))
    })
    .catch(err =>{
        console.error(err.message);
    })
}

export const registerUser = (userData) => async (dispatch) => {
            axios.post('/api/users/register', userData).then(res => {
                const {token} = res.data;
                console.log(res.data)
                localStorage.setItem('jwtToken', token)
                dispatch(setUser(res.data.user))
            })
            .catch(err =>{
                console.error(err.message);
            })
  };

  export const createdepartment = (userData) => async (dispatch) => {
    axios.post('/api/departments/createDepartment,', userData).then(res => {
        const {token} = res.data;
        console.log(res.data)
        localStorage.setItem('jwtToken', token)
        dispatch(setUser(res.data.user))
    })
    .catch(err =>{
        console.error(err.message);
    })
};