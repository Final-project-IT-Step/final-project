import { ContentSelection } from "../ContentSelection";
import { ShopBasket } from "../ShopBasket";
import { filteredBlockData } from "../data";


export const FilterBlock = () => {

    return (
        <div className="filter__block">
            {filteredBlockData.map(block => {
                const { id, title, classNameValue, key } = block;

                return (
                    <div className="filter__block_item" key={ id }>
                        <ContentSelection 
                            title = { title }
                            classNameValue={ classNameValue }
                            currentKey = { key }
                        />
                    </div>
                )
            })}

            <ShopBasket />
        </div>
    )
}