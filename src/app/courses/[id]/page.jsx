import React from "react";
import { Button, Card, CloseButton, Separator } from "@heroui/react";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import data from "../../../../public/data.json";

const CourseDetails = async ({ params }) => {
  const { id } = await params;
  // const res = await fetch(`${process.env.BASE_URL}/data.json`);
  // const courses = await res.json();
  const course = data.find((c) => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="text-3xl text-center font-bold my-30">
        Course not found
      </div>
    );
  }

  return (
    <Card className="max-w-6xl mx-auto items-stretch md:flex-row my-10 gap-5">
      <div className="relative h-35 w-full shrink-0 overflow-hidden rounded-2xl md:h-100 md:w-120">
        <img
          width={500}
          height={500}
          alt="Cherries"
          className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
          loading="lazy"
          src={course.image}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-2">
          <Card.Title className="pr-8 text-3xl font-bold leading-snug">
            {course.title}
          </Card.Title>
          <Card.Description className="text-lg">
            {course.description}
          </Card.Description>
        </Card.Header>
        <Card.Content className="text-sm text-foreground/80">
          <div>
            <span className="text-sm font-medium text-foreground">
              Category:{" "}
              <span className="text-[#2e3c8f]">{course.category}</span>
            </span>
          </div>

          <table className="my-2 w-fit text-left">
            <tbody>
              <tr>
                <td className="text-[#831C91] font-bold">Instructor:</td>
                <td className="font-semibold pl-8">{course.instructor}</td>
              </tr>
              <tr>
                <td className="text-[#831C91] font-bold">Duration:</td>
                <td className="font-semibold pl-8">{course.duration}</td>
              </tr>
              <tr>
                <td className="text-[#831C91] font-bold">Course Category:</td>
                <td className="font-semibold pl-8">{course.category}</td>
              </tr>
            </tbody>
          </table>
          <p className="font-bold text-lg">Curriculum:</p>
          <ul className="list-disc pl-10">
            {course.curriculum.map((item, index) => (
              <li key={index} className="text-sm text-foreground/80">
                {item}
              </li>
            ))}
          </ul>
        </Card.Content>
        <Separator orientation="horizontal" />
        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-6">
            <span className="text-sm font-medium text-foreground flex gap-1 items-center">
              Rating: <IoIosStar color="#f7d200" />
              <span className="text-[#f5c118]">{course.rating}</span>
            </span>
            <span className="text-sm font-medium text-foreground">
              Level:{" "}
              <Button
                size="sm"
                className={
                  course.level === "Beginner"
                    ? "bg-[#406AAF] text-white"
                    : course.level === "Intermediate"
                      ? "bg-[#831C91] text-white"
                      : "bg-[#C44545] text-white"
                }
              >
                {course.level}
              </Button>
            </span>
          </div>
          <Button className="w-full sm:w-auto">Enroll Now</Button>
        </Card.Footer>
      </div>
    </Card>
  );
};

export default CourseDetails;
