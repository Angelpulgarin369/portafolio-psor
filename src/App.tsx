import './App.css'
import { useState } from 'react'
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
     <p>🧠✨ 𝐏𝐨𝐫𝐭𝐚𝐟𝐨𝐥𝐢𝐨 𝐏𝐫𝐨𝐟𝐞𝐬𝐢𝐨𝐧𝐚𝐥 𝟐𝟎𝟐𝟓 – 𝐏𝐬𝐢𝐜𝐨𝐥𝐨𝐠í𝐚 𝐎𝐫𝐠𝐚𝐧𝐢𝐳𝐚𝐜𝐢𝐨𝐧𝐚𝐥 𝐜𝐨𝐧 𝐞𝐧𝐟𝐨𝐪𝐮𝐞 𝐢𝐧𝐧𝐨𝐯𝐚𝐝𝐨𝐫 🧠✨</p>
  <nav>
    <a 
      href="https://www.dropbox.com/scl/fi/y4vjfkbfmvs0aikjxsci8/CV-Psicologia-Organizacional.pdf?rlkey=r12ibwl4xvdf0czhubrx6f8vc&st=rbpewjnc&dl=0" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      📄 𝗩𝗲𝗿 𝗖𝗩 &nbsp;|&nbsp;
    </a>
    <a 
  href="https://www.dropbox.com/scl/fi/y4vjfkbfmvs0aikjxsci8/CV-Psicologia-Organizacional.pdf?rlkey=r12ibwl4xvdf0czhubrx6f8vc&st=rbpewjnc&dl=1" 
  target="_blank"
>
  ⬇️ 𝗗𝗲𝘀𝗰𝗮𝗿𝗴𝗮𝗿 𝗖𝗩 &nbsp;|&nbsp;
</a>
    <a 
      href="https://www.dropbox.com/scl/fi/46bf9h0bq3wahouwjxnvg/Certificado-de-graduacion-Henry-3.pdf?rlkey=rfod4iuay16xrsqsszc8tf7mp&raw=1"
      target="_blank"
      rel="noopener noreferrer"
    >
       🎓 𝗩𝗲𝗿 𝗖𝗲𝗿𝘁𝗶𝗳𝗶𝗰𝗮𝗱𝗼 𝗱𝗲 𝗚𝗿𝗮𝗱𝘂𝗮𝗰𝗶ó𝗻 &nbsp;|&nbsp;
    </a>
    <a 
      href="https://www.dropbox.com/scl/fi/fs6zchyz8i8d715armndf/constancia-de-TA-6.pdf?rlkey=u2p8ybd05tm6n2v3cyxwjgoh0&raw=1"
      target="_blank"
      rel="noopener noreferrer"
    >
      🏅 𝗩𝗲𝗿 𝗜𝗻𝘀𝗶𝗴𝗻𝗶𝗮 𝗱𝗲 𝗟𝗶𝗱𝗲𝗿𝗮𝘇𝗴𝗼 (𝗧𝗔)
    </a>
  </nav>
