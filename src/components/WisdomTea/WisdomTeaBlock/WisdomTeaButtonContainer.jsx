import { wisdomButtonsData } from "../data";
import { useWisdomTeaContext } from "../hooks";
import { handleButtonClick } from "../utils";

export const WisdomTeaButtonContainer = () => {
    const 
    { 
        isActive,  
        adviceData, 
        setSelectedAdvice, 
        setMessageClass, 
        setMessage, 
        bgdVisible, 
        setBgdVisible 
    } = useWisdomTeaContext();

    return (
        <div className="wisdom-tea__button-container">
            {  
                wisdomButtonsData.map(button => {
                    const { id, title } = button
                    
                    return (
                        <button
                            key={ id }
                            className={ `wisdom-tea__btn ${ isActive ? 'active' : 'inactive' }` } 
                            onClick={ () => handleButtonClick(
                                { 
                                    type:title, 
                                    adviceData, 
                                    setSelectedAdvice, 
                                    setMessageClass, 
                                    setMessage, 
                                    bgdVisible, 
                                    setBgdVisible 
                                }) 
                            }
                        >
                            { title }
                        </button>
                    )
                })
            }
        </div>
    )
}