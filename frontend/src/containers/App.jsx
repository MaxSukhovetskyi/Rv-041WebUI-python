import React from "react";
import PageContainer from "../containers/PageContainer";
import { BrowserRouter } from "react-router-dom";
import Router from "../router";
import AppContext from "../components/AppContext"


class App extends React.Component {
  state = {
    auth: false,
    role: "",
    token: ""
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if (token && role) { this.setState({auth: true, token: token, role: role}) }  
  }

  changeState = (obj) => {
    this.setState(obj)
  }

  
  render() {
    return (
      <AppContext.Provider value={{state: this.state, changeState: this.changeState}}>   
        <BrowserRouter>
          <PageContainer>
            <Router />
          </PageContainer>
        </BrowserRouter>
      </AppContext.Provider> 
    );
  };
};

export default App;
