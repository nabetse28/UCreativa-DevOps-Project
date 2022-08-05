import React, { Component } from "react";
import { Segment, Form, Grid, Header, Message, Button, Icon, Loader, Dimmer, Modal } from "semantic-ui-react";


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDimmer: false,
            openMessage: false,
            username: '',
            password: '',
        };

        this.onUsername = this.onUsername.bind(this);
        this.onPassword = this.onPassword.bind(this);
    }

    handleAgree = () => this.setState({ openMessage: false })

    onLogin() {
        console.log(this.state.username, this.state.password);
        if(this.state.username === 'admin' && this.state.password === 'admin'){
            this.setState({activeDimmer: true});
            setTimeout(() => {
                this.setState({activeDimmer: false});
                this.props.history.push('/home/');
              }, 500);
        }else{
            this.setState({activeDimmer: true});
            setTimeout(() => {
                this.setState({activeDimmer: false, openMessage: true});
              }, 500);
            
        }
    }

    onUsername(event) {
        this.setState({ username: event.target.value });
    }
    onPassword(event) {
        this.setState({ password: event.target.value });
    }

    render() {

        return (
            <div>
                <Dimmer active={this.state.activeDimmer}>
                    <Loader>Loading</Loader>
                </Dimmer>
                <Modal
                    size={'small'}
                    open={this.state.openMessage}
                >
                    <Modal.Header>Error Message</Modal.Header>
                    <Modal.Content>
                    <p>The username or password doesn't match the correct values</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button positive onClick={this.handleAgree}>
                            Agree
                        </Button>
                    </Modal.Actions>
                </Modal>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='teal' textAlign='center'>
                            <Icon name="users" circular /> Login into your account
                        </Header>
                        <Form size='large'>
                        <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='username' onChange={this.onUsername}/>
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='password'
                            type='password'
                            onChange={this.onPassword}
                        />
                        
                        <Button color='teal' fluid size='large' onClick={() => {this.onLogin()}}>
                            Login
                        </Button>
                        </Segment>
                    </Form>
                    <Message>
                        New to us? <a href='#'>Sign Up</a>
                    </Message>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}