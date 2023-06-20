import {useNavigate} from "react-router-dom";
import {useRef, useState} from "react";
import AuthService from "../api/AuthService";


const Register = () => {
  let navigate = useNavigate();

  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [skinType, setSkinType] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const onChangeSkinType = (e) => {
    const skinType = e.target.value;
    setSkinType(skinType);
  };

  const onChangeFirstname = (e) => {
    const firstname = e.target.value;
    setFirstname(firstname);
  };

  const onChangeLastname = (e) => {
    const lastname = e.target.value;
    setLastname(lastname);
  };

  const onChangeEmail = (e) => {
    const name = e.target.value;
    setEmail(name);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");


    AuthService.register(firstname, lastname, (""+firstname+lastname), email, password, skinType).then((response) =>
        {
          //Umleitung, Rückgabe wird nicht angezeigt
          navigate("/login");
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
      <div className="col-md-12">
        <br/>
        <h2>Anmelden</h2>
        <br/>
        <div className="accountForm accountPageContainer flexCenter">
          <div ref={form}>

            <div className="form-group">
              <label htmlFor="firstname">Vorname</label>
              <input
                  type="text"
                  className="form-control formField"
                  name="firstname"
                  value={firstname}
                  onChange={onChangeFirstname}
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastname">Nachname</label>
              <input
                  type="text"
                  className="form-control formField"
                  name="lastname"
                  value={lastname}
                  onChange={onChangeLastname}
              />
            </div>

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

            <label htmlFor="SkinType">Hauttyp</label><br/>
            <select name="SkinType" className="form-select dropdown skinTypeDropdown" aria-label="Select skin type" onChange={onChangeSkinType}>
              <option defaultValue="" value="">keine Angabe</option>
              <option value="normal">normal</option>
              <option value="oily">ölig</option>
              <option value="combination">Mischhaut</option>
              <option value="dry">trocken</option>
              <option value="sensitive">sensibel</option>
            </select>
            <button className="button skinTypeTestButton">zum Hauttyptest</button>

            <div className="form-group flexCenter">
              <button className="btn btn-primary btn-block button" onClick={handleRegister}>
                <span>Registrieren</span>
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
          <br/>
        </div>
      </div>
  );
};

export default Register;