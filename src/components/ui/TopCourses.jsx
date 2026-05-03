import React from 'react';
import CourseCard from './shared/CourseCard';

const TopCourses = async () => {
     const res = await fetch(
       "https://skillsphere-rho.vercel.app/data.json",
     );
    const courses = await res.json();
    const topCourses = courses.slice(0, 3);
    return (
      <div className="my-20 max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-bold my-10 text-center">Top Courses</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {topCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    );
};

export default TopCourses;