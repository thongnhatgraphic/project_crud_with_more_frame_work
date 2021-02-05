import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import ProductsPage from "./pages/ProductPage/ProductsPage";
import NotFoundPage from "./pages/NotFoundPage/NotfoundPage";
import ProductActionPage from "./pages/productActionPage/productActionPage";
const routes = [
    {
        path: "/",
        exact: true,
        main: () => { return <HomePage /> }
    },
    {
        path: "/product-list",
        exact: false,
        main: () => { return <ProductsPage /> }
    },
    {
        path: "/product/add",
        exact: false,
        main: () => {
            return <ProductActionPage />
        }
    },
    {
        path: "/product/edit/:id",
        exact: false,
        main: ({ match }) => {
            return <ProductActionPage match={match} />
        }
    },
    {
        path: "",
        exact: false,
        main: () => { return <NotFoundPage /> }
    }
]

export default routes;