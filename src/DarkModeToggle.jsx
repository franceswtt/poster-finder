import React, { useState, useEffect } from "react";
import ReactSwitch from 'react-switch';

const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (isDark) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDark]); 


    function toggleDarkMode() {
        setIsDark(prevMode => !prevMode)
    }

    return (
    <div className="toggle">
        <ReactSwitch
        checked={isDark}
        onChange={() => toggleDarkMode()}
        checkedIcon="🔆"
        uncheckedIcon="🌙"
        onHandleColor="#EAF8C8"
        offHandleColor="#EAF8C8"
        onColor="#8A915B"
        offColor="#000000"
        />
    </div>
    );
}

export default DarkModeToggle;