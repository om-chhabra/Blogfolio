import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Blogs from "./routes/Blogs";
import Home from "./routes/Home";
import ErrorPage from "./routes/ErrorPage";
import UserContextProvider from "./components/UserContext";
import PostView from "./components/blogs/PostView";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/post/:id", element: <PostView /> },
    ],
  },
]);
function App() {
  return (
    <>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </>
  );
}

export default App;
