'use client'

import { createContext, useContext, useState } from "react";

const ReservationContext = createContext();

const initialState = {
  from: undefined,
  to: undefined,
};

function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
    const context = useContext(ReservationContext);
    if (!context) {
      throw new Error("useReservation must be used within a ReservationProvider");
    }
    return context;
  
}

export { ReservationProvider, useReservation };





const lolContext = createContext();

function lolProvider({children}) {
    const [lil, setLil] = useState();

    return (
        <lolContext.Provider value={{lil, setLil}}>
            {children}
        </lolContext.Provider>
    )
}

function useLil() {
    const context = useContext(lolContext)

    return context
}
