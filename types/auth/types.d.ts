interface IAuthContextProps {
  children: | JSX.Element[] | JSX.Element | React.ReactElement | React.ReactElement[] | string;
}

type AuthContextType = {
  isLoggedIn: boolean | null;
  determineAuthStatus: () => void;
  login: (accessToken: string) => void;
  logout: () => void;
  getToken: () => void;
  getRole: (accessToken: string) => void;
  role: string;
}