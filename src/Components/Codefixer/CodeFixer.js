import './CodeFixer.css';
import MainView from './MainView.js';
import Navbar from '../MainNavbar/MainNavbar.js';


function Codefixer() {
  return (
    <div className="main-container">
      <Navbar/>
      <MainView/>
    </div>
  );
}
export default Codefixer