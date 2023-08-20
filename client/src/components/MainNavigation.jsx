import { NavLink, Link, useNavigate } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";

function MainNavigation({ usePath, onPost, onOpen }) {
  const api_url = import.meta.env.VITE_API_URL;
  const [menuState, setMenuState] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${api_url}/profile`, {
      credentials: "include",
    }).then((response) => {
      response.json().then((UserInfo) => {
        setUserInfo(UserInfo);
      });
    });
  }, []);
  const { userInfo, setUserInfo } = useContext(UserContext);

  function logoutHandler() {
    fetch(`${api_url}/logout`, {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
    navigate("/");
  }

  const username = userInfo?.username;
  return (
    <header className=" p-8">
      <div className="flex items-center md:justify-between px-1 lg:max-w-7xl max-w-3xl mx-auto flex-wrap w-full">
        <Link
          className="font-pacifico md:mx-0 md:pl-0 mx-auto content-center pl-6 text-3xl inline flex-none"
          to="/"
        >
          Om Chhabra
        </Link>
        <Bars3Icon
          className="md:hidden block h-6 w-6 cursor-pointer mr-8"
          onClick={() => {
            setMenuState(!menuState);
          }}
        ></Bars3Icon>
        <nav
          className={`${
            menuState ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto md:pt-0 font-medium pt-4`}
        >
          <ul className="md:flex md:gap-8">
            <li className="block pt-1 hover:underline md:pl-0 pl-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-teall" : undefined
                }
                end
              >
                Home
              </NavLink>
            </li>
            {usePath() === "/" ? (
              <>
                <li className="block pt-1 hover:underline active:text-teall md:pl-0 pl-2">
                  <Link to="/#projects" reloadDocument>
                    Projects
                  </Link>
                </li>
                <li className="block pt-1 hover:underline active:text-teall md:pl-0 pl-2">
                  <Link to="/#contact" reloadDocument>
                    Connect
                  </Link>
                </li>
              </>
            ) : null}
            <li className="block pt-1 hover:underline md:pl-0 pl-2">
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive ? "text-teall" : undefined
                }
              >
                Blogs
              </NavLink>
            </li>
            <li className="block pt-1 hover:underline active:text-teall md:pl-0 pl-2">
              <Link
                target="_blank"
                to="https://docs.google.com/document/d/16RVbT5x57XkVXRNbrxQFt_ucTtKgl_Idkr_qqtUD2os/edit?usp=sharing"
              >
                Resume
              </Link>
            </li>

            {username && (
              <>
                {usePath() === "/blogs" ? (
                  <li className="block md:text-inherit bg-grey hover:bg-gre md:hover:text-inherit md:rounded-lg md:px-3 md:mt-0 rounded-md py-1 pl-2 mt-1">
                    <p onClick={onPost}>Post</p>
                  </li>
                ) : null}

                <li className="block md:text-inherit md:hover:bg-teall md:hover:text-inherit bg-teal hover:bg-teall  md:rounded-lg md:px-2 md:mt-0 rounded-md py-1 pl-2 mt-1">
                  <button onClick={logoutHandler}>Logout</button>
                </li>
              </>
            )}
            {!username && (
              <li className="block md:text-inherit md:hover:bg-teall md:hover:text-inherit bg-teal hover:bg-teall  md:rounded-lg md:px-2 md:mt-0 rounded-md py-1 pl-2 mt-1">
                <button onClick={onOpen}>Login</button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default MainNavigation;
