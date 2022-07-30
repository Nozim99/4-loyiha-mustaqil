import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-dark bg-primary px-2 px-sm-4 px-lg-5 text-white Header">
      <h1 onClick={()=>navigate('')} className="cursor-pointer">Nozim</h1>
      <div>
        <span
          onClick={() => navigate("about")}
          className="me-lg-4 Header-btn cursor-pointer"
        >
          About
        </span>
        <span
          onClick={() => navigate("contact")}
          className="Header-btn cursor-pointer"
        >
          Contact
        </span>
      </div>
    </nav>
  );
};

export default Header;
