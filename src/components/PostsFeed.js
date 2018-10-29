import React, { Component } from 'react';
import {ListView, View} from 'react-native';
import { Header } from 'react-native-elements'
import PostDetail from './PostDetail';
import { connect } from 'react-redux'
import { getPosts, logoutUser } from '../actions'
import _ from 'lodash'

class PostsFeed extends Component {

    componentWillMount(){
        this.props.getPosts();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps){
        this.createDataSource(nextProps)
    }

    createDataSource({posts}){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })

        this.dataSource = ds.cloneWithRows(posts);
    }

    renderRow = (post) => {
        return <PostDetail post={post}/>
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Header placement="left"  
                centerComponent={{
                    text: "New Posts", 
                    style: {color:"#fff"}
                }}
                rightComponent={{
                    icon: 'user',
                    color: '#fff',
                    onPress: () => {this.props.logoutUser();this.props.screenProps.rootNavigation.navigate('Login')}
                }}/>
                <ListView dataSource={this.dataSource} renderRow={this.renderRow}/>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const posts = _.map(state.posts, (val, uid) => {
        return {...val}
    })

    posts.reverse()
    return { posts }
}

export default connect(mapStateToProps, {getPosts, logoutUser})(PostsFeed);