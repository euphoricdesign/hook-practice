const CountButton = function CountButton({ onClick, count, id }) {
    console.log("Rendering [CountButton] with [id] ::", id);
  
    useEffect(() => {
      console.log("[count]", id);
    }, [count]);
  
    useEffect(() => {
      console.log("[onClick]", id);
    }, [onClick]);
  
    return (
      <div>
        <span>id {id}</span>
        <button onClick={onClick}>{count.value}</button>
      </div>
    );
};



function App() {
    console.log("Rendering [App]");
  
    const [count1, setCount1] = React.useState({
      value: 0,
    });
  
    const increment1 = () =>
      setCount1((c) => ({
        value: c.value + 1,
      }));
  
    const [count2, setCount2] = React.useState({
      value: 0,
    });
  
    const increment2 = () =>
      setCount2((c) => ({
        value: c.value + 1,
      }));
  
    return (
      <>
        <CountButton id={1} count={count1} onClick={increment1} />
        <CountButton id={2} count={count2} onClick={increment2} />
      </>
    );
  }