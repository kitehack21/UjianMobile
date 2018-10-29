import React, { Component } from 'react';
import {ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';




class AlbumList extends Component {

    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album}/>
        );
    }

    render() {
        return (
            <ScrollView contentContainerStyle={{flexGrow:1}}>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}
export default AlbumList;