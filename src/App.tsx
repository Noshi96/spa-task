import { GlobalStyle } from 'styles/global-style';
interface IAppProps {
  children: React.ReactNode | React.ReactNode[];
}

function App({ children }: IAppProps) {
  return (
    <>
      <GlobalStyle />
      <div className='App'>{children}</div>
    </>
  );
}

export default App;
