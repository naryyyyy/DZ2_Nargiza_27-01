import { types } from "./types";
export function changeTitleAction(){
    return{
        type:types.CHANGE_TITLE
    }
}
export function withParamsAction (title){
    return{
        type: types.WITH_PARAMS,
        payload:title
    }
}
export function changeInputAction(value){
    return{
        type:types.VALUE,
        payload:value
    }
}
export function addUserAction(name){
    return{
        type:types.ADD_USER,
        payload:name
    }
}
export function deleteUserAction(index){
    return{
        type:types.DELETE_USER,
        payload:index
    }
}