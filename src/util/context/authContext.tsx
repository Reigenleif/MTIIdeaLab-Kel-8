import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({
    name: "",
    ate: [1],
    setName: (a: string) => {},
    addAte: (a: number) => {},
    resetAte: () => {}
})

export default AuthContext

export const AuthContextProvider = ({children} : {children: JSX.Element}) => {
    const [name,setNameState] = useState('')
    const [ate,setAteState] = useState<number[]>([])
    
    const setName = (newName: string) => {
        console.log('asdaa')
        localStorage.setItem('name',newName)
        
        setNameState(newName)
    }

    const addAte = (newAte: number) => {
        const ateTmp = [...ate]
        ateTmp.push(newAte)
        localStorage.setItem('ate',JSON.stringify(ateTmp))
        setAteState(ateTmp)
    }

    const resetAte = () => {
        localStorage.setItem('ate',JSON.stringify([]))
        setAteState([])
    }

    useEffect(() => {
        const nameTmp = localStorage.getItem('name')
        if (!nameTmp) {
            return
        }

        const nameData = nameTmp
        
        setNameState(nameData)
        if (nameData) {
            setNameState(nameData)
        }

        const ateTmp = localStorage.getItem('ate')
        if (!ateTmp) {
            return
        }

        const ateData = JSON.parse(ateTmp) 
        if (ateData) {
            setAteState(ateData)
        }
    },[])    

    return <AuthContext.Provider value={{name,ate,setName,addAte,resetAte}}>{children}</AuthContext.Provider>

}