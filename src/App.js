import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Count></Count>
      <LoadComment></LoadComment>
    </div>
  );
};

const Count = () => {
  const [count, setCount] = useState(0);
  const incress = () => {
    setCount(count + 1);
  }
  const decress = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={incress}>incress</button>
      <button onClick={decress}>decress</button>
    </div>
  );
};

function LoadComment() {
  const [comments, setComments] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(Response => Response.json())
      .then(data => setComments(data))
  }, [])
  return (
    <div>
      {
        comments.map(comment => <DisplayComment email={comment.email}></DisplayComment>)
      }
    </div>
  );
};

const DisplayComment = (props) => {
  return (
    <div>
      <h2>email : {props.email}</h2>
    </div>
  )
}

export default App;
