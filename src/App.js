import REACT, {Component} from 'react';
import {HouseList} from './components/housesList'

class App extends Component{
  render(){
    return(
      <div>
        <HouseList />
      </div>
    )
  }
}

export default App;