</header>

      <section className="intro">
        <h1>
          Miguel Ángel <br /> Rodríguez
        </h1>
        <p>𝗟𝗔 𝗘𝘀𝘁𝗿𝗲𝗹𝗹𝗮 - 𝘼𝙣𝙩𝙞𝙤𝙦𝙪𝙞𝙖</p>
        <img
          className="foto-perfil"
          src="https://res.cloudinary.com/dah8tj4ry/image/upload/v1749327712/foto_para_face_ttdnwn.jpg"
          alt="Foto de Miguel Ángel Rodríguez"
        />
        <p className="rol">Psicología Organizacional + Diseño & Tecnología</p>

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
              Soy estudiante de Psicología con enfoque en Psicología Organizacional, apasionado por el desarrollo del talento humano y la comunicación efectiva.
              Combino mi formación académica con experiencia en diseño gráfico, desarrollo web y liderazgo de equipos.
              Me destaco por mi compromiso, empatía y pensamiento estratégico para aportar soluciones innovadoras en entornos organizacionales y creativos.
            </p>
          </div>
        )}

        {mostrarPerfil === false && (
          <div id="card-habilidades" className="card visible">
            <h3>ミ🧠 Habilidades en Psicología Organizacional 💼彡</h3>
            <ul>
              <li>📋 Evaluación de competencias y análisis de perfiles laborales</li>
              <li>🧪 Aplicación e interpretación de pruebas psicotécnicas</li>
              <li>👥 Comunicación asertiva y empatía en procesos de selección</li>
              <li>📊 Manejo de datos, psicometría y análisis cuantitativo</li>
              <li>💡 Creatividad para campañas de clima laboral y bienestar</li>
              <li>💻 Dominio de herramientas digitales: Canva, Google Forms, Excel</li>
            </ul>
          </div>
        )}
      </section>

     <section className="servicios">
  <h2>𝘾𝙤𝙢𝙥𝙚𝙩𝙚𝙣𝙘𝙞𝙖𝙨 𝙮 𝙎𝙚𝙧𝙫𝙞𝙘𝙞𝙤𝙨 𝙖𝙥𝙡𝙞𝙘𝙖𝙙𝙤𝙨 𝙖 𝙍𝙍.𝙃𝙃</h2>
  <p>
   𝘼𝙥𝙡𝙞𝙘𝙤 𝙡𝙖 𝙋𝙨𝙞𝙘𝙤𝙡𝙤𝙜í𝙖 𝙊𝙧𝙜𝙖𝙣𝙞𝙯𝙖𝙘𝙞𝙤𝙣𝙖𝙡 𝙘𝙤𝙢𝙗𝙞𝙣𝙖𝙙𝙖 𝙘𝙤𝙣 𝙩𝙚𝙘𝙣𝙤𝙡𝙤𝙜í𝙖 𝙮 𝙙𝙞𝙨𝙚ñ𝙤 𝙥𝙖𝙧𝙖 𝙙𝙚𝙨𝙖𝙧𝙧𝙤𝙡𝙡𝙖𝙧 𝙨𝙤𝙡𝙪𝙘𝙞𝙤𝙣𝙚𝙨 𝙞𝙣𝙣𝙤𝙫𝙖𝙙𝙤𝙧𝙖𝙨 𝙚𝙣 𝙧𝙚𝙘𝙡𝙪𝙩𝙖𝙢𝙞𝙚𝙣𝙩𝙤, 𝙘𝙡𝙞𝙢𝙖 𝙡𝙖𝙗𝙤𝙧𝙖𝙡 𝙮 𝙙𝙚𝙨𝙖𝙧𝙧𝙤𝙡𝙡𝙤 𝙙𝙚 𝙩𝙖𝙡𝙚𝙣𝙩𝙤. 𝙈𝙞 𝙚𝙣𝙛𝙤𝙦𝙪𝙚 𝙚𝙨 𝙝𝙪𝙢𝙖𝙣𝙞𝙯𝙖𝙧 𝙡𝙤𝙨 𝙥𝙧𝙤𝙘𝙚𝙨𝙤𝙨 𝙙𝙚 𝙍𝙍.𝙃𝙃, 𝙥𝙤𝙩𝙚𝙣𝙘𝙞𝙖𝙙𝙤𝙨 𝙘𝙤𝙣 𝙖𝙣á𝙡𝙞𝙨𝙞𝙨, 𝙘𝙧𝙚𝙖𝙩𝙞𝙫𝙞𝙙𝙖𝙙 𝙮 𝙚𝙨𝙩𝙧𝙖𝙩𝙚𝙜𝙞𝙖.
  </p>

  {/* Psicología Organizacional */}
  <h3>🧠 𝑷𝒔𝒊𝒄𝒐𝒍𝒐𝒈í𝒂 𝑶𝒓𝒈𝒂𝒏𝒊𝒛𝒂𝒄𝒊𝒐𝒏𝒂𝒍 🧠</h3>
  <div className="grid-servicios">
    <div className="servicio-card">
      <h4>🛠️ Diseño de Proyectos Organizacionales</h4>
      <p>Planificación, diagnóstico y ejecución de estrategias que optimizan procesos internos y fortalecen el clima organizacional.</p>
    </div>
    <div className="servicio-card">
      <h4>🧪 Evaluación Psicolaboral</h4>
      <p>Apoyo en selección de talento a través de entrevistas, pruebas psicotécnicas y análisis de competencias.</p>
    </div>
    <div className="servicio-card">
      <h4>🏢 Clima y Cultura Organizacional</h4>
      <p>Diseño y aplicación de encuestas, interpretación de resultados y propuestas de mejora para un entorno laboral saludable.</p>
    </div>
    <div className="servicio-card">
      <h4>🚀 Gestión del Talento</h4>
      <p>Procesos de atracción, desarrollo y fidelización de talento humano alineado con la misión organizacional.</p>
    </div>
    <div className="servicio-card">
      <h4>📈 Capacitación y Desarrollo</h4>
      <p>Diseño de programas formativos enfocados en el crecimiento personal y profesional de los colaboradores.</p>
    </div>
    <div className="servicio-card">
      <h4>💼 Psicología del Trabajo</h4>
      <p>Análisis del comportamiento organizacional, liderazgo, motivación y dinámicas de grupo para potenciar el desempeño.</p>
    </div>
    <div className="servicio-card">
  <h4>🧭 Comunicación Interna Visual</h4>
  <p>Diseño de piezas gráficas y audiovisuales que fortalecen la cultura organizacional y mejoran la comunicación interna.</p>
