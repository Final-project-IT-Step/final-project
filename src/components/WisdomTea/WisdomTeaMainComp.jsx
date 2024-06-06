import { WisdomTeaBlock } from "./WisdomTeaBlock/WisdomTeaBlock";
import { Vignette } from "../Vignette";
import { WisdomTeaBlockSage } from "./WisdomTeaBlockSage";
import { WisdomTeaPost } from "./WisdomTeaPost";

export const WisdomTeaMainComp = () => {
    return (
        <div className='main'>
            <h1>МУДРІСТЬ ЧАЮ</h1>
            <div className="wisdom-tea">
                <Vignette />

                <div className="wisdom-tea__wrapper">
                   <WisdomTeaBlockSage />

                    <WisdomTeaBlock />
                </div>

                <WisdomTeaPost />
            </div>
        </div>
    )
}