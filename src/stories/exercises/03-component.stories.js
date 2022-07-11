import React from "react";
import CourseModulesWithProps from "../../components/exercises/03_props";

export default {
  title: "Exercises/03 - component with props",
  component: CourseModulesWithProps,
};

export const Basic = () => {
  const name = "HDip Computer Science - Modules table";
  const twoModules = [
    {
      name: "DevOps",
      lectures: 2,
      practicals: 3,
    },
    {
      name: "Enterprise Web Dev",
      lectures: 3,
      practicals: 2,
    },
  ];
  return <CourseModulesWithProps modules={twoModules} header={name} />;
};
