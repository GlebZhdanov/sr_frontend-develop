import { FC, ReactElement } from 'react';

type PropsType = {
  children: ReactElement
}

const Main: FC<PropsType> = ({ children }) => (
  <main className="main">
    { children }
  </main>
);

export default Main;
