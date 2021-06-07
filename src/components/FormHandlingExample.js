import React, { Component } from 'react'

export class FormHandlingExample extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            comments:'',
            topic:'react'
        }
        this.onChangeHanlder=this.onChangeHanlder.bind(this);
    }
    onChangeHanlder(event){
            let name=event.target.name;
              let value=event.target.value;
           
        this.setState({
                 [name]: value
        })
    }
   /*  handleUsernameChange = event => {
        console.log(event.target.value)
        this.setState({
            username: event.target.value
        })
    }
    handleCommentsChange= event => {
        this.setState({
            comments: event.target.value
        })
    }
    handleTopicChange= event => {
        this.setState({
            topic: event.target.value
        })
    } */
    handleFormSubmit = (event) => {
        alert(`${this.state.username}  ${this.state.comments}  ${this.state.topic}`)
        console.log(this.state)
        event.preventDefault();// prevent behaviour of from submit
      }
    render() {
        //const {username,comments,topic}=this.state use and remove this.state in input i.e value={username}
        return (<div className="App App-header">
            <form  onSubmit={this.handleFormSubmit} >
                <div>

                    <label>UserName: </label>
                    <input type='text'name="username" value={this.state.username} onChange={this.onChangeHanlder} />
                </div>
                <div><br/>
                    <label>Comments: </label>
                    <textarea type='text' name="comments" value={this.state.comments} onChange={this.onChangeHanlder} />
                </div><br/>
                <div>
                    <label>Topic: </label>
                    <select name="topic" value={this.state.topic} onChange={this.onChangeHanlder}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="java">Java</option>
                    </select>
    
                </div><br/>
                <button type="submit">Submit</button>
                {/* <button type="submit" onClick={this.handleFormSubmit}>Submit</button> */}
            </form></div>

        )
    }
}

export default FormHandlingExample