</div>
  </div>

  {/* Diseño Gráfico y Visual */}
  <h3>🎨 𝑫𝒊𝒔𝒆ñ𝒐 𝑮𝒓á𝒇𝒊𝒄𝒐 𝒚 𝑽𝒊𝒔𝒖𝒂𝒍 🎨</h3>
  <div className="grid-servicios">
    <span>📢 𝐂𝐨𝐦𝐮𝐧𝐢𝐜𝐚𝐜𝐢ó𝐧 𝐈𝐧𝐭𝐞𝐫𝐧𝐚 𝐕𝐢𝐬𝐮𝐚𝐥: Diseño de piezas gráficas (afiches, boletines, banners) para campañas internas, cultura organizacional y bienestar laboral.</span>
    <span>🧭 𝐁𝐫𝐚𝐧𝐝𝐢𝐧𝐠 𝐂𝐨𝐫𝐩𝐨𝐫𝐚𝐭𝐢𝐯𝐨 𝐈𝐧𝐭𝐞𝐫𝐧𝐨: Creación de identidad visual para proyectos internos: clima laboral, jornadas de salud mental, talleres o capacitaciones.</span>
    <span>📱 𝐃𝐢𝐬𝐞ñ𝐨 𝐔𝐗 𝐩𝐚𝐫𝐚 𝐑𝐞𝐜𝐮𝐫𝐬𝐨𝐬 𝐇𝐮𝐦𝐚𝐧𝐨𝐬: Prototipos y presentaciones digitales interactivas para procesos de inducción, onboarding o evaluaciones internas.</span>
    <span>🎬 𝐒𝐭𝐨𝐫𝐲𝐭𝐞𝐥𝐥𝐢𝐧𝐠 𝐎𝐫𝐠𝐚𝐧𝐢𝐳𝐚𝐜𝐢𝐨𝐧𝐚𝐥: Creación de videos y narrativas visuales para contar historias de equipo, testimonios o promover la cultura de la empresa.</span>
    <span>📊 𝐈𝐧𝐟𝐨𝐠𝐫𝐚𝐟í𝐚𝐬 𝐲 𝐑𝐞𝐩𝐨𝐫𝐭𝐞𝐬 𝐕𝐢𝐬𝐮𝐚𝐥𝐞𝐬: Presentación clara y estética de resultados de clima laboral, indicadores de RRHH o métricas de desempeño.</span>
    <span>🎓 𝐌𝐚𝐭𝐞𝐫𝐢𝐚𝐥 𝐃𝐢𝐝á𝐜𝐭𝐢𝐜𝐨 𝐩𝐚𝐫𝐚 𝐂𝐚𝐩𝐚𝐜𝐢𝐭𝐚𝐜𝐢ó𝐧: Diseño de manuales, presentaciones y recursos gráficos para talleres, entrenamientos o programas de desarrollo organizacional.</span>
    <span>🌟 𝐃𝐢𝐬𝐞ñ𝐨 𝐌𝐨𝐭𝐢𝐯𝐚𝐜𝐢𝐨𝐧𝐚𝐥 𝐲 𝐝𝐞 𝐁𝐢𝐞𝐧𝐞𝐬𝐭𝐚𝐫: Creación de frases, piezas visuales y campañas que fortalezcan el compromiso, el sentido de pertenencia y el bienestar emocional.</span>
  </div>

  {/* Tecnología y Web */}
  <h3>💻 𝑇𝑒𝑐𝑛𝑜𝑙𝑜𝑔í𝑎 𝑦 𝑊𝑒𝑏 💻</h3>
  <div className="grid-servicios">
    <span>🔄 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐳𝐚𝐜𝐢ó𝐧 𝐝𝐞 𝐩𝐫𝐨𝐜𝐞𝐬𝐨𝐬 𝐝𝐞 𝐑𝐑𝐇𝐇: Digitalización de formularios, registros e informes para aumentar la eficiencia en tareas organizacionales.</span>
    <span>📊 𝐃𝐚𝐬𝐡𝐛𝐨𝐚𝐫𝐝𝐬 𝐩𝐚𝐫𝐚 𝐚𝐧á𝐥𝐢𝐬𝐢𝐬 𝐝𝐞 𝐝𝐚𝐭𝐨𝐬 𝐥𝐚𝐛𝐨𝐫𝐚𝐥𝐞𝐬: Visualización clara de indicadores como clima laboral, rotación o desempeño con herramientas web.</span>
    <span>🧩 𝐔𝐗 𝐲 𝐩𝐥𝐚𝐭𝐚𝐟𝐨𝐫𝐦𝐚𝐬 𝐢𝐧𝐭𝐞𝐫𝐧𝐚𝐬: Diseño de interfaces amigables para programas de formación, bienestar y comunicación interna.</span>
    <span>🎨 𝐑𝐞𝐜𝐮𝐫𝐬𝐨𝐬 𝐝𝐢𝐠𝐢𝐭𝐚𝐥𝐞𝐬 𝐩𝐚𝐫𝐚 𝐜𝐚𝐩𝐚𝐜𝐢𝐭𝐚𝐜𝐢ó𝐧: Creación de contenidos interactivos, visuales y adaptados a las necesidades del talento humano.</span>
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
    ¿Buscas un practicante proactivo, creativo y comprometido para tu equipo de talento humano? 👉 <a href="#contacto">𝐄𝐬𝐜𝐫í𝐛𝐞𝐦𝐞 𝐚𝐪𝐮í</a>
  </p>
