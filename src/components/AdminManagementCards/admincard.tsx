function AdminCard(props: any) {
  return (
    <>
      <div className="card">
        <h6
          className="card-header"
          style={{ backgroundColor: props.color, color: props.text }}
        >
          {props.title}
        </h6>
        <div className="card-body">
          <h5 className="card-title">{props.head}</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a
            href="#"
            className="btn btn-primary"
            style={{ width: "8rem", marginTop: "1rem" }}
          >
            Manage Now
          </a>
        </div>
      </div>
    </>
  );
}

export default AdminCard;
