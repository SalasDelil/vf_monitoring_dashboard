import {
  HomeIcon,
  WifiIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
// import LeafSVG from "@/public/img/leaf-svgrepo-com.svg"
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
// import {LeafIcon} from "@/public/img/leaf-svgrepo-com";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <WifiIcon {...icon} />,
        // name: "profile",
        name: "device",
        path: "/device",
        element: <Profile />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "task",
        path: "/tasks",
        element: <Tables />,
      },
      // {
      //   icon: <LeafIcon {...icon} />,
      //   name: "crop",
      //   path: "/crop",
      //   element: <Tables />,
      // },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "notifications",
        path: "/notifications",
        element: <Notifications />,
      },
      {
        icon: <UserIcon {...icon} />,
        name: "users",
        path: "/users",
        element: <Tables />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
