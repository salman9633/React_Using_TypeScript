import { useContext } from 'react'
import { UserContext } from './userContext'

function User() {
    const userContext = useContext(UserContext)
    const handleLogIn = () => {
        if (userContext) {
            userContext.setUser({
                name: "salman",
                email: "salman@gmail.com"
            })
        }
    }
    const handleLogOut = () => {
        if(userContext) userContext.setUser(null)
    }
    return (
        <div>{userContext?.user?
                <div>
                    <h5>
                        {userContext.user.name}
                    </h5>
                    <h5>
                        {userContext.user.email}
                    </h5>
                    <button onClick={handleLogOut}>Logout</button>
                </div>:

            
            <button onClick={handleLogIn}>LogIn</button>
            }
        </div>
    )
}

export default User
