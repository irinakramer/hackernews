// global data storage to store state across the app

// create a store, it accepts our reducers. It is to Get store and Dispatch actions
function createStore(reducer) {
    //higer order fun
    let currentState = reducer(undefined, {}); //initial values of state
    return {
        getState: () => currentState,
        dispatch: action => {
            currentState = reducer(currentState, action); //update current state with actions
        }
    }
}

const initialState = {
    favorites: []
}

// initialState is the default parameter
function favoritesReducer(state = initialState, action) {
    switch (action.type) {
        // cases for two types of state
        // reducers
        case "ADD_FAVORITE": {
            const addedFavorite = action.payload.favorite;
            const favorites = [...state.favorites, addedFavorite];
            // return obj with favorites as property and value
            return { favorites };
        }
        case "REMOVE_FAVORITE": {
            const removedFavorite = action.payload.favorite;
            const favorites = state.favorites.filter(favorite => favorite.id !== removedFavorite.id);
            return { favorites };
        }
        default:
            return state;
    }
}

// payload provides data (sample)
//const action = { type: "ADD_FAVORITE", payload: { favorite: { title: "story1", id: 1 } } };

// f() calls
const store = createStore(favoritesReducer);
// store.dispatch(action);
//console.log(store.getState());

export default store;