
import './App.css';
import { AllRoutes } from './componants/AllRoutes/AllRoutes';

import Navbar from './componants/Home/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
