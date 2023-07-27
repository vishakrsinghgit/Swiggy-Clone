import React from 'react'

export class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // count: 0,
      // count2: 0,
      userInfo:{
        name: "dummy name",
        company: "dummy company",
      }
    };
    console.log("child-Construtor " + this.props.name);
  }
 async componentDidMount(){
    // API call
    const data = await fetch("https://api.github.com/users/vishakrsinghgit");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json
    });
    this.timer = setInterval(() =>{
      console.log("vishal studying react");
    },1000);

    // console.log("child-ComponentDidMount " + this.props.name);
  }

  componentDidUpdate(){
    // console.log("Component Did Update ");
  }
  componentWillUnmount(){
    // console.log("Component Will Unmount");
    clearInterval(this.timer);
  }
  render() {
    const {count} = this.state;
    console.log("child-render " + this.props.name);
    return (
    <div><h1>Profile Class Component</h1>
    <img src={this.state.userInfo.avatar_url}/>
    <h2>Name : {this.state.userInfo.name}</h2>
    <h2>company : {this.state.userInfo.company}</h2>
    {/* <h2>Count: {count}</h2>
    <button
    onClick={() =>{
        this.setState({count: 1
      });
    }}
    > 
      SetCount
    </button> */}
    </div>
    );
  }
}

export default ProfileClass