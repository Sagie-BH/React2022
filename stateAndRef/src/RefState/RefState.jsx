import { useEffect, useState } from "react";
import axios from "axios";
import Timer from "./Timer";
import { useRef } from "react";

const usePersisntetValue = (initialValue) => {
  return useState({
    current: initialValue
  })[0]
}

const RefState = ({ age, city }) => {
//   const [color, setColor] = useState("red");
  let name = "Sagie";
  let value = "red";

  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(0);

  // const refCounter = usePersisntetValue(null)

  const refCounter = useRef("")

  const Increment = () => {
    const newCount = counter + 1;
    setCounter(newCount);
    return counter;
  }

  let intervalId = "";

  const [users, setUsers] = useState([]);

  const stop = () => {
    window.clearInterval(refCounter.current)
  }

  useEffect(() => {
    refCounter.current = window.setInterval(() => {
      setTimer((c) => c + 1)
    }, 1000)
    return stop
  },[])


  useEffect(() => {
    const fetchUsers = async () => {
      const result = await axios('https://randomuser.me/api/?results=12');
      const resultUsers = await result.data.results;
      setUsers(resultUsers);
    }
    fetchUsers.myProp = "My Prop";
    fetchUsers();
    //Happens in end of component
    // return alert('hi');
  },[]);

//   useEffect(() => {
//     {/* dependencies */}
//   },[ {/* value */}]);


//   useEffect(() => {
//     {/*Every render including changing state */}
//   });


  return (
    <>
      {/* <h1 ref={}> State & Ref</h1>     Line - 20*/}
      <h2> {name}</h2>
      <h2> City: {city}</h2>
      <h2> {value}</h2>
      <Age age={age}></Age>
      {/* <h1> {color}</h1> */}
      {/* <h1>Gender {users[0].gender}</h1> */}

      {/* <button
        style={{ width: "100px", height: "50px" }}
        onClick={() => setColor("blue")}
      ></button> */}
      <br /><br /><br />
      <Timer  
       title={"Timer"}
       Increment={Increment}
       counter={counter}
       timer={timer}
       > </Timer>
       <button 
       style={{ width: "100px", height: "50px" }}
       onClick={stop}>Stop</button>
    </>
  );
};

export default RefState;

const Age = ({age}) => {
    return (<>
      <h3> Age : {age}</h3>
    </>
    )
}