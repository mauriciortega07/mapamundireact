import React from "react";
import SignIn from "./SignIn/index.tsx";
import Login from "./Login/index.tsx";

const UserSession = () => {
    return (
        <main>
            <section className="Forms">
                <SignIn />
                <Login />
            </section>

        </main>

    )
}

export default UserSession;