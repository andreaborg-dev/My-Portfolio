import './Styles/footer.css';
import Logo from './images/Logo.png';


export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <img src={Logo} alt='Logo' className='Flogo'/>
            <p>Developer: Andrea Borg <br/> {currentYear}</p>
        </footer>
    );
}