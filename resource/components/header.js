const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
<link rel="stylesheet" href="resource/css/main.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
    crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
    crossorigin="anonymous"></script>
   <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400&display=swap" rel="stylesheet">
<style>
		.parent {
			display: block;
			position: relative;
			float: left;
			line-height: 30px;
		}
		.parent:hover>ul {
			display: block;
			position: absolute;
		}
    .dropdown-menu li {
      position: relative;
      }
     .dropdown-menu .submenu {
      display: none;
        position: absolute;
         left: 100%;
          top: -7px;
     }
     .dropdown-menu .submenu-left {
       right: 100%;
       left: auto;
      }
      .dropdown-menu > li:hover > .submenu {
        display: block;
       }
       header{
         background: #212529;
       }
    .navbar{
      font-size: 18px;
    }
	</style>
  
<header>
<<<<<<< HEAD

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container-fluid"> 
<ul class="navbar-nav me-auto mb-2 mb-lg-0 m-auto"> 
  <img src="resource/img/logo_h.png" class="img-fluid " alt="">
  </ul>
  </div>
  </nav>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 m-auto">      
          <li class="parent">
              <a class="nav-link active" aria-current="page" href="index.html">Nosotros</a>
            </li>
      <li class="parent dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sistema Integrado de Gestión
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

                <li><a class="dropdown-item" href="#"> Macroprocesos Estratégicos &raquo; </a>
                  <ul class="submenu dropdown-menu">
                      <li><a class="dropdown-item" href="gestion_de_mejora_continua.html">Gestión de
                              Mejora Continua </a></li>
                      <li><a class="dropdown-item"
                              href="gestion_direccionamiento_estrategico.html">Gestión Direccionamiento
                              Estratégico </a></li>
                  </ul>
              </li>

              <li><a class="dropdown-item" href="#"> Macroprocesos Misionales &raquo; </a>
                  <ul class="submenu dropdown-menu">
                      <li><a class="dropdown-item"
                              href="documentos_transversales_al_macroproceso.html">Documentos
                              transversales al macroproceso </a></li>
                      <li><a class="dropdown-item" href="gestion_de_hospitalizacion.html">Gestión de
                              hospitalización </a></li>
                      <li><a class="dropdown-item" href="gestión_de_urgencias.html">Gestión de urgencias
                          </a></li>
                      <li><a class="dropdown-item"
                              href="gestion_consulta_externa_intramural_y_extramural.html">Gestión
                              consulta externa intramural
                              y
                              extramural </a></li>
                      <li><a class="dropdown-item"
                              href="gestion_de_apoyo_terapeutico_y_diagnostico.html">Gestión de apoyo
                              terapéutico y diagnóstico </a></li>
                  </ul>
              </li>               

              <li><a class="dropdown-item" href="#"> Macroprocesos de Apoyo &raquo; </a>
                  <ul class="submenu dropdown-menu">
                      <li><a class="dropdown-item" href="gestion_del_talento_humano.html">Gestión del
                              Talento Humano </a></li>
                      <li><a class="dropdown-item" href="gestion_juridica.html">Gestión Jurídica </a></li>
                      <li><a class="dropdown-item" href="gestion_de_bienes_y_servicios.html">Gestión de
                              Bienes y Servicios </a></li>
                      <li><a class="dropdown-item"
                              href="gestion_de_la_informacion_y_estadística.html">Gestión de la
                              Información y Estadística </a></li>
                      <li><a class="dropdown-item" href="gestion_del_siau.html">Gestión del SIAU </a></li>
                      <li><a class="dropdown-item" href="gestion_financiera_y_administrativa.html">Gestión
                              Financiera y Administrativa </a></li>
                  </ul>
              </li>

              <li><a class="dropdown-item" href="#"> Macroprocesos de Seguimiento &raquo; </a>
                  <ul class="submenu dropdown-menu">
                      <li><a class="dropdown-item" href="gestión_de_seguimiento_y_control.html">Gestión de
                              Seguimiento y Control </a></li>
                  </ul>
              </li>

              <li><a class="dropdown-item" href="formatos_enfermeria.html">Formatos Enfermeria y Medicina</a></li>

              <li><a class="dropdown-item"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfqqNnJlQ1_xnIUG1axZ312dpG2flL8cgg32QZw30S8ke9G_w/viewform?vc=0&c=0&w=1&flr=0"
                  target="_blank">Solicitud de Cambios en el S.I.G. </a>
                  </li>
              </ul>
            </li>
        <li class="parent">
          <a class="nav-link active" aria-current="page" href="covid_19.html">Documentos Covid19</a>
        </li>
        <li class="parent dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Programa de Capacitaciones
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a class="dropdown-item" href="induccion_y_reinduccion.html">Inducción y Re-Inducción</a>
            </li>
            <li>
              <a class="dropdown-item" href="plan_capacitaciones.html">Plan de Capacitaciones</a>
            </li>
          </ul>
        </li>
        <li class="parent">
          <a class="nav-link active" aria-current="page" href="trd.html">TRD</a>
        </li>
        <li class="parent">
          <a class="nav-link active" aria-current="page" href="http://192.168.1.90:5050" target="_blank">GESPME</a>
        </li>                 
      </ul>
  </div>
