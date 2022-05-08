import './Styles/ContactCard.css'

function ContactCard(props) {
    return (
        <div className="ContactCard">
            <div className="ContactCard__image-div">
                <img className="ContactCard__image-div__img"
                src={require(`../../userImages/${props.profileImage}`)} alt=''></img>
            </div>
            <div className="ContactCard__contact-div">
                <div className="ContactCard__contact-div__contact-name-div">
                    <h1>{props.contactName}</h1>
                </div>
                <div className="ContactCard__contact-div__last-message-div">
                    <p>{props.lastMessage}</p>
                </div>
            </div>
        </div>
    );
}
export default ContactCard;