function Footer() {
  return (
    <>
      <footer
        className="bg-light text-center text-lg-start"
        style={{
          
          bottom: "0",
          position: "relative",
          width: "100%",
          marginTop: "1rem",
        }}
      >
        {/* <!-- Copyright --> */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">
            Placement & Training Cell, NIT Kurukshetra
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </>
  );
}

export default Footer;
