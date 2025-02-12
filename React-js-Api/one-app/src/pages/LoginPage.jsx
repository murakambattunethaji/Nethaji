import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/Actions";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = () => {
        localStorage.setItem("authToken", "user-token");
        dispatch(login({ email }));
        navigate("/tasks");
    };

    return (
        <div>
            <h2>Login</h2>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginPage;
