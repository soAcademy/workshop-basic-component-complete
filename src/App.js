import logo from './logo.svg'
import './App.css'
import HelloClassComponent from './BasicComponent/HelloClassComponent'
import HelloFunctionComponent from './BasicComponent/HelloFunctionComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloClassComponent />
        <HelloFunctionComponent />
      </header>
    </div>
  )
}

export default App
