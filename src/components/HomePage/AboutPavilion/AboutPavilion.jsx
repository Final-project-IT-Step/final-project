import BgdPaper from '../../../img/bgd-post.png';
import { PavilionAboutInfo } from './PavilionAboutInfo';
import { PavilionList } from './PavilionList';
import { useGetPavilionRef } from './hooks/useGetPavilionRef';

export const AboutPavilion = () => {
    const { bgdRef, aboutRef } = useGetPavilionRef();

    return (
        <div className="pavilion">
            <img src={ process.env.PUBLIC_URL + "/img/vignette.png" } alt="" className="tea-ceremony__img" />
            
            <h1>ПРО ПАВІЛЬЙОН</h1>  

            <img src={ BgdPaper } alt="" className="pavilion__bgd" ref={ bgdRef } />

            <div className="pavilion__about" ref={ aboutRef }>

                <PavilionAboutInfo>

                    <h2 className="pavilion__about_title">Чому обирають нас</h2>
                    <PavilionList />
                    
                </PavilionAboutInfo>

            </div>  
        </div>
    );
};