</nav>
=======
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="main_nav">
                <ul class="navbar-nav">

		<li class="parent"><a class="nav-link" href="index.html">Nosotros </a></li>
                    <li class="parent">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Sistema Integrado de
                            Gestion (S.I.G.)</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#"> Macroprocesos Estratégicos &raquo; </a>
                                <ul class="submenu dropdown-menu">
                                    <li><a class="dropdown-item" href="gestion_de_mejora_continua.html">Gestión de
                                            Mejora Continua </a></li>
                                    <li><a class="dropdown-item"
                                            href="gestion_direccionamiento_estrategico.html">Gestión Direccionamiento
                                            Estratégico </a></li>
                                </ul>
                            </li>
                            <li><a class="dropdown-item" href="#"> Macroprocesos Misionales &raquo; </a>
                                <ul class="submenu dropdown-menu">
                                    <li><a class="dropdown-item"
                                            href="documentos_transversales_al_macroproceso.html">Documentos
                                            transversales al macroproceso </a></li>
                                    <li><a class="dropdown-item" href="gestion_de_hospitalizacion.html">Gestión de
                                            hospitalización </a></li>
                                    <li><a class="dropdown-item" href="gestión_de_urgencias.html">Gestión de urgencias
                                        </a></li>
                                    <li><a class="dropdown-item"
                                            href="gestion_consulta_externa_intramural_y_extramural.html">Gestión
                                            consulta externa intramural
                                            y
                                            extramural </a></li>
                                    <li><a class="dropdown-item"
                                            href="gestion_de_apoyo_terapeutico_y_diagnostico.html">Gestión de apoyo
                                            terapéutico y diagnóstico </a></li>

                                </ul>
                            </li>

                            <li><a class="dropdown-item" href="#"> Macroprocesos de Apoyo &raquo; </a>
                                <ul class="submenu dropdown-menu">
                                    <li><a class="dropdown-item" href="gestion_del_talento_humano.html">Gestión del
                                            Talento Humano </a></li>
                                    <li><a class="dropdown-item" href="gestion_juridica.html">Gestión Jurídica </a></li>
                                    <li><a class="dropdown-item" href="gestion_de_bienes_y_servicios.html">Gestión de
                                            Bienes y Servicios </a></li>
                                    <li><a class="dropdown-item"
                                            href="gestion_de_la_informacion_y_estadística.html">Gestión de la
                                            Información y Estadística </a></li>
                                    <li><a class="dropdown-item" href="gestion_del_siau.html">Gestión del SIAU </a></li>
                                    <li><a class="dropdown-item" href="gestion_financiera_y_administrativa.html">Gestión
                                            Financiera y Administrativa </a></li>
                                </ul>
                            </li>

                            <li><a class="dropdown-item" href="#"> Macroprocesos de Seguimiento &raquo; </a>
                                <ul class="submenu dropdown-menu">
                                    <li><a class="dropdown-item" href="gestión_de_seguimiento_y_control.html">Gestión de
                                            Seguimiento y Control </a></li>
                                </ul>
                            </li>
                            <li><a class="dropdown-item"
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSfqqNnJlQ1_xnIUG1axZ312dpG2flL8cgg32QZw30S8ke9G_w/viewform?vc=0&c=0&w=1&flr=0"
                                    target="_blank">Solicitud de Cambios en el S.I.G. </a>
                        </ul>
                    </li>
                    <li class="parent"><a class="nav-link" href="covid_19.html">Documentos Covid-19</a></li>
                    
                            
                    <li class="parent">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Programa de Capacitaciones</a>
                        <ul class="dropdown-menu">
                             <li><a class="dropdown-item" href="induccion_y_reinduccion.html">Inducción y Re-Inducción</a></li>
                                    <li><a class="dropdown-item" href="plan_capacitaciones.html">Plan de Capacitaciones</a></li>
                            
                        </ul>
                    </li>
                    
                    <li class="parent"><a class="nav-link" href="trd.html">TRD</a></li>
                    

                </ul>
>>>>>>> b45ef05e8f35d6a85ed2114a33f1a97a7b83a3e0

</header>

<aside class="derecha">
<iframe
    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FHospitalTauramena%2F&tabs=timeline&width=300&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=125533584131229"
<<<<<<< HEAD
    width="300" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0"
=======
    width="300" height="550" style="border:none;overflow:hidden" scrolling="no" frameborder="0"
>>>>>>> b45ef05e8f35d6a85ed2114a33f1a97a7b83a3e0
    allowfullscreen="true"
    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
</aside>

    
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({
      mode: 'closed'
    });
    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);
