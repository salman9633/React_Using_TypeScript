import { createContext, useState } from 'react'

type authUser = {
    name: string
    email: string
}
type userContextType = {
    user: authUser | null
    setUser: React.Dispatch<React.SetStateAction<authUser | null>>
}
type userContextProviderProp = {
    children: React.ReactNode
}
export const UserContext = createContext<userContextType | null>(null)

function UserContextProvider({ children }: userContextProviderProp) {
    const [user, setUser] = useState<authUser | null>(null)
    return (
        <div>
            <UserContext.Provider
                value={{ user, setUser }}
            >
                {children}
            </UserContext.Provider>
        </div>
    )
}

export default UserContextProvider
