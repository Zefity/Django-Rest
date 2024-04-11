import React, { useEffect, useState } from "react";
import axios from "axios";

export default function LoginSection() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [isLoading, setIsLoading] = useState(false)

//   useEffect(() => {
//     if (token) {
//       fetch("/api/user", {
//         headers: {
//           "Content-Type": "application/json;charset=utf-8",
//           Authorization: `Token ${token}`,
//         },
//       })
//         .then((response) => {
//           if (response.ok) {
//             return response.json();
//             setEmail(data.email);
//             setError(null);
//           }
//         })
//         .catch((error) => {
//           console.log(error);
//           setError("Ошибка, подробности в консоли");
//         });
//     }
//   }, [token]);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     fetch("/api/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json;charset=utf-8",
//       },
//       body: JSON.stringify({
//         username: formUsername,
//         password: formPassword,
//       }),
//     })
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw Error(`Something went wrong: code ${response.status}`);
//         }
//       })
//       .then(({ key }) => {
//         setToken(key);
//         setError(null);
//       })
//       .catch((error) => {
//         console.log(error);
//         setError("Ошибка, подробности в консоли");
//       })
//       .finally(setLoading(false));
//   };

  function submitHandler(event) {
    event.preventDefault()

    setIsLoading(true)

    axios.post("http://127.0.0.1:8000/api/token/", {
      username,
      password,
    }).then((r) => {
      console.log(r)
      const { access, refresh } = r.data

      localStorage.setItem('accessToken', access)
      localStorage.setItem('refreshToken', refresh)
    }).catch(() => {
      alert('Ошибка')
    }).finally(() => setIsLoading(false))
  }

  return (
    <section
      className="vh-100 bg-image"
      style={{
        background: "linear-gradient(0deg, #866537 0%, #afa7a7 100%)",
        backgroundImage:
          "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
      }}
    >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Login
                  </h2>

                  <div>
                    {username}
                    <br />
                    {password}
                  </div>

                  <form onSubmit={submitHandler}>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example1cg"
                        className="form-control form-control-lg"
                        value={username}
                        disabled={isLoading}
                        onChange={(event) => setUsername(event.target.value)}
                      />
                      <label className="form-label" htmlFor="form3Example1cg">
                        username
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example3cg"
                        className="form-control form-control-lg"
                        value={password}
                        disabled={isLoading}
                        onChange={(event) => setPassword(event.target.value)}
                      />
                      <label className="form-label" htmlFor="form3Example3cg">
                        password
                      </label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      >
                        Register
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
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
  );
}
