import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux'
import {fetchPosts} from '../redux/actions/postActions.js';

class Main extends Component {
    componentWillMount(){
        this.props.fetchPosts()
    }
  render() {
    return (
      <div className="App">
            <div>Main component</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    console.log(state)
        return{
            postdata : state.posts.items
        }
 }

export default connect(mapStateToProps, {fetchPosts})(Main);
