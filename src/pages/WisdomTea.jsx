import React from 'react';
import { WisdomTeaProvider } from '../components/WisdomTea/hoc/WisdomTeaProvider';
import { WisdomTeaMainComp } from '../components/WisdomTea/WisdomTeaMainComp';

export const WisdomTea = () => {
    return (
        <WisdomTeaProvider>
            <WisdomTeaMainComp />
        </WisdomTeaProvider>
    );
};