class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0, age:16 };
    }
    componentDidMount() {
      this.setState({ count: this.state.count + 1 });
    }
   
   handleIncrement = () => {
      this.setState({ count: this.state.count + 1 });
    };
   
   handleDecrement = () => {
      this.setState({ count: this.state.count - 1 });
   };

    render() {
      return (
        <div className="counter">
          <h1 className="count">{this.state.count}</h1>
   
          <button type="button" onClick={this.handleIncrement}>
            Increment
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Decrement
          </button>
        </div>
      );
    }
}

export default Counter;