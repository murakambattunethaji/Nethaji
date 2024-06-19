import logo from './logo.svg';
import './App.css';
import { Parent_component } from './Parent_component';
import RegistrationForm, { Users } from './Function_Components/Users';
import { User_Class_Component } from './Class_Components/Users_class';

function App() {
  return (
    <div>
      {/* <Parent_component/> */}
      {/* <  RegistrationForm /> */}
      <User_Class_Component/>
    </div>
  );
}

export default App;
