import { useState,useEffect } from "react";
const Profile = (props) => {
  const [count,setCount] = useState(0);
  // useEffect(()=>{

  //   API call take place over here
  //   const timer = setInterval(() => {
  //     console.log("vishal is smart");
  //   }, 1000);

  //   return () => {
  //     clearInterval(timer);
  //     console.log("useEffect return");
  //   }

  // },[]);
  return (
    <div>
        <h2>Profile Component</h2>
        <h3>Name: {props.name}</h3>
        {/* <h3>{count}</h3>
        <button onClick={()=>setCount(1)}>SetCount</button> */}
    </div>
  )
}

export default Profile