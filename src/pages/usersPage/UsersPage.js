import React from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "../components/User";
import { changeInputAction, addUserAction, deleteUserAction } from "../../redux/action";

function UsersPage(){

    const {value, users} =useSelector(state=>state.user)
    const dispatch=useDispatch()

    const changeInput=(event)=>{
        dispatch(changeInputAction(event.target.value))
    }

    const addUser=()=>{
        dispatch(addUserAction(value))
    }
     const delUser=()=>{
        dispatch(deleteUserAction())
     }
    

    return(
        <div>
            <h1>{value}</h1>
            <input type='text' placeholder="name" onChange={changeInput}/>
            <button onClick={addUser}>add</button>
            <button>delete</button>
            {users.map((users,idx)=> <User key={idx} userName={users}/>)}
            
   

        </div>
    )
}
export default UsersPage