import React,{ Component } from 'react';
import C3 from './Component3';

class Component1 extends Component{
    render(){
        return(
            <div>
                <h1>Ini statefull</h1>
                <C3/>
            </div>
        );
    }
}

export default Component1;