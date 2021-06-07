import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Mycomponent from './components/Greet'
/* import { Greet } from './components/Greet' */
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import StateExample from './components/StateExample';
import CounterFile from './components/CounterFile';
import DestructureExample from './components/DestructureExample';
import { DestructureExampleWithClassComponent } from './components/DestructureExampleWithClassComponent';
import FunctionalClickExample from './components/FunctionalClickExample';
import { ClassClickExample } from './components/ClassClickExample';
import EventBindExample from './components/EventBindExample';
import ParentComponent from './components/ParentComponent';
import ConditionalRenderingExample from './components/ConditionalRenderingExample';
import NameListExample from './components/NameListExample';
import NameListExample1 from './components/NameListExample1';
import IndexAsKeyExample from './components/IndexAsKeyExample';
import StylingExample from './components/StylingExample';
import InlineCssExample from './components/InlineCssExample';
import './AppStyles.css';
import styles from './AppStyles.module.css'
import { FormHandlingExample } from './components/FormHandlingExample';
import LifecycleA from './components/LifecycleA';
import LifecycleAUpdate from './components/LifecycleAUpdate';
import { UnmountingExample } from './components/UnmountingExample';
import FragmentExample from './components/FragmentExample';
import TableExample from './components/TableExample';
import Parentcomp from './components/Parentcomp';
import { RefsExample } from './components/RefsExample';
import { FocusInputExample } from './components/FocusInputExample';
import { ForwardingInputParentExample } from './components/ForwardingInputParentExample';
import PortalExample from './components/PortalExample';
import HeroName from './components/HeroName';
import ErrorBoundaryExample  from './components/ErrorBoundaryExample';
import  Clickcounter  from './components/Clickcounter';
import  HoverCounter  from './components/HoverCounter';
import ClickcounterUsingHoc  from './components/ClickcounterUsingHoc';
import HoverCounterUsingHoc  from './components/HoverCounterUsingHoc';
import MyComponent from './components/MyComponent ';
import Blog from './components/Blog';
import MyForm from './components/MyForm';
import Clock from './components/Clock';
import Componentlife from './components/componentlife';
import { User } from './components/User';
import Counter from './componentsone/Counter';
import ClickCounterTwo from './componentsone/ClickCounterTwo';
import HoverCounterTwo from './componentsone/HoverCounterTwo';
import { ComponentC } from './componentsone/ComponentC';
import { UserProvider } from './componentsone/UserContext';
import PostList from './reactHttp/PostList';
import  GetExampleUsingAxios  from './reactHttp/GetExampleUsingAxios';
import Location from './HOCExample/Location';
import PostForm from './reactHttp/PostForm';
import CURUDExample from './reactHttp/CURUDExample';
import FetchExample from './reactHttp/FetchExample';
import Toggle from './components/Toggle';
import Home from './component/Home';
import CurrentTime from './component/CurrentTime';
import NestedListRenderingExample from './component/NestedListRenderingExample';
import Number from './component/Number';
import FormWithRef from './components/FormWithRef';
import UserOne from './components/UserOne';
import PropsExample from './component/PropsExample';