</section>

     <section className="proyectos">
  <h2>✨ 𝐀𝐒𝐈𝐆𝐍𝐀𝐓𝐔𝐑𝐀𝐒 𝐂𝐋𝐀𝐕𝐄 𝐃𝐄𝐋 𝐄𝐍𝐅𝐎𝐐𝐔𝐄 𝐎𝐑𝐆𝐀𝐍𝐈𝐙𝐀𝐂𝐈𝐎𝐍𝐀𝐋 ✨</h2>
   <p className="proyectos-subtitulo">𝑬𝒔𝒕𝒆 𝒆𝒔 𝒎𝒊 𝒆𝒔𝒄𝒂𝒑𝒂𝒓𝒂𝒕𝒆 𝒑𝒓𝒐𝒇𝒆𝒔𝒊𝒐𝒏𝒂𝒍. A través de estas asignaturas, he construido una base sólida en 𝑷𝒔𝒊𝒄𝒐𝒍𝒐𝒈í𝒂 𝑶𝒓𝒈𝒂𝒏𝒊𝒛𝒂𝒄𝒊𝒐𝒏𝒂𝒍, con una mirada estratégica y práctica. 
     Cada trabajo, reflexión y evaluación aquí presentada demuestra mi capacidad para comprender, analizar y transformar entornos laborales. Este portafolio no solo muestra lo que aprendí, sino cómo estoy listo para aplicar ese conocimiento en escenarios reales de práctica profesional.
   </p>

  <div className="grid-proyectos">

  {/* Proyecto 1 */}
