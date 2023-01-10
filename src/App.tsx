import { GlobalStyle } from 'styles/global-style'
import logo from 'logo.svg'

interface Props {
  children: React.ReactNode | React.ReactNode[]
}

function App({ children }: Props) {
  return (
    <>
      <GlobalStyle />
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          {children}
        </header>
      </div>
    </>
  )
}

export default App
