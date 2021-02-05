import { Route, Link } from "react-router-dom"


const menus = [
    {
        name: "Home Page",
        to: "/",
        exact: true
    },
    {
        name: "Products List",
        to: "/product-list",
        exact: false
    },
]
const Menulink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? "active" : ""
                return (
                    <li className={`nav-item nav-link effect ${active}`}>
                        <Link to={to}>{label}</Link>
                    </li>
                )
            }}
        />
    )
}
menu.propTypes = {

};

function menu(props) {

    function showMenu(menus) {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (<Menulink
                    key={index}
                    label={menu.name}
                    to={menu.to}
                    activeOnlyWhenExact={menu.exact}
                />)
            })
        }
        return result
    }
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="nav navbar-nav">
                {showMenu(menus)}
            </div>
        </nav>

    );
}

export default menu;