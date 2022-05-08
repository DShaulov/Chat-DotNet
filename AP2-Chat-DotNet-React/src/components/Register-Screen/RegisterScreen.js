import './Styles/RegisterScreen.css';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function RegisterScreen(props) {
    const [usernameNotFilled, setUsernameNotFilled] = useState(false);
    const [passwordNotFilled, setPasswordNotFilled ] = useState(false);
    const [confirmPasswordNotFilled, setConfirmPasswordNotFilled ] = useState(false);
    const [nicknameNotFilled, setNicknameNotFilled] = useState(false);

    const [passwordNotValid, setPasswordNotValid] = useState(false);
    const [passwordsDontMatch, setPasswordsDontMatch] = useState(false);
    const [usernameTaken, setUsernameTaken] = useState(false);

    function stringHasNumber(string) {
        return /\d/.test(string);
    }
    function stringHasChar(string) {
        var regExp = /[a-zA-Z]/g;
        if(regExp.test(string)){
            return true;
        }
        return false;
    }
    /**
     * Handles submission of register form 
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        let username = e.target[0].value;
        let password = e.target[1].value;
        let confirmPassword = e.target[2].value;
        let nickname = e.target[3].value;

        // Check if fields are empty and display warnings
        if (username === '') {
            setUsernameNotFilled(true);
            return;
        }
         else {
            if (usernameNotFilled) {setUsernameNotFilled(false)};
        }
        if (password === '') {
            setPasswordNotFilled(true);
            return;
        }
        else {
            if (passwordNotFilled) {setPasswordNotFilled(false)};
        }
        if (confirmPassword === '') {
            setConfirmPasswordNotFilled(true);
            return;
        }
        else {
            if (confirmPasswordNotFilled) {setConfirmPasswordNotFilled(false)};
        }
        if (nickname === '') {
            setNicknameNotFilled(true);
            return;
        }
        else {
            if (nicknameNotFilled) {setNicknameNotFilled(false)};
        }
        // Check if password and username are valid
        if (!stringHasNumber(password) || !stringHasChar(password)) {
            setPasswordNotValid(true);
            return;
        }
         else {
            if (passwordNotValid) {setPasswordNotValid(false)};
        }
        if (password !== confirmPassword) {
            setPasswordsDontMatch(true);
            return;
        }
        else {
            if (passwordsDontMatch) {setPasswordsDontMatch(false)};
        }

        if (props.functions.isUsernameTaken(username)) {
            setUsernameTaken(true);
            return;
        }
         else {
            if (usernameTaken) {setUsernameTaken(false)};
        }
        props.functions.setCurrentUser(username);
        props.functions.addUser(username, password, nickname);
        props.functions.setLoggedIn(true);
        return;
    }
    return (
        <div className="register-screen-div">
            <Form onSubmit={handleSubmit} className="register-screen-div__form">
                <Form.Group className="register-screen-div__form__username-grp">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control placeholder="Enter username"></Form.Control>
                    {   
                        usernameNotFilled && 
                        <Form.Text className="register-screen-div__form__warning-text">*Username cannot be empty</Form.Text>
                    }
                    {   
                        usernameTaken && 
                        <Form.Text className="register-screen-div__form__warning-text">*Username already taken</Form.Text>
                    }
                    
                </Form.Group>
                <Form.Group className="register-screen-div__form__password-grp">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control placeholder="Enter password"></Form.Control>
                        {   
                            passwordNotFilled &&
                            <Form.Text className="register-screen-div__form__warning-text">*Password cannot be empty</Form.Text>
                        }
                        {   
                            passwordNotValid &&
                            <Form.Text className="register-screen-div__form__warning-text">*Password must have numbers and letters</Form.Text>
                        }
                </Form.Group>
                <Form.Group className="register-screen-div__form__password-grp">
                    <Form.Label>Confirm Password:</Form.Label>
                    <Form.Control placeholder="Confirm password"></Form.Control>
                    {   
                        passwordsDontMatch &&
                        <Form.Text className="register-screen-div__form__warning-text">*Passwords don't match</Form.Text>
                    }
                    {
                        confirmPasswordNotFilled &&
                        <Form.Text className="register-screen-div__form__warning-text">*Confirm password cannot be empty</Form.Text>
                    }
                </Form.Group>
                <Form.Group className="register-screen-div__form__nickname-grp">
                    <Form.Label>Nickname:</Form.Label>
                    <Form.Control placeholder="Enter display name"></Form.Control>
                    {   
                        nicknameNotFilled &&
                        <Form.Text className="register-screen-div__form__warning-text">*Nickname cannot be empty</Form.Text>
                    }
                </Form.Group>
                <Form.Group className="register-screen-div__form__btn-link-grp">
                    <Button variant="primary" type="submit" className="register-screen-div__form__register-btn">Register</Button>
                </Form.Group>
            </Form>
            <p className="register-screen-div__register-link-paragraph">Already registered?  <Link to='/'>Click here</Link> to login.</p>
        </div>
    );

    
}
export default RegisterScreen;