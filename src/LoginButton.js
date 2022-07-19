// import './LoginButton.css';
import styles from './LoginButton.module.css';

function LoginButton() {
    return (
        // <button className='buttonColor'>Login Button</button>
        <button className={styles.buttonColor}>Login Button</button>
    )
}

export default LoginButton;