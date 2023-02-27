export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-md"
      style={{ backgroundColor: "#75A4BD" }}
    >
      <div className="container-fluid">
        <a href="#" className="navbar-brand">
          <i className="bi bi-shop"></i>
          <span className="text-white">Ecommerce</span>
        </a>

        {/* Collapsed menu */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto  ">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="products">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Contact
              </a>
            </li>
          </ul>
          <form className="d-flex mt-1" role="search">
            <input
              className="form-control me-2 "
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
            <button className="btn btn-light me-4 " type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>

          <div className="text-center mt-1">
            <button className="btn btn-outline-light me-1 " type="button">
              <i className="bi bi-person-circle"></i>
            </button>
            <button
              type="button"
              className="btn btn-outline-light position-relative me-1 "
            >
              <i className="bi bi-basket2-fill"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                10
                <span className="visually-hidden">cart products</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
