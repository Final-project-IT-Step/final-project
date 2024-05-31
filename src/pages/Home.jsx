import React from 'react';
import { Comments } from '../components/HomePage/Comments';
import { AboutPavilion } from '../components/HomePage/AboutPavilion/AboutPavilion';
import { Events } from '../components/HomePage/Events/Events';

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