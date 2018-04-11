import { combineReducers } from 'redux';
const placebyId = (state = {},action)=>{
    switch (action.type){
        case 'RECIEVE_PLACES' :
            return{
                ...state,
                ...action.places.reduce((obj,place)=>{
                    obj[place.id]=place;
                    return obj;
                },{})
            }
        default :
            return state;
    }
}

export default combineReducers({
    placebyId
})