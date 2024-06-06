import { Vignette } from "../Vignette";
import { typeTeaList } from "./data";


export const TypeTeaInfoBlock = ({ selectedTea }) => {

    return (
        <div className='type-tea__info-block'>
            <h2 className='type-tea__title'>{selectedTea.typeTea}</h2>
            <ul className='type-tea__list'>
                { typeTeaList.map(tea => {
                    const { id, title, key } = tea;
                    return (
                        <li className='type-tea__info text' key = { id }>
                            <Vignette />
                            <div className="content-block">
                                <h3 className='text-bold'>{ title }</h3>
                                { selectedTea[key] }
                            </div>
                        </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}