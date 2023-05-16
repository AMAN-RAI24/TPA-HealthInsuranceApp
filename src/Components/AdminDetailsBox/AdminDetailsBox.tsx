import "./styles.css";
type item = {
  title: string;
  number: number;
};
function AdminDetailsBox(props: {
  heading: string;
  item1: item;
  item2: item;
  item3: item;
  item4: item;
}) {
  return (
    <div className="box">
      <h2 style={{ textAlign: "center" }}>{props.heading}</h2>
      <div className="row">
        <div className="item red">
          <p>{props.item1.title}</p>
          <p>{props.item1.number}</p>
        </div>
        <div className="item blue">
          <p>{props.item2.title}</p>
          <p>{props.item2.number}</p>
        </div>
      </div>
      <div className="row">
        <div className="item green">
          <p>{props.item3.title}</p>
          <p>{props.item3.number}</p>
        </div>
        <div className="item yellow">
          <p>{props.item4.title}</p>
          <p>{props.item4.number}</p>
        </div>
      </div>
    </div>
  );
}
export default AdminDetailsBox;
