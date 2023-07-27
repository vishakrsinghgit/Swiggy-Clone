import ProfileFunctionalComponent from "./Profile"
import { Outlet } from "react-router-dom"
import ProfileClass from "./ProfileClass"
import React from "react"
import UserContext from "../utils/UserContext"

// const About2 = () => {
  
//   return (
//     <div>
//         <h1>About Us Page</h1>
//         <p>
//             This is Vishal's effort to learn react
//         </p>
//         <ProfileFunctionalComponent name= {"Vishal"}/>
//         <ProfileClass name= {"Vishal"}/>
//         {/* <Outlet/> */}
//     </div>
//   )
// }

class About extends React.Component {
  constructor(props){
    super(props);
    // console.log("parent-cnstructor");
  }
  componentDidMount(){
    //best place to make an api call coz it is called after render
    // console.log("parent-componentDidMount");
  }

  render() {
    // console.log("parent-render");
    return (
      <div>
          <h1>About Us Page</h1>
          <UserContext.Consumer>
            {({user})=> <h4 className="font-bold text-xl p-10">{user.name}-{user.email}</h4>}
          </UserContext.Consumer>
          <p>
              This is Vishal's effort to learn react
          </p>
          <ProfileFunctionalComponent name= {"First Child"}/>
          {/* <ProfileClass name= {"First Child"}/> */}
          {/* <ProfileClass name= {"Second Child"}/> */}
          {/* <Outlet/> */}
      </div>
    );
  }

}

export default About