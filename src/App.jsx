import './App.css'
import ConditionalRendering from './components/ConditionalRendering'
import ExternalData from './components/ExternalData'
import Input from './components/Input'
import Trainer from './components/Trainer'

function App() {
  /* <> is a react fragment, cuts down on the need for extra divs */
  return (
    <>
      <h1>Intro to React</h1>
      <section>
        <h2>Components</h2>
        <Trainer name="JH" age={32} specialty="Java" />
        {Trainer({ name: "JH", age: 32 })}
        <Trainer age={33} name="CG" specialty="Web" />
        <input />
        <Input />

      </section>

      <section>
        <h2>Conditional Rendering</h2>
        <ConditionalRendering bool />
        <ConditionalRendering />
      </section>

      <section>
        <h2>External Data</h2>
        <ExternalData />
      </section>
    </>
  )
}

export default App