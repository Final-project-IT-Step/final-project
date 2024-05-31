import { Link } from "react-router-dom";
import { useShopContext } from "../hooks/useShopContext"

export const FilterQuantity = () => {
    const { setSearchParams, filteredData } = useShopContext();
    
    return (
        <div className='filter__quantity'>
            <Link to='/shop'>
                <button 
                    onClick={ () => setSearchParams({}) } 
                    className='filter__btn-cleaner'
                >
                    Очистити фільтр
                </button>
            </Link>

            <p className='filter__quantity_text'>
                <span className='text-bold'>
                    Всього товарів на сторінці:&nbsp;
                </span> 
                { filteredData.length }
            </p>
        </div>
    )
}