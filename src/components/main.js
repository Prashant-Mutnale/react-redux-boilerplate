import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux'
import {repairlist} from '../redux/actions/postActions.js';
import {repairphone} from '../redux/actions/postActions';
import {create_posts} from '../redux/actions/postActions'

class Main extends Component {
    constructor(props){
        super(props)
        this.changapage = this.changapage.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.updatedchange = this.updatedchange.bind(this)
        this.state={
            email: '',
            password: ''
        }
    }
    updatedchange(e){
        // let data = e.target.name;
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    componentWillMount(){
        this.props.repairlist()
    }

    changapage(repairphone, id){
        console.log("iddata",id)
        this.props.history.push(repairphone);
    }
    onSubmit(e){
        e.preventDefault();
        console.log("called")
        console.log("emaildata",this.state.email)
        console.log("passworddata",this.state.password)
        const data = {
            email: this.state.email,
            password: this.state.password
    }
    this.props.create_posts(data)

    }
  render() {
      console.log("datagot",this.props.postdata)
      console.log(this.state.email)
      console.log(this.state.password)
    return (
      <div className="App">
            <div>Main component</div>
            {
                this.props.postdata!=="" && this.props.postdata!==undefined?
               this.props.postdata.map((items, i)=>{
                   console.log(items)
                    return(
                        <ul key={i}>
                            <li><a  onClick={()=>this.changapage("/repairphone/"+items.id,items.id)}>{items.name}</a></li>
                        </ul>
                    )
                })
                : null
            }
           <form onSubmit={(e)=>this.onSubmit(e)}>
            <label>
                Name:
                <input type="email" name="email" value={this.state.email} onChange={e =>this.updatedchange(e)}/><br/>
                Password:  <input type="password" name="password" value={this.state.password} onChange={e=>this.updatedchange(e)}/>
                
            </label>
            <input type="submit" value="Submit" />
        </form>
            {/* <a onClick={()=>this.changapage("/repairphone")}>Clickme</a> */}
            
      </div>
    );
  }
}

function mapStateToProps(state) {
    console.log(state)
        return{
            postdata : state.posts.items.data
        }
 }

export default connect(mapStateToProps, {repairlist, repairphone, create_posts})(Main);
