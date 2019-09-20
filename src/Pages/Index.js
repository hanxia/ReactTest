import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';



class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            //  <h2>Index组件</h2> 
            <Redirect to='/home/'></Redirect>
             
        );
    }
}
 
export default Index;
