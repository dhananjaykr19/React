import React from "react";

class UserClass extends React.Component{
    constructor(props){
        // todo:
        super(props);
        // console.log(props);
        this.state = {
            count : 0,
            // count2 : 19,
            userInfo : {
                name : "defaultName",
                location : "defaultLocation",
                avatar_url : "dummyPic",
            }
        };
        // console.log(this.props.name + "Child Constructor called");
    }

    async componentDidMount(){
        // console.log(this.props.name +"Child Component Did Mount called");
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo : json,
        })
    }

    componentDidUpdate(){
        console.log("component did updated call");
    }
    componentWillUnmount(){
        console.log("component will unmount call");
    }

    render(){
        // console.log("Child render called");
        // const {name} = this.props;
        const {name, location, avatar_url} = this.state.userInfo;
        const {count} = this.state;
        return (
            <div className='user-card'>
                <img src={avatar_url} alt="Pic" />
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact : @Dhananjay19</h4>
                {/* <h3>Count : {this.state.count}</h3> */}
                <h3>Count : {count}</h3>
                <button onClick={() => {
                    // Never update state variable directly
                    this.setState({
                        count : this.state.count + 1,
                        // count2 : this.state.count2 + 1,
                    });
                }}>Incerase Count</button>
            </div>
        );
    }
}

export default UserClass;