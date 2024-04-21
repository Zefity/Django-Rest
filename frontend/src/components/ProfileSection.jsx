import axios from "axios";
import { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { NavLink } from "react-router-dom";

export default function ProfileSection() {
  // const [userData, setUserData] = useState("");

  // const refreshAuthToken = async () => {
  //   const refresh = {
  //     refresh: localStorage.getItem("refreshToken"),
  //   };
  //   try {
  //     const response = await axios.post(
  //       "http://127.0.0.1:8000/api/token/refresh/",
  //       refresh
  //     );
  //     localStorage.setItem("accessToken", response.data["access"]);
  //   } catch (error) {
  //     console.error("Ошибка при обновлении токена:", error);
  //   }
  // };

  // const fetchData = async () => {
  //   try {
  //     await refreshAuthToken();
  //     const getUserData = await axios.post(
  //       "http://127.0.0.1:8000/api/user/",
  //       {},
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //         },
  //       }
  //     );
  //     setUserData(getUserData.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   refreshAuthToken();
  //   fetchData();
  // }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userData");
  };

  return (
    <HelmetProvider>
      <section
        style={{
          background: "linear-gradient(0deg, #866537 0%, #afa7a7 100%)",
        }}
        id="page-user"
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
        <div className="container" mt="100px">
          <div className="main-body">
            <div className="row gutters-sm">
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img
                        src="Style/icon/1.jpg"
                        alt="Admin"
                        className="rounded-circle"
                        width="150"
                      />
                      <div className="mt-3">
                        <h4>{userData["username"]}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Username</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {userData["username"]}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {userData["email"]}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Phone</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {userData["phone_number"]}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Address</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {userData["adress"]}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-12">
                        <a className="btn btn-info " target="__blank" href="#">
                          Edit
                        </a>
                        <NavLink
                          to="/login"
                          className="btn btn-info "
                          onClick={handleLogout}
                        >
                          Exit
                        </NavLink>
                      </div>
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
