import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <section className="about" root="about">
        <img
          src="https://avatars.githubusercontent.com/u/98354869?v=4"
          alt="Image of Luis on Github"
        />
        <h3>
          Olá meu nome é <strong>Luis Henrique</strong>,<br /> mas pode me
          chamar de Luis.
        </h3>
        <p>
          Sou um eterno aprendiz de Desenvolvimento da Web, especializado no
          FrontEnd. Desde de que conheci o mundo digital, me apeguei nas novas
          tecnologias, me interessei por jogos e acima de tudo, mantive como
          objetivo trabalhar em alguma área do mundo digital, passei por
          diversas fases. <br /> Posso dizer que hoje sou Artista Digital, pois
          fiquei quase 2 anos fazendo caricaturas nos Apps Photoshop e
          Illustrator.
          <br /> Durante 4 meses mantive um canal de cortes de podcasts no
          Youtube, momento da vida em que aprendi ainda mais sobre Photoshop e
          um pouco sobre Premiere. Os serviços que executo no mundo real, estão
          diretamente ligados aos pacotes Office, boa parte com a internet,
          enfim...
          <br /> Posso dizer que tudo o que faço, tem uma pitada do mundo
          digital.
        </p>
      </section>
      <section className="languages" root="languages">
        <div>
          <h3>Meus conhecimentos</h3>
          <ul className="lang">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Node</li>
          </ul>
        </div>
      </section>
      <section className="projects" root="projects"></section>
      <section className="contact" root="contact"></section>
    </div>
  );
}
