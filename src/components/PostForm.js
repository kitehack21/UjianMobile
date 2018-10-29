import React, { Component } from 'react';
import { View } from 'react-native';
import { CardSection, Input} from './common'
import { connect } from 'react-redux'
import { urlChanged, captionChanged } from '../actions'

class PostForm extends Component {



    onUrlChange = (text) => {
        this.props.urlChanged(text)
    }

    onCaptionChange = (text) => {
        this.props.captionChanged(text)
    }
    render(){

        return(
            <View>
                <CardSection>
                    <Input label="Picture URL" placeholder="URL" value={this.props.url} onChangeText={this.onUrlChange}/>
                </CardSection>
                <CardSection>
                    <Input label="Caption" placeholder="caption" value={this.props.caption} onChangeText={this.onCaptionChange}/>
                </CardSection>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const { url, caption } = state.postForm

    return { url, caption}
}

export default connect(mapStateToProps, { urlChanged, captionChanged })(PostForm);