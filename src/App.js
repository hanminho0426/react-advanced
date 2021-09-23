import "./App.css";
import React, { useState, useRef, myInputRef } from "react";
import Modal from "./components/Modal";
import MyInput from "./components/MyInput";

// const Person = React.memo(({ name, age }) => {
//   console.log("Person render");
//   return (
//     <div>
//       {name}/{age}
//     </div>
//   );
// });

// function App() {
//   const [state, setState] = React.useState({
//     text: "",
//     persons: [
//       { id: 1, name: "Mark", age: 39 },
//       { id: 2, name: "Hanna", age: 49 },
//     ],
//   });

//   const toPersonClick = React.useCallback(() => {}, []);

//   const { text, persons } = state;
//   return (
//     <div>
//       <input type="text" value={text} onChange={change} />
//       <ul>
//         {persons.map((person) => {
//           return <Person {...person} key={person.id} onClick={toPersonClick} />;
//         })}
//       </ul>
//     </div>
//   );

//   function change(e) {
//     setState({
//       ...state,
//       text: e.target.value,
//     });
//   }
// }

// function App() {
//   const [visible, satVisible] = useState(false);

//   const open = () => {
//     satVisible(true);
//   };

//   const close = () => {
//     satVisible(false);
//   };

//   return (
//     <div>
//       <button onClick={open}>open</button>
//       {visible && (
//         <Modal>
//           <div
//             style={{
//               width: "100vw",
//               height: "100vh",
//               background: "rgba(0,0,0,.5)",
//             }}
//             onClick={close}
//           >
//             Hello
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// }

function App() {
  const myInputRef = useRef();

  const click = () => {
    console.log(myInputRef.current.value);
  };

  return (
    <div>
      <MyInput ref={myInputRef} />
      <button onClick={click}>send</button>
    </div>
  );
}
export default App;
