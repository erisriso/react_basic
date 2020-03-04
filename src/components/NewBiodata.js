import React from 'react';
const NewBiodata = props =>{
    return(
        <div>
            <h1>Nama : {props.nama}</h1>
            <h1>Semester : {props.semester}</h1>
            <div>Hobi : {props.hobi}</div>
            <p>=================================</p>
            
        </div>
        
    )
}
        


export default NewBiodata;