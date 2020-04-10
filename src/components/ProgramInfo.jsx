import React from 'react'
import logo from '../assets/img/municipio_quilmes.png'
import styles from './home.module.css'

const ProgramInfo = () => {
    return (
        <footer className={ styles.footer }>
            <div className={ styles.container }>
        
                    <img src={ logo } alt="Quilmes Gobierno Municipal"/>
                    <p>
                        Es un programa del <strong>Municipio de Quilmes </strong>
                        que fomenta que los vecinos puedan comprar desde su casa
                        de forma directa con el comerciante, feriantes y productores
                        locales para ayudarlos a continuar con su actividad.
                    </p>
    
            </div>
        </footer>
    )
}

export default ProgramInfo;