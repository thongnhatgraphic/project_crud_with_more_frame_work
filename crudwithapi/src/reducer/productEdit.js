import * as types from "./../constant/actionsType";
var initState = {
    id: "",
    name: "",
    price: 0,
    status: false
};

const myReducer = (state = initState, action) => {
    switch (action.type) {
        case types.EDIT_PRODUCT: {
            return action.product
        }
        case types.OPEN_PAGE_ACTION_FORM: {
            console.log(action.product);
            return {
                id: "",
                name: "",
                price: 0,
                status: false
            }
        }
        default: return state
    }
}


export default myReducer;