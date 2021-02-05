import * as Types from "./../constant/actionsType";
import callApi from "./../utils/callerApi";

export const onFetchProductRequest = () => {
    return (dispatch) => {
        return callApi("", "GET", null).then(res => {
            dispatch(onFetchProduct(res.data))
        })
    }
}

export const onFetchProduct = (products) => {
    return {
        type: Types.FETCH_API,
        products: products
    }
}

export const onDeleteDataRequest = (id) => {
    return (dispatch) => {
        return callApi(`${id}`, "DELETE", null).then(res => {
            dispatch(onDeleteData(id))
        })
    }
}

export const onDeleteData = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id: id
    }
}



export const onEditProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product: product
    }
}

export const onOpenFormAction = (product) => {
    return {
        type: Types.OPEN_PAGE_ACTION_FORM,
        product: product
    }
}