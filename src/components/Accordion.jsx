import React, { useState, useContext } from 'react'
import { ZoneContext } from '../contexts/ZoneContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faPlus, faTimes, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import styles from './main.module.css'

const Accordion = (props) => {
    const [ isShowing, setShowing ] = useState(false);
    const { zone } = useContext(ZoneContext);
    const toggle = isShowing ? styles['toggle-show'] : styles['toggle-hide'];
    //filtramos los negocios por el barrio traido de ZoneContext
    const suggestions = props.businesses.filter( 
        item => item.zone === zone || item.zone === null 
    );
    return ( 
        <div>
            {   //El componente entero no se va a montar si suggestions es un array vacío
                suggestions.length > 0 
                &&(<label htmlFor={ props.category } className={styles.label}>
                        <img src={props.image} alt=""/>
                        <h1><strong>{ props.category }</strong><br/>{ props.subcategory }</h1> 
                        <small>{suggestions.length}</small>
                        <button id={ props.category } onClick={()=> (setShowing(!isShowing))}>
                        { isShowing 
                        ? <FontAwesomeIcon icon={ faTimes }/>
                        : <FontAwesomeIcon icon={ faPlus }/> }
                        </button>
                    </label>
                )}
            <ul className={styles.accordion + ' ' + toggle }>
            { //Primero validamos que haya sugerencias por barrio y si las hay mapeamos el array
            suggestions.length > 0 
            ? React.Children.toArray(
                suggestions.map(
                    el => (
                        <li>
                            <p>
                                <strong>{ el.name ? el.name : el.owner }</strong><br/>
                                Titular/Responsable: <span>{ el.owner }</span><br/>
                                Zona de Referencia: <span>{ el.zone ? el.zone : 'Todo Quilmes'} </span> <br/>
                            </p>
                            <a href={`https://wa.me/54${el.phone}`}
                                target='_blank' rel='noopener noreferrer'
                                className={ styles.whatsapp }>
                                <FontAwesomeIcon icon={ faWhatsapp }/>
                            </a>
                        </li>
                )))
                : <li className={ styles['no-businesses'] }> 
                    <FontAwesomeIcon icon={ faExclamationCircle }/>
                    Todavía no hay negocios de esta categoría en { zone }. 
                </li> /*Acá cierra el if ternario con el map*/}    
            </ul>
        </div>
     );
}
 
export default Accordion;