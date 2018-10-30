import React from 'react';
import {Image, Text, View} from 'react-native';
import {Card, CardSection} from './common';

const PostDetail = ({post}) => {
    const styles = {
        thumbnailStyle: {
            height: 50,
            width: 50
        },
        headerContentStyle: {
            justifyContent: 'space-around'
        },
        headerTextStyle: {
            fontSize: 18
        },
        thumbnailContainerStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
            marginRight: 10
        },
        imageStyle: {
            height: 320,
            flex:1
        },
        captionEmailStyle: {
            fontSize: 12,
            fontWeight: 'bold',
        },
        captionStyle: {
            paddingLeft: 10,
            justifyContent: 'space-around'
        }
    };

    const {email, url, caption} = post;
    const {headerContentStyle, headerTextStyle, thumbnailStyle, thumbnailContainerStyle, imageStyle, captionEmailStyle, captionStyle} = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyle} source={{uri: url}}/>
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{email}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={imageStyle} source={{ uri: url }}/>
            </CardSection>
            <CardSection>
                <View>
                    <Text style={captionEmailStyle}>{email}</Text>
                </View>
                <View style={captionStyle}>
                    <Text>{caption}</Text>
                </View>
            </CardSection>
        </Card>
    );
};
export default PostDetail;