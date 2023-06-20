import {Link, useNavigate} from "react-router-dom";
import {useRef, useState} from "react";
import AuthService from "../api/AuthService";


const Login = () => {
    let navigate = useNavigate();

    const form = useRef();
    const checkBtn = useRef();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeEmail = (e) => {
        const name = e.target.value;
        setEmail(name);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        setMessage("");
        setLoading(true);

        //form.current.validateAll();

        AuthService.login(email, password).then((response) =>
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

            if(resMessage.includes("The email field is required"))
            {
                setMessage("Das E-Mail-Feld ist erforderlich.")
            }
            else if(resMessage.includes("The password field is required"))
            {
                setMessage("Das Passwort-Feld ist erforderlich.")
            }
            else if(resMessage.includes("The email field must be a valid email address"))
            {
                setMessage("Das E-Mail-Feld muss eine valide E-Mail-Adresse enthalten.")
            }
            else if(resMessage.includes("Invalid credentials"))
            {
                setMessage("Ungültige Anmeldedaten")
            }
            else setMessage(resMessage);
            }
        );
    };


    return (
        <div className="col-md-12 loginPage">
            <br/>
            <h2>Anmelden</h2>
            <br/>
            <div className="accountForm accountPageContainer loginPageContainer flexCenter">
                <div ref={form}>
                    <div className="form-group">
                        <label htmlFor="email">E-Mail</label>
                        <input
                            type="text"
                            className="form-control formField"
                            name="email"
                            value={email}
                            onChange={onChangeEmail}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Passwort</label>
                        <input
                            type="password"
                            className="form-control formField"
                            name="password"
                            value={password}
                            onChange={onChangePassword}
                        />
                    </div>

                    <div className="form-group flexCenter">
                        <button className="btn btn-primary btn-block button" disabled={loading} onClick={handleLogin}>
                            {loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                            )}
                            <span>Anmelden</span>
                        </button>
                        <Link to={"/register"} className="notRegisteredLink">Noch nicht registriert?</Link>
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