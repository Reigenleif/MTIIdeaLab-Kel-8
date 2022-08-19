import { useEffect, useState } from "react"

export function useLoginState() {
    const [loginState,setLoginState] = useState('')
    console.log(loginState)
    

    return {loginState, setLoginState}
}