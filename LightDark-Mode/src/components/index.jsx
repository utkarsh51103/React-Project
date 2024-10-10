import React from 'react';
import useLocalStorage from './useLocalStorage';
import './style.css';

function Index() {
    const [theme, setTheme] = useLocalStorage('theme', 'dark'); 

    // const handleChange = () => {
    //     setTheme(theme==='light'?'dark':'light');
    // };
    function handleChange(){
        setTheme(theme==="light"?"dark":"light");
    }
    
    console.log(theme);

    return (
        <div className='h-screen w-screen'>
        <div className="light-dark-mode" data-theme={theme}>
            <div className='container'>
                <p>Hello World!</p>
                <button onClick={handleChange}>Change Theme</button>
            </div>
        </div>
        </div>
    );
}

export default Index;