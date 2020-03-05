import React, { Component } from 'react';

class FormInput extends Component {
    state = {
        nama : "Eris",
        alamat: "Pekanbaru",
        hobi: "membaca",
        mobil:"",
        jeniskelamin:"perempuan"
    }
    /* cara buruk
    handleChange = (e) =>{
        this.setState({
            nama : e.target.value
        })
    }

    handleAlamat = (e) =>{
        this.setState({
            alamat : e.target.value
        })
    }

    handleHobi = (e) =>{
        this.setState({
            hobi : e.target.value
        })
    }
    */

    //cara kekinian
   handleChange = e =>{
    this.setState({
        [e.target.name] : e.target.value
    })
}
    render() {
        return (
            <form>
            <div>
                <p>Nama saya: {this.state.nama}</p>
                <input type="text" name="nama" value={this.state.nama} onChange={this.handleChange}/>
                <p>Alamat: {this.state.alamat}</p>
                <input type="text" name="alamat" value={this.state.alamat} onChange={this.handleChange}/>
                <p>Hobi: {this.state.hobi}</p>
                <input type="text" name="hobi" value={this.state.hobi} onChange={this.handleChange}/>
                <p>Mobil saya: {this.state.mobil}</p>
                <select name="mobil" id="" value={this.state.mobil} onChange={this.handleChange}>
                    <option value=""></option>
                    <option value="Fortuner">Fortuner</option>
                    <option value="Pajero">Pajero</option>
                    <option value="Alphard">Alphard</option>
                    <option value="Lexus">Lexus</option>
                </select>
                <p>Jenis kelamin: {this.state.jeniskelamin}</p>
                <input type="radio" name="jeniskelamin" value="laki-laki" id="" onChange={this.handleChange} checked={this.state.jeniskelamin==='laki-laki' ? true : false}/>Laki-laki
                <input type="radio" name="jeniskelamin" value="perempuan" id="" onChange={this.handleChange} checked={this.state.jeniskelamin==='perempuan' ? true : false}/>Perempuan
                <br/><br/>
                <button type="submit">Kirim Data</button>
            </div>
            </form>
        );
    }
}

export default FormInput;