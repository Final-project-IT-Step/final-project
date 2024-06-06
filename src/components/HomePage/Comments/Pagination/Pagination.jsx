import { getTotalPages } from "./utils";


export const Pagination = ({ setStart, data = [], start }) => {
    const totalPages = getTotalPages(data);
    const increment = () => setStart(prev => prev + 1);
    const decrement = () => setStart(prev => prev - 1);
    const currentVal = (index) => setStart(index);
    

    return (
        <div className="pagination">
            <button 
                disabled = { start <= 0 } 
                onClick={ decrement } 
                className="pagination__btn pagination__btn_prev"
            >{ '<<' }
            </button>

            <div className="pagination-box">
                { totalPages.map((item, index) => {
                    const isActiveClassName = `pagination-box__value ${ index === start ? 'pagination-box__value_active' : ''}`
                    return (
                        <button 
                            onClick = { () => currentVal(index) } 
                            className={ isActiveClassName }
                            key={ index }
                        >{ item }
                        </button>
                    )
                    })
                }
            </div>

            <button 
                disabled = { start >= totalPages.length - 1 } 
                onClick={ increment } 
                className="pagination__btn pagination__btn_next"
            >{ '>>' }</button>
        </div>
    )
}