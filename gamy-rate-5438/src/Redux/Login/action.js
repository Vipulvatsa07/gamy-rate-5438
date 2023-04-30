import { useNavigate } from "react-router-dom";
import axios from "axios";
export const registeractions = {
    ADD_TOKEN_REQUEST: "ADD_TOKEN_REQUEST",
    ADD_TOKEN_SUCCESS: "ADD_TOKEN_SUCCESS",
    ADD_TOKEN_FAILURE: "ADD_TOKEN_FAILURE",
    LOGOUT: "LOGOUT"
    
}


// to avoid spelling mistake we store it in the variable.
export const addtokenreq = () => {
    return {
        type: registeractions.ADD_TOKEN_REQUEST,
    };
}

export const addtokenres = (token) => {
    return {
        type: registeractions.ADD_TOKEN_SUCCESS,
        payload: token
    };
}

export const addtokenerr = () => {
    return {
        type: registeractions.ADD_TOKEN_FAILURE,
    };
}

// export const logout = () => (
//     localStorage.removeItem('tvappletoken');
//     { type: "LOGOUT" }
    

// );

export const logout = () => {
    localStorage.removeItem('tvappletoken');
return{ type: "LOGOUT" }  
}
   




export const getusertoken = ({ userlogin, onClose }) => (dispatch) => {

    dispatch(addtokenreq());
    console.log(userlogin)
    return axios.post('https://reqres.in/api/users', userlogin)
        .then((res) => {
            alert("Logged In Successful")
            console.log(res.data,"signin")
            localStorage.setItem('tvappletoken', JSON.stringify(res.data.password));
            dispatch(addtokenres(res.data.password))
            // if (res.data.error == false) {
            //     onClose()
            // }
        })
        .catch((err) => {
            alert("Wrong Appli Id or Password")
            dispatch(addtokenerr())
        })
}

export const removeuser = () => {
    return {
        type: registeractions.REMOVE_TOKEN_REQUEST,
        payload: ""
    };
}

export const signout = () => (dispatch) => {
    dispatch(removeuser());
    localStorage.setItem('tvappletoken', JSON.stringify(""));
}