import React from "react";
const Table = ({ activities }) => {
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
          {activities.map((item) => {
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
