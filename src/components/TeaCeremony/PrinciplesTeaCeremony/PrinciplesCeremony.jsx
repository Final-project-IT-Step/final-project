import { PrinciplesTeaCeremonyBlock } from "./PrinciplesTeaCeremonyBlock";

export const PrinciplesCeremony = () => {
    return (
        <div className="principles-tea-ceremony">
            <h2 className="principles-tea-ceremony__title">
                ЧОТИРИ ОСНОВНІ ПРИНЦИПИ ЧАЙНОЇ ЦЕРЕМОНІЇ
            </h2>

           <PrinciplesTeaCeremonyBlock />

            <div class="orb-container">
                <div className="glowing-orb">
                    <div className="particles"></div>
                </div>

                <div className="glowing-orb">
                    <div className="particles"></div>
                </div>

                <div className="glowing-orb">
                    <div className="particles"></div>
                </div>
                
                <div className="glowing-orb">
                    <div className="particles"></div>
                </div>
            </div>            
        </div>
    );
};