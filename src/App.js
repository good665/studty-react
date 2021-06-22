import React, {Component} from 'react';
import './App.css';
import Toc from './components/Toc';
import Content from './components/Content'
import Subject from './components/Subject'

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      subject :{title:'WEB',sub:'World wide Web!'},
      contents:[
        {id:1,title:'HTML',desc:'HTML is HYPERT'},
        {id:2,title:'CSS',desc:'HTML is HYPERT'},
        {id:3,title:'JAVASCRIPT',desc:'HTML is HYPERT'}
      ]
    }
  }
  render(){
    return(
      <div className="App">
        <Subject title={this.state.subject.title}
                  sub={this.state.subject.sub}></Subject>
        <Subject title='React' sub='For UI'></Subject>         
        <Toc data={this.state.contents}></Toc>
        <Content title="HTML" desc="HTML is HyperText Martup Language"></Content>
      </div>
    );
  }
}


export default App;