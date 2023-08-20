import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

export default function Login({ onLogin }) {
  const api_url = import.meta.env.VITE_API_URL;
  const [password, setPassword] = useState("");
  const { setUserInfo } = useContext(UserContext);
  const username = "admin";
  async function loginHandler(ev) {
    ev.preventDefault();
    const response = await fetch(`${api_url}/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        onLogin();
      });
    } else {
      alert("Wrong Credentials");
    }
  }
  return (
    <div className=" bg-greyy text-white">
      <form className="sm:p-10 p-6 rounded" onSubmit={loginHandler}>
        <p className="sm:text-lg md:text-md font-semibold">
          Enter the Admin Password:
        </p>
        <input
          className="block my-6 w-full p-1 border-0 rounded-lg bg-grey"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(ev) => {
            setPassword(ev.target.value);
          }}
        />
        <button className="bg-teal hover:bg-teall p-1 rounded-lg">Login</button>
      </form>
    </div>
  );
}
