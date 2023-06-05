import React from 'react'
import { Gusto, Projects } from './componentes'
import './App.css'

function App() {
  function reveal() {
    const reveals = document.querySelectorAll('.reveal')

    for (let i = 0; i < reveals.length; i++) {
      const windowheight = window.innerHeight
      const revealtop = reveals[i].getBoundingClientRect().top
      const revealpoint = 150

      if (revealtop < windowheight - revealpoint) {
        reveals[i].classList.add('active')
      } else {
        reveals[i].classList.remove('active')
      }
    }
  }

  window.addEventListener('scroll', reveal)

  return (
    <div className="all">
      <div className="nav">
        <button className="boton" type="button">
          Introduction
        </button>
        <div className="navButtons">
          <a href="#Yo">
            <button className="boton" type="button">
              More About Me
            </button>
          </a>
          <a href="#Skills">
            <button className="boton" type="button">
              Skills
            </button>
          </a>
          <a href="#Projects">
            <button className="boton" type="button">
              Projects
            </button>
          </a>
        </div>
      </div>
      <div className="secciones inicio">
        <div className="me">
          <div className="secTexto">
            <p className="texto">I am a </p>
          </div>
          <div className="principios">
            <div
              onClick={() => {
                window.open(
                  'https://medium.com/@maxwellkjr/hello-world-how-video-games-led-me-to-coding-20e206c156e2'
                )
              }}
              className="principio one"
            >
              VideoGames
            </div>
            <div
              onClick={() => {
                window.open('https://whojesusis.com/')
              }}
              className="principio two"
            >
              Jesus
            </div>
            <div
              onClick={() => {
                window.open(
                  'https://www.forbes.com/sites/forbestechcouncil/2022/12/21/coding-is-an-art-form-how-to-curate-an-environment-that-fosters-creativity/?sh=43a0dae7606e'
                )
              }}
              className="principio three"
            >
              Coding
            </div>
          </div>
        </div>
      </div>
      <div id="Yo" className="secciones Me">
        <div className="Mecontent reveal">
          <h2>About Me</h2>
          <div className="sectoresMe">
            <div className="gustos">
              <div className="GustosTitle">Things I like</div>
              <div className="Allgustos">
                <Gusto
                  url="https://elordenmundial.com/wp-content/uploads/2020/10/NBA-logo-baloncesto-historia-deporte-estados-unidos.jpg"
                  title="NBA"
                  paragraph="La NBA es una de las competiciones deportivas más importantes del mundo. Este negocio millonario congrega a espectadores de todo el planeta y sus principales jugadores y equipos tienen una enorme popularidad. Pero además el baloncesto forma parte de la identidad de EE. UU., es reflejo de las convulsiones políticas del país y sirve como una herramienta diplomática del Gobierno."
                />
                <Gusto
                  url="https://www.salvoxgracia.com/wp-content/uploads/2019/01/la-biblia-sus-atributos.jpg"
                  title="Biblia"
                  paragraph="Se conoce como la Biblia a un conjunto de textos religiosos que sirven de sustento sagrado tanto a la religión judía (Antiguo Testamento) como cristiana (Antiguo y Nuevo Testamentos). Se trata del libro más vendido de todos los tiempos, con 100 millones de copias anuales, traducido a 2454 idiomas."
                />
                <Gusto
                  url="https://cdn2.unrealengine.com/egs-social-rocketleague-news-1920x1080-1920x1080-975383433.jpg"
                  title="Rocket League"
                  paragraph="Rocket League es un videojuego multijugador desarrollado por Psyonix, un desarrollador de videojuegos con sede en California. Por lo general, involucra a dos equipos que luchan entre sí en una variedad de rondas que involucran baloncesto, fútbol y hockey basados ​​​​en automóviles para marcar la mayor cantidad de goles. liga de cohetes es clasificado PEGI 3."
                />
              </div>
            </div>
            <div className="trayecto">
              <div className="TrayectoTitle">My Journey...So Far</div>
              <div className="Trayectos">
                <div className="Trayecto">
                  <img
                    src="https://new.manosalaobra.edu.gt/wp-content/uploads/2022/05/Logo-Roosevelt-Color.png"
                    alt=""
                  />
                  <p>
                    Comence con la programación durante mis últimos años de
                    colegio, aunque no era mucho comence a interesarme más.
                  </p>
                </div>
                <div className="line" />
                <div className="Trayecto">
                  <img
                    src="https://res.cloudinary.com/webuvg/image/upload/f_auto/v1551291412/WEB/institucional/logouvg.png"
                    alt=""
                  />
                  <p>
                    Después de esos 2 años, me decidí ingresar en la carrera de
                    Ingeniería en Ciencias de la Computación y Tecnologías de la
                    Información.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="Skills" className="secciones skills">
        <div className="Skillcontent reveal">
          <h2>Skills</h2>
          <div className="ConjuntosSkills">
            <div className="Lenguajes">
              <img
                onClick={() => {
                  window.open(
                    'https://www.java.com/en/download/help/whatis_java.html'
                  )
                }}
                src="https://i.blogs.es/8d2420/650_1000_java/1366_2000.png"
                alt=""
              />
              <img
                onClick={() => {
                  window.open(
                    'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript'
                  )
                }}
                src="data:image/png;base64,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"
                alt=""
              />
              <img
                onClick={() => {
                  window.open('https://www.python.org/doc/essays/blurb/')
                }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png"
                alt=""
              />
              <img
                onClick={() => {
                  window.open('https://kotlinlang.org/')
                }}
                src="https://pbs.twimg.com/profile_images/1399329694340747271/T5fbWxtN_400x400.png"
                alt=""
              />
              <div className="LenguajesTitle">Programming Lenguages</div>
            </div>
            <div className="Technologies">
              <img
                onClick={() => {
                  window.open('https://react.dev/')
                }}
                src="data:image/png;base64,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"
                alt=""
              />
              <img
                onClick={() => {
                  window.open('https://vitejs.dev/guide/why.html')
                }}
                src="https://vitejs.dev/logo.svg"
                alt=""
              />
              <img
                onClick={() => {
                  window.open('https://developer.android.com/studio/intro')
                }}
                src="https://2.bp.blogspot.com/-tzm1twY_ENM/XlCRuI0ZkRI/AAAAAAAAOso/BmNOUANXWxwc5vwslNw3WpjrDlgs9PuwQCLcBGAsYHQ/s1600/pasted%2Bimage%2B0.png"
                alt=""
              />
              <img
                onClick={() => {
                  window.open('https://www.postgresql.org/')
                }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png"
                alt=""
              />
              <img
                onClick={() => {
                  window.open(
                    'https://docs.oracle.com/cd/E17781_01/server.112/e18804/getstart.htm#ADMQS110'
                  )
                }}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAtFBMVEX////4AAChvcy5ztmKrb94nrL7lpb7m5udu8qtxdL4IyPO2+T4GBj9zs7Q3eS3zNj5PT2CqLuXtsb+1dX6Xl6TssN9orW+ztimwM38rKz+29vi6u6ApLfzGhz7mpr8p6f/9/fY4+nD1N7y9vj9u7u11N//8fH7iYn+4uL4Dg78srL9wMD5MTH6bm75OTnSk5rlWl/5TU3Yg4rpTVHafIL6fn76Zmb6d3f5TEz7jY35V1f+6OiHosFXAAAFkUlEQVR4nO2ca3uiOBiGBXEKxUpNN0qVqYpjZ3qYznZ3u213/v//2gBJOIgCFkrgeu4vYyDN5L5eciCJDgYAAAAAAAAAAAAAAAAAAAAAAAAAAN1hu10uN4zJZGL7vm/b7ANLLpfbbdtV+wjb5cR3LJ0Y0+MYRLccf7Lskux2M3dpJGaUI8pL3flEec/tZkgqmOWZEmejrObWJqfLpTSJraSkU4NdbOm0rbOPUZ9f6Gi0LZTFrleQKdptK2WwaxY0ppO2lTJMTFqrIDXVM9Td+iSJrqtoGEA+Lkl0JyhJVcOgaiahp3nSYAI3ZJhqGwpRwkTLmVJCdNcaShwlDe2sYcqW6QrifK5lOY4z3KeDhkmsHCUYKgEMYQjD9oEhDGHYPjCEIQzbB4bVDVVbTXRozYZ03rZShvnIKBfFEoZDFkFjpJ7haOTREpJlYkg9Vppqhs4oxAsWzD5iaLmhnoKG81HMbHrE85ChY7kmnSZKUc3QH+0x85gpJcQ0Dxs6FhMj1PD2/9xvWynDxNivY9p35oVMoz1tz5sdz08VHA+LHKtgKDrik7ynrTJTEjRiNQ310HJa8PwdwTOIFY6HKhuGhJ1HlXiyUcZ0xQp/l+al4faMEZw8YD3LjMV2xnqcWdTphB2tqbvu3vjRJcPqIz4M2wOGMIRh+8CwimEX5jRVDHeMbAwD+mK4c379eXn+NY/zk3l8fr9SxXD3l9YQlz/UMPy7KUHGNwUMd00KatpFrYbzEwx3/zQqqGm3dRo6o5KKCcN5w4LaS52G82D1oZrh7lfThlqdhtGK8LR41dv6rFYYUGdLjFeEpwY5ppkwfGzc8LoRw5CZFxwbzTNNtMNx44ZnNRraB5aYZjMv/KYJZRBKCDVdjk6aN7yp09Ck1RYOGR2LIXsiacX14O4Z6hVXvTtpGGASY1q079JtQylKjeOqXTdMypr8tH7QoYYdqRXQI8N+jIcwhCEMYQhDGMIQhjCEYZ8M/12dhaye5aUxv3QWJV/O9vneIcMnUeLVXj2/Rcm8jbMfzRsuSy14l3lK5ZbRk7iy5hfuomTeMu+iecPBxCwXxULDc1EiD5n2ytP3WruGg61vlpEs7mlkEHl6wZMie2uGjKXvkiLNYsOvorgvYfKSp67F/TzDT2iHgu3St8xjmiVGi3te1m0qpPK2MHz9I+a/zzPkmht7GBxRNyVVDMeinJ8sccc/yxBKw6cDf/4ZhrHpcrOxfX8eHMnXI1XX4T+G4fsHR3wRxKB1ia2Huz3DSwUMCzhoKOI2eJNDxSq+2wdDGcQH7Sf/lLjZC0PZEsVQkQhhPwzl5u0D//cuca8fhpkzBskQ9sVwlcqZuiUMSxwDUNnwLpkxFUJpuLopenlS2jAVxPSdnFnbgUmb2oaJlpgOYZ7hgYm34oZSZH3oRkwnDeVrIp+A988wcTo004/0pB0+JvJlHtOct6fn/EKUNkwd8E0HUaW3pwKOGI5TGdNB7Mec5j6d8713hqIjFcN+Koi9MOQhXGviKwXJIPbBULTCG/kCnAxiHwxFK9Ti4/aJIPbAUIQwWOR+558TQeyBoQhh+AIoMsdB7L6heDW8CFPyMPqe4XlnDYVTtI4tZ+BfsoaLq5hF/gu/oob8rphNi8Uo2RJzv0SRP4VT01CE8JWn30R2EcSuG4pWGHeei8yVrhuKEN7IK2LUF0HsuKFcY0usAf/ml9a9MKwXGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxiqYVjnb5ucQomNhw+yKq5Eo5TYPPogNf9kW2VeGjf8XVyJRrloWvCxuA4N0/Rj+lBchYY5dOCuJp7b9hvEX0drhPG6bb2Ah+YE39Zty0XcvhbX9RTGbQ8USR5WX2rm5npR/N8CAAAAAAAAAAAAAAAAAAAAAAAAALTB/7eAu+tE5zTPAAAAAElFTkSuQmCC"
                alt=""
              />
              <div className="TechnologiesTitle">Technologies</div>
            </div>
          </div>
        </div>
      </div>
      <div id="Projects" className="secciones projects">
        <div className="Projectscontent reveal">
          <h2>Projects</h2>
          <div className="allProjects">
            <Projects
              url="/Labyrinth.jpg"
              title="Labyrinth Game"
              description="Labyrinth game made with React"
              repo="https://github.com/estebandonis/Laboratorio8-QuintoSemestre-Web.git"
              oficial="https://cosmic-chaja-ba9b8b.netlify.app/"
            />
            <Projects
              url="/Calculator.jpg"
              title="Calculator"
              description="Calculator tool made with React"
              repo="https://github.com/estebandonis/Laboratorio9-QuintoSemestre-Web.git"
              oficial="https://uvgenios.online/21610/Laboratorio9-QuintoSemestre-Web/"
            />
            <Projects
              url="/Cards.jpg"
              title="Card Game"
              description="Card game made with React"
              repo="https://github.com/estebandonis/Laboratorio6-QuintoSemestre-Web.git"
              oficial="https://uvgenios.online/21610/Laboratorio6-QuintoSemestre-Web/index.html"
            />
            <Projects
              url="/Clone.jpg"
              title="Pomofocus Clone"
              description="Clone of Pomofocus.com page using React"
              repo="https://github.com/estebandonis/Proyecto1-QuintoSemestre-Web.git"
              oficial="https://uvgenios.online/21610/Proyecto1/"
            />
            <Projects
              url="/Rest.jpg"
              title="Rest API"
              description="Rest API made using Node.js and Express.js for hospital's services website"
              repo="https://github.com/estebandonis/ProyectoFinal-IngenieriaDeSoftware-backend.git"
            />
            <Projects
              url="/Android.jpg"
              title="Android Application"
              description="Android Application for consulting deals in supermarkets"
              repo="https://github.com/SebasJuarez/Grocery_Shopping.git"
            />
          </div>
        </div>
      </div>
      <div className="Contacto">
        <button onClick={() => { window.open('https://www.linkedin.com/in/esteban-donis-mart%C3%ADnez-384819204/') }} className="linked"><img src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" alt="" /></button>
        <button onClick={() => { window.open('https://twitter.com/EstebanDonis10') }} className="twit"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png" alt="" /></button>
        <button onClick={() => { window.open('https://github.com/estebandonis') }} className="git"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /></button>
      </div>
    </div>
  )
}

export default App
