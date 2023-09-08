import { useState } from 'react'

type userData = {
    name: string
    email: string
    age: number
}

//Here instead of Checking User Logged in or Not we could pass a set of data after login
//So Here the user can have teo different types 
//So we set initial value as null
//also we can set another type of what data we need

function UseStateFutureVal() {
    const [user, setUser] = useState<userData | null>(null);
    const handleLogin = () => {
        setUser({
            name: "salman Faris",
            email: "salman@gmail.com",
            age: 22
        })
    }
    const handleLogOut = () => {
        setUser(null)
    }
    return (
        <div>
            {
                user ?
                    <div>
                        <h3>{user.name}</h3>
                        <h5>{user.email}</h5>
                        <h5>{user.age}</h5>
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

export default UseStateFutureVal
