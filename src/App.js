import React from 'react';
import './App.css';

import tasks from './ejemplo/tasks.json'

import Tasks from './componentes/Tasks'

class App extends React.Component{
  
  state={
    tasks: tasks
  }

  render(){
    return <div>
      <Tasks tasks={this.state.tasks }/>
    </div>
  }
}

export default App;
