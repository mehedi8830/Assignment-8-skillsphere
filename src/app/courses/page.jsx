import CourseCard from '@/components/ui/shared/CourseCard';
import React from 'react';

const CoursesPage = async () => {
    const res = await fetch(
       "https://skillsphere-rho.vercel.app/data.json",
     );
    const courses = await res.json();
    return (
      <div className='max-w-7xl mx-auto px-6'>
        <h2 className='text-center text-3xl font-bold my-10'>All Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    );
};

export default CoursesPage;