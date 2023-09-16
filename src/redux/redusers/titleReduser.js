import {types} from "../types"

const initialState={
    title:'old title'
}
export default function titleReduser(state=initialState, action){
    switch(action.type){
        case types.CHANGE_TITLE:
        return{title:'new title'}
        case types.WITH_PARAMS:
            return{...state.title, title:action.payload}
        default:return state
    }
    
}