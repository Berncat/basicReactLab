import React from "react";
import CourseModulesCollections from "../../components/exercises/04_iteration";

export default {
  title: "Exercises/04 - iteration",
  component: CourseModulesCollections,
};

export const Basic = () => {
  const name = "HDip Computer Science - Modules table";
  const modules = [
    {
      name: "DevOps",
      lectures: 1,
      practicals: 2,
    },
    {
      name: "Enterprise Web Dev",
      lectures: 2,
      practicals: 3,
    },
    {
      name: "Programming",
      lectures: 2,
      practicals: 2,
    },
    {
      name: "Computer Systems",
      lectures: 2,
      practicals: 3,
    },
  ];
  return <CourseModulesCollections modules={modules} header={name} />;
};
