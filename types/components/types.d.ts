type StackParamsList = {
  LoginUser: undefined;
  LoginAdmin: undefined;
  RegisterUser: undefined;
  HomeAdmin: undefined;
  HomeUser: undefined;
}

type ContainerProps = {
  children: JSX.Element | JSX.Element[] | React.ReactElement | React.ReactElement[] | string;
  style?: object
}

type FlexWrapperProps = {
  children: JSX.Element | JSX.Element[] | React.ReactElement | React.ReactElement[] | string;
  style?: object
}

type ScrollableContainerProps = {
  children: JSX.Element | JSX.Element[] | React.ReactElement | React.ReactElement[] | string;
  style?: object
}