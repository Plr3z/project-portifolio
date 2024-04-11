import { useState } from 'react'
import './App.css'
import emailjs from '@emailjs/browser'
import $ from 'jquery'
import Sucesso from './Sucesso'

function App() {
  var cont = 0
  const [contador, setContador] = useState(false)
  const [email, setEmail] = useState()

  function sendEmail(form){
    form.preventDefault();
    

    const templateEmail = {
      email: email
    }
    emailjs.send("service_22kbbvt", "template_0gj3wwu", templateEmail, "lUanpW9hjfVYXGdnY")
    .then((resposta) => {
      setContador(true)
      setTimeout(() => {
        setContador(false);
      }, 3000);
      console.log('sucesso:', resposta.status, resposta.text);
      setEmail('')
    }, (erro)=>{
      console.log("erro: ", erro)
    })

    
  }

  



  return(
    <>



      


      <header>
        <h1>PLR3Z</h1>
     
        <ul className="opcoes">
          <li><a href="#">SOBRE</a></li>
          <li><a href="#">DOMÍNIOS</a></li>
          <li><a href="#">CONTATO</a></li>
        
        </ul>
        <div className='menu-bar'>
          <i class="fa-solid fa-bars"></i>
        </div>
      </header>


      <section className="landing-page">
        <div className="left-page">
          <h1>PLR3Z</h1>
          <span className='ola'></span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nobis fugit eos, earum facilis, accusantium alias quaerat, quia mollitia nam rem ex eius nostrum quam. Quia nam praesentium quas molestiae.</p>
        </div>

        <div className="rigth-page" ></div>
      </section>



      <section className="about-me">
        <div className="lista-acima"> 
          <div className="card">
            <i class="fa-brands fa-html5"></i>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat pariatur atque eius voluptatibus ullam suscipit iste doloribus odio. Animi architecto consequatur maxime voluptas eveniet vero, tempora quod accusamus error esse.</p>
          </div>

          <div className="card">
            <i class="fa-brands fa-css3-alt"></i>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat pariatur atque eius voluptatibus ullam suscipit iste doloribus odio. Animi architecto consequatur maxime voluptas eveniet vero, tempora quod accusamus error esse.</p>
          </div>

          <div className="card">
            <i class="fa-brands fa-js"></i>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat pariatur atque eius voluptatibus ullam suscipit iste doloribus odio. Animi architecto consequatur maxime voluptas eveniet vero, tempora quod accusamus error esse.</p>
          </div>
        </div>

        <div className="lista-abaixo"> 
          <div className="card">
            <i class="fa-brands fa-react"></i>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat pariatur atque eius voluptatibus ullam suscipit iste doloribus odio. Animi architecto consequatur maxime voluptas eveniet vero, tempora quod accusamus error esse.</p>
          </div>

          <div className="card">
            <i class="fa-brands fa-python"></i>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat pariatur atque eius voluptatibus ullam suscipit iste doloribus odio. Animi architecto consequatur maxime voluptas eveniet vero, tempora quod accusamus error esse.</p>
          </div>
        </div>
       
      </section>


      <section className="contact">
        <form action="" onSubmit={sendEmail}>
          <input type="email" name="email" placeholder="DIGITE SEU EMAIL PARA CONTATO"value={email} onChange={(e) => (setEmail(e.target.value))}/>
          <button type='submit'>ENVIAR!</button>
        </form>
      </section>

      {contador ?
        <Sucesso></Sucesso>
      :
      console.log('')
      }

      <footer>
        <p>DESENVOLVIDO POR @PLR3Z</p>
      </footer>
      
      
    </>
  )
}

export default App
