import React from 'react';
var newData = {
    data: 'TQ',
    
 }
 var aa
 var MyHOC = (ComposedComponent,num,num1) =>{ 
     class a extends React.Component {
     componentDidMount() {
        console.log("MYHOC CompDID");
        console.log(num+num1);
  aa=num+num1
       this.setState({
          data: newData.data,
        
          
                 }); 
               
    }
    render() {
        
        console.log("MYHOC Render"+this.props.name);
       return <ComposedComponent add={aa}  {...this.props} {...this.state} /* data='tqpp'  */ />;
    }
 };
return a
}

 export default MyHOC