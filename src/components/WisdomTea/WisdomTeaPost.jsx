import { useWisdomTeaContext } from "./hooks";


export const WisdomTeaPost = () => {
    const { BgdPost, bgdVisible, selectedAdvice } = useWisdomTeaContext();
    
    return (
        <div className="wisdom-tea__post">
            <img src={ BgdPost } alt="" className={ `wisdom-tea__post-bgd ${ bgdVisible ? 'fade-in-slow' : '' }` } />

            <div className="wisdom-tea__post-text-wrapper">
                { selectedAdvice && 
                    <p 
                        className={ `wisdom-tea__post-text fade-in` }
                    >
                        { selectedAdvice }
                    </p>
                }
            </div>
        </div>
    )
}