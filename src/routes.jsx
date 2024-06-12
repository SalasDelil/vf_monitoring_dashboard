import {
  HomeIcon,
  WifiIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import ConnectedDevices from "@/pages/dashboard/device";
import Tasks from "@/pages/dashboard/tasks";

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
        name: "devices",
        path: "/device",
        element: <ConnectedDevices />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "tasks",
        path: "/tasks",
        element: <Tasks />,
      },
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
