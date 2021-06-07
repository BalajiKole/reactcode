import React from 'react'

const ForwardingInputExample = React.forwardRef((props, ref) => {
	return (
		<div>
      <input type="text" ref={ref} />
		</div>
	)
})
export default ForwardingInputExample

/* function ForwardingInputExample() {
    return (
        <div>
            <input type="text"></input>
        </div>
    )
}
 */
/*  //handling ref forwarding to MyInput component
const MyInput = React.forwardRef((props, ref) => {
    return(<input name={props.name} ref={ref} />);
 });
 // we can now pass a ref down into MyInput from a parent component
 const MyComponent = () => {
    let ref = React.createRef();
    return (
      <MyInput
        name="email" 
        ref={ref}
      />
    );
 } */