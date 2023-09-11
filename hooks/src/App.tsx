
import './App.css'
import { Box } from './useContext/Box'
import { ThemeContextProvider } from './useContext/ThemeContext'
import Counter from './useReducer/Counter'
import UseStateFutureVal from './useState/UseStateFutureVal'
import BasicUseState from './useState/basicUseState'

function App() {
  

  return (
    <>
    <BasicUseState></BasicUseState>
    <hr />
    <UseStateFutureVal></UseStateFutureVal>
    <hr />
    <Counter></Counter>
    <hr />
    <ThemeContextProvider>
      <Box></Box>
    </ThemeContextProvider>
    </>
  )
}

export default App
