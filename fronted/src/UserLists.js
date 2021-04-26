import React from 'react';
import ListComponent from './ListComponent';

export default class UserLists extends React.Component{
    state = { lists: null, loading: true }
    async componentDidMount(){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        config.headers['Authorization'] = 'Token 3b80dab9661966b2596ea2c66437a8af57374f89'

        var url = 'http://127.0.0.1:8000/users/';
        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data);
        this.setState({lists: data, loading: false})
    }
    render()
    {
        return (
            <div>
                <ListComponent listName={'This List'} />
                <ListComponent listName={'This List 2'} />
            </div>
        )
    }    
}