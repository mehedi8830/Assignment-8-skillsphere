import { Separator } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { BiBriefcaseAlt2 } from 'react-icons/bi';
import { FaStar, FaUserGraduate } from 'react-icons/fa6';
import data from "../../../public/instructor.json";

const TopInstructor = async() => {
    // const res = await fetch(
    //   `${process.env.BASE_URL}/instructor.json`,
    // );
    // const instructors = await res.json();
    const instructors = data;

    return (
      <div className="my-20 max-w-6xl mx-auto px-6">
        <h2 className="text-center my-10 font-bold text-4xl">
          Top Instructors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="card bg-base-100 shadow-xl rounded-xl w-full hover:-translate-y-2.5 transition-transform duration-500"
            >
              <figure className="relative">
                <img
                  width={400}
                  height={400}
                  src={instructor.backgroundImg}
                  alt="course"
                  className="h-55 w-full object-cover rounded-2xl"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>

                <div className="absolute top-4 right-3">
                  <span className="p-3 bg-[#2fa1ba] text-white px-3 py-2">
                    Experience:{instructor.experience}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <img
                    width={400}
                    height={400}
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <p className="text-white font-medium">{instructor.name}</p>
                </div>
              </figure>

              <div className="card-body">
                <h2 className="card-title text-lg font-semibold hover:text-[#2fa1ba] transition-colors duration-300">
                  {instructor.bio}
                </h2>

                <Separator orientation="horizontal" className="mt-4" />

                <div className="flex items-center justify-between text-gray-500 my-4 text-sm">
                  <div className="flex items-center gap-1">
                    <BiBriefcaseAlt2 />
                    <span>{instructor.specialization}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <FaUserGraduate />
                    <span>{instructor.students}</span>
                  </div>

                  <div className="flex items-center gap-1 text-yellow-500">
                    <FaStar />
                    <span>{instructor.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default TopInstructor;
