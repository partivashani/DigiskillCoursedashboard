import React, { useEffect, useState } from 'react'

const Profile = () => {
    const [getdata, setdata] = useState(null)

    useEffect(()=>{

      const githubdata = async ()=>{
        
      const response = await fetch("https://api.github.com/users/partivashani");

      const data = await response.json();

      setdata(data);
      return;


      }

      githubdata()
  
    },[])


    useEffect(()=>{
        console.log(getdata)
    },[getdata])
    

  return (
    <div>
        <h1>{getdata && getdata.name || "hello"}</h1>
        <h1>{getdata && getdata.bio || "bio"}</h1>
        <img src={getdata && getdata.avatar_url} alt="" />
        <h1>{getdata && getdata.id || "id"}</h1>

        <h1>{getdata && getdata.login || "login"}</h1>
        <h1>{getdata && getdata.followers }</h1>
        <h1>{getdata && getdata.public_repos || "public"}</h1>



    </div>
  )
}

export default Profile