import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
      <div className="bg-[url('https://t3.ftcdn.net/jpg/11/02/73/30/360_F_1102733023_gxNqjAZ7rsCLu4aU6rNJZKg3kcUPibHo.jpg')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
        {/* Overlay */}
        <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
              Upgrade Your Skills Today 🚀
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
              Learn from Industry Experts, Access Cutting-Edge Content, and Join a Thriving Community of Learners.
            </p>

            <div className="flex gap-4">
              <Link href="/register">
                <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500">
                  Join Now
                </Button>
              </Link>

              <Link href="/courses">
                <Button variant="outline" className="text-white">
                  View Courses
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;