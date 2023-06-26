import {useEffect, useRef, useState} from "react";
import {getUser, patchUser} from "../api/UserAccessor";
import AuthService from "../api/AuthService";
import {useNavigate} from "react-router-dom";


const Account = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null)
    const [message, setMessage] = useState("")
    const firstnameField = useRef();
    const lastnameField = useRef();
    const emailField = useRef();
    const skinTypeField = useRef();

    useEffect( () => {
        function fetchData() {
            getUser().then((response) => {
                setUser(response);
                skinTypeField.current.value = response.skinType;
                firstnameField.current.value = response.firstname;
                lastnameField.current.value = response.lastname;
                emailField.current.value = response.email;
            })
        }
        fetchData();
    }, []);


    function logout()
    {
        AuthService.logout();
        navigate("/");
        window.location.reload();
    }

    function handleSaveChanges()
    {
        console.log("hello");
        patchUser(firstnameField.current.value, lastnameField.current.value, emailField.current.value, skinTypeField.current.value)
            .then((response) =>
                {
                    console.log(response);
                    setMessage("Daten erfolgreich geändert.")
                },
                (error) => {
                    console.log(error);
                    const resMessage =
                        (
                            error.response.data) ||
                        error.message ||
                        error.toString();

                    setMessage(resMessage);
                }
            );
    }

    return (
        <div id="accountPage">
            <br/>
            <h2>Mein Konto</h2>
            <div className="accountPageContainer">
                <h3>Persönliche Daten</h3><br/>
                <div className="flexSpaceBetween flexBottom">
                    <div className="accountForm">
                        <label htmlFor="Firstname">Vorname</label><br/>
                        <input className="form-control formField skinTypeInput" ref={firstnameField} type="text" name="Firstname" defaultValue={user !== null? user.firstname : ""}/><br/>
                        <label htmlFor="Lastname">Nachname</label><br/>
                        <input className="form-control formField skinTypeInput" ref={lastnameField} type="text" name="Lastname" defaultValue={user !== null ? user.lastname : ""}/><br/>
                        <label htmlFor="Email">E-Mail-Adresse</label><br/>
                        <input className="form-control formField skinTypeInput" ref={emailField} type="email" name="Email" defaultValue={user !== null? user.email : ""}/><br/>
                        <label htmlFor="SkinType">Hauttyp</label><br/>
                        <select ref={skinTypeField} name="SkinType" defaultValue={user !== null && user.skinType !== "none" ? user.skinType : ""} className="form-select dropdown skinTypeDropdown" aria-label="Select skin type">
                            <option value="">keine Angabe</option>
                            <option value="normal">normal</option>
                            <option value="oily">ölig</option>
                            <option value="combination">Mischhaut</option>
                            <option value="dry">trocken</option>
                            <option value="sensitive">sensibel</option>
                        </select>
                        <button className="button skinTypeTestButton">zum Hauttyptest</button>
                        {message !== ""? <p className={"alert alert-danger error"+(message === "Daten erfolgreich geändert." ? " positive" : "")}>{message}</p> : ""}
                    </div>
                    <div className="buttonContainer">
                        <button className="button">Passwort ändern</button>
                        <button className="button" onClick={() => handleSaveChanges()}>Änderungen speichern</button>
                    </div>
                </div>
            </div>
            <div className="flexSpaceBetween">
                <button className="button logoutButton" onClick={logout}>Ausloggen</button>
                <button className="button logoutButton" >Account löschen</button>
            </div>
        </div>
    );
}

export default Account;