import { FC, ReactNode, createContext, useContext, useState } from "react";

interface CounterContextType {
    countX: number,
    decrementX: () => void,
    incrementX: () => void,
}
const CounterContext = createContext<CounterContextType>({
    countX: 0,
    decrementX: () => {},
    incrementX: () => {}
})


interface CounterContextProviderType {
    children: ReactNode
}

export const CounterContextProvider: FC<CounterContextProviderType> = ({children}) => {
    const [countX, setCount] = useState(0);
    
    const incrementCount = () => setCount(prev => prev + 1);
    const decrementCount = () => setCount(prev => prev - 1);

    const value = {
    countX,
    decrementX: decrementCount,
    incrementX: incrementCount
    }
    return <CounterContext.Provider value={value}>
        {children}
    </CounterContext.Provider>
}

export const useCounterContext = () => {
    const { countX, decrementX, incrementX } = useContext(CounterContext);
    return {
      countX,
      decrementX,
      incrementX
    }
}