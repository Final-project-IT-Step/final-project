import { capitalizeValue, initUserInterface } from "./utils";


export const ProfileInfoList = ({ currentUser, isGuest, change }) => {
    const additionalInfo = initUserInterface(currentUser, isGuest);

    return (
        <ul className="profile-info-list">
            {
                additionalInfo.map((item, index) => {
                    const title = capitalizeValue(item[0]);
                    const value = item[1];
                    return (
                        <li 
                            className="profile-info-list__element"
                            key={ index }
                        >
                            <h3 className="profile-info-list__title">{ title }:</h3>
                            <span className="profile-info-list__value">{ value }</span>
                            { change && 
                                <button className="profile-info-list__edit-btn">Редагувати</button>
                            }
                        </li>
                    )
                })
            }
        </ul>
    )
}