<div className="proyecto-card contenido-asignatura">
  <img
    src="https://res.cloudinary.com/dah8tj4ry/image/upload/v1752122041/Organizaci%C3%B3n_de_Empresas_ht28nt.png"
    alt="Organización de Empresas"
  />
  <div className="proyecto-info">
    <p className="calificacion-asignatura">📊 Calificación final: <strong>9.75</strong></p>

    <h3>🏢 𝐎𝐫𝐠𝐚𝐧𝐢𝐳𝐚𝐜𝐢ó𝐧 𝐝𝐞 𝐄𝐦𝐩𝐫𝐞𝐬𝐚𝐬</h3>
    <p>
        📌 ¿Cómo atraer, desarrollar y retener talento clave para una organización? Esta asignatura fue fundamental para entender el verdadero valor del capital humano. Aprendí a diseñar e implementar estrategias de gestión humana alineadas con los objetivos organizacionales, desde procesos de selección estructurados hasta planes de formación y evaluación del desempeño.
        Durante el curso, adquirí herramientas prácticas para identificar competencias clave, fomentar el desarrollo profesional continuo y construir culturas laborales motivadoras y sostenibles.
       👉 A través del trabajo práctico y el examen, muestro cómo estos conocimientos se traducen en soluciones reales para potenciar el talento en las organizaciones. ¡Explóralo y descubre cómo puedo contribuir desde mis prácticas profesionales!
    </p>

    <p className="invitacion-asignatura">
      🎯 ¡𝐓𝐞 𝐢𝐧𝐯𝐢𝐭𝐨 𝐚 𝐞𝐱𝐩𝐥𝐨𝐫𝐚𝐫 𝐦𝐢 𝐞𝐯𝐢𝐝𝐞𝐧𝐜𝐢𝐚 𝐚𝐜𝐚𝐝é𝐦𝐢𝐜𝐚! 𝐃𝐞𝐬𝐜𝐮𝐛𝐫𝐞 𝐥𝐨 𝐪𝐮𝐞 𝐚𝐩𝐫𝐞𝐧𝐝í 𝐲 𝐜ó𝐦𝐨 𝐩𝐮𝐞𝐝𝐨 𝐚𝐩𝐥𝐢𝐜𝐚𝐫𝐥𝐨 𝐞𝐧 𝐞𝐥 𝐦𝐮𝐧𝐝𝐨 𝐥𝐚𝐛𝐨𝐫𝐚𝐥 𝐝𝐞𝐬𝐝𝐞 𝐦𝐢𝐬 𝐩𝐫𝐢𝐦𝐞𝐫𝐚𝐬 𝐩𝐫á𝐜𝐭𝐢𝐜𝐚𝐬:
    </p>

    <a
      href="https://www.dropbox.com/scl/fi/u95afmfbxqciwixjzruux/pdf-Organizaci-n-de-Empresas-trabajo.pdf?rlkey=7idlbdxyzfu7ahnqcnqvd3vr3&st=qtxxhjle&dl=0"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-pdf"
    >
      📂 𝗩𝗲𝗿 𝗧𝗿𝗮𝗯𝗮𝗷𝗼 𝗣𝗿á𝗰𝘁𝗶𝗰𝗼
    </a>
  </div>
</div>

