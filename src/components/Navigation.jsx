import React from 'react'
import styles from './navigation.module.css'
import logo from '../assets/img/compra_en_casa.svg'
import ZoneSelect from './ZoneSelect'

const Navigation = () => {
    return (
        <nav className={ styles.nav }>
            <div className={styles.container}>
                <a href='/' className={ styles.link }>
                    <img src={ logo } 
                    alt='Quilmes compra en casa'
                    />
                </a>
                <ZoneSelect/>
            </div>
        </nav>
    )
}

export default Navigation;