import { Container } from "./components/2.1_hello_world/Container"
import { Container2 } from './components/2.2/Container2';
import { Boxes } from './components/3.1_boxes/Container3';
const App = () => {

  return (
    <div>
      <Container2 />
      <Container />
      <Boxes />
    </div>
  )
}
export default App