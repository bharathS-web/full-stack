// src/App.js   -> ex 1
// import React from 'react';
// import TodoList from './ToDoList';

// const App = () => {
//   return (
//     <center>
//     <div >
//       <TodoList />
//     </div>
//     </center>
//   );
// };

// export default App;


// src/App.js  -> ex 2
// import React from 'react';
// import StudentMarks from './StudentMarks';
// import TodoList from './ToDoList';

// const App = () => {

//   return (
//     <div className="app-container">
//       <h1 className="main-heading">Student Marks System</h1>
//       <StudentMarks />
//     </div>


//   );
// };


// export default App;



// src/App.js  -> ex 3
// src/App.jsx
import React from 'react';
import Weather from './Weather';
import './App.css'; 

const App = () => {
    return (
        <div className="app-container">
            <Weather />
        </div>
    );
};

export default App;