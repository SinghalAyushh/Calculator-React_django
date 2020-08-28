import React, { Component } from "react";

import axios from "axios";
import { CSVLink, CSVDownload } from "react-csv";
import {Button,Icon,Table} from "semantic-ui-react"


class PostList extends Component {
    state = {
       
        data: []
      };
      componentDidMount() {
       
        axios
          .get("http://127.0.0.1:8000/api/api/todos/ ")
          .then(res => {
            this.setState({ data: res.data });
          })
        }
  render() {
    const { data } = this.state;
    const headers = [
        { label: "operations", key: "op"},
        { label: "Results", key: "result"}
    ];
    const csvData = 
    data.map(Post => ({

     op :   [Post.operation],
      result: [Post.result]    
       
    }));
    return (
        <div>
            <h3><Icon name = "download"></Icon>Download Csv file here: </h3>
             <CSVLink data={csvData} headers ={headers}><Button style={{backgroundColor:"Green" ,color:"white"}}>Download CSV FILE</Button></CSVLink>
             <br>
             </br>
             <br>
             </br>
  <h3>Your Saved OPerations:</h3>
  <Table celled style={{backgroundColor:"black" ,color:"Orange"}}>
            <Table.Header >
              <Table.Row>
                <Table.HeaderCell><h3>S.No#</h3></Table.HeaderCell>
                <Table.HeaderCell><h3>Operation</h3></Table.HeaderCell>
                <Table.HeaderCell><h3>Result</h3></Table.HeaderCell>

                
               
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {data.map((item, i) => {
                return (
                  <Table.Row key={item.id}>
                    <Table.Cell>{i + 1}</Table.Cell>
                    <Table.Cell>
         <strong>{item.operation}</strong>
            </Table.Cell>
                   
                    
                    <Table.Cell>
                      <strong>{item.result}</strong>  
                      
                    </Table.Cell>
                   
                   
                   
                   
                  </Table.Row>
                  
                );
              })}
              </Table.Body>
              </Table>
    
        
      </div>
    );
  }
}

export default PostList;