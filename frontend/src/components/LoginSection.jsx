import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useNavigate, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function LoginSection() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login") {
      localStorage.clear();
    }
  }, [location.pathname]);

  function submitHandler(event) {
    event.preventDefault();

    setIsLoading(true);

    axios
      .post("http://127.0.0.1:8000/api/token/", {
        username,
        password,
      })
      .then((r) => {
        console.log(r);
        const { access, refresh } = r.data;

        localStorage.setItem("accessToken", access);
        localStorage.setItem("refreshToken", refresh);
        localStorage.setItem("tokenStatus", r.status);

        const jwt = localStorage.getItem("accessToken");

        axios
          .post(
            "http://127.0.0.1:8000/api/user/",
            {},
            {
              headers: {
                Authorization: `Bearer ${jwt}`,
              },
            }
          )
          .then((r) => {
            localStorage.setItem("userData", r.data);
            console.log(r.data);

            if (
              localStorage.getItem("tokenStatus") === "200" &&
              r.status === 200
            ) {
              navigate("/");
            }
          })
          .catch((error) => {
            console.error(error); // Обрабатываем ошибки при запросе
          });
      })
      .catch(() => {
        alert("Ошибка");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <HelmetProvider>
      <section
        className="vh-100"
        style={{
          background: "linear-gradient(0deg, #866537 0%, #afa7a7 100%)",
        }}
      >
        <Helmet>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>FSHL SHOP</title>
          <link
            rel="shortcut icon"
            href="Style/icon/shop.png"
            type="image/x-icon"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https: //fonts.googleapis.com/css2?family= семья= Доза:wght@200;300;400;500;700;800 & stylesheet" />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
            integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
            crossorigin="anonymous"
          />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
            crossorigin="anonymous"
          />
          <link rel="stylesheet" href="\style css\style-body.css" />
          <link rel="stylesheet" href="\style css\style-footer.css" />
        </Helmet>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={submitHandler}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#ff6219" }}
                          ></i>
                          <span className="h1 fw-bold mb-0">FSHL SHOP</span>
                        </div>
                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Sign into your account
                        </h5>
                        <div className="form-outline mb-4">
                          <input
                            type="username"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            onChange={(e) => setUsername(e.target.value)}
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example17"
                          >
                            Username
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example27"
                            className="form-control form-control-lg"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example27"
                          >
                            Password
                          </label>
                        </div>
                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="submit"
                          >
                            Login
                          </button>
                        </div>
                        <a className="small text-muted" href="#!">
                          Forgot password?
                        </a>
                        <p
                          className="mb-5 pb-lg-2"
                          style={{ color: "#393f81" }}
                        >
                          Don't have an account?{" "}
                          <NavLink
                            to="/registration"
                            style={{ color: "#393f81" }}
                          >
                            Register here
                          </NavLink>
                          {/* <a
                            href="page-register.html"
                            style={{ color: "#393f81" }}
                          >
                            Register here
                          </a> */}
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
}
