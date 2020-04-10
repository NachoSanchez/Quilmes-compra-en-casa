import React from 'react'
import Accordion from './Accordion'
import data from '../api'
import panaderias from '../assets/img/panaderias.svg'
import restaurantes from '../assets/img/restaurants.svg'
import mascotas from '../assets/img/mascotas.svg'
import helados from '../assets/img/helados.svg'
import perfumerias from '../assets/img/perfumerias.svg'
import pizzerias from '../assets/img/pizzerias.svg'
import sushi from '../assets/img/sushi.svg'
import verdulerias from '../assets/img/verdulerias.svg'
import dieteticas from '../assets/img/dieteticas.svg'
import almacenes from '../assets/img/almacenes.svg'
import carnes from '../assets/img/carnes.svg'

const Businesses = () => {
    return ( 
        <div className='col-6'>
            <Accordion 
                image={restaurantes}
                businesses={ data[0].businesses }
                category={ data[0].category }
                subcategory={ data[0].subcategory }
            />
            <Accordion 
                image={panaderias}
                businesses={ data[1].businesses }
                category={ data[1].category }
            />
            <Accordion 
                image={mascotas}
                businesses={ data[2].businesses }
                category={ data[2].category }
                subcategory={ data[2].subcategory }
            />
            <Accordion 
                image={helados}
                businesses={ data[3].businesses }
                category={ data[3].category }
            />
            <Accordion 
                image={pizzerias}
                businesses={ data[4].businesses }
                category={ data[4].category }
            />
            <Accordion 
                image={almacenes}
                businesses={ data[5].businesses }
                category={ data[5].category }
                subcategory={ data[5].subcategory }
            />
            <Accordion 
                image={perfumerias}
                businesses={ data[6].businesses }
                category={ data[6].category }
                subcategory={ data[6].subcategory }
            />
            <Accordion 
                image={verdulerias}
                businesses={ data[7].businesses }
                category={ data[7].category }
                subcategory={ data[7].subcategory }
            />
            <Accordion 
                image={carnes}
                businesses={ data[8].businesses }
                category={ data[8].category }
            />
            <Accordion 
                image={dieteticas}
                businesses={ data[9].businesses }
                category={ data[9].category }
            />
            <Accordion 
                image={sushi}
                businesses={ data[10].businesses }
                category={ data[10].category }
            />
        </div>
     );
}
 
export default Businesses;