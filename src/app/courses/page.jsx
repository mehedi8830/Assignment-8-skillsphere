import SearchBox from '@/components/SearchBox';
import React from 'react';
import data from "../../../public/data.json";
const CoursesPage = async () => {
    // const res = await fetch(
    //    "https://skillsphere-rho.vercel.app/data.json",
    //  );
    // const courses = await res.json();

    return (
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold my-10">All Courses</h2>
        <SearchBox courses={data} />
      </div>
    );
};

export default CoursesPage;