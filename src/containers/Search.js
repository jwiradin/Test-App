import React, {Component} from "react";
import { ListGroup, ListGroupItem, Col, Grid} from 'react-bootstrap';
import axios from "axios";
import Suggestions from "./Suggestions"

const API_URL = 'http://sydpc1759.gbst.net:8080/api/acc/lookup/';
class Search extends Component {

    state = {
        query:'',
        results:[]
    }

    getInfo = () =>{
        axios.get(`${API_URL}${this.state.query}`)
            .then(({data})=>{
                this.setState({
                    results: data
                })
            })        
    }

    resetQuery = () => {
        this.setState({query:'', results:[]})
    }
    handleInputChange = () => {
        this.setState({
            query: this.search.value
        },() => {
            if(this.state.query && this.state.query.length > 1){
                    this.getInfo();
            }
            else{
                this.setState ( {query : '', result:[]});
            }
        })
    }

    render(){
        return(
            <form>
                <input placeholder="Search for ..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                    onBlur={this.resetQuery}
                />
                <Suggestions result={this.state.results}/>
                <br></br>
                <input type="text" value="account name"/>
                <br></br>
                <input type="text" value="account name"/>
                <br></br>
                <input type="text" value="account name"/>
                <br></br>
                <input type="text" value="account name"/>
            </form>
            
        )
    }
}

export default Search;