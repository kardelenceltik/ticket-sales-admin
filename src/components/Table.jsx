import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
const Table = () => {
  const [activity, setActivity] = useState([]);

  const getActivityHandler = () => {
    axios.get("http://localhost:7070/activity/get").then((response) => {
      console.log(response);
      setActivity(response.data);
    });
  };
  useEffect(() => {
    getActivityHandler();
  }, []);
  return (
    <div>
      <table className="table">
        <caption>List of users</caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Activity Type</th>
          </tr>
        </thead>
        <tbody>
          {activity.map((item) => {
            return (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td>
                  <span className="badge badge-danger">
                    {item.activityType}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
