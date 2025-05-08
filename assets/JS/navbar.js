document.querySelector("header").innerHTML += `
<nav class="navbar navbar-expand-lg navbar-light bg-white  border-2 border-dark border-top border-bottom shadow">
        <div class="container-fluid">
          <a class="navbar-brand m-1">
            <img src="assets/images/LOGO.png" alt="logo" width="150px" height="50px">
        </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">HOME</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="products.html">PRODUCTS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">ABOUT US</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">CONTACT US</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="comparison.html">COMPARISON</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  BRANDS
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a  class="dropdown-item" href="samsung.html">Samsung</a></li>
                  <li><a class="dropdown-item" href="pel.html">Pel</a></li>
                  <li><a class="dropdown-item" href="haier.html">Haier</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      `