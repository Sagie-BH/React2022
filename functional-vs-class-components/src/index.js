import * as React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react';

import './styles.css';


const FunctionalComponent=()=>{
  const[count , setCount] = useState(0);
  const increase=()=>{
      setCount(count+1);
  }
  return
      <div style={{margin:'50px'}}>
          <h1>Welcome to React </h1>
        <h2>{count}</h2>
          <button onClick={increase}>Add</button>
      </div>
} 

// Functional component
function MyHello() {
  return (<div>index</div>)
}

const MyHello = props => {
  return <div>Hello, {props.name}</div>;
};

// Functional component using ES6 arrow function expression
const MyHello2 = props => <div>Hello, {props.name}</div>;


// Class-based component
class MyHello3 extends React.Component {
  render() {
    return <div>Hello, {this.props.name}</div>;
  }
}

//Simple classes made up of multiple functions that add functionality to the application.
class ClassComponent extends React.Component{
  constructor(){
      super();
      this.state={ count :0 };
      this.increase=this.increase.bind(this);
  }
 increase(){
     this.setState({count : this.state.count +1});
 }
  render(){
      return (
          <div style={{margin:'50px'}}>
             <h1>Welcome to Geeks for Geeks </h1>
             <h3>Counter App using Class Component : </h3>
             <h2> {this.state.count}</h2> 
             <button onClick={this.increase}> Add</button>
          </div>
      )
  }
}

// Class-based component with state
class MyHello4 extends React.Component {
  state = { counter: 0 };
  // Call setState to update the component's state
  incrementCounter = () => {
    this.setState(state => ({
      ...state,
      counter: state.counter + 1
    }));
  };
  render() {
    return (
      <React.Fragment>
        <div>
          Hello, {this.props.name} {this.state.counter} times
        </div>
        <button onClick={this.incrementCounter}>Say it again</button>
      </React.Fragment>
    );
  }
}

// Class-based component have access to all the different phases of a React lifecycle method.
class MyHello5 extends React.Component {
  // return a Boolean value that specifies whether React should continue with the rendering
  shouldComponentUpdate() {
    return true; // Default
  }
  // access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
    "Before the update, the favorite was " + prevState.favoritecolor;
  }
  componentDidMount() {
    //  runs after the component output has been rendered to the DOM
    // The component is mounted - fetch the data from the server
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    // The component is updated - update the values
    // ...
  }
  //React has only one built-in method that gets called when a component is unmounted
  componentWillUnmount() {
    // The component is about to be unmounted - clean up
    // ...
  }
  // called right before the render & when component gets updated
  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
  render() {
    // ...
    return <div>...</div>;
  }
}

// Class-based component with a ref to a DOM element
class MyHello6 extends React.Component {
  constructor(props) {
    super(props);
    // Create a Ref for the button element
    this.inputRef = React.createRef();
  }

  // Focus on the textInput DOM element
  focusOnInput = () => this.inputRef.current.focus();

  render() {
    return (
      <div>
        <label htmlFor="textInput">Enter text</label>
        <input id="textInput" type="text" ref={this.inputRef} />
        {/* Move the focus to the text input when the button is clicked */}
        <button onClick={this.focusOnInput}> Focus on input control</button>
      </div>
    );
  }
}

// Class-based component with shouldComponentUpdate lifecycle method
class MyHello7 extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    let condition; // True or false
    // ...
    // Return true if the component should re-render
    if (condition) return true;
    // Return false if the component should NOT re-render
    else return false;
  }

  render() {
    // ...
    return <div>...</div>;
  }
}

// Class-based component derived from React.PureComponent
class MyHello8 extends React.PureComponent {
  // All you need to do is to extend React.PureComponent
  // instead of React.Component.

  render() {
    return <div>Hello, {this.props.name}</div>;
  }
}

const App = () => {
  return (
    <div className="App">
      <ClassComponent/>
      <h1>Functional and class-based React components</h1>
      <h2>A basic functional component</h2>
      <MyHello name="Jon" />

      <h2>A functional component using ES6 arrow function expression</h2>
      <MyHello2 name="Jon" />

      <h2>A basic class-based component"</h2>
      <MyHello3 name="Jon" />

      <h2>A class-based component with state</h2>
      <MyHello4 name="Jon" />

      <h2>A class-based component with a ref to a DOM element</h2>
      <MyHello6 />

      <h2>Class-based component derived from React.PureComponent</h2>
      <MyHello8 name="Jon" />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
