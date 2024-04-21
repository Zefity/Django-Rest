import axios from "axios";
import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

export default function RegistrationSection() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adress, setAdress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();

    const data = {
      username: username,
      email: email,
      password: password,
      adress: adress,
      number: phoneNumber,
    };

    axios
      .post("http://127.0.0.1:8000/api/user/registration/", data)
      .then((r) => {
        console.log(r);
        localStorage.setItem("registerStatus", r.status);
        if (r.status === 200) {
          navigate("/login");
        }
      })
      .catch(() => {
        alert("Ошибка");
      });
  }

  return (
    <HelmetProvider>
      <section
        className="vh-100 bg-image "
        style={{
          background: "linear-gradient(0deg, #866537 0%, #afa7a7 100%)",
        }}
      >
        <Helmet>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-4">
                    <h2 className="text-uppercase text-center mb-5">
                      Create an account
                    </h2>

                    <form onSubmit={submitHandler}>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          onChange={(e) => setUsername(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form3Example1cg">
                          Username
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form3Example3cg">
                          Your Email
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="tel"
                          id="phoneInput"
                          className="form-control form-control-lg"
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <label className="form-label" htmlFor="phoneInput">
                          Phone
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="adressInput"
                          className="form-control form-control-lg"
                          onChange={(e) => setAdress(e.target.value)}
                        />
                        <label className="form-label" htmlFor="adressInput">
                          Address
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="passInput"
                          className="form-control form-control-lg"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="form-label" htmlFor="passInput">
                          Password
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cdg"
                          className="form-control form-control-lg"
                          onChange={(e) => setRepeatPassword(e.target.value)}
                        />
                        <label
                          className="form-label"
                          htmlFor="form3Example4cdg"
                        >
                          Repeat your password
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          href="page-login.html"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                          type="submit"
                        >
                          Register
                        </button>
                      </div>

                      <p className="text-center text-muted mt-2 mb-0">
                        Have already an account?{" "}
                        <a href="page-login.html" className="fw-bold text-body">
                          <u>Login here</u>
                        </a>
                      </p>
                    </form>
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
