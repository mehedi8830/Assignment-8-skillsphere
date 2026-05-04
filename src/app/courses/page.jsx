import SearchBox from '@/components/SearchBox';
import React from 'react';

const CoursesPage = async () => {
    const res = await fetch(
       `${process.env.BASE_URL}/data.json`,
     );
    const courses = await res.json();

    return (
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold my-10">All Courses</h2>
        <SearchBox courses={courses} />
      </div>
    );
};

export default CoursesPage;