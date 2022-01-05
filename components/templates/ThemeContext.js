import React from 'react';

const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('color-theme');
        //console.log('refs ',storedPrefs)
        if (typeof storedPrefs === 'string') {
            if (storedPrefs === 'dark') {
                return 'light';
            } else return 'dark';
            
        }

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
        if (userMedia.matches) {
            return 'dark';
        } 
        const userMedia1 = window.matchMedia('(prefers-color-scheme: light)');
        if (userMedia1.matches) {
            return 'light';
        } 
    }

   //return 'light' // light theme as the default;
};

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
    const [theme, setTheme] = React.useState(getInitialTheme());
    initialTheme=getInitialTheme();
    // if (initialTheme === 'light')
    // {
    //     initialTheme= 'dark';
    // } else initialTheme= 'light';

    // if (initialTheme === 'undefined')
    // {
    //     initialTheme= 'dark';
    // }
    const rawSetTheme = (rawTheme) => {
        const root = window.document.documentElement;
        //const isDark;
         const isDark = rawTheme === initialTheme;
         //console.log('in ',initialTheme);
        
        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(rawTheme);
        if (rawTheme === 'dark') {
            localStorage.setItem('color-theme', "light");
        } else localStorage.setItem('color-theme', 'dark');
        
    };

    if (initialTheme != undefined) {
        rawSetTheme(initialTheme);
        
 
    }

    React.useEffect(() => {
        rawSetTheme(theme);
        //console.log(theme);
        
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};