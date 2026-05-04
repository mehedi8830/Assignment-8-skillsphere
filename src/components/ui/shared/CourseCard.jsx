import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa6";
const CourseCard = ({ course }) => {
  return (
    <Card className="border border-gray-300 shadow-lg rounded-xl hover:-translate-y-2.5 transition-transform duration-500">
      <div className="relative w-full aspect-square">
        <img
          src={course.image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={course.title}
          className="object-cover rounded-xl"
        />

        <Chip
          size="lg"
          className={`absolute right-2 top-2 ${course.level === "Beginner" ? "bg-[#406AAF] text-white" : course.level === "Intermediate" ? "bg-[#831C91] text-white" : "bg-[#C44545] text-white"}`}
        >
          {course.level}
        </Chip>
      </div>

      <div>
        <h2 className="font-semibold text-2xl">{course.title}</h2>
      </div>

      <div className="flex gap-5">
        <div className="flex items-center gap-2">
          <p>
            <FaHeart />
          </p>
          <p>{course.rating}</p>
        </div>

        <Separator orientation="vertical" />

        <div>
          <p className="font-medium text-[#D552A3]">{course.category}</p>
        </div>
      </div>

      <Link href={`/courses/${course.id}`}>
        <Button className={"w-full bg-[#2e3c8f]"}>Details</Button>
      </Link>
    </Card>
  );
};

export default CourseCard;
