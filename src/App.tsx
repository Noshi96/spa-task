import { GlobalStyle } from 'styles/global-style';
interface Props {
  children: React.ReactNode | React.ReactNode[];
}

function App({ children }: Props) {
  return (
    <>
      <GlobalStyle />
      <div className='App'>{children}</div>
    </>
  );
}

export default App;
