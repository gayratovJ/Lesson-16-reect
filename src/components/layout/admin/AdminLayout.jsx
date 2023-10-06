import { NavLink } from "react-router-dom";

import "./style.scss";
import request from "../../../server";
import { message } from "antd";
import { useEffect, useState } from "react";
const AdminLayout = () => {
  const [data, setAll] = useState([]);
  useEffect(() => {
    getAll();
  }, []);
  async function getAll() {
    try {
      const {
        data: { data },
      } = await request.get("skills");
      setAll(data);
      console.log(data);
    } catch (err) {
      message.error("Error");
    }
  }

  return (
    <header>
      <nav>
        <div className="container">
          <div className="logo">
            <h1>Admin</h1>
          </div>
          <ul>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
            <li>
              <NavLink to="/skills">Skills</NavLink>
            </li>
          </ul>
          <div className="btn">
            <button>Add User</button>
          </div>
        </div>
      </nav>
      <section>
        <div className="container">
          <h1>Skills({data.length})</h1>
          <div className="row">
            {data.map((el) => {
              return (
                <div className="col-3" key={data._id}>
                  <h2>{el.name}</h2>
                  <p>{el.percent}%</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </header>
  );
};

export default AdminLayout;
