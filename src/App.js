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
import {Provider} from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
import Form from "./components/LoginForm";
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
            name: "Vishal Kr Singh"
        }
    );

    const formFields = [
        { name: 'username', label: 'Username', type: 'text' },
        { name: 'password', label: 'Password', type: 'password' },
    ];
    
    const handleSubmit = (formData) => {
        const username = {name:formData.username,
       
        };
        console.log(username);
        // Perform form submission logic here
        setLoggedIn(true);
        setUser(username);
        console.log('Form Data:', formData);
    };

    const [loggedIn, setLoggedIn] = useState(false);

    
        
    return (
        <div>{
            loggedIn ? (<Provider store= {store}>
                <UserContext.Provider value={
                    {
                        user: user,
                        setUser: setUser
                    }
                }>
                <Header logIn={loggedIn} setlogIn={setLoggedIn} />
                <Outlet />
                <Footer/>
                </UserContext.Provider>
                </Provider>):(<Form fields={formFields} onSubmit={handleSubmit}/>)
            
            
            }
        
        </div>
    );
};


const appRouter = createBrowserRouter([
    {

        // path:"/",
        // element: <Form fields={formFields} onSubmit={handleSubmit} />,
        // errorElement: <Error/>,
        // children: [
        //     {
            path: "/",
            element :<AppLayout/>,
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
                },
                {
                    path: "/cart",
                    element : <Cart/>
                }
            ]
        // }
        // ]
        
    },
    
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);