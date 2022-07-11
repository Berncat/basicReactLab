import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = () => {
  const modules = [
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
  const header = "HDip Computer Science - Modules table";
  return (
    <>
      <h1>{header}</h1>
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>No lectures</th>
              <th>No practicals</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{modules[0].name}</td>
              <td>{modules[0].lectures}</td>
              <td>{modules[0].practicals}</td>
            </tr>
            <tr>
              <td>{modules[1].name}</td>
              <td>{modules[1].lectures}</td>
              <td>{modules[1].practicals}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Demo;
