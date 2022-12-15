import './App.css';
import React from 'react';
import Username from './components/Username';


export const UserContext = React.createContext(); 


function App() {
  return (
    <div className="App">
      <UserContext.Provider value="Jesus">
        <Username/>
      </UserContext.Provider>
    </div>
  );
}

// function User() {
//   const value = React.useContext(UserContext);
//   return <h1>{value}</h1>;
//   // return (
//   //   <UserContext.Consumer>
//   //     {value =>  <h1>{value}</h1>}
//   //   </UserContext.Consumer>
//   // )
// }

export default App;
