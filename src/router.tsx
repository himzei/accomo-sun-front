import { createBrowserRouter } from "react-router-dom";
import Detail from "./components/Detail";
import Login from "./components/Login";
import Root from "./components/Root";
import Home from "./routes/Home";
import GithubConfirm from "./routes/GithubConfirm";
import KakaoConfirm from "./routes/KakaoConfirm";
import Motel from "./routes/Motel";
import NotFound from "./routes/NotFound";
import Users from "./routes/Users";
import NaverConfirm from "./routes/NaverConfirm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "motels",
        element: <Motel />,
      },
      {
        path: "motels/:roomPk",
        element: <Detail />,
      },
      {
        path: "social",
        children: [
          {
            path: "github",
            element: <GithubConfirm />,
          },
          {
            path: "kakao",
            element: <KakaoConfirm />,
          },
          {
            path: "naver",
            element: <NaverConfirm />,
          },
        ],
      },
    ],
  },
]);

export default router;
