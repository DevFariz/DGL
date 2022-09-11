import './Intro.scss';

const Intro = () => {
  return (
    <section className='intro'>
      <div className="container">
       <div className="intro-container">
          <span>zusammen für</span>
          <h1 className="intro-title title">ECHTE NACHHALTIGKEIT AM ARBEITSPLATZ</h1>
          <div className="intro-text">Jetzt wird Umweltschutz in deinem Unternehmen: 
            einfach, ökonomisch und modern.
            DieGrüneLösung - alles mit nur einem Werkzeug.
          </div>
          <button className='btn-green intro-btn'>KOSTENLOS REGISTRIEREN</button>
       </div>
      </div>
    </section>
  )
}

export default Intro