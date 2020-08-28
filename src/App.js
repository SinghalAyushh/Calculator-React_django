import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";
import axios from "axios";
import {Button,Form, Input,Label,Icon} from "semantic-ui-react"

import { Col, Container, Row } from "reactstrap";
import PostList from "./operationlist"


class App extends Component {
    constructor(){
        super();

        this.state = {
            result: "",
            operation : "",
            title: "",
            desc: "",
         
        }
    }
   
   

       createPost = e => {
            e.preventDefault();
            axios.post("http://127.0.0.1:8000/api/api/todos/ ",this.state)
          };
    
    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };
  


    calculate = () => {
        var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
            this.setState({
                operation : checkResult,
                title: checkResult
            })
        }

        else {
            checkResult = this.state.result
            this.setState({
                operation : checkResult,
                title: checkResult
            })
        }

 console.log(this.state.operation);
        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(checkResult) || "" ) + "",
                desc: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };
 refreshPage = ()=>{
        window.location.reload();
     }
    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };
    

    render() {
        const src = `https://source.unsplash.com/inI8GnmS190/2400x1320` ;
        return (
            <div style ={{  backgroundImage:`url(${src})`}} >
                 <div className="Navbar" >
                   <h1><Icon name ="calculator"  style={{color : 'white' }}></Icon><span style={{color : 'orange' }}>Digi</span><span style={{color : 'white' }}>Calc</span><span style={{color : 'orange' }}>.com</span></h1>
                    </div>
                    <br>
                    </br>
                <Container className="calculator-body">
               
                    <ResultComponent result={this.state.result}/>
                    <KeyPadComponent className ="button" onClick={this.onClick}/>
                    <br>
                    </br>
                
                    <h3>Save Recordes here:</h3>
                    <Form onSubmit={this.createPost}>
       
        <Label  style={{backgroundColor : 'black' ,color :'white'}} for="name">Current operation:</Label>
          <Input
            type="text"
            name="title"
          
            readOnly = {true}
          
    
            
            
            value={this.state.operation}
            
          />
          
          <Label  style={{backgroundColor : 'black' ,color :'white'}} for="name">Result:</Label>
          <Input
            type="text"
            name="desc"
            readOnly = {true}
          
           
            
            value={this.state.result}
           
          />
           <br>
                    </br>
                    <br>
                    </br>
                    <h3>Click here to save your Work:</h3>
          <Button style={{backgroundColor : 'orange' ,color :'white'}} onClick ={ this.refreshPage}>Save Operation</Button>
        
          </Form>
          <br>
                    </br>

         <Container>
          <Row>
          <Col>
            <PostList
              
           
            />
          </Col>
        </Row>
        </Container>
                </Container>
            </div>
        );
    }
}

export default App;
