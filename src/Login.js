import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, selectUser } from './features/userSlice';

function Login() {
    const user = useSelector(selectUser);
    console.log("User",user)
    const dispatch = useDispatch()

    const loginHandle =()=>{
        dispatch(
            login({
                user : "ABHINAV"
            })
        )
    }

    const logoutHandle =()=>{
        dispatch(
            login({
                user : null
            })
        )
    }

    return (
        <div>
            <h2>Redux</h2>
            <h3>
                Logged in user is : {user}
            </h3>
            <button onClick={loginHandle}>
                Log me in
            </button>
            <br />
            <br />
            <button onClick={logoutHandle}>
                Log me out
            </button>
        </div>
    )
}

export default Login
