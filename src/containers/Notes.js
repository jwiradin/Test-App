import React, {Component} from "react";

class Notes extends React.Component{
    render(){
        const Lists = [1,2,3,4,5].map(i => {return(<li>Notes {i}</li>);});

        return (
            <div>
                <h2>Notes</h2>
                <ul>
                    <Lists />
                </ul>
            </div>
        );
    }
}

export default Notes;