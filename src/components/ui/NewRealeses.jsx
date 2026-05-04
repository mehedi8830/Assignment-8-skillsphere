import Image from 'next/image';
import React from 'react';
import { IoIosStar } from 'react-icons/io';
import data from "../../../public/data.json";

const NewReleases = async() => {
    // const res = await fetch(`${process.env.BASE_URL}/data.json`);
    // const courses = await res.json();
    const newCourses = data.slice(8, 12);
    return (
      <div>
        <div className="max-w-6xl mx-auto px-6 mt-30 mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">New Releases</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newCourses.map((course) => (
              <div
                key={course.id}
                className="bg-[#462C7D] text-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-500"
              >
                <Image
                  src={course.image}
                  width={500}
                  height={500}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-gray-100 mb-2">{course.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">{course.duration}</span>
                    <span className="flex items-center">
                      <IoIosStar className="text-yellow-500" />
                      <span className="ml-1">{course.rating}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default NewReleases;