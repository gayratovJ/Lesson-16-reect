import { message } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import request from "../../server";
import Cookies from "js-cookie";
import { TOKEN } from "../../constants";

const Home = () => {
  const navigate = useNavigate();
  const login = async () => {
    try {
      let user = { username: "abdulaziz", password: "12345" };
      let { data } = await request.post("auth/login", user);
      console.log(data);
      if (data.user.role === "admin") {
        navigate("/dashboard");
        Cookies.set(TOKEN, data.token);
      } else {
        message.error("You aren't admin");
      }
    } catch (err) {
      message.error("Wrong message");
    }
  };
  return (
    <section>
      <div className="container">
        <button onClick={login}>Login</button>
      </div>
    </section>
  );
};

export default Home;
