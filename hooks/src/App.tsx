
import './App.css'
import { Box } from './useContext/basic/Box'
import { ThemeContextProvider } from './useContext/basic/ThemeContext'
import User from './useContext/futureVal/User'
import UserContextProvider from './useContext/futureVal/userContext'
import Counter from './useReducer/Counter'
import MutableRef from './useRef/MutableRef'
import UseStateFutureVal from './useState/UseStateFutureVal'
import BasicUseState from './useState/basicUseState'

function App() {


  return (
    <>
      <BasicUseState></BasicUseState>   {/* useState */}
      <hr />
      <UseStateFutureVal></UseStateFutureVal>    {/* useState with future value*/}
      <hr />
      <Counter></Counter>   {/* useReducer */}
      <hr />
      <ThemeContextProvider>  {/* useContext */}
        <Box></Box>
      </ThemeContextProvider>
      <hr />
      <UserContextProvider>
        <User></User>
      </UserContextProvider>
      <hr />
      <MutableRef></MutableRef>
    </>
  )

}


export default App
