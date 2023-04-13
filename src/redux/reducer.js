import { ADD_FAV, REMOVE_FAV } from "./action-types"


const initialState = {
    myFavorites : [],

}

const reducer = (state= initialState, {type, payload}) => {
    switch(type){
        
        case ADD_FAV : 
            return {
                ...state,
                myFavorites : [...state.myFavorites, payload]
            }

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites : state.myFavorites.filter(fav => fav.id !== payload)   // estamos agarrando el estado myfavorites, lo filtramos y nos quedamos con todos los favoritos que el id sea distinto al payload, si son iguales desaparecen 
            }


        default: 
            return {...state}
    }
}




export default reducer