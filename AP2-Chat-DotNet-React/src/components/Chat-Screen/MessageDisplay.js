import './Styles/MessageDisplay.css';
import { useState, useEffect } from 'react';
import { ListGroup, Navbar, Image, Button, Form, Popover, OverlayTrigger, Modal } from 'react-bootstrap';
import { Paperclip, ArrowRightCircle, Mic, Camera, CameraVideo } from 'react-bootstrap-icons';

function MessageDisplay(props) {
    const [ showUploadImagePopup, setShowUploadImagePopup] = useState(false);
    const [ showUploadVideoPopup, setShowUploadVideoPopup] = useState(false);
    const [ showRecordVoicePopup, setShowRecordVoicePopup] = useState(false);
    const [ mediaStream, setMediaStream ] = useState(null);
    const [ voiceRecordingBlob, setVoiceRecordingBlob ] = useState(null);
    useEffect(()=> {
        // Scroll chat window to bottom on render
        let chatDiv = document.getElementsByClassName("messages-div")[0];
        chatDiv.scrollTop = chatDiv.scrollHeight;
    });
    const date = new Date();
    /**
     * Sends a text message to another user
     */
    function sendTextMessage(event) {
        event.preventDefault();
        let updatedMessages = {...props.messages};
        updatedMessages[props.currentUser][props.userChattingWith].push(
            {
                type: 'TEXT',
                direction: 'TO',
                date: parseDate(),
                time: parseTime(),
                content: event.target[0].value
            }
        );
        updatedMessages[props.userChattingWith][props.currentUser].push(
            {
                type: 'TEXT',
                direction: 'FROM',
                date: parseDate(),
                time: parseTime(),
                content: event.target[0].value
            }
        );
        event.target[0].value = '';
        props.functions.updateMessages(updatedMessages);
        ;
    };
    /**
     * Returns current date in dd/mm/yy format
     */
    function parseDate() {
        let day = String(date.getDate()).padStart(2, '0');
        let month = String(date.getMonth() + 1).padStart(2, '0');
        let year = String(date.getFullYear());
        return day + '/' + month + '/' + year;
    }
    /**
     * Returns current time in minutes:hours format
     */
    function parseTime() {
        let minutes = String(date.getMinutes()).padStart(2, '0');
        let hours = String(date.getHours()).padStart(2, '0');
        return hours + ':' + minutes;
    }
    /**
     * Builds DOM elements out of messages
     */
    function buildMessages() {
        let messageId = 0;
        let messageList = [];
        console.log(props.messages[props.currentUser][props.userChattingWith]);
        for (const message of props.messages[props.currentUser][props.userChattingWith]) {
            if (message.type === 'TEXT') {
                buildTextMessage(message, messageList, messageId);
            }
            else if (message.type === 'IMG') {
                buildImgMessage(message, messageList, messageId, false);
            }
            else if (message.type === 'IMG-LOCAL') {
                buildImgMessage(message, messageList, messageId, true);
            }
            else if (message.type === 'VIDEO') {
                buildVideoMessage(message, messageList, messageId, false);
            }
            else if (message.type === 'VIDEO-LOCAL') {
                buildVideoMessage(message, messageList, messageId, true);
            }
            else if (message.type === 'AUDIO') {
                buildAudioMessage(message, messageList, messageId, false);
            }
            else if (message.type === 'AUDIO-LOCAL') {
                buildAudioMessage(message, messageList, messageId, true);
            }
            messageId++;
        }
        return messageList;
    }
    /**
     * Helper function
     */
    function buildTextMessage(message ,messageList, messageId) {
        let className = '';
        if (message.direction === 'TO') {
            className = 'chat-bubble-to';
            messageList.push(
                <div className="chat-bubble-container" key={messageId}>
                    <time className="to-message-timestamp">{message.time}</time>
                    <time className="to-message-datestamp">{message.date}</time>
                    <div className={className} >
                        <p className="text-message-paragraph">{message.content}</p>
                    </div>
                </div>
            )
        }
        else {
            className = 'chat-bubble-from';
            messageList.push(
                <div className="chat-bubble-container"  key={messageId}> 
                    <div className={className}>
                        <p className="text-message-paragraph">{message.content}</p>
                    </div>
                    <time className="from-message-timestamp">{message.time}</time>
                    <time className="from-message-datestamp">{message.date}</time>
                </div>
            )
        }
    }
    /**
     * Helper function
     */
    function buildImgMessage(message ,messageList, messageId, hasLocalSource) {
        let className = '';
        let imageURL;
        if (!hasLocalSource) {
            imageURL = URL.createObjectURL(message.content);
        }
        if (message.direction === 'TO') {
            className = 'chat-bubble-to';
            messageList.push(
                <div className="chat-bubble-container" key={messageId}>
                    <time className="to-message-timestamp">{message.time}</time>
                    <time className="to-message-datestamp">{message.date}</time>
                    <div className={className} >
                        {
                            hasLocalSource ?
                            <Image className="image-message" src={require(`../../images/${message.content}`)}></Image>:
                            <Image className="image-message" src={imageURL}></Image>
                        }
                    </div>
                </div>
            )
        }
        else {
            className = 'chat-bubble-from';
            messageList.push(
                <div className="chat-bubble-container"  key={messageId}> 
                    <div className={className}>
                        {
                            hasLocalSource ?
                            <Image className="image-message" src={require(`../../images/${message.content}`)}></Image>:
                            <Image className="image-message" src={imageURL}></Image>
                        }
                    </div>
                    <time className="from-message-timestamp">{message.time}</time>
                    <time className="from-message-datestamp">{message.date}</time>
                </div>
            )
        }
    }
    /**
     * Helper function
     */
    function buildVideoMessage(message ,messageList, messageId, hasLocalSource) {
        let className = '';
        let videoURL;
        if (!hasLocalSource) {
            videoURL = URL.createObjectURL(message.content);
        };
        if (message.direction === 'TO') {
            className = 'chat-bubble-to';
            messageList.push(
                <div className="chat-bubble-container" key={messageId}>
                    <time className="to-message-timestamp">{message.time}</time>
                    <time className="to-message-datestamp">{message.date}</time>
                    <div className={className} >
                        {
                            hasLocalSource ?
                            <video src={require(`../../video/${message.content}`)} className="custom-video" controls></video> :
                            <video src={videoURL} className="custom-video" controls></video>
                        }
                    </div>
                </div>
            )
        }
        else {
            className = 'chat-bubble-from';
            messageList.push(
                <div className="chat-bubble-container"  key={messageId}> 
                    <div className={className}>
                        {
                            hasLocalSource ?
                            <video src={require(`../../video/${message.content}`)} className="custom-video" controls></video> :
                            <video src={videoURL} className="custom-video" controls></video>
                        }
                    </div>
                    <time className="from-message-timestamp">{message.time}</time>
                    <time className="from-message-datestamp">{message.date}</time>
                </div>
            )
        }
    }
    /**
     * 
     */
    function buildAudioMessage(message ,messageList, messageId, hasLocalSource) {
        let className = '';
        let audioURL;
        if (!hasLocalSource) {
            audioURL = URL.createObjectURL(message.content);
        };
        if (message.direction === 'TO') {
            className = 'chat-bubble-to';
            messageList.push(
                <div className="chat-bubble-container" key={messageId}>
                    <time className="to-message-timestamp">{message.time}</time>
                    <time className="to-message-datestamp">{message.date}</time>
                    <div className={className} >
                        {
                            hasLocalSource ?
                            <audio src={require(`../../audio/${message.content}`)} className="custom-audio" controls></audio> :
                            <audio src={audioURL} className="custom-audio" controls></audio>
                        }
                    </div>
                </div>
            )
        }
        else {
            className = 'chat-bubble-from';
            messageList.push(
                <div className="chat-bubble-container"  key={messageId}> 
                    <div className={className}>
                        {
                            hasLocalSource ?
                            <audio src={require(`../../video/${message.content}`)} className="custom-audio" controls></audio> :
                            <audio src={audioURL} className="custom-audio" controls></audio>
                        }
                    </div>
                    <time className="from-message-timestamp">{message.time}</time>
                    <time className="from-message-datestamp">{message.date}</time>
                </div>
            )
        }
    }

    /**
     * Handles user image upload
     */
    function handleUploadImage(event) {
        event.preventDefault();
        let imageFile = event.target[0].files[0];
        let updatedMessages = {...props.messages};
        props.functions.updateMessages(updatedMessages);
        updatedMessages[props.currentUser][props.userChattingWith].push(
            {
                type: 'IMG',
                direction: 'TO',
                date: parseDate(),
                time: parseTime(),
                content: imageFile
            }
        );
        updatedMessages[props.userChattingWith][props.currentUser].push(
            {
                type: 'IMG',
                direction: 'FROM',
                date: parseDate(),
                time: parseTime(),
                content: imageFile
            }
        );
        setShowUploadImagePopup(false);
    }
    /**
     * Handles user video upload
     */
    function handleUploadVideo(event) {
        event.preventDefault();
        let videoFile = event.target[0].files[0];
        let updatedMessages = {...props.messages};
        updatedMessages[props.currentUser][props.userChattingWith].push(
            {
                type: 'VIDEO',
                direction: 'TO',
                date: parseDate(),
                time: parseTime(),
                content: videoFile
            }
        );
        updatedMessages[props.userChattingWith][props.currentUser].push(
            {
                type: 'VIDEO',
                direction: 'FROM',
                date: parseDate(),
                time: parseTime(),
                content: videoFile
            }
        );
        props.functions.updateMessages(updatedMessages);
        setShowUploadVideoPopup(false);
    }
    /**
     * Handles user audio message
     */
    function handleAudioMessage(event) {
        event.preventDefault();
        let audioFile = event.target[0].files[0];
        console.log(audioFile);
        let updatedMessages = {...props.messages};
        updatedMessages[props.currentUser][props.userChattingWith].push(
            {
                type: 'AUDIO',
                direction: 'TO',
                date: parseDate(),
                time: parseTime(),
                content: audioFile
            }
        );
        updatedMessages[props.userChattingWith][props.currentUser].push(
            {
                type: 'AUDIO',
                direction: 'FROM',
                date: parseDate(),
                time: parseTime(),
                content: audioFile
            }
        );
        props.functions.updateMessages(updatedMessages);
        setShowRecordVoicePopup(false);
    }
    /**
     * Captures a voice message from the user
     */
    function captureAudio() {
        const options = {mimeType: 'audio/webm'};
        const recordedChunks = [];
        const stopBtn = document.getElementById('stop-record');
        const mediaRecorder = new MediaRecorder(mediaStream, options);
        mediaRecorder.addEventListener('dataavailable', (e) => {
            if (e.data.size > 0) {
                recordedChunks.push(e.data);
            }
        });
        mediaRecorder.addEventListener('stop', ()=> {
            let chunksBlob = new Blob(recordedChunks);
            setVoiceRecordingBlob(chunksBlob);
        });
        stopBtn.addEventListener('click', ()=> {
            mediaRecorder.stop();
        });
        mediaRecorder.start();
    }
    /**
     * Sets up the media stream for voice recording upon clicking the mic button
     */
    function setupVoiceRecording() {
        setShowRecordVoicePopup(true);
        try {
            navigator.mediaDevices.getUserMedia({audio: true, video:false}).then((stream) => {
                setMediaStream(stream);
            });
        }   
        catch (error) {
            console.log(error);
        }
    }
    /**
     * Sends a voice recording of the user as a message
     */
    function handleVoiceRecordingMessage() {
        let updatedMessages = {...props.messages};
        updatedMessages[props.currentUser][props.userChattingWith].push(
            {
                type: 'AUDIO',
                direction: 'TO',
                date: parseDate(),
                time: parseTime(),
                content: voiceRecordingBlob
            }
        );
        updatedMessages[props.userChattingWith][props.currentUser].push(
            {
                type: 'AUDIO',
                direction: 'FROM',
                date: parseDate(),
                time: parseTime(),
                content: voiceRecordingBlob
            }
        );
        props.functions.updateMessages(updatedMessages);
        setVoiceRecordingBlob(null);
        setShowRecordVoicePopup(false);
    }
    const popover = (
        <Popover>
            <Popover.Header>
                Attach
            </Popover.Header>
            <Popover.Body>
                <ListGroup horizontal>
                    <ListGroup.Item action onClick={()=>{
                        setupVoiceRecording(); setShowUploadImagePopup(false); setShowUploadVideoPopup(false)}}>
                        <Mic/>
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={()=>{
                        setShowUploadVideoPopup(true); setShowRecordVoicePopup(false); setShowUploadImagePopup(false)}}>
                        <CameraVideo/>
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={()=>{
                        setShowUploadImagePopup(true); setShowRecordVoicePopup(false); setShowUploadVideoPopup(false)}}>
                        <Camera/>
                    </ListGroup.Item>
                </ListGroup>
            </Popover.Body>
        </Popover>
    );
    return (
        <div className="MessageDisplay">
            <Navbar className="custom-navbar" variant="light" bg="light">
                <Image src={require(`../../userImages/${props.users[props.userChattingWith].profileImage}`)} className="custom-navbar__contact-image"></Image>
                <Navbar.Brand className="custom-navbar__contact-brand"><h5>{props.users[props.userChattingWith].displayName}</h5></Navbar.Brand>
                <p className="spacer">a</p>
            </Navbar>
            <div className="messages-div">
                {buildMessages()}
            </div>
            <Modal show={showUploadImagePopup} onHide={()=>{setShowUploadImagePopup(false)}} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Send Image:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleUploadImage}>
                        <Form.Group>
                            <Form.Control type="file" placeholder='Choose file' accept="image/*"></Form.Control>
                        </Form.Group>
                        <Form.Group className="modal__form__add-btn-grp">
                            <Button variant="primary" type="submit">Send</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
            <Modal show={showUploadVideoPopup} onHide={()=>{setShowUploadVideoPopup(false)}} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Send Video:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleUploadVideo}>
                        <Form.Group>
                            <Form.Control type="file" placeholder='Choose file' accept="video/mp4,video/x-m4v,video/*"></Form.Control>
                        </Form.Group>
                        <Form.Group className="modal__form__add-btn-grp">
                            <Button variant="primary" type="submit">Send</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
            <Modal show={showRecordVoicePopup} onHide={()=>{setShowRecordVoicePopup(false)}} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Send Voice Message:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleAudioMessage}>
                        <Form.Group>
                            <Form.Control type="file" placeholder='Choose file' accept="audio/*" capture></Form.Control>
                        </Form.Group>
                        <Form.Group className="modal__form__add-btn-grp">
                            <Button variant="primary" type="submit">Send</Button>
                        </Form.Group>
                        <hr></hr>
                        <Form.Group className="capture-group">
                            <Form.Label className="capture-label">Record:</Form.Label>
                            <Button className="record-btn" variant="success" id="start-record" onClick={captureAudio}>RECORD</Button>
                            <Button className="record-btn" variant="danger" id="stop-record">STOP</Button>
                        </Form.Group>
                        <Form.Group className="capture-group">
                            {
                                voiceRecordingBlob &&
                                <>
                                    <audio src={URL.createObjectURL(voiceRecordingBlob)} controls></audio>
                                    <Button variant="primary" onClick={handleVoiceRecordingMessage}>Send</Button>
                                </>
                            }
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
            <Navbar className="custom-footer" variant="light" bg="light">
                <OverlayTrigger trigger="click" placement='top' overlay={popover} rootClose='true'>
                    <Button>
                        <Paperclip></Paperclip>
                    </Button>
                </OverlayTrigger>
                <Form className="custom-footer__custom-form" onSubmit={sendTextMessage}>
                    <Form.Group className="custom-footer__custom-form__custom-grp">
                        <Form.Control placeholder="Enter message" className="custom-footer__custom-form__custom-grp__custom-control"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Button variant="primary" type="submit">
                            <ArrowRightCircle/>
                        </Button>
                    </Form.Group>
                </Form>
            </Navbar>
        </div>
    );
}
export default MessageDisplay;