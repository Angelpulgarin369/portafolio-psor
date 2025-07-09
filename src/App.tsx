import './App.css'
import { useState } from 'react'
//import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";
//import { useEffect } from 'react';

function App() {
  // Estado null al inicio (no se muestra ninguna card)
  const [mostrarPerfil, setMostrarPerfil] = useState<boolean | null>(null)

  // Función para alternar el estado
  const toggleCard = (tipo: string) => {
    if (tipo === 'perfil') {
      setMostrarPerfil(mostrarPerfil === true ? null : true)
    } else if (tipo === 'habilidades') {
      setMostrarPerfil(mostrarPerfil === false ? null : false)
    }
  }
  return (
    <>
      <header className="header">
  <p>🌸ꗥ～ꗥ🌸 𝐏𝐨𝐫𝐭𝐚𝐟𝐨𝐥𝐢𝐨 𝐏𝐫𝐨𝐟𝐞𝐬𝐢𝐨𝐧𝐚𝐥 𝟐𝟎𝟐𝟓 – 𝐃𝐢𝐬𝐞ñ𝐨 𝐆𝐫á𝐟𝐢𝐜𝐨 &amp; 𝐁𝐫𝐚𝐧𝐝𝐢𝐧𝐠 🌸ꗥ～ꗥ🌸</p>
  <nav>
    <a 
      href="https://www.dropbox.com/scl/fi/rb04070fmlwhcqxwwz41k/cv-curriculo.pdf?rlkey=dpkuohh0yp2dwu12hhnp749g6&raw=1" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      📄 Ver CV &nbsp;|&nbsp;
    </a>
    <a 
      href="https://www.dropbox.com/scl/fi/rb04070fmlwhcqxwwz41k/cv-curriculo.pdf?rlkey=dpkuohh0yp2dwu12hhnp749g6&dl=1" 
      download
    >
      ⬇️ Descargar CV &nbsp;|&nbsp;
    </a>
    <a 
      href="https://www.dropbox.com/scl/fi/46bf9h0bq3wahouwjxnvg/Certificado-de-graduacion-Henry-3.pdf?rlkey=rfod4iuay16xrsqsszc8tf7mp&raw=1"
      target="_blank"
      rel="noopener noreferrer"
    >
       🎓 Ver Certificado de Graduación &nbsp;|&nbsp;
    </a>
    <a 
      href="https://www.dropbox.com/scl/fi/fs6zchyz8i8d715armndf/constancia-de-TA-6.pdf?rlkey=u2p8ybd05tm6n2v3cyxwjgoh0&raw=1"
      target="_blank"
      rel="noopener noreferrer"
    >
      🏅 Ver Insignia de Liderazgo (TA)
    </a>
  </nav>
</header>

      <section className="intro">
        <h1>
          Miguel Ángel <br /> Rodríguez
        </h1>
        <p>𝙎𝙤𝙥𝙚𝙩𝙧á𝙣 - 𝘼𝙣𝙩𝙞𝙤𝙦𝙪𝙞𝙖</p>
        <img
          className="foto-perfil"
          src="https://res.cloudinary.com/dah8tj4ry/image/upload/v1749327712/foto_para_face_ttdnwn.jpg"
          alt="Foto de Miguel Ángel Rodríguez"
        />
        <p className="rol">Diseñador Gráfico</p>

        <div className="botones-intro">
          <button onClick={() => toggleCard('perfil')} className="btn-perfil">
            𝑷𝒆𝒓𝒇𝒊𝒍
          </button>
          <button onClick={() => toggleCard('habilidades')} className="btn-habilidades">
            𝑯𝒂𝒃𝒊𝒍𝒊𝒅𝒂𝒅𝒆𝒔
          </button>
        </div>

        {/* Mostrar las cards solo si mostrarPerfil no es null */}
        {mostrarPerfil === true && (
          <div id="card-perfil" className="card visible">
            <h3>ミ💖 Perfil Profesional 💖彡</h3>
            <p>
              Soy una persona comprometida, con excelente actitud de servicio y comunicación efectiva.
              Tengo experiencia en atención al cliente, liderazgo y resolución creativa de problemas.
              Me interesa aportar estas habilidades en proyectos de diseño visual, branding y comunicación
              gráfica, buscando siempre mejorar y crecer profesionalmente.
            </p>
          </div>
        )}

        {mostrarPerfil === false && (
          <div id="card-habilidades" className="card visible">
            <h3>ミ💖 Habilidades de Diseño Gráfico 💖彡</h3>
            <ul>
              <li>🎨 Adobe Photoshop, Illustrator, canva</li>
              <li>📐 Diseño UI/UX</li>
              <li>📷 Edición fotográfica</li>
              <li>🧠 Pensamiento visual y conceptual</li>
              <li>👥 Trabajo en equipo</li>
              <li>🕓 Puntualidad y detalle</li>
            </ul>
          </div>
        )}
      </section>

     <section className="servicios">
  <h2>𝙎𝙚𝙧𝙫𝙞𝙘𝙞𝙤𝙨 𝙋𝙧𝙤𝙛𝙚𝙨𝙞𝙤𝙣𝙖𝙡𝙚𝙨</h2>
  <p>
    𝑰𝒏𝒕𝒆𝒈𝒓𝒐 𝒆𝒍 𝒅𝒊𝒔𝒆ñ𝒐, 𝒍𝒂 𝒕𝒆𝒄𝒏𝒐𝒍𝒐𝒈í𝒂 𝒚 𝒍𝒂 𝒑𝒔𝒊𝒄𝒐𝒍𝒐𝒈í𝒂 𝒐𝒓𝒈𝒂𝒏𝒊𝒛𝒂𝒄𝒊𝒐𝒏𝒂𝒍 𝒑𝒂𝒓𝒂 𝒐𝒇𝒓𝒆𝒄𝒆𝒓 𝒔𝒐𝒍𝒖𝒄𝒊𝒐𝒏𝒆𝒔 𝒊𝒏𝒏𝒐𝒗𝒂𝒅𝒐𝒓𝒂𝒔 𝒒𝒖𝒆 𝒄𝒐𝒏𝒆𝒄𝒕𝒂𝒏 𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒔, 𝒎𝒂𝒓𝒄𝒂𝒔 𝒚 𝒑𝒓𝒐𝒄𝒆𝒔𝒐𝒔.
  </p>

  {/* Diseño Gráfico */}
  <h3>🎨 𝐷𝑖𝑠𝑒ñ𝑜 𝐺𝑟á𝑓𝑖𝑐𝑜 𝑦 𝑉𝑖𝑠𝑢𝑎𝑙 🎨</h3>
  <div className="grid-servicios">
    <div className="servicio-card">
      <h4>🎨 Branding</h4>
      <p>Construcción de identidades visuales memorables y auténticas.</p>
    </div>
    <div className="servicio-card">
      <h4>🖌️ Identidad Visual</h4>
      <p>Diseño de logotipos, paletas y sistemas gráficos coherentes.</p>
    </div>
    <div className="servicio-card">
      <h4>📱 UX/UI</h4>
      <p>Interfaces intuitivas centradas en la experiencia del usuario.</p>
    </div>
    <div className="servicio-card">
      <h4>📖 Visual Storytelling</h4>
      <p>Comunicación visual que transmite emociones y mensajes potentes.</p>
    </div>
    <div className="servicio-card">
      <h4>📚 Diseño Editorial</h4>
      <p>Maquetación profesional de libros, revistas y catálogos.</p>
    </div>
    <div className="servicio-card">
      <h4>📦 Packaging</h4>
      <p>Diseño de envases con impacto visual y funcionalidad.</p>
    </div>
    <div className="servicio-card">
  <h4>🎬 Edición de Video</h4>
  <p>Montaje profesional de contenido audiovisual para redes, campañas y presentaciones.</p>
</div>
  </div>

  {/* Psicología Organizacional */}
  <h3>🧠 𝑃𝑠𝑖𝑐𝑜𝑙𝑜𝑔í𝑎 𝑂𝑟𝑔𝑎𝑛𝑖𝑧𝑎𝑐𝑖𝑜𝑛𝑎𝑙 🧠</h3>
  <div className="grid-servicios">
    <span>🛠️ Diseño de Proyectos Organizacionales</span>
    <span>🧪 Evaluación Psicolaboral</span>
    <span>🏢 Clima y Cultura Organizacional</span>
    <span>🚀 Gestión del Talento</span>
    <span>📈 Capacitación y Desarrollo</span>
    <span>💼 Psicología del Trabajo</span>
  </div>

  {/* Tecnología y Web */}
  <h3>💻 𝑇𝑒𝑐𝑛𝑜𝑙𝑜𝑔í𝑎 𝑦 𝑊𝑒𝑏 💻</h3>
  <div className="grid-servicios">
    <span>🌐 Desarrollo Web</span>
    <span>📱 Diseño Responsive</span>
    <span>🧳 Portafolios Web</span>
    <span>🧩 UX Prototyping</span>
  </div>

  {/* Softwares utilizados */}
  <div className="softwares">
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" alt="Photoshop" />
    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" alt="Illustrator" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
    <img src="https://res.cloudinary.com/dah8tj4ry/image/upload/v1749407187/icono_de_UX_369_kznab8.jpg" alt="Diseño UI/UX" title="Diseño UI/UX" />
    <img src="https://res.cloudinary.com/dah8tj4ry/image/upload/v1749408504/canv-removebg-preview_1_vncitw.png" alt="Canva" title="Canva" />
  </div>

  {/* CTA Final */}
  <p className="cta-servicio">
    ¿Quieres trabajar conmigo en tu próximo proyecto? 👉 <a href="#contacto">Contáctame aquí</a>
  </p>
</section>

     <section className="proyectos">
  <h2>✨ PROYECTOS DESTACADOS✨</h2>
  <p className="proyectos-subtitulo">𝑬𝒙𝒑𝒍𝒐𝒓𝒂 𝒂𝒍𝒈𝒖𝒏𝒐𝒔 𝒅𝒆 𝒎𝒊𝒔 𝒕𝒓𝒂𝒃𝒂𝒋𝒐𝒔 𝒎á𝒔 𝒓𝒆𝒄𝒊𝒆𝒏𝒕𝒆𝒔 𝒆𝒏 𝒊𝒅𝒆𝒏𝒕𝒊𝒅𝒂𝒅 𝒗𝒊𝒔𝒖𝒂𝒍, 𝒃𝒓𝒂𝒏𝒅𝒊𝒏𝒈 𝒚 𝒅𝒊𝒔𝒆ñ𝒐 𝒈𝒓á𝒇𝒊𝒄𝒐.</p>

  <div className="grid-proyectos">
  {/* Proyecto 1 */}
  <div className="proyecto-card">
    <img
      src="https://res.cloudinary.com/dah8tj4ry/image/upload/v1750024921/logo_principal_CAFE_AURORA_1_modcqs.png"
      alt="Proyecto 1"
    />
    <div className="proyecto-info">
      <h3>CAFE AURORA</h3>
      <p>🌄 Café Aurora es más que una marca, es una experiencia sensorial que despierta con cada amanecer. Este proyecto fusiona identidad visual, storytelling y diseño estratégico para dar vida a un café artesanal que evoca calidez, naturaleza y autenticidad. Desde su logo hasta sus empaques y piezas digitales, todo fue pensado para transmitir el aroma, la tradición y la frescura de un café nacido para conectar con quienes valoran lo hecho a mano.
            Diseñado con visión de marca y corazón creativo, Café Aurora es un concepto que deja huella en cada sorbo. ¿Te animas a descubrirlo?</p>
      <a
        href="https://www.canva.com/design/DAGp4jIVI1c/dThkjex4dO1bWap_MTUYoA/edit?utm_content=DAGp4jIVI1c&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver Proyecto
      </a>
    </div>
  </div>

  {/* Proyecto 2 */}
  <div className="proyecto-card">
    <img
      src="https://res.cloudinary.com/dah8tj4ry/image/upload/v1750029823/logo_respira_verde-removebg-preview_1_ivnama.png"
      alt="Proyecto 2"
    />
    <div className="proyecto-info">
      <h3>Respira Verde</h3>
      <p>🌿 Respira Verde es una campaña de concientización ambiental que transforma el diseño gráfico en un llamado visual al cambio. Este proyecto integra branding, contenido emocional, piezas gráficas y un video inspirador para movilizar a las personas a cuidar el planeta, comenzando por el aire que respiramos.
            Desde la creación del logo y el slogan, hasta el diseño del folleto y el spot audiovisual, Respira Verde demuestra cómo el diseño puede ser una herramienta poderosa para educar, inspirar y actuar.
              Diseñado con propósito, corazón y técnica. ¿Deseas ver este proyecto?</p>
      <a
        href="https://www.canva.com/design/DAGqGf5Xj6w/kg8B1bIJlfKhRU06gaHgzQ/edit?utm_content=DAGqGf5Xj6w&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver Proyecto
      </a>
    </div>
  </div>

  {/* Proyecto 3 */}
  <div className="proyecto-card">
    <img
      src="https://res.cloudinary.com/dah8tj4ry/image/upload/v1750035731/imagen_representativa_de_arte_y_luz-removebg-preview_1_hlpxkn.png"
      alt="Proyecto 3"
    />
    <div className="proyecto-info">
      <h3>Festival de Luz & Arte</h3>
      <p>✨ Festival de Luz & Arte 2025 es una campaña visual y experiencial que celebra la creatividad, la diversidad cultural y la magia del arte a través del diseño gráfico y la animación. Este proyecto incluye el desarrollo completo de identidad visual: póster oficial, video promocional, stories animadas, acreditación y branding, todo orientado a la promoción de un evento cultural lleno de vida.
            Cada pieza fue diseñada para conectar emocionalmente con el público, generar expectativa y destacar el poder del diseño en la creación de experiencias memorables. ¿Te animas a descubrirlo?</p>
      <a
        href="https://www.canva.com/design/DAGqZvYWU8k/STB0mk9j4-566S-BQnXdqQ/edit?utm_content=DAGqZvYWU8k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver Proyecto
      </a>
    </div>
  </div>
</div>
</section>


      <section id="contacto" className="contacto">
  <p>😊¡𝑮𝑹𝑨𝑪𝑰𝑨𝑺 𝑷𝑶𝑹 𝑽𝑬𝑹! 😊</p>
  <p>𝘊𝘰𝘯𝘵á𝘤𝘵𝘢𝘮𝘦 𝘢 𝘵𝘳𝘢𝘷é𝘴 𝘥𝘦 𝘤𝘶𝘢𝘭𝘲𝘶𝘪𝘦𝘳𝘢 𝘥𝘦 𝘦𝘴𝘵𝘢𝘴 𝘱𝘭𝘢𝘵𝘢𝘧𝘰𝘳𝘮𝘢𝘴:</p>
  <div className="iconos-contacto">
    {/* WhatsApp */}
    <a
      href="https://wa.me/573225709501?text=Hola%20Miguel%2C%20me%20interesa%20tu%20perfil%20profesional%20y%20quisiera%20contactarte."
      target="_blank"
      rel="noopener noreferrer"
      className="icono"
      title="Enviar mensaje por WhatsApp"
    >
      <FaWhatsapp />
    </a>

    {/* Gmail como acceso a interfaz web */}
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=miguelangelrodriguezpulgarin2@gmail.com&su=Oportunidad%20Laboral&body=Hola%20Miguel%2C%20me%20interesa%20tu%20perfil%20y%20quisiera%20ponerme%20en%20contacto%20contigo."
      target="_blank"
      rel="noopener noreferrer"
      className="icono"
      title="Enviar correo por Gmail"
    >
      <FaEnvelope />
    </a>

    {/* LinkedIn 1 */}
    <a
      href="https://www.linkedin.com/in/miguel-angel-rodr%C3%ADguez-pulgarin-00a386259/"
      target="_blank"
      rel="noopener noreferrer"
      className="icono"
      title="Ver perfil en LinkedIn 1"
    >
      <FaLinkedin />
    </a>

    {/* LinkedIn 2 */}
    <a
      href="https://www.linkedin.com/in/angel-pulgarin-aaa047305/"
      target="_blank"
      rel="noopener noreferrer"
      className="icono"
      title="Ver perfil en LinkedIn 2"
    >
      <FaLinkedin />
    </a>
  </div>
</section>
    </>
  )
}

export default App
