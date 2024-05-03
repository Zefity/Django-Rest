import { NavLink } from "react-router-dom";
import { useEffect, useState, useRe } from "react";
import axios from "axios";

export default function BasketSection() {
  const [basketData, setBasketData] = useState("");
  const [thingsData, setThingsData] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.post(
  //         "http://127.0.0.1:8000/api/cart/basket/list/",
  //         {},
  //         {
  //           headers: {
  //             Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //           },
  //         }
  //       );
  //       setBasketData(response.data);
  //       console.log(response.data);

  //       const basketValues = Object.values(response.data);

  //       basketValues.forEach(async (data) => {
  //         try {
  //           let getThingData = await axios.get(
  //             `http://127.0.0.1:8000/api/thing/${data.thing}`
  //           );

  //           setThingsData((prevThingsData) => [
  //             ...prevThingsData,
  //             getThingData.data,
  //           ]);
  //           console.log(thingsData);
  //         } catch (error) {
  //           console.error(error);
  //         }
  //       });

  //       console.log(thingsData);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   const refreshAndFetchData = async () => {
  //     await refreshAuthToken();
  //     fetchData();
  //   };

  //   refreshAndFetchData();
  // }, []);

  const refreshAuthToken = async () => {
    const refresh = {
      refresh: localStorage.getItem("refreshToken"),
    };
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/token/refresh/",
        refresh
      );
      localStorage.setItem("accessToken", response.data["access"]);
      console.log(response.data);
    } catch (error) {
      console.error("Ошибка при обновлении токена:", error);
    }
  };

  const fetchThingsData = async () => {
    await refreshAuthToken();
    const response = await axios.post(
      "http://127.0.0.1:8000/api/cart/basket/list/",
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    console.log(response.data);

    response.data.forEach(async (data) => {
      try {
        const getThingData = await axios.get(
          `http://127.0.0.1:8000/api/thing/${data.thing}`
        );

        setThingsData((prevThingsData) => [
          ...prevThingsData,
          getThingData.data,
        ]);

        console.log(thingsData[1]);
      } catch (error) {
        console.error(error);
      }
    });
  };

  useEffect(() => {
    fetchThingsData();
  }, []);

  return (
    <section
      className="h-100 h-custom"
      style={{ background: "linear-gradient(0deg, #866537 0%, #afa7a7 100%)" }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card">
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-lg-7">
                    <h5 className="mb-3">
                      <NavLink to="/" className="text-body">
                        <i className="fas fa-long-arrow-alt-left me-2"></i>
                        Continue shopping
                      </NavLink>
                    </h5>
                    <hr />

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Shopping cart</p>
                        <p className="mb-0">You have 4 items in your cart</p>
                      </div>
                    </div>

                    {/* <>
                      {thingsData.map((thingsItem, index) => {
                        return ( */}
                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                            <div
                              className="bg-image hover-overlay hover-zoom ripple rounded"
                              data-mdb-ripple-color="light"
                            >
                              <img
                                src="Style/icon/2.jpg"
                                className="w-100"
                                alt="Blue Jeans Jacket"
                              />
                              <a href="#!">
                                <div
                                  className="mask"
                                  style={{
                                    backgroundColor: "rgba(251, 251, 251, 0.2)",
                                  }}
                                ></div>
                              </a>
                            </div>
                          </div>

                          <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                            <p>
                              <strong>dwq</strong>
                            </p>
                            <p>Color: blue</p>
                            <p>Size: M</p>
                            <button
                              type="button"
                              className="btn btn-primary btn-sm me-1 mb-2"
                              data-mdb-toggle="tooltip"
                              title="Remove item"
                            >
                              <i className="fas fa-trash"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger btn-sm mb-2"
                              data-mdb-toggle="tooltip"
                              title="Move to the wish list"
                            >
                              <i className="fas fa-heart"></i>
                            </button>
                          </div>

                          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <div
                              className="d-flex mb-4"
                              style={{ maxWidth: "300px" }}
                            >
                              <button
                                className="btn btn-primary px-3 me-2"
                                // onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
                              >
                                <i className="fas fa-minus"></i>
                              </button>

                              <div className="form-outline">
                                <input
                                  id="form1"
                                  min="0"
                                  name="quantity"
                                  defaultValue="1"
                                  type="number"
                                  className="form-control"
                                />
                                <label className="form-label" htmlFor="form1">
                                  Quantity
                                </label>
                              </div>

                              <button
                                className="btn btn-primary px-3 ms-2"
                                // onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                            </div>

                            <p className="text-start text-md-center">
                              <strong>$17.99</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* );
                      })}
                    </> */}
                  </div>
                  <div className="col-lg-5">
                    <div className="card bg-primary text-white rounded-3">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <h5 className="mb-0">Card details</h5>
                        </div>

                        <p className="small mb-2">Card type</p>
                        <a href="#!" type="submit" className="text-white">
                          <i className="fab fa-cc-mastercard fa-2x me-2"></i>
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <i className="fab fa-cc-visa fa-2x me-2"></i>
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <i className="fab fa-cc-amex fa-2x me-2"></i>
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <i className="fab fa-cc-paypal fa-2x"></i>
                        </a>

                        <form className="mt-4">
                          <div className="form-outline form-white mb-4">
                            <input
                              type="text"
                              id="typeName"
                              className="form-control form-control-lg"
                              siez="17"
                              placeholder="Cardholder's Name"
                            />
                            <label className="form-label" htmlFor="typeName">
                              Cardholder's Name
                            </label>
                          </div>

                          <div className="form-outline form-white mb-4">
                            <input
                              type="text"
                              id="typeText"
                              className="form-control form-control-lg"
                              siez="17"
                              placeholder="1234 5678 9012 3457"
                              minLength="19"
                              maxLength="19"
                            />
                            <label className="form-label" htmlFor="typeText">
                              Card Number
                            </label>
                          </div>

                          <div className="row mb-4">
                            <div className="col-md-6">
                              <div className="form-outline form-white">
                                <input
                                  type="text"
                                  id="typeExp"
                                  className="form-control form-control-lg"
                                  placeholder="MM/YYYY"
                                  size="7"
                                  minLength="7"
                                  maxLength="7"
                                />
                                <label className="form-label" htmlFor="typeExp">
                                  Expiration
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-outline form-white">
                                <input
                                  type="password"
                                  id="typeTextInput"
                                  className="form-control form-control-lg"
                                  placeholder="&#9679;&#9679;&#9679;"
                                  size="1"
                                  minLength="3"
                                  maxLength="3"
                                />
                                <label
                                  className="form-label"
                                  htmlFor="typeTextInput"
                                >
                                  Cvv
                                </label>
                              </div>
                            </div>
                          </div>
                        </form>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2">$4798.00</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Shipping</p>
                          <p className="mb-2">$20.00</p>
                        </div>

                        <div className="d-flex justify-content-between mb-4">
                          <p className="mb-2">Total(Incl. taxes)</p>
                          <p className="mb-2">$4818.00</p>
                        </div>

                        <button
                          type="button"
                          className="btn btn-info btn-block btn-lg"
                        >
                          <div className="d-flex justify-content-between">
                            <span>$4818.00 </span>
                            <span>
                              Checkout{" "}
                              <i className="fas fa-long-arrow-alt-right ms-2"></i>
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
