import { useOrderContext } from "../hooks";


export const Select = () => {
    const { switchHandler, changeRegionHandler, region, selectIsOpen, currentRegions } = useOrderContext(); 
    /* In development */
    return (
        <>
            <div className="select" >
                <div className="initial-value-box">
                    <span 
                        className="select__initial-value" 
                        onClick={ switchHandler }
                    >{ region || 'Оберіть область'}
                    </span>

                    <span className={`initial-value-box__icon ${ selectIsOpen ? 'rotated' : '' }`}>
                        <i className="fa-solid fa-chevron-down"></i>
                    </span>
                </div>
                <div className="select-dropdown">
                    {selectIsOpen && currentRegions.map(region => (
                        <span
                            onClick={ (e) => {
                                changeRegionHandler(e, region) 
                            } }
                            className="select-dropdown__option"
                            key={ region.AreasCenter }

                        >{ region.Description }
                        </span>
                    ))}
                </div>
            </div>
        </>
    )
}