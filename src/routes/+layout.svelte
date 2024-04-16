<script>
	import { onMount } from "svelte";
    let  path = "";
    let bands = "", about = "", forside = "active";

    onMount(() => {
        path = window.location.pathname;
    });

    // Reactive statement to update class based on the path
    $: {
        if (path === "/bands") {
            bands = "active";
            about = "";
            forside = "";
        } else if (path === "/about") {
            about = "active";
            bands = "";
            forside = "";
        } else {
            forside = "active";
            bands = "";
            about = "";
        }
    }
</script>

<nav
      class="navbar navbar-expand-sm navbar-dark bg-dark ps-5 pe-5"
>
      <div class="container-fluid">
        <a class="navbar-brand" href="/"><img src="/logo.svg" alt="Logo"/></a>
        <button
          class="navbar-toggler bg-primary"
          type="button"
          data-bs-toggle="collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto mb-2 mb-sm-0">
            <div class="btn-group" role="group">
              <a href="/" type="button" class="btn btn-primary {forside}">Forside</a>
              <a href="/bands" type="button" class="btn btn-primary {bands}">Bands</a>
              <a href="/about" class="btn btn-primary {about} ">Om festivalen</a>
              <a href="/admin" class="btn btn-primary"><i class="bi bi-lock-fill"></i></a>
            </div>
          </ul>
        </div>
      </div>
    </nav>

<slot></slot>


<footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top m-5 mt-5">
    <div class="col-md-6 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <img src="/logo-black.svg" alt="Logo"/>
      </a>
      <span class="mb-3 mb-md-0 text-body-secondary"><small>&copy; 2024 Fuzztival Esjberg</small></span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><i class="bi bi-facebook"></i></li>
      <li class="ms-3"><i class="bi bi-instagram"></i></li>
    </ul>
  </footer>


  <style>
    a {
      font-weight: bold;
      font-size: 16px;
    }

  </style>