import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./../../actions/actions";
productItem.propTypes = {
    product: PropTypes.object,
    index: PropTypes.number,
    onSendDataDelete: PropTypes.func,
    onSendDataEdit: PropTypes.func
};
productItem.defaultProps = {
    onDeleteProduct: null,
    onSendDataEdit: null
}

function productItem(props) {
    const { product, index, onSendDataDelete, onEditProductItem } = props;

    function classStyle(status) {
        var result;
        if (status) {
            result = "badge badge-primary cursor"
        } else {
            result = "badge badge-danger cursor"
        }
        return result
    }
    function onDeleteProduct(id) {
        onSendDataDelete(id)
    }
    return (
        <tr>
            <td>{index}</td>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price} $</td>
            <td><span className={classStyle(product.status)}>{product.status ? "Still in stock" : "Out of stock"}</span></td>
            <td>
                <Link to={`/product/edit/${product.id}`}>
                    <button type="button"
                        className="btn btn-danger mb-r"
                        onClick={() => {
                            console.log(product);
                            onEditProductItem(product)
                        }}
                    >Edit</button>
                </Link>
                <button type="button"
                    className="btn btn-dark"
                    onClick={() => { onDeleteProduct(product.id) }}
                >Delete</button>
            </td>
        </tr>
    );
}
const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onEditProductItem: (product) => {
            dispatch(actions.onEditProduct(product))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(productItem);