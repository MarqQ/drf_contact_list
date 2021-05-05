import React from 'react';
import ListComponent from './ListComponent';
import {Table} from 'react-bootstrap';

export default class UserLists extends React.Component{
    state = { lists: [], loading: true }
    async componentDidMount(){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        config.headers['Authorization'] = 'Token ' + localStorage.getItem('token');

        var url = 'http://127.0.0.1:8000/users/';
        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data);
        this.setState({lists: data, loading: false})
    }
    render()
    {
        const listApi = this.state.lists;
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Users List</th>
                        <th>Action</th>
                    </tr>
                </thead>
                
                <div>
                    {listApi.map(list => <ListComponent key={list.id} listId={list.id} listName={list.username} />)}
                </div>  
                
            </Table>                  
        )
    }    
}