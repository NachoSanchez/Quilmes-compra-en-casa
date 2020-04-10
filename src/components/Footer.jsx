import React from 'react'
import logo from '../assets/img/logo-q.png'
import styles from './footer.module.css'
import mayra from '../assets/img/mayra-mendoza-logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faYoutube, faTwitter} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return ( 
        <footer className={ styles.footer }>
            <div>
                <img 
                    id={ styles.logo } src={ logo } 
                    alt="Quilmes municipio"
                />
                <label htmlFor={ styles['defensa-civil'] }>
                    <span>103</span>
                    <a href="tel:103" id={styles['defensa-civil']}>Defensa Civil</a>
                </label>
                <label htmlFor={ styles.same }>
                    <span>107</span>
                    <a href="tel:107" id={styles.same}>SAME</a>
                </label>
                <label htmlFor={ styles['seguridad-ciudadana'] }>
                    <span>147</span>
                    <a href="tel:147" id={styles['seguridad-ciudadana']}>Seguridad ciudadana</a>
                </label>
            </div>
            <div className={ styles['social-media'] }>
                <img src={mayra} alt='Mayra Mendoza Intendenta'/>
                <aside>
                    <a href="https://www.facebook.com/MunicipalidadDeQuilmesOficial">
                        <FontAwesomeIcon icon={ faFacebook }/>
                    </a>
                
                    <a href="https://www.twitter.com/QuilmesMuni">
                        <FontAwesomeIcon icon={ faTwitter }/>
                    </a>
                            
                    <a href="https://www.youtube.com/channel/UCy11pQzRHH3WFlSRK_0klJA">
                        <FontAwesomeIcon icon={ faYoutube }/>
                    </a>
                            
                    <a href="https://www.instagram.com/quilmesmunicipio">
                        <FontAwesomeIcon icon={ faInstagram }/>
                    </a>
                </aside>
            </div>
        </footer>
     );
}
 
export default Footer;