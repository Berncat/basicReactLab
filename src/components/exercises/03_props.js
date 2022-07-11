import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";


const Demo = (props) => {
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
            <tbody>
              <tr>
                <td>{props.modules[0].name}</td>
                <td>{props.modules[0].lectures}</td>
                <td>{props.modules[0].practicals}</td>
              </tr>
              <tr>
                <td>{props.modules[1].name}</td>
                <td>{props.modules[1].lectures}</td>
                <td>{props.modules[1].practicals}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  };

export default Demo;
