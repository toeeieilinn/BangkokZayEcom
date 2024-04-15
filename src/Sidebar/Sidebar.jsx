import Category from "./Category/Category";
//import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <img
            src="src/img/logo3.jpg"
            alt="Logo"
            width="95"
            height="95"
            className="d-inline-block align-text-top"
          />
        </div>
        <Category handleChange={handleChange} />{" "}
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;

//<Price handleChange={handleChange} />
