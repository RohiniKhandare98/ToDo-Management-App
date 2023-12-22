import { useState } from 'react';
import './TodoApp.css';

export default function TodoApp() {
    return (
        <div className="TodoApp">
            Todo management App
            <LoginComponent />

        </div>
    );
}

function LoginComponent() {

    const [username, setUsername] = useState('rohini');
    const [password, setPassword] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    function handleUsername(event) {

        setUsername(event.target.value);

    }
    function handlePassword(event) {

        setPassword(event.target.value);

    }

    function handleSubmit() {
        if (username === 'rohini' && password === '1234') {
            setShowSuccessMessage(true);
            setShowErrorMessage(false);
        } else {
            setShowSuccessMessage(false);
            setShowErrorMessage(true);
        }
    }


    function successMessageComponent() {
        if (showSuccessMessage) {
            return <div className='successMsg'> Authentication Successful</div>;
        }
        return null;
    }
    function errorMsgComponent() {
        if (showErrorMessage) {
            return <div className='errorMsg'> Authentication failed!!!</div>;
        }
        return null;
    }


    return (
        <div className="Login">

            {showSuccessMessage && <div className="successMsg"> Authentication success</div>}

            {showErrorMessage && <div className="errorMsg"> Authentication fail</div>}


            <div className="LoginForm">
                <div>
                    <label>User Name </label>
                    <input type="text" name="username" value={username} onChange={handleUsername} />
                </div>

                <div>
                    <label> Password </label>
                    <input type="password" name="password" value={password} onChange={handlePassword} />
                </div>

                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>

        </div>
    );
}

