import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle, faFileDownload } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/img/compra_en_casa.svg'
import styles from './main.module.css'

const Comerciante = () => {
    return ( 
        <section className={styles.main}>
            <div className="container">
                <img src={logo} alt='Programa Quilmes compra en casa'/>
                <h1>
                    Requisitos para comerciantes, feriantes, 
                    productores locales y de la economía 
                    popular.
                </h1>
            </div>
            <div className="container">
                                {/**Requisitos aqui */}
                                <ul className={ styles.rules }>
                    <li>
                        <span>1.</span>
                        <p>
                            Estar inscripto(titular) en el 
                            registro de Quilmes Compra en casa 
                            de la agencia de Fiscalización y 
                            Control Comunal.
                        </p>
                    </li>
                    <li>
                        <span>2.</span>
                        <p>
                            El proveedor deberá registrar los datos
                            de las personas que realizarán las entregas
                            de los pedidos, no pudiendo exceder de dos 
                            personas, máximo, por vehículo de entrega.
                        </p>
                    </li>
                    <li>
                        <span>3.</span>
                        <p>
                            Los repartidores registrados por el
                            titular contarán con una Credencial virtual
                            expedida por la Agencia de Fiscalización y
                            Control Comunal(para el titular y repartidores 
                            registrados), en la cual estarán consignados 
                            sus datos personales y tendrá autorización 
                            para circular. La misma servirá para seguridad
                            del cliente quien podrá exigirla si así lo desea.
                        </p>
                    </li>
                    <li>
                        <span>4.</span>
                        <p>
                            El proveedor, una vez que recibió 
                            el pedido, deberá informar la fecha 
                            y horario de entrega aproximado, como
                             así también el faltante de stock en
                             algunos de los productos solicitados, 
                             o cualquier variación en los mismos.
                        </p>
                    </li>
                    <li>
                        <span>5.</span>
                        <p>
                            Todos los pedidos serán tomados 
                            por medio de mensajes de Whatsapp, 
                            medio por el cual se entablará el 
                            vínculo entre el productor/comerciante
                            local y las vecinas y vecinos de 
                            Quilmes.
                        </p>
                    </li>
                </ul>
            </div>
            <div className="container">
                <a  href="https://quilmes.gov.ar/pdf/compraencasa/compra_en_casa.pdf"
                    target="_blank" rel="noopener noreferrer"
                > 
                    <FontAwesomeIcon id={ styles.icon } icon={ faFileDownload }/>
                    Descargá los Requisitos
                </a>
                <a  href="https://docs.google.com/forms/d/163Ua9Sxzo7457YT2cLPSUza0eRKRBVoyLVTf9ZQlwqs/viewform?edit_requested=true"
                    target="_blank" rel="noopener noreferrer"
                > 
                    <FontAwesomeIcon id={ styles.icon } icon={ faExclamationCircle }/>
                    Formulario de Inscripción
                </a>
            </div>
        </section>
     );
}
 
export default Comerciante;