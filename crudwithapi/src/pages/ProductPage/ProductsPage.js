import React from 'react';
import ProductsList from "./../../components/productsList/productsList";
import ProductItem from "./../../components/productItem/productItem";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import * as actions from "./../../actions/actions";

function ProductsPage(props) {
    const { products, productEdit, clearProductEdit, fetchAllProductsApi, onDeleteDataRequest } = props

    useEffect(() => {
        fetchAllProductsApi()
    }, [fetchAllProductsApi])

    function showProducts(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem key={index}
                    product={product}
                    index={index + 1}
                    onSendDataDelete={onDeleteProduct} />
            })
        }
        return result
    }
    function onDeleteProduct(id) {
        onDeleteDataRequest(id)
    }
    return (
        <div className="col-lg-12 col-md-12 col-sm-12">
            <br />
            <Link to="/product/add">
                <button type="button"
                    className="btn btn-primary"
                    onClick={
                        () => { clearProductEdit(productEdit) }
                    }
                >Add new Product</button>
            </Link>
            <br /><br />
            <ProductsList products={showProducts(products)} />
        </div>
    );
}

ProductsPage.propTypes = {
    products: PropTypes.array,
    productEdit: PropTypes.object,
    clearProductEdit: PropTypes.func,
    fetchAllProductsApi: PropTypes.func
}
const mapStateToProps = (state) => {
    return {
        products: state.products,
        productEdit: state.productEdit
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        clearProductEdit: (product) => {
            dispatch(actions.onOpenFormAction(product))
        },
        onDeleteDataRequest: (id) => {
            dispatch(actions.onDeleteDataRequest(id))
        },
        fetchAllProductsApi: () => {
            dispatch(actions.onFetchProductRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);