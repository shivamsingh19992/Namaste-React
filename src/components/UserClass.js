import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super()    //not passed props inside super but it will work,but this practice is not suggested
        this.state={
            userInfo:{
            }
        }
    }

    async componentDidMount(){
        const data = await fetch('https://api.github.com/users/shivamsingh');
        const userdata = await data.json();
        this.setState({userInfo:userdata})
    }

    componentDidUpdate(prevprops,prevstate){
        if(prevstate.userInfo!=this.state.userInfo){
            console.log('did update');
        }
    }


    componentWillUnmount(){
        console.log('unmount');
    }
    render(){

        const {name,location,avatar_url} = this.state.userInfo;
        const {createdby,college,company} = this.props
        
        return(
            <div>
            <img src={avatar_url}/>
            <h1>
                createdby:{name}
            </h1>
            <h2>
                college:{college}
            </h2>
            <h3>
                company:{company}
            </h3>
            <h3>
                location:{location}
            </h3>
            </div>
        )
    }
}

export default UserClass;