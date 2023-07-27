import React, {lazy, Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import { Header} from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import ProfileClass from "./components/ProfileClass";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
// import Instamart from "./components/Instamart";
/*
const heading = React.createElement(
    "h1",
    {
        id:"title"
    },
    "Heading 1"
);

const heading2 = React.createElement(
    "h2",
    {
        id:"title "
    },
    "Heading 2"
);

const container = React.createElement(
    "div",
    {
        id:"container"
    },
    [heading, heading2]
);

console.log(heading);

*/
/*
Header 
    -Logo
    -Nav Items(Right Side)
    -Cart
Body
    -Search Bar
    -RestrauntList
        -Image
        -Name
        -Rating
        -Cuisines
Footer
    -Links
    -Copyright



*/



// react component declaration
/*const Heading =()=> {return(
    <h2 id="title">Heading 1
    </h2>
);}
*/
// react element declaration
/*
const heading2 = (
    <h1 id="title">Heading 2
    </h1>
);
*/
/*
const Container=() =>{
    return (
   <div id="container">
        <Heading/>
        {heading2}
    </div>
    
);}
*/




// no key <<<<<<<< index key << unique key 



  
const Instamart = lazy(()=> import("./components/Instamart"));
// Upon On Demand loading -> upon rendering-> suspend loading
const About = lazy(()=> import("./components/About"));

const AppLayout =() =>{
    const[user, setUser] =useState(
        {
            name: "Ram Ram Vishal",
            email: "vishal@gmail.com"
        }
    );
    return(
        <UserContext.Provider value={
            {
                user: user,
                setUser: setUser
            }
        }>
        <Header/>
        <Outlet />
        <Footer/>
        </UserContext.Provider>
    );
};


const appRouter = createBrowserRouter([
    {
        path: "/",
        element : <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element : <Body user = {{
                    name: "Ram Ram Vishal",
                    email: "vishal@gmail.com"
                }}/>
            },
            {
                path: "/about",
                element : (
                <Suspense fallback ={<h1>Loading....</h1>}>
                    <About/>
                </Suspense>
                ),
                children: [
                    {
                        path: "profile", // parentPath/{path} => localhost:1234/about/profile "/ slash means from root localhost:1234"
                        element : <ProfileClass/>,

                    }
                ]
            },
            {
                path: "/contact",
                element : <Contact/>
            },
            {
                path: "/restaurant/:id",
                element : <RestaurantMenu/>
            },
            {
                path: "/instamart",
                element : (
                <Suspense fallback= {<Shimmer/>}>
                    <Instamart/>
                </Suspense>
                )
            }
        ]
    },
    
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);