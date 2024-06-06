import { useGetAuthPageContext } from "./hooks";


export const SwitchButton = () => {
    const { switchTypeHandler, currentContent, currentTitle } = useGetAuthPageContext();

    return (
        <button 
            className={ `authorization-form-label__switch-btn` } 
            onClick={ switchTypeHandler }
            title = { currentTitle }
        >
            <i className={ currentContent }></i>
        </button>
    )
}