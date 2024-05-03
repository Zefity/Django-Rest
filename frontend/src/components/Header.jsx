import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  function handleLogin() {
    if (localStorage.getItem("refreshToken")) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  }

  return (
    <header
      style={{
        background: "linear-gradient(180deg, #5ab5b3 87%, #afa7a7 100%)",
      }}
    >
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <NavLink
            to="/"
            className="navbar-brand"
            style={{ fontSize: "larger" }}
          >
            FSHL SHOP
          </NavLink>

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
                <a className="nav-link active" href="#footer">
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
                      href="page-Male-page.html"
                    >
                      Male
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-link  dropdown-item"
                      href="page-Female-page.html"
                    >
                      Female
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-link  dropdown-item"
                      href="page-Unique-page.html"
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
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="page-favourites.html"
                >
                  <i className="fa fa-heart" aria-hidden="true"></i>
                </a>
              </li>
              <li className="nav-item">
                <NavLink to="/basket" className="nav-link">
                  <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleLogin}>
                  <i className="fa fa-user-circle" aria-hidden="true"></i>
                </a>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
