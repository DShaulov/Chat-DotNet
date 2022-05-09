import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useEffect } from 'react';
import AppRouter from './components/App-Router/AppRouter';
import hardcodedMessages from './HardcodedMessages';
import hardcodedUsers from './HardcodedUsers';

function App() {
    const [currentUser, setCurrentUser] = useState("");
    const [token, setToken] = useState("");
    const [users, updateUsers] = useState(hardcodedUsers);
    const [ messages, updateMessages ] = useState(hardcodedMessages);
    /*useEffect(() => {
        let allUsers = {};
        fetchUsers(allUsers);
        console.log(allUsers);
        updateUsers(allUsers);
    }, []);
    function fetchUsers(allUsers) {
        fetch("db/clientsideusers")
        .then(response => response.json())
        .then(data => {
            data.forEach(entry => {
                allUsers[entry.username] = {
                    password: entry.password,
                    displayName: entry.displayName,
                    profileImage: entry.profileImage,
                    contacts: entry.contacts.split(",")
                }
            })
        });
    }*/
    /**
     * Checks whether or not a username is already taken
     */
    function isUsernameTaken(username) {
        for (const user of Object.keys(users)) {
            if (user === username) {
                return true;
            }
        }
        return false;
    };
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
        isUsernameTaken: isUsernameTaken,
        setCurrentUser: setCurrentUser,
        setToken: setToken
    };
    const chatFunctions = {
        updateUsers: updateUsers,
        updateMessages: updateMessages,
        setCurrentUser: setCurrentUser
    }
    return (
        <AppRouter
        registerFunctions={registerFunctions} loginFunctions={loginFunctions} chatFunctions={chatFunctions}
        currentUser={currentUser} users={users} messages={messages}/>
    );
}
export default App;