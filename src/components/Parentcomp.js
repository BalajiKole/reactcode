import React, { Component,PureComponent } from 'react'
import RegularComp from './RegularComp';
import PureComp from './PureComp';
import MemoComp from './MemoComp';
class Parentcomp extends Component // PureComponent then check this component will not update again and also its chlid because praent component is PureComponent it will use propos and string- primitative
 {
    constructor(props) {
        super(props)
        this.state = { name: 'Ansh' }
    }
    componentDidMount() {
        setInterval(() => { this.setState({ name: 'Anshdfds' }) }, 2000)
    }
    render() {
        console.log("####### Parent component render #######")
        return (
            <div>
                <h1>Parent component</h1>
          {/*   <RegularComp name={this.state.name} />
              <PureComp name={this.state.name} /> */}
               {/* <MemoComp name={this.state.name} />   */}
            </div>)
    }
}
export default Parentcomp




// PureComponent is prevent unneccessary render can you give performance in certain scenario ex. you render list 50 items why not it is re-rendeing then use PureComponent
/* keep in mind You should go for React.PureComponent when you can satisfy any of the below conditions.
•	State/Props should be an immutable object
•	State/Props should not have a hierarchy
•	You should call forceUpdate when data changes
 */
/*  In React, we can create a component by extending the PureComponent class. A Pure Component implements the shouldComponentUpdate lifecycle method by performing a shallow comparison on the props and state
of the component. If there is no difference, the component is not re-rendered thereby providing a performance boost. */