import React, {Component} from './node_modules/react';
import {connect} from './node_modules/react-redux';

class SongList extends Component {
    render(){
        console.log(this.props)
        return "hi"
    }
}

const mapStateToProps = (state) =>{
    console.log(state);

    return {songs: state.songs};
}

export default connect(mapStateToProps)(SongList);