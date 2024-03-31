export default function StyleSection({ things, isLoading }) {
  return (
    <section
      style={{ background: "linear-gradient(0deg, #866537 0%, #afa7a7 100%)" }}
    >
      <div className="container-fluid">
        <div className="container text-center">
          <div className="row">
            {isLoading ? null : (
              <>
                {things.map((thingsItem, index) => {
                  return (
                    <div key={thingsItem.id} className="col-lg-4 col-md-6">
                      <div className="card" style={{ width: "18rem" }}>
                        <img
                          src={thingsItem.image}
                          className="card-img-top"
                          alt="shop"
                        />
                        <div className="card-body">
                          <p className="card-text">{thingsItem.name}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
