import React from "react";
import { useSession, signIn, sigOut } from 'next-auth/react'

const login = () => {
    const { data: session } = useSession()
    
    if (session) {
        return (
            <div>login</div>
        )
    }else{
        return(
            <div>youre not logged in yet</div>
        )
    }

}

export default login