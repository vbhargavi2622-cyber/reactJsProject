import React from "react";


class UserClass extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <div>Name: {this.props.name}</div>
                <div>Location: Hyd</div>
            </div>
        )
    }
}

export default UserClass;