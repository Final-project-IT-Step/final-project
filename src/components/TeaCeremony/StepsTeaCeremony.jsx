import { TeaCeremonyInfo } from "./TeaCeremonyInfo";
import { teaCeremonyStepsData } from "./data";


export const StepsTeaCeremony = () => {
    return (
        <div className="steps-tea-ceremony">
            <h2 className="steps-tea-ceremony__title">
                ЕТАПИ ЧАЙНОЇ ЦЕРЕМОНІЇ
            </h2>

            <p className="tea-ceremony__info text">
                Основними елементами китайської чайної церемонії є посуд, вибір чаю, 
                процес, атмосфера. Проводиться вона довкола чайного столика. 
                Коли всі зібралися, розпочинається перформанс.
            </p>

            <TeaCeremonyInfo currentData={ teaCeremonyStepsData }/>
        </div>
    );
};