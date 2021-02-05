import React from 'react';
import PropTypes from 'prop-types';
ProductsList.propTypes = {
    products: PropTypes.array
};

function ProductsList(props) {
    const { products } = props
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Numerical order</th>
                    <th>Code Product</th>
                    <th>Name Product</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {products}
            </tbody>
        </table>

    );
}

export default ProductsList;