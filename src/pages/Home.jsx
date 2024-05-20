import React from 'react';
import { AboutPavilion } from '../components/HomePage/AboutPavilion';
import { Events } from '../components/HomePage/Events';
import { Comments } from '../components/HomePage/Comments';

const Home = () => {

    return (
        <div className='main'>
            <AboutPavilion />

            <Events />

            <Comments />
        </div>
    );
};

export default Home;