{/* Proyecto 2 */}
<div className="proyecto-card contenido-asignatura">
  <img
    src="https://res.cloudinary.com/dah8tj4ry/image/upload/v1752122177/Recursos_Humanos_pcd7yz.png"
    alt="Recursos Humanos"
  />
  <div className="proyecto-info">
    <p className="calificacion-asignatura">📊 Calificación final: <strong>8.97</strong></p>

    <h3>👥 𝐆𝐞𝐬𝐭𝐢ó𝐧 𝐝𝐞 𝐑𝐞𝐜𝐮𝐫𝐬𝐨𝐬 𝐇𝐮𝐦𝐚𝐧𝐨𝐬</h3>
    <p>
      📌 Gestión del Talento con Impacto Estratégico
      Esta asignatura me permitió profundizar en el diseño e implementación de estrategias efectivas para atraer, desarrollar y retener talento humano, alineando cada acción con los objetivos organizacionales.
      Comprendí cómo la gestión de personas puede convertirse en una ventaja competitiva, integrando procesos clave como la selección por competencias, la formación continua y la evaluación del desempeño.
      💼 Lo aprendido aquí representa una base sólida para mis prácticas profesionales, donde podré contribuir en procesos de reclutamiento, capacitación, desarrollo de clima laboral y fidelización de talento desde una perspectiva estratégica y humana.
    </p>

    <p className="invitacion-asignatura">
      🎯 ¡𝐓𝐞 𝐢𝐧𝐯𝐢𝐭𝐨 𝐚 𝐞𝐱𝐩𝐥𝐨𝐫𝐚𝐫 𝐦𝐢 𝐞𝐯𝐢𝐝𝐞𝐧𝐜𝐢𝐚 𝐚𝐜𝐚𝐝é𝐦𝐢𝐜𝐚! En el 𝐫𝐞𝐟𝐥𝐞𝐣𝐚 𝐦𝐢 𝐩𝐫𝐞𝐩𝐚𝐫𝐚𝐜𝐢ó𝐧 𝐩𝐚𝐫𝐚 𝐜𝐨𝐧𝐭𝐫𝐢𝐛𝐮𝐢𝐫 𝐚𝐜𝐭𝐢𝐯𝐚𝐦𝐞𝐧𝐭𝐞 𝐞𝐧 á𝐫𝐞𝐚𝐬 𝐜𝐥𝐚𝐯𝐞 𝐝𝐞 𝐠𝐞𝐬𝐭𝐢ó𝐧 𝐡𝐮𝐦𝐚𝐧𝐚 𝐝𝐮𝐫𝐚𝐧𝐭𝐞 𝐦𝐢𝐬 𝐩𝐫á𝐜𝐭𝐢𝐜𝐚𝐬 𝐩𝐫𝐨𝐟𝐞𝐬𝐢𝐨𝐧𝐚𝐥𝐞𝐬:
    </p>

    <a
      href="https://www.dropbox.com/scl/fi/lgz3hhkfn7rkt4ead0stg/pdf-Recursos-Humanos-trabajo.pdf?rlkey=k60dxlh4f3m6rbdwrd5f64nzz&st=ecgafzr5&dl=0"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-pdf"
    >
      📂 𝗩𝗲𝗿 𝗧𝗿𝗮𝗯𝗮𝗷𝗼 𝗣𝗿á𝗰𝘁𝗶𝗰𝗼
    </a>
  </div>
</div>

{/* Proyecto 3 */}
<div className="proyecto-card contenido-asignatura">
  <img
    src="https://res.cloudinary.com/dah8tj4ry/image/upload/v1752122286/Direcci%C3%B3n_Estrat%C3%A9gica_y_Competencias_Directivas_fwrryo.png"
    alt="Dirección Estratégica"
  />
  <div className="proyecto-info">
    <p className="calificacion-asignatura">📊 Calificación final: <strong>9.25</strong></p>

    <h3>🎯 𝐃𝐢𝐫𝐞𝐜𝐜𝐢ó𝐧 𝐄𝐬𝐭𝐫𝐚𝐭é𝐠𝐢𝐜𝐚 𝐲 𝐂𝐨𝐦𝐩𝐞𝐭𝐞𝐧𝐜𝐢𝐚𝐬 𝐃𝐢𝐫𝐞𝐜𝐭𝐢𝐯𝐚𝐬</h3>
    <p>
      📌 Dirección Estratégica y Liderazgo con Propósito
      Esta asignatura me brindó herramientas clave para analizar entornos organizacionales complejos, formular estrategias efectivas y actuar con visión a largo plazo.
      Fortalecí competencias directivas como el liderazgo transformacional, la toma de decisiones bajo presión, la comunicación persuasiva y la negociación estratégica.
      🎯 Gracias a este conocimiento, estoy preparado para aportar en procesos de planificación organizacional, mejora de la productividad y alineación del talento con los objetivos corporativos durante mis prácticas profesionales.
    </p>

    <p className="invitacion-asignatura">
      🎯 ¡𝐓𝐞 𝐢𝐧𝐯𝐢𝐭𝐨 𝐚 𝐫𝐞𝐯𝐢𝐬𝐚𝐫 𝐦𝐢 𝐞𝐯𝐢𝐝𝐞𝐧𝐜𝐢𝐚 𝐚𝐜𝐚𝐝é𝐦𝐢𝐜𝐚! En el 𝐝𝐞𝐦𝐮𝐞𝐬𝐭𝐫𝐚 𝐜ó𝐦𝐨 𝐩𝐮𝐞𝐝𝐨 𝐜𝐨𝐧𝐭𝐫𝐢𝐛𝐮𝐢𝐫 𝐚 𝐥𝐨𝐬 𝐩𝐫𝐨𝐜𝐞𝐬𝐨𝐬 𝐝𝐞 𝐩𝐥𝐚𝐧𝐢𝐟𝐢𝐜𝐚𝐜𝐢ó𝐧 𝐲 𝐝𝐢𝐫𝐞𝐜𝐜𝐢ó𝐧 𝐝𝐞𝐬𝐝𝐞 𝐮𝐧 𝐞𝐧𝐟𝐨𝐪𝐮𝐞 𝐞𝐬𝐭𝐫𝐚𝐭é𝐠𝐢𝐜𝐨:
    </p>

    <a
      href="https://www.dropbox.com/scl/fi/8c9ohg99uzfgx6njy6zmm/Direccion-estrategica-trabajo.pdf?rlkey=b4c72vxonbs8yc9d7sdji21r8&st=zosgsrdg&dl=0"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-pdf"
    >
      📂 𝗩𝗲𝗿 𝗧𝗿𝗮𝗯𝗮𝗷𝗼 𝗣𝗿á𝗰𝘁𝗶𝗰𝗼
    </a>

  </div>
