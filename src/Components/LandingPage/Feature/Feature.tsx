export function Feature(props: {
  image: string;
  title: string;
  details: string;
}) {
  return (
    <div className="feature-slab">
      <div className="feature-image">
        <img src={props.image} alt="" />
      </div>
      <div className="feature-details">
        <h2>{props.title}</h2>
        <p>{props.details}</p>
      </div>
    </div>
  );
}
