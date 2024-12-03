import { useContext } from 'react'
import { CounterContext } from './context'
import Counter from './componenets/Counter'

function App() {

  const counterState = useContext(CounterContext)
  console.log(counterState);

  return (
    <>
      <h1>Context API</h1>
      <h3>count is{counterState.count}</h3>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </>
  )
}

export default App
