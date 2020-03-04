import React, { Component } from 'react'

class Counter extends Component {
    state = {
        angka:0,
        angka2:5,
        angka3:0
    }

    //cara tambah pertama
    tambah = ()=>{
        this.setState({
            angka: this.state.angka+1
        });
    };

    //cara tambah kedua
    tambah2 = () => {
        this.setState(prevState => ({
            angka:prevState.angka+1
        }));
    }

    kurangi = () => {
        this.setState(prevState =>({
            angka2:(prevState.angka2>0) ? prevState.angka2-1 : 0
        }));
    }
    render() {
        return (
            <div>
                <p>{this.state.angka}</p>
                <button onClick={this.tambah2}>Tambah</button>
                <p>{this.state.angka2}</p>
                <button onClick={this.kurangi}>Kurangi</button>
            </div>
        )
    }
}

export default Counter