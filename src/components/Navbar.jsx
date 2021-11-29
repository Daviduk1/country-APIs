import { useState, useEffect } from "react"

const Navbar = ({getCurrentMode}) => {
    const [mode, setMode] = useState('light')

    function toggleMode () {
        if (mode === 'light') {
            setMode('dark')
        } else {
            setMode('light')
        }
    }

    useEffect(() => {
        getCurrentMode(mode)
    }, [mode])
    return (
       <nav>
           <h1>Where is the World</h1>
           <button onClick={toggleMode}>Dark Mode</button>
       </nav>
    )
}

export default Navbar
