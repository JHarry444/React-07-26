import './App.css'
import Input from './components/Input'
import Trainer from './components/Trainer'

function App() {
  /* <> is a react fragment, cuts down on the need for extra divs */
  return (
    <>
      <h1>Intro to React</h1>
      <div>
        <h2>Components</h2>
        <Trainer />
        {Trainer()}
        <Trainer />
        <input />
        <Input />

      </div>
    </>
  )
}

export default App