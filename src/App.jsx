import { useState, useEffect } from 'react'
import CardContainer from '../src/components/CardContainer/CardContainer'

const App = () => {
    
    const [character, setCharacter] = useState({})
    const [id, setId] = useState(0)
    
    async function getCharacter () {
        const apiURL = `https://www.breakingbadapi.com/api/characters/${id}`
        const resp = await fetch(apiURL)
        const data = await resp.json()
        let selectedCharacter = data[0]

        let selectedCharacterVal = selectedCharacter ?? 
            {
                name: 'Undefined character',
                img: 'https://scontent.faep6-1.fna.fbcdn.net/v/t1.18169-9/fr/cp0/e15/q65/22552296_130857484239545_6063457006760705652_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=dd9801&_nc_ohc=cBWGEflUMuoAX-K3am8&_nc_ht=scontent.faep6-1.fna&oh=00_AT_hCp42aWwVPIbKmuA5k_fN9ePp5FfQCGESrqkv5uFCWw&oe=62269411',
                portrayed: 'Undefined actor'
            }
        
        const {name, img, portrayed} = {...selectedCharacterVal}
        setCharacter({name, img, portrayed})
    }

    useEffect(() => {
        if (id !== 0) {
            getCharacter()
        }
    },[id])

    return (
        <>
            <CardContainer 
                setId={setId} 
                character={character}  
            />
        </>
    );
}
 
export default App;