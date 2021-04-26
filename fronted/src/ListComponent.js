import React from 'react';
import ItemComponent from './ItemComponent';

export default function ListComponent(props){
    return ( 
        <div>
            <h3>{ props.listName}</h3>
            <ul>            
                <ItemComponent name={'Name List Component'} />
                <ItemComponent name={'Name List Component 2'} />
            </ul>
        </div>
    );
}