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
import UploadRoom from "./routes/UploadRoom";
import UploadPhotos from "./routes/UploadPhotos";
import CheckOut from "./routes/CheckOut";

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
        path: "rooms/upload",
        element: <UploadRoom />,
      },
      {
        path: "companies/checkout",
        element: <CheckOut />,
      },

      {
        path: "motels/:roomPk",
        element: <Detail />,
      },
      {
        path: "motels/:roomPk/photos",
        element: <UploadPhotos />,
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
