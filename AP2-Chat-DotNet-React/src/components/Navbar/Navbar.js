import './Styles/Navbar.css';
import logo from '../../images/logo.png'

function Navbar(props) {
    return (
        <nav className="navbar">
            <div className="navbar__title-div">
                <img src={logo} alt='' className="navbar_title-div__logo"/>
                <h1 className="navbar__title-div__header">ChatterBox</h1>
            </div>
        </nav>
    )
}
export default Navbar;