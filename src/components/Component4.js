import React, { Component } from 'react'

class Component4 extends Component {
    state = {
        nama:'Danil',
        semester:6,
        hobi:'membaca',
    }

    render() {
        return (
            <div>
                <h1>Nama : {this.state.nama}</h1>
                <h1>Semester : {this.state.semester}</h1>
                <div>Hobi : {this.state.hobi}</div>
                <p>=================================</p>
                
            </div>
        )
    }
}

export default Component4