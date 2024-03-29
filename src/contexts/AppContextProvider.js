import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {

    const [loading, setLoading] = useState(false);

    return (
        <AppContext.Provider
            value={{
                loading
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;