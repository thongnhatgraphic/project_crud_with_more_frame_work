import * as Types from "./../constant/actionsType";
var initState = []

const myReducer = (state = initState, action) => {
    switch (action.type) {
        case Types.FETCH_API:
            state = action.products
            return [...state]
        case Types.DELETE_PRODUCT:
            var arrCl = state
            arrCl.forEach((product, index) => {
                if (product.id === action.id) {
                    arrCl.splice(index, 1)
                }
            })
            return [...arrCl]
        default:
            return [...state]
    }
}


export default myReducer;