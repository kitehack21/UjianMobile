import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { Header } from 'react-native-elements'
import { Card, CardSection, Button } from './common'
import PostForm from './PostForm';
import { connect } from 'react-redux'
import { postCreate, logoutUser } from '../actions'

class PostCreate extends Component {

    onButtonPress = () => {
        const { email, url, caption } = this.props;

        this.props.postCreate(email, url, caption);
    }

    render(){
        return(
            <View>
                <Header placement="left" 
                centerComponent={{
                    text: this.props.email, 
                    style: {color:"#fff"}
                }} 
                rightComponent={{
                    icon: 'power-settings-new',
                    color: '#fff',
                    onPress: () => {this.props.logoutUser();this.props.screenProps.rootNavigation.navigate('Login')}
                }}/>
                <Card>
                    <PostForm/>
                    <CardSection>
                        <Button onPress={this.onButtonPress}>
                            Post
                        </Button>
                    </CardSection>
                </Card>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const { email } = state.auth
    const { url, caption } = state.postForm;

    return { email, url, caption };
}

export default connect(mapStateToProps, {postCreate, logoutUser})(PostCreate)