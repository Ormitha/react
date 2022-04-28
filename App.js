import React from 'react';
import Login from './components/Login';
import Employee from './components/Employee';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {employees:'', user: '', password: '', loggedin: false, error: ''};    
  }

  componentWillMount() { //<---lifehook method
    this.setState({employees: 'Employee data goes here'});        
    //console.log("Employees", {this.state.employees});        
    }

  render(){
    if(this.state.loggedin){
      return <div>
        <button onClick={() => this.setState({loggedin: false})}>logout </button>
        <Employee/>
        </div>
    }
    else{
      return <div><Login username={this.state.user}
      password={this.state.password}
      error={this.state.error}
      handleUsername={(event) => this.setState({user: event.target.value})}
      handlePassword={(event) => this.setState({password: event.target.value})}
      submit={() => {
        if (this.state.user === "user" &&
            this.state.password === "pass") {
            this.setState({loggedin: true});
            console.log('in submit click');
        } else {
            this.setState({error: 'Not Valid User'});
        }
    }
    }   />
    </div>
    }
    
      
  }
  
}

export default App;