import logo from "../../Assets/logo.png";
import "./styles.css";
function FormHeader(props: { title: string }) {
  return (
    <div className="form-header">
      <div className="circle">
        <img src={logo} alt="" />
      </div>
      <h2>{props.title}</h2>
    </div>
  );
}
export default FormHeader;
