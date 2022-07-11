import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = (props) => {
  const row = props.modules.map((m, index) => (
    <tr key={index}>
      <td>{m.name}</td>
      <td>{m.lectures}</td>
      <td>{m.practicals}</td>
    </tr>
  ));
  return (
    <>
      <h1>{props.header}</h1>
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>No lectures</th>
              <th>No practicals</th>
            </tr>
          </thead>
          <tbody>{row}</tbody>
        </table>
      </div>
    </>
  );
};

export default Demo;
