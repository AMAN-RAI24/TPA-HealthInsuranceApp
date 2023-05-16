import { Link } from "react-router-dom";

export function ViewSubmission(props: { policyId: number }) {
  return (
    <div>
      <p className="sub-section">
        The policy has been added successfully!!
        <Link to={"/view-policy/" + props.policyId}>View here</Link>
      </p>
    </div>
  );
}
