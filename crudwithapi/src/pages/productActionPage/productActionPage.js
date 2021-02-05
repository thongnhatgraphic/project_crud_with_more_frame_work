import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import callerApi from "./../../utils/callerApi";
import { connect } from "react-redux";


ProductActionPage.propTypes = {
    match: PropTypes.object,
    productEdit: PropTypes.object
};
ProductActionPage.defaultProps = {
    productEdit: null
}
function ProductActionPage(props) {
    const { productEdit } = props;
    const [id, setId] = useState("")
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [status, setStatus] = useState("Out of stock");

    useEffect(() => {
        if (productEdit.id) {
            setId(productEdit.id)
            setName(productEdit.name)
            setPrice(productEdit.price)
            setStatus(productEdit.status ? "Still in stock" : "Out of stock")
        }
        return () => {
            setId("")
            console.log("wrong", id);
        }
    }, [productEdit.id, productEdit.name, productEdit.price, productEdit.status, id])

    function onSaveData() {
        if (productEdit.id === "") {
            var data = {
                name: name,
                price: parseInt(price),
                status: status === "Still in stock" ? true : false
            }
            callerApi("", "POST", data).then(res => {
                console.log(res.data);
            })
        } else {
            callerApi(productEdit.id, "PUT", {
                id: id,
                name: name,
                price: price,
                status: status === "Still in stock" ? true : false
            }).then(res => {
                console.log(res.data);
                setId("")
            })
        }
    }
    console.log("Run");
    return (
        <div className="col-lg-6 col-md-6 col-sm-12">
            <form>
                <div>
                    <div>
                        <label>name Product:</label>
                    </div>
                    <input type="text"
                        value={name}
                        onChange={(e) => { setName(e.target.value); }}
                    />
                </div>
                <div>
                    <div>
                        <label>Price</label>
                    </div>
                    <input type="number"
                        value={price}
                        onChange={(e) => { setPrice(e.target.value); }}
                    />
                </div>
                <label>Status</label>
                <div>
                    <input type="radio" name="status"
                        value="Still in stock"
                        checked={status === "Still in stock" ? true : false}
                        onChange={(e) => { setStatus(e.target.value); }}
                    />Still in stock
                </div>
                <div>
                    <input type="radio" name="status"
                        value="Out of stock"
                        checked={status === "Out of stock" ? true : false}
                        onChange={(e) => { setStatus(e.target.value); }}
                    />Out of stock
                </div>
                <Link to="/product-list" style={{ margin: "0 20px 0 0" }}>
                    <button
                        type="button"
                        className="btn btn-danger"
                    >Back</button>
                </Link>
                <Link to="/product-list">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={onSaveData}
                    >Save</button>
                </Link>
            </form>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        productEdit: state.productEdit
    }
}

export default connect(mapStateToProps, null)(ProductActionPage);