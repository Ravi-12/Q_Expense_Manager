import React, { useEffect, useState } from 'react'
import axios from "axios"

function UserAPI(token) {
    const [isLogged, setIsLogged] = useState(false)
    useEffect(()=>{
        if(token){
            const getUser = async() =>{
                try {
                    const res = await axios.get('/user/infor',{
                        headers: {Authorization: token}
                    })
                    setIsLogged(true)
                } catch (err) {
                    alert(err.response.data.msg)
                }
            }
            getUser()
        }
    },[token])}
    export default UserAPI