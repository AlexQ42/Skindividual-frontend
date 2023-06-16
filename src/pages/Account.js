import {useEffect, useState} from "react";
import {getUser} from "../api/UserAccessor";
import AuthService from "../api/AuthService";
import {useNavigate} from "react-router-dom";


const Account = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null)

    useEffect( () => {
        async function fetchData() {
            const data = await getUser()
            setUser(data);
        }
        fetchData();
    }, []);

    function logout()
    {
        AuthService.logout();
        navigate("/");
        window.location.reload();
    }

    return (
        <div id="accountPage">
            <p>Hallo{user !== null? ", "+user.firstname+"!" : "!"}</p>
            <button onClick={logout}>Ausloggen</button>
        </div>
    );
}

export default Account;