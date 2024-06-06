import { TeaCeremonyInfo } from "./TeaCeremonyInfo";
import { teaCeremonyInfoData } from "./data";


export const Tableware = () => {
    return (
        <div className="tableware">
            <h2 className="steps-tea-ceremony__title">
                ПОСУД
            </h2>

            <TeaCeremonyInfo currentData={ teaCeremonyInfoData }/>

            <p className="tea-ceremony__info text">
                Важливо зазначити, що складових чайної церемонії в Китаї сьогодні дотримуються менш суворо, 
                ніж у Європі. У Піднебесній легко поєднують порцелянові піали та глиняний чайник, 
                орієнтуються на смак чаю більше, ніж на процес його приготування. Можливо, саме завдяки 
                цьому відібране висококласне китайське чайне листя стало цінуватись у всьому світі.
            </p>
        </div>
    );
};