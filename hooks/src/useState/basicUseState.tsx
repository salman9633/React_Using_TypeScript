import { useState } from 'react'


function BasicUseState() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogOut = () => {
        setIsLoggedIn(false)
     }
    return (
        <div>
            {
                isLoggedIn ?
                    <div>
                        <h3>
                            User Is Logged In
                        </h3>
                        <button onClick={handleLogOut}>LogOut</button>
                    </div>
                    :
                    <div>
                        <h3>
                            User Is Logged Out
                        </h3>
                        <button onClick={handleLogin}>LogIn</button>
                    </div>
            }
        </div>
    )
}
//It's looks like normal jsx. But in ts there is something know as typeinference where ts is smart enough to recognize the type of the variable
//Here it understand that isLogged in Is a Boolean value so we can add lot more that a true/false. If we add other than that it will show error

export default BasicUseState
