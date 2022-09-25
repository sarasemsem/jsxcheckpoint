import Profilephoto from './Component/Profile/ProfilePhoto';
import Fullname from './Component/Profile/Fullname';
import Adress from './Component/Profile/Adress';
import './App.css';

function App() {
  return (
    <div style={{marginTop:20, textAlign: "center"}}>
       <div><Profilephoto /></div> 
        <h3>
        first and last name: <Fullname />
        </h3>
        <h3>
        Adress <Adress />
        </h3>
           </div>
  );
}

export default App;
