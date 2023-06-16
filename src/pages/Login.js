

/*const Login =  () => {

    return (
        <div id="loginPage">
            <input id="inputEmail" type="text"/>
            <input id="inputPassword" type="password"/>
        </div>
    );
}*/

import {useNavigate} from "react-router-dom";
import {useRef, useState} from "react";
import AuthService from "../api/AuthService";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";


const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const Login = () => {
    let navigate = useNavigate();

    const form = useRef();
    const checkBtn = useRef();

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeName = (e) => {
        const name = e.target.value;
        setName(name);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        setMessage("XX");
        setLoading(true);

        //form.current.validateAll();

        AuthService.login(name, password).then((response) =>
        {
            //Umleitung, Rückgabe wird nicht angezeigt
            setLoading(false)
            navigate("/account");
            window.location.reload();
        },
        (error) => {
            const resMessage =
                (
                    error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message ||
                    error.toString();

                setLoading(false);
                setMessage(resMessage);
            }
        );
    };

    return (
        <div className="col-md-12">
            <div className="card card-container">
                <div ref={form}>
                    <div className="form-group">
                        <label htmlFor="name">E-Mail</label>
                        <input
                            type="text"
                            className="form-control"
                            name="email"
                            value={name}
                            onChange={onChangeName}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={password}
                            onChange={onChangePassword}
                        />
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary btn-block button" disabled={loading} onClick={handleLogin}>
                            {loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                            )}
                            <span>Login</span>
                        </button>
                    </div>

                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                    <button style={{ display: "none" }} ref={checkBtn} />
                </div>
            </div>
        </div>
    );
};

export default Login;