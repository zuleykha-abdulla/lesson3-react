import { Link } from "react-router-dom";
import "./Header.css";


const Header = () => {
  return (
    <div>
      <Link to="/">Logo</Link>
     
      <nav>
        <ul>
          <li>
            <a href="#">Ana Sehife</a>
          </li>
          <li>
            <Link to="/about">Haqqimizda</Link>
          </li>
          
          <li>
            
        <Link to= "/gallery"> Galeriya</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;