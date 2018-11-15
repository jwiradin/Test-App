import React from 'react';
import {Overlay} from 'react-bootstrap';

const Suggestions = (props)=>{
    const wrapper = {
        backgroundColor: 'powder-blue',
        position: 'relative',
        width: '100px',
    }
    
    const overlay = {
        position: 'absolute',
        display: 'inline-block',
        width: '100%',
        height: '100%',
        'z-index': 900,
        backgroundColor: "Blue"
    }
    const options = props.result.map (r => (
        <li key={r.AccId}>{r.Acc}</li>
    ))
    
    if (options.length > 0)
        return <div style={wrapper}><ul style={overlay}>{options}</ul></div>
    else
        return <span> </span>
}

export default Suggestions;