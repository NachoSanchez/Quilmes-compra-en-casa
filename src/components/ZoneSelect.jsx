import React, { useContext, useState } from 'react'
import { ZoneContext } from '../contexts/ZoneContext'
import styles from './navigation.module.css'
import func from './main.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'

const ZoneSelect = () => {
    const [ isShowing, setShowing ] = useState(false);
    const { zone, setZone } = useContext(ZoneContext);
    const toggle = isShowing ?  func['toggle-show'] : func['toggle-hide'];
    const handleClick = ()=> (setShowing(!isShowing));

    return ( 
        <section className={styles.selector}>
            <div onClick={handleClick}> 
                <p> vivo en:</p>
                <span>{ zone } 
                {   isShowing
                    ? <FontAwesomeIcon icon={ faSortUp }/>
                    : <FontAwesomeIcon icon={ faSortDown }/>
                }</span>
            </div>
            {/* cada li setea el barrio y desaparece la lista al ser cliqueada*/}
            <ul className={ toggle }>
                <li onClick={() => {setZone({zone: 'Quilmes'})
                                    setShowing(false)}}
                > Quilmes </li>
                <li onClick={() => {setZone({zone: 'Quilmes Oeste'})
                                    setShowing(false)}}
                > Quilmes Oeste </li>
                <li onClick={() => {setZone({zone: 'Bernal'})
                                    setShowing(false)}}
                > Bernal </li>
                <li onClick={() => {setZone({zone: 'Bernal Oeste'})
                                    setShowing(false)}}
                > Bernal Oeste </li>
                <li onClick={() => {setZone({zone: 'San Francisco Solano'})
                                    setShowing(false)}}
                > San Francisco Solano</li>
                <li onClick={() => {setZone({zone: 'Don Bosco'})
                                    setShowing(false)}}
                > Don Bosco </li>
                <li onClick={() => {setZone({zone: 'Ezpeleta'})
                                    setShowing(false)}}
                > Ezpeleta </li>
            </ul>
        </section>
     );
}
 
export default ZoneSelect;