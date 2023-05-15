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
  getRole: () => Promise<string | null>;
  role: string | null;
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