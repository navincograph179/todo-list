import React, { useState } from "react";

const DataTable = () => {
  const [formData, setFromData] = useState({ name: "", gender: "", age: "" });
  const [data, setData] = useState([]);
  const [editId, setEditIt] = useState(false);

  const handleInputChange = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleAddClick = () => {
    if (formData.name && formData.gender && formData.age) {
      const newItem = {
        id: Date.now(),
        name: formData.name,
        gender: formData.gender,
        age: formData.age,
      };
      setData([...data, newItem]);
      setFromData({ name: "", gender: "", age: "" });
    }
  };
  const handleDelete = (id) => {
    const updatedList = data.filter((item) => item.id !== id);
    setData(updatedList);
  };

  return (
    <div className="box">
      <div className="container">
        <div className="add-container">
          <div className="info-container">
            {/* This line for name input */}
            <input
              type="text"
              placeholder="名前"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {/* This line for gender input */}
            <input
              type="text"
              placeholder="性別"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            />
            {/* This line for age input */}
            <input
              type="text"
              placeholder="年齢"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
            />
          </div>
          <button className="add" onClick={handleAddClick}>
            追加
          </button>
        </div>

        <div className="search-table-container">
          {/* This line for search by name input */}
          <input
            className="search-input"
            type="text"
            placeholder="名前で検索"
            value={""}
            onChange={() => {}}
          />
          <table>
            <thead>
              <tr>
                <th>名前</th>
                <th>性別</th>
                <th>年齢</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item) => (
                <tr>
                  <td key={item.id} contentEditable = {editId=== item.id}>{item.name}</td>
                  <td key={item.id} contentEditable = {editId=== item.id}>{item.gender}</td>
                  <td key={item.id} contentEditable = {editId=== item.id}>{item.age}</td>
                  <td className="actions">
                    <button className="edit" onClick={()=> setEditIt(item.id)}
                    >編集</button>
                    <button
                      className="delete"
                      onClick={() => handleDelete(item.id)}
                    >
                      解除
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
