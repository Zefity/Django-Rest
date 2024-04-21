export default function FooterContactsSection() {
  return (
    <section className="d-flex justify-content-center justify-content-lg-between p-4 ">
      <div className="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      <div>
        <a href="https://mail.google.com/" className="me-4 text-reset">
          <i className="fab fa-google"></i>
        </a>
        <a href="#" className="me-4 text-reset">
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://github.com/Goal-Guide?tab=repositories"
          className="me-4 text-reset"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </section>
  );
}
