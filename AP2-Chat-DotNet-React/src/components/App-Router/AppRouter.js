import './Styles/AppRouter.css'
import {  useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import RegisterScreen from '../Register-Screen/RegisterScreen';
import LoginScreen from '../Login-Screen/LoginScreen';
import ChatScreen from '../Chat-Screen/ChatScreen';

function AppRouter(props) {
    const [loggedIn, setLoggedIn] = useState(false);
    const loginFunctions = {...props.loginFunctions,
        setLoggedIn:setLoggedIn
    };
    const registerFunctions = {...props.registerFunctions,
        setLoggedIn:setLoggedIn
    };
    const chatFunctions = {
        ...props.chatFunctions,
        setLoggedIn
    }
    return (
        <Router>
            <div className="App">
                <Navbar></Navbar>
                <div className="App__content">
                    <Routes>
                        {
                            (loggedIn && props.finishedSettingContacts) ?
                                <Route path="/" element={<ChatScreen functions={chatFunctions} currentUser={props.currentUser} contacts={props.contacts} messages={props.messages} token={props.token} />} /> :
                            <Route path="/" element={<LoginScreen functions={loginFunctions}/>}/>
                            //<Route path="/" element={<LoginScreen functions={loginFunctions}/>}/>
                        }
                        {
                            loggedIn ?
                            <Route path="/register" element={<ChatScreen functions={chatFunctions} currentUser={props.currentUser} contacts={props.contacts} messages={props.messages} token={props.token}/>}/> :
                            <Route path="/register" element={<RegisterScreen functions={registerFunctions}/>}/>
                            //<Route path="/register" element={<RegisterScreen functions={registerFunctions}/>}/>
                        
                        }
                    </Routes>
                </div>
            </div>
        </Router>
    )
}
export default AppRouter;