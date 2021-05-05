import React from 'react';
import UserLists from './UserLists';
import { Form, Button} from 'react-bootstrap';
import "./Login.css";

export default class LoginComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {username: 'adminaccess', password: '@ccess'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
      }
    
      handleChange(event) {    this.setState({username: event.target.value});  }
      handleChangePassword(event) {    this.setState({password: event.target.value});  }
      handleSubmit(event) {
          var url = 'http://127.0.0.1:8000/api-token-auth/'
          const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ username: this.state.username, password: this.state.password})
          };
          fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('token', data.token);
                this.setState({ token: data.token });
            });
        event.preventDefault();
      }

      logout(){
          localStorage.removeItem('token');
          this.setState({token: null});
      }
    
      render() {
        var token = localStorage.getItem('token')

        if(!token)
            return (
                <Form className="login-form" onSubmit={this.handleSubmit}>
                    <Form.Group size="lg" controlId="email">
                    <Form.Label>User</Form.Label>
                    <Form.Control type="text" value={this.state.username} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={this.state.password} onChange={this.handleChangePassword} />
                    </Form.Group>
                    <Button block size="md" type="submit">
                    Login
                    </Button>
                </Form>
            );
        else
            return (
                <div>
                    <div>Welcome again, {this.state.username}!</div>
                    <UserLists />
                    <button class="btn btn-secondary" onClick={() => this.logout()}>Logout</button>
                </div>
            )
      }
}