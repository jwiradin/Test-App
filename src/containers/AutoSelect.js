import React, {Component} from "react";
import axios from "axios";
import Select from "react-select";
import AsyncSelect from "react-select/lib/Async";

const API_URL = 'http://sydpc1759.gbst.net:8080/api/acc/lookup/';

type State = {
    inputValue: string,
};

class Search extends Component {

    state = {
        inputValue: ''
    }

    loadOptions = (inputValue, callback) =>{
        axios.get(`${API_URL}${inputValue}`)
            .then(({data})=>{
                var result = data.map(r =>{return {value: r.AccId, label: r.Acc}});
                callback(result);
            })        
    }

    resetQuery = () => {
        this.setState({query:'', results:[]})
    }

    handleInputChange = (newValue: string) => {
        const inputValue = newValue;
        this.setState({inputValue});
        return inputValue;
    }

    render(){

        return(
            <div>
                <pre>inputValue: "{this.state.inputValue}"</pre>
                <AsyncSelect
                    loadOptions={this.loadOptions} 
                    onChange={this.handleInputChange}
                />
            </div>
        )
    }
}

export default Search;