import React, { createContext, useState, useContext } from 'react';

const ExercisesContext = createContext();

export const ExercisesProvider = ({ children }) => {
    const [exercises, setExercises] = useState([]);

    return (
        <ExercisesContext.Provider value={{ exercises, setExercises }}>
            {children}
        </ExercisesContext.Provider>
    );
};


export const useExercises = () => {
    const context = useContext(ExercisesContext);
    if (!context) {
        throw new Error('useExercises debe ser utilizado dentro de un ExercisesProvider');
    }
    return context;
};