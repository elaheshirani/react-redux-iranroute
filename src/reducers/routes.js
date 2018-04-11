import { combineReducers } from 'redux';
const routebyId = (state = {},action)=>{
    switch (action.type){
        case 'RECIEVE_ROUTES' :
            return{
                ...state,
                ...action.routes.reduce((obj,route)=>{
                    obj[route.id]=route;
                    return obj;
                },{})
            }

        default :
            return state;
    }
}

export default combineReducers({
    routebyId
})