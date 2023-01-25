import React,{ useState, useEffect} from 'react'
import '../styles/App.css';

const App = () => {
  //Write your code here
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const designation = searchParams.get("designation");
    setEmployee({ id, name, designation });
  }, []);

  return (
    <div className="App">
      <div className="details">
        Employee {employee.id} named {employee.name} works as {employee.designation}
      </div>
    </div>
  );
}

export default App;
