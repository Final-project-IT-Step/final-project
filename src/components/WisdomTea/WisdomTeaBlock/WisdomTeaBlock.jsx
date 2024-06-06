import { WisdomTeaBlockContainer } from "./WisdomTeaBlockContainer"
import { WisdomTeaButtonContainer } from "./WisdomTeaButtonContainer"


export const WisdomTeaBlock = () => {
    return (
        <div className="wisdom-tea__block">
            <WisdomTeaBlockContainer />
            <WisdomTeaButtonContainer />
        </div>
    )
}