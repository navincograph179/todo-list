import React from "react";

const DataTable = () => {
  return (
    <div className="container">
      <div className="add-container">
        <div className="info-container">
        {/* This line for name input */}
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={""}
            onChange={() => {}}
          />
          {/* This line for gender input */}
           <input
            type="text"
            placeholder="Gender"
            name="gender"
            value={""}
            onChange={() => {}}
          />
          {/* This line for age input */}
           <input
            type="text"
            placeholder="Age"
            name="age"
            value={""}
            onChange={() => {}}
          />

        </div>
        <button className="add">ADD</button>
      </div>

      <div className="search-table-container">
        {/* This line for search by name input */}
      <input
            type="text"
            placeholder="Search by name"
            value={""}
            onChange={() => {}}
          />
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody></tbody>
        </table>
        <div className="pagination"></div>
      </div>
    </div>
  );
};

export default DataTable;
