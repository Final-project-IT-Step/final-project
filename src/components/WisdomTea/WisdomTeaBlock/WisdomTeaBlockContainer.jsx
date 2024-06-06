import { useWisdomTeaContext } from "../hooks";
import { handleCheckboxChange } from "../utils";


export const WisdomTeaBlockContainer = () => {
    const { 
        words,
        selectedWords, 
        setSelectedWords, 
        setMessage, 
        setIsActive, 
        isActive 
    } = useWisdomTeaContext();

    return (
        <div className="wisdom-tea__checkbox-container">
            {
                words.map((word, index) => (
                    <div key={ index } className="wisdom-tea__checkbox-item text-bold text-green">
                        { word.toUpperCase() }
                        <input 
                            type="checkbox" 
                            className="wisdom-tea__checkbox" 
                            name="principle" 
                            checked={ selectedWords.includes(word) } 
                            onChange={ () => handleCheckboxChange({ word, selectedWords, setSelectedWords, setMessage, setIsActive }) } 
                            disabled={ isActive }
                        />
                    </div>
                ))
            }
        </div>
    )
}