class App extends React.Component {
  render() {
    return (
      <div className="App">

{/* <FunctionalClickExample></FunctionalClickExample> */}

{/* <ErrorBoundaryExample>
          <HeroName heroName="Ram" />
        </ErrorBoundaryExample>
        <ErrorBoundaryExample>
          <HeroName heroName="Ansh" />
        </ErrorBoundaryExample>
        <ErrorBoundaryExample>
          <HeroName heroName="Jay" />
        </ErrorBoundaryExample>




 */}




{/* 
      <UserProvider value="TQ">
      <ComponentC />
      </UserProvider>   */}

{/*  <CURUDExample></CURUDExample>  */}

{/* <EventBindExample/> */} 


{/* <FragmentExample/> */}
 
      
     

   

    
     
    






        {/*
     <div className="App"> <Greet/></div> 
     <div className="App"> <Mycomponent/></div> 
      {/*  <Welcome /> */}
        {/*  <Hello/> */}
        {/* props with function 
        <Greet name="balaji" heroName="Batman" /> {/* pass data from app.js to greet.js 
        <Greet name="ansh" heroName="Superman" />  {/* passing two paramter 
        <Greet name="sara" heroName="Wonder Woman" />

        {/*  props with function and its children add 
        <Greet name="balaji" heroName="Batman"> {/* Props know to sure  to pass as attribute
          <p>This is children Props</p>
        </Greet>
        <Greet name="ansh" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="sara" heroName="Wonder Woman" />
        {/*   props with class component  
        <Welcome name="Jay" heroName="Batman" />
        <Welcome name="Ansh" heroName="Superman" />
        <Welcome name="sara" heroName="Wonder Woman" />

        {/* 
        state example
        <StateExample/> */}
        {/* <CounterFile/> */}
        {/* <DestructureExampleWithClassComponent name="Jay" ClassName="TQPP"/>
        <DestructureExample name="Jay" heroName="Superman"/>  */}

        {/*  Event handling <FunctionalClickExample/>
      <ClassClickExample/> */}
      
        {/* Event binding 
                   <EventBindExample/> */}
                    {/* <CurrentTime/>  */}

          {/*  method as props  <ParentComponent /> */}
        
           {/* Conditional  Rendering Example<ConditionalRenderingExample/> */}
     {/* <Toggle/>  */}
     
         {/* <Home/>  */} 
        {/* <PropsExample name="jay"/> */}

        
             {/*   <NameListExample/> */} 
             {/*  <NameListExample1/> */}  
             {/* <Number/>  */}
  {/*  <Blog/> */}  
    {/* Index as key <IndexAsKeyExample/> */}
     {/* <NestedListRenderingExample/>  */}
     
      {/*  css stylesheet example <StylingExample Primary={true}/> */}
      
       {/*   InlineCss Example    <InlineCssExample/> */}
       
     {/*css Module- use AppStyles.css and AppStyles.module.css file 
       <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}
     {/*  <FormHandlingExample/> */}
{/*      <MyForm/>
     <FormHandlingExample/> */} 
      {/* form example  <FormHandlingExample/> */}
      {/* form example with validation <MyForm/> */}
       {/*  mounting example  <LifecycleA/> 
        {/* update lifecycle <LifecycleAUpdate/> */}
    {/* Unmounting example  <UnmountingExample/> */}
    
      {/*   <Clock/> */}  
      {/* <Componentlife/> */}  
      {/*  Fragment Example <FragmentExample/> */}
    {/*  Fragment Example <TableExample/> */}
    {/*  pure component and memo example <Parentcomp/> */}

      {/* Refs Example with html and class component 
         <RefsExample/> 
        <FocusInputExample/>
       */}
     {/*    <RefsExample/> */}
{/* <FormWithRef/> */}
       {/*  forwarding Example  <ForwardingInputParentExample/> */}

         {/* portal Example   <PortalExample/> */}
         
                  	{/* ErrorBoundaryExample 	{/* <ErrorBoundaryExample>
        <HeroName heroName="Ram" />
				<HeroName heroName="Ansh" />
					<HeroName heroName="Jay" />
				</ErrorBoundaryExample>
 */}
       {/*  <ErrorBoundaryExample>
          <HeroName heroName="Ram" />
        </ErrorBoundaryExample>
        <ErrorBoundaryExample>
          <HeroName heroName="Ansh" />
        </ErrorBoundaryExample>
        <ErrorBoundaryExample>
          <HeroName heroName="Jay" />
        </ErrorBoundaryExample>
 */}
     {/* Without using HOC code is not reuse
        <Clickcounter/>
       <HoverCounter/> */}
    
 {/*   <ClickcounterUsingHoc/>
     <HoverCounterUsingHoc/> */} 
     
     {/* <ClickcounterUsingHoc name="TQPP"/>
     <HoverCounterUsingHoc/>  */} 
       
      {/* HOC Example  {/* <MyComponent/> */}
       {/*   <MyComponent name="jay"/>  */}

        {/* HOC example <Location/> */}
      {/*   <Location/>  */}
  
    {/* render props example <User name="balaji"/> 
    <UserOne /* name="jay" */ /* obj={ { name: "jay" } } *//* name={["jay", "ansh"]} */
    /* displayName={false} */ /* age={45}  name={() => [ "sara", "jay" ]}/>
    {/* <User name={()=>"balaji"}/> */}
    {/*    <User name={(isLoggedIn)=>isLoggedIn?"balaji":"User"}/> */}
     {/* <User render={(isLoggedIn)=>isLoggedIn?"Jay":"User"}/> */}
        {/* <Counter
					render={(count, incrementCount) =>
					<ClickCounterTwo
						count={count}
						incrementCount={incrementCount}>
					</ClickCounterTwo>}>
				</Counter>
				<Counter
					render={(count, incrementCount) =>
					<HoverCounterTwo
						count={count}
						incrementCount={incrementCount}>
					</HoverCounterTwo>}>
        </Counter>   */}
        {/*   // pass paramter as children
         <Counter>
         {(count, incrementCount) =>
					<ClickCounterTwo name="tq"
						count={count}
						incrementCount={incrementCount}>
					</ClickCounterTwo>}
				</Counter>
				<Counter>
        {(count, incrementCount) =>
					<HoverCounterTwo
						count={count}
						incrementCount={incrementCount}>
					</HoverCounterTwo>}
        </Counter>   */}

         {/* <UserProvider value="TQ">
      <ComponentC />
      </UserProvider> */}
    {/* <PostList/>  */}
    <PostList/>
    {/*  <GetExampleUsingAxios/>  */} 
     {/*     <PostForm/>    */}
   
 {/* <FetchExample/>  */}
  {/* <CURUDExample/>  */}  
     
      </div>
    );
  }
}









/* function App() {
  return (
    <div className="App">
        <Greet></Greet>

       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. 
          Hello world
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
    </div>
  );
} */

export default App;


