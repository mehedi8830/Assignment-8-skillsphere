'use client';
import CourseCard from "@/components/ui/shared/CourseCard";
import { Label, SearchField } from "@heroui/react";
import { useState } from "react";

const SearchBox = ({ courses }) => {
  const [search, setSearch] = useState("");
    const filteredCourses = courses.filter((course) =>
      course.title.toLowerCase().includes(search.toLowerCase()),
    );

    filteredCourses? courses = filteredCourses : courses = courses;
    
  return (
    <div>
      <SearchField name="search">
        <Label className="text-xl">Search</Label>
        <SearchField.Group>
          <SearchField.SearchIcon />
          <SearchField.Input
            className="w-full"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <SearchField.ClearButton />
        </SearchField.Group>
      </SearchField>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default SearchBox;
