import axios from "axios";
import { useState, useEffect } from "react";

export default function StyleSection() {
  const [categories, setCategories] = useState("");
  const [things, setThings] = useState("");

  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const getCategories = await axios.get(
        "http://127.0.0.1:8000/api/category/"
      );
      const getThings = await axios.get("http://127.0.0.1:8000/api/thing/");

      setCategories(getCategories.data);
      setThings(getThings.data);
      setisLoading(false);
      console.log(getThings.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(things);

  return (
    // <section
    //   style={{ background: "linear-gradient(0deg, #866537 0%, #afa7a7 100%)" }}
    // >
    //   <div className="container-fluid">
    //     <div className="container text-center">
    //       <div className="row">
    //         {isLoading ? null : (
    //           <>
    //             {things.map((thingsItem, index) => {
    //               return (
    //                 <div key={thingsItem.id} className="col-lg-4 col-md-6">
    //                   <div className="card" style={{ width: "18rem" }}>
    //                     <img
    //                       src={thingsItem.image}
    //                       className="card-img-top"
    //                       alt="shop"
    //                     />
    //                     <div className="card-body">
    //                       <p className="card-text">{thingsItem.name}</p>
    //                     </div>
    //                   </div>
    //                 </div>
    //               );
    //             })}
    //           </>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section
      style={{ background: "linear-gradient(0deg, #866537 0%, #afa7a7 100%)" }}
    >
      <div className="container-fluid ">
        <div className="container text-center">
          <div className="col-lg-12 col-md-12">
            <div className="row">
              <div
                id="carouselExampleInterval"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner" id="inner">
                  <div
                    className="carousel-item active"
                    data-bs-interval="10000"
                  >
                    <div className="d-block w-100" id="carousel1">
                      <div className="row">
                        <div className="col-lg-12 col-md-12">
                          <img
                            src="/src/assets/icon/shop.png"
                            className="w-50"
                            alt="nikita"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            {isLoading ? null : (
              <>
                {things.map((thingsItem, index) => {
                  return (
                    <div
                      key={thingsItem.id}
                      className="col-lg-4 col-md-6 mb-4"
                      id="card-style"
                    >
                      <div
                        className="card"
                        style={{ width: "18rem" }}
                        id="card1"
                      >
                        <a href="page-card.html">
                          <center>
                            <img
                              src={thingsItem.image}
                              className="card-img-top"
                              alt="shop"
                            />
                          </center>
                          <div className="card-body">
                            <p className="card-text">{thingsItem.name}</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
      {/* </div> */}
      <center>
        <nav
          aria-label="Page navigation example"
          style={{ backgroundColor: "#866537" }}
        >
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </center>
    </section>
  );
}
