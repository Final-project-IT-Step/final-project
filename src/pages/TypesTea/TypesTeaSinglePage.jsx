import { typeTeaList } from "./typesTeaList";
import { useGetCurrentTea } from "../../components/TypeTea/hooks/useGetCurrentTea";
import { Page404 } from "../Page404";

export const TypesTeaSinglePage = () => {
    const { filteredData:selectedTea = {}, isLoading } = useGetCurrentTea();

    return (
        Object.keys(selectedTea).length && !isLoading
        ? <div className='type-tea__info-block'>
            <h2 className='type-tea__title'>{selectedTea.typeTea}</h2>
            <ul className='type-tea__list'>
                { typeTeaList.map(tea => {
                    const { id, title, key } = tea;
                    return (
                        <li className='type-tea__info text' key = { id }>
                            <div className="image">
                                <img src={process.env.PUBLIC_URL + '/img/vignette.png'} alt="" className="image__src" />
                            </div>
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
        : <Page404 />
    )
}