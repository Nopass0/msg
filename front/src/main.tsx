import React, { useEffect } from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { createStore } from "redux";
import { Provider, useSelector } from "react-redux";
import { BsSendFill } from "react-icons/bs";
import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NextUIProvider,
} from "@nextui-org/react";
import "./index.css";
import LoginPage from "./pages/Login/index.tsx";
import MainPage from "./pages/Main/index.tsx";
import ThemeToggle from "./components/ThemeToggle/index.tsx";
import Users from "./pages/Users/index.tsx";
import ChatPage from "./Chat/index.tsx";

let defaultState = {
  isDark: localStorage.getItem("theme") === "dark" ? true : false,
  user: JSON.parse(localStorage.getItem("user") || "{}") || undefined,
  token: localStorage.getItem("token"),
};

const reducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case "SET_THEME":
      localStorage.setItem("theme", action.payload);
      defaultState.isDark = action.payload === "dark" ? true : false;
      return { ...state, isDark: action.payload === "dark" ? true : false };
    case "setUser":
      console.log(action);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
      return { ...state, user: action.user };
    default:
      return state;
  }
};
const store = createStore(reducer);

const publicURL = [
  {
    path: "/login",
    element: <LoginPage />,
  },
];

const privateURL = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/chat",
    element: <ChatPage />,
  },
];

const router = createBrowserRouter([...publicURL, ...privateURL]);

const App = () => {
  const isDark = useSelector((state: any) => state.isDark);
  const token = useSelector((state: any) => state.token);
  const user = useSelector((state: any) => state.user);

  return (
    <main
      className={`w-full h-screen overflow-y-hidden ${
        isDark && "dark text-foreground bg-background"
      }`}
    >
      <Navbar isBlurred isBordered position="sticky">
        <NavbarBrand className="flex gap-4 cursor-default">
          <BsSendFill />
          <p className="font-bold text-inherit">MSG</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {/* <NavbarItem>
            <Link color="foreground" href="/users">
              Пользователи
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link color="foreground" href="/chat">
              Сообщения
            </Link>
          </NavbarItem> */}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <ThemeToggle />
          </NavbarItem>
          <NavbarItem>
            {!token ? (
              <Button as={Link} color="primary" href="/login" variant="flat">
                Войти
              </Button>
            ) : (
              <>
                <Dropdown>
                  <DropdownTrigger>
                    <Avatar
                      className="cursor-pointer"
                      size="sm"
                      isBordered
                      radius="md"
                      src={user.avatar}
                    />
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem
                      key="delete"
                      className="text-danger"
                      color="danger"
                      onClick={() => {
                        localStorage.removeItem("user");
                        localStorage.removeItem("token");
                        window.location.pathname = "/login";
                      }}
                    >
                      Выйти
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </>
            )}
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <RouterProvider router={router} />
    </main>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </Provider>
);
