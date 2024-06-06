import { TypeTeaInfoBlock } from "../../components/TypeTea";
import { useGetCurrentTea } from "../../components/TypeTea/hooks";
import { Page404 } from "../Page404";

export const TypesTeaSinglePage = () => {
    const { filteredData:selectedTea = {}, isLoading } = useGetCurrentTea();

    return (
        Object.keys(selectedTea).length && !isLoading
            ? <TypeTeaInfoBlock selectedTea = { selectedTea }/>
            : <Page404 />
    )
}