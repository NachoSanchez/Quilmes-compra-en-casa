import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import styles from './main.module.css'

const Vecino = () =>  {
    return (
        <section className={ 'col-6 '+ styles.main }>
            <h1>Soy vecino y quiero comprar desde casa.</h1>
            <p>
                Todos los pedidos serán tomados por <strong>Whatsapp, </strong>
                medio por el cual se entablará el vínculo comercial entre el
                <strong> productor/comerciante local y vecinos de Quilmes</strong>
            </p>
            <a 
                href="https://www.quilmes.gov.ar/servicios/repartidores.php" 
                target="_blank" rel="noopener noreferrer"
            >
                <FontAwesomeIcon id={ styles.icon } icon={ faExclamationCircle }/>
                ver listado de Repartidores
            </a>
        </section>
    )
}

export default Vecino;