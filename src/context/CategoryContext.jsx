import React, { createContext, useState } from 'react';
import movieCategory from '../utils/movieCategory';

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {

    const category = movieCategory

    const value = {
        category
    };

    return (
        <CategoryContext.Provider value={value}>
            {children}
        </CategoryContext.Provider>
    );
};

export { CategoryContext, CategoryProvider };
