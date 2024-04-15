import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={100}
          title="10 THB - 100 THB"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={200}
          title="100 THB - 200 THB"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={300}
          title="200 THB - 300 THB"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={400}
          title="Over 300 THB"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
