import React,{Component} from 'react';
//import Biodata from './components/Biodata';
//import NewBiodata from './components/NewBiodata';
import C4 from "./components/Component4";
import Counter from './components/Counter';
import FormInput from './components/FormInput';
class App extends Component{
  render(){
    return (
      <div>
        <C4/>
        <Counter/>
        <FormInput/>
      </div>
      
    );
  }

}


export default App;
