
 /* import React from 'react';
  var UpdatedComponent = OriginalComponent =>{ 
     class NewComponent extends React.Component {
        constructor(props) {
            super(props)
                this.state = {count: 0 }
        }
        counterIncrement = () => {
            this.setState(prevState => {
                return { count: prevState.count + 1 }
            })
        }
        render() {
       return( <OriginalComponent 
       count={this.state.count} //pass as props
       counterIncrement={this.counterIncrement}//pass as props
        />) }
 };
return NewComponent
}
 export default UpdatedComponent   */

 /* // naming convension
 UpdatedComponent= WithCounter
 OriginalComponent= WrappedComponent
 NewComponent=WithCounter

 */
/* import React from 'react';
  var WithCounter = WrappedComponent =>{ 
     class WithCounter extends React.Component {
        constructor(props) {
            super(props)
                this.state = {count: 0 }
        }
        counterIncrement = () => {
            this.setState(prevState => {
                return { count: prevState.count + 1 }
            })
        }
        render() {
       return( <WrappedComponent 
       count={this.state.count} //pass as props
       counterIncrement={this.counterIncrement}//pass as props
        />) }
 };
return WithCounter
}
 export default WithCounter */

 
 import React from 'react';
var UpdatedComponent = (OriginalComponent,Increment) =>{ 
   class NewComponent extends React.Component {
      constructor(props) {
          super(props)
              this.state = {count: 0 }
      }
      counterIncrement = () => {
          this.setState(prevState => {
              return { count: prevState.count + Increment }
          })
      }
      render() {
         console.log(this.props.name);

     return( <OriginalComponent 
     count={this.state.count} //pass as props
     counterIncrement={this.counterIncrement}//pass as props
    {...this.props} // passing props to counterfile using spread operator
      />) }
};
return NewComponent
}
export default UpdatedComponent  

 // 2 things in HOC 1. passing down the props in app.js pass name="TQPP"

 // keep in mind two things 1. passing props to HOC not component 2 pass paramter component to HOC
// HOC use in Routing, context, css, read external file  see video 35