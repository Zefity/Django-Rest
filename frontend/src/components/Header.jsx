export default function Header() {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ backgroundColor: "rgb(91, 125, 156)" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            FSHL SHOP
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav-fill me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="FSHL.html"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link  dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Сategories
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="nav-link  dropdown-item"
                      href="Page-html/Male-page.html"
                    >
                      Male
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-link  dropdown-item"
                      href="Page-html/Female-page.html"
                    >
                      Female
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-link  dropdown-item"
                      href="Page-html/Unique-page.html"
                    >
                      Unique
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <div className="navbar-nav  mb-2 mb-lg-0" id="nav1">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <i className="fa fa-heart" aria-hidden="true"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  aria-current="page"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-user-circle" aria-hidden="true"></i>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Registration
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Authorization
                    </a>
                  </li>
                </ul>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
