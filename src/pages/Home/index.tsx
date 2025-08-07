export default function Home() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Cantina App
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Produtos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Vendas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Eventos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <h1>Home</h1>
      </main>
    </>
  );
}
