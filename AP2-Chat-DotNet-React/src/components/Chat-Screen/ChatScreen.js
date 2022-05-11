import './Styles/ChatScreen.css';
import MessageDisplay from './MessageDisplay';
import ContactDisplay from './ContactDisplay';
import { useState } from 'react';

function ChatScreen(props) {
    const [ showMessageDisplay, setShowMessageDisplay ] = useState(false);
    const [ chattingWith, setChattingWith ] = useState('');
    const setLoggedIn = props.functions.setLoggedIn;
    const updateUsers = props.functions.updateUsers;
    const updateMessages = props.functions.updateMessages;
    const setCurrentUser = props.functions.setCurrentUser;
    const setToken = props.functions.setToken;
    const setFinishedSettingContacts = props.functions.setFinishedSettingContacts;
    const setFinishedSettingMessages = props.functions.setFinishedSettingMessages;
    const contactDisplayFunctions = {
        updateUsers,
        setLoggedIn,
        openMessageDisplay,
        setCurrentUser,
        setToken,
        setFinishedSettingContacts,
        setFinishedSettingMessages
    };
    const messageDisplayFunctions = {
        updateMessages
    }
    /**
     * Opens the chat window with the appropriate user
     */
    function openMessageDisplay(username) {
        if (username === chattingWith) {
            setShowMessageDisplay(false);
            setChattingWith('');
        }
        else {
            setShowMessageDisplay(true);
            setChattingWith(username);
        }
    }
    
    return (
        <div className="ChatScreen-div">
            <div className="ChatScreen-div__ContactDisplay-div">
                <ContactDisplay functions={contactDisplayFunctions} currentUser={props.currentUser} users={props.users} messages={props.messages} contacts={props.contacts}/>
            </div>
            <div className="ChatScreen-div__MessageDisplay-div">
                {
                    showMessageDisplay &&
                    <MessageDisplay userChattingWith={chattingWith} currentUser={props.currentUser} users={props.users} messages={props.messages} functions={messageDisplayFunctions} contacts={props.contacts}/>
                }
            </div>
        </div>
    );
}
export default ChatScreen;