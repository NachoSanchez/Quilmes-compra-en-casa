import React from 'react';
import logo from '../assets/img/compra_en_casa.svg'
import all from '../assets/img/all.svg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import styles from './home.module.css'

const Home = () => {
    return ( 
        <header className={ styles.home }>
            <div className="container">
                <img src={ logo } alt="Programa Quilmes compra en casa"/>
            </div>
            <div className={ styles.slider }>
                <img src={all} alt="..."/>
            </div>
            <div className={ styles.container +' '+ styles['home-nav']}>
                <h1>
                    Una opción sencilla para <span>comprar desde tu casa.</span>  
                </h1>
                <section>
                    <Link to='/comerciante' className={ styles['ghost-btn'] }>
                        soy comerciante
                    </Link>
                    <Link to='/comprador' className={ styles['ghost-btn'] }>
                        Quiero Comprar!
                    </Link>
                    <div className={ styles.contact }>
                        <p>consultanos: </p>
                        <a href="mailto:quilmescompraencasa@quilmes.gov.ar">
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </a>
                        <a href="https://wa.me/+541126865593">
                            <FontAwesomeIcon icon={faWhatsapp}/>
                        </a>
                    </div>
                </section>
            </div>
        </header>
     );
}
 
export default Home;