import React from "react";
import Header from "../components/Header/Header";
import Error from "../components/Error/Error";

const ErrorPage = () => {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <Error />
            </main>
        </>
    )
}

export default ErrorPage;