</div>

{/* Proyecto 4 */}
<div className="proyecto-card contenido-asignatura">
  <img
    src="https://res.cloudinary.com/dah8tj4ry/image/upload/v1752122350/Comunicaci%C3%B3n_Corporativa_e_Institucional_a2xafj.png"
    alt="Comunicación Corporativa"
  />
  <div className="proyecto-info">
    <p className="calificacion-asignatura">📊 Calificación final: <strong>8.4</strong></p>

    <h3>💬 𝐂𝐨𝐦𝐮𝐧𝐢𝐜𝐚𝐜𝐢ó𝐧 𝐂𝐨𝐫𝐩𝐨𝐫𝐚𝐭𝐢𝐯𝐚 𝐞 𝐈𝐧𝐬𝐭𝐢𝐭𝐮𝐜𝐢𝐨𝐧𝐚𝐥</h3>
    <p>
       📌 Comunicación Estratégica y Reputación Corporativa
       Desarrollé habilidades para gestionar la comunicación organizacional de forma coherente y efectiva, tanto a nivel interno como externo.
      🗣️ Aprendí a diseñar mensajes estratégicos, gestionar situaciones de crisis, y construir narrativas que fortalezcan la identidad e imagen institucional.
      🌟 Esta asignatura es clave para fomentar cohesión cultural, mejorar el clima organizacional y proyectar una marca empleadora sólida, elementos fundamentales que pondré en práctica durante mi etapa profesional.
    </p>

    <p className="invitacion-asignatura">
      💼 ¡𝐓𝐞 𝐢𝐧𝐯𝐢𝐭𝐨 𝐚 𝐫𝐞𝐯𝐢𝐬𝐚𝐫 𝐦𝐢 𝐞𝐧𝐭𝐫𝐞𝐠𝐚! En el 𝐝𝐞𝐦𝐮𝐞𝐬𝐭𝐫𝐚 𝐜ó𝐦𝐨 𝐥𝐚 𝐜𝐨𝐦𝐮𝐧𝐢𝐜𝐚𝐜𝐢ó𝐧 𝐩𝐮𝐞𝐝𝐞 𝐬𝐞𝐫 𝐮𝐧𝐚 𝐡𝐞𝐫𝐫𝐚𝐦𝐢𝐞𝐧𝐭𝐚 𝐩𝐨𝐝𝐞𝐫𝐨𝐬𝐚 𝐩𝐚𝐫𝐚 𝐜𝐨𝐧𝐬𝐭𝐫𝐮𝐢𝐫 𝐜𝐮𝐥𝐭𝐮𝐫𝐚𝐬 𝐨𝐫𝐠𝐚𝐧𝐢𝐳𝐚𝐜𝐢𝐨𝐧𝐚𝐥𝐞𝐬 𝐬ó𝐥𝐢𝐝𝐚𝐬 𝐲 𝐜𝐨𝐡𝐞𝐫𝐞𝐧𝐭𝐞𝐬:
    </p>

    <a
      href="https://www.dropbox.com/scl/fi/hjpx6330zmp6emzsr6dh0/Comunicaci-n-Corporativa-trabajo.pdf?rlkey=bjusx6dla12mxc1avb72405pd&st=cckh5dki&dl=0"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-pdf"
    >
      📂 𝗩𝗲𝗿 𝗧𝗿𝗮𝗯𝗮𝗷𝗼 𝗣𝗿á𝗰𝘁𝗶𝗰𝗼
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
