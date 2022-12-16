
import React, { Component } from 'react';
import PopularCourses from './PopularCourses/PopularCourses';
import RecommendedCourses from './RecommendedCourses/RecommendedCourses';
import Slide from './Slide/Slide';
import TrendingCourses from './TrendingCourses/TrendingCourses';

class Content extends Component {
    render() {
        return (
            <>
                <Slide/>
                <RecommendedCourses/>
                <PopularCourses/>
                <TrendingCourses/>
            </>
        );
    }
}

export default Content;