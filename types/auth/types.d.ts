interface IAuthContextProps {
  children: | JSX.Element[] | JSX.Element | React.ReactElement | React.ReactElement[] | string;
}

type AuthContextType = {
  isLoggedIn: boolean | null;
  determineAuthStatus: () => void;
  login: (accessToken: string) => void;
  logout: () => void;
  loginAdmin: (accessToken: string) => void;
  getToken: () => void;
  getRole: (accessToken: string) => void;
  role: string;
}

type LoginBodyType = {
  email: string;
  password: string;
}

type RegisterUserBodyType = {
  name: string;
  email: string;
  password: string;
  gender: string;
}