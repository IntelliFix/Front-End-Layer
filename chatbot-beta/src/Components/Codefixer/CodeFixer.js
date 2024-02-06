import './CodeFixer.css';
import Options from '../Codefixer_options/Options.js';
import Navbar from '../MainNavbar/MainNavbar.js';


function Codefixer() {
  return (
    <div className="main-container">
      <Navbar/>
      <Options/>
    </div>
  );
}
export default Codefixer