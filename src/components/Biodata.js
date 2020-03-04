import React,{ Component } from "react";
class Biodata extends Component{
    render(){
        return(
            <div>
                <h1>Nama : {this.props.nama}</h1>
                <h1>Semester : {this.props.semester}</h1>
                <div>Hobi : {this.props.hobi}</div>
                <p>=================================</p>
                
            </div>
            
        )
    }
}

export default Biodata;