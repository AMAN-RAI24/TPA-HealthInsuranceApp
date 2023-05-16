import "./styles.css";
export function InsuranceCompanies() {
  return (
    <div className="insurance-list-container">
      <h1 style={{ width: "100%", textAlign: "center", fontSize: "42px" }}>
        Insurance Partners
      </h1>
      <div className="insurance-company">
        <img
          className="logo"
          src="https://images.unsplash.com/photo-1602667230857-e38de6938986?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <p className="name">ICICI Group</p>
      </div>
      <div className="insurance-company">
        <img
          className="logo"
          src="https://images.unsplash.com/photo-1655801904643-cd108a0694ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
        <p className="name">HDFC Group</p>
      </div>
    </div>
  );
}
