import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useEffect } from 'react';
import AppRouter from './components/App-Router/AppRouter';
import hardcodedMessages from './HardcodedMessages';
import hardcodedUsers from './HardcodedUsers';

function App() {
    const [currentUser, setCurrentUser] = useState("");
    const [contacts, setContacts] = useState("");
    const [token, setToken] = useState("");
    const [users, updateUsers] = useState(hardcodedUsers);
    const [ messages, updateMessages ] = useState(hardcodedMessages);
    useEffect(() => {
        async function fetchContacts() {
            if (currentUser !== "" && token !== "") {
                console.log(token);
                await fetch("/api/contacts", {
                    method: "GET",
                    headers: {
                        Authorization: "Bearer " + token
                    },
                })
                    .then(data => data.text())
                    .then(text => console.log(text));
            }
        }
        fetchContacts();
        
    }, [token]);
    /**
     * Checks whether or not a username is already taken
     */
    /*function isUsernameTaken(username) {
        for (const user of Object.keys(users)) {
            if (user === username) {
                return true;
            }
        }
        return false;
    };*/
    /**
     * TODO
     * Adds user to users database
     */
    /*function addUser(username, password, nickname) {
        if (!isUsernameTaken(username)){
            let updatedUsers = {...users};
            updatedUsers[username] = {
                password: password, 
                displayName: nickname,
                profileImage: `default-user.png`,
                contacts: [],
            }
            updateUsers(updatedUsers);
            let updatedMessages = {...messages};
            updatedMessages[username] = {};
            updateMessages(updatedMessages);
        }
        return false;
    };*/
    const loginFunctions = {
        setCurrentUser: setCurrentUser,
        setToken: setToken
    };
    const registerFunctions = {
        setCurrentUser: setCurrentUser,
        setToken: setToken
    };
    const chatFunctions = {
        updateUsers: updateUsers,
        updateMessages: updateMessages,
        setCurrentUser: setCurrentUser,
        setToken: setToken
    }
    return (
        <AppRouter
        registerFunctions={registerFunctions} loginFunctions={loginFunctions} chatFunctions={chatFunctions}
        currentUser={currentUser} users={users} messages={messages}/>
    );
}
export default App;