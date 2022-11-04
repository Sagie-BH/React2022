

// demonstrating a functional component
const App = () => {
    const [count, setCount] = useState(0);
   
    useEffect(() => setCount((currentCount) => currentCount + 1), []);
   
    const handleIncrement = () => setCount((currentCount) => currentCount + 1);
   
    const handleDecrement = () => setCount((currentCount) => currentCount - 1);
   
    return (
      <div className="counter">
        <h1 className="count">{count}</h1>
   
        <button type="button" onClick={handleIncrement}>
          Increment
        </button>
        <button type="button" onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    );
   };
   
   export default App;