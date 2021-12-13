import React from "react";
import { BtnContainer } from "./components/4.1_buttons/BtnContainer";
import { Cards } from "./components/4.2_cards/cards";

const App = () => {
  return (
    <div>
      <BtnContainer />
      <Cards />
    </div>
  );
};


// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <BtnContainer />
//       </div>
//     );
//   }
// }
export default App;
