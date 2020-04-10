import React, { createContext, useState, useMemo } from 'react';

export const ZoneContext = createContext();

const ZoneContextProvider = (props) => {
    const [ zone, setZone ] = useState({zone:'Quilmes'});
    const providerValue = useMemo(()=>({ ...zone, setZone }), [ zone, setZone ]);

    return (
        <ZoneContext.Provider value={ providerValue }>
            { props.children }
        </ZoneContext.Provider>
    )
}

export default ZoneContextProvider;