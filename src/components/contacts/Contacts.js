import { useState } from 'react';
import './Contacts.scss';

const Contacts = () => {

  const [contactsName, setContactsName] = useState('');
  const [contactsEmail, setContactsEmail] = useState('');
  const [contactsMessage, setContactsMessage] = useState('');
  const [consultationName, setConsultationName] = useState('');
  const [consultationEmail, setConsultationEmail] = useState('');
  const [consultationMessage, setConsultationMessage] = useState('');
  const [consultationRequest, setConsultationRequest] = useState('');

  return (
    <section className='contacts'>
      <div className="container">
        <div className="contacts-container">
          <form className="form">
            <h3 className="form__title">Kontakt</h3>
            <p className="form__desc">
              Wir sind immer offen für Fragen und Anmerkungen. <br />
              Nimm gerne Kontakt zu uns auf.
            </p>
            <div className="form-inputs">
              <input
                  required 
                  type="text" 
                  className="form-input" 
                  placeholder='Name'
                  onChange={(e) => setContactsName(e.target.value)}
                  value={contactsName}
                />
              <input
                  required 
                  type="email" 
                  className="form-input" 
                  placeholder='E-mail Adresse'
                  onChange={(e) => setContactsEmail(e.target.value)}
                  value={contactsEmail}
                />
              <textarea
                  required 
                  rows={7} 
                  className='form-input' 
                  placeholder='Deine Nachricht' 
                  onChange={(e) => setContactsMessage(e.target.value)}
                  value={contactsMessage}
                  />
              <p className="form-accept">
                Du erklärst dich damit einverstanden, dass deine Daten zur Bearbeitung deines Anliegens verwendet werden. Weitere Informationen und Widerrufshinweise findest du in der Datenschutzerklärung.
              </p>
              <button className='form-btn btn-green'>ABSENDEN</button>
            </div>
          </form>
          <form className="form">
          <h3 className="form__title">Beratungstermin</h3>
            <p className="form__desc">
              Du hast ein konkretes Anliegen? <br />
              Dann vereinbare jetzt einen verbindlichen Termin mit uns
            </p>
            <div className="form-inputs">
              <input
                  required
                  type="text" 
                  className="form-input" 
                  placeholder='Name'
                  onChange={(e) => setConsultationName(e.target.value)}
                  value={consultationName}
                />
              <input
                  required 
                  type="email" 
                  className="form-input" 
                  placeholder='E-mail Adresse'
                  onChange={(e) => setConsultationEmail(e.target.value)}
                  value={consultationEmail}
                />
              <textarea
                  required 
                  rows={7} 
                  className='form-input' 
                  placeholder='Deine Nachricht' 
                  onChange={(e) => setConsultationMessage(e.target.value)}
                  value={consultationMessage}
                  />
              <textarea
                  required 
                  rows={4} 
                  className='form-input form-input__align-bottom' 
                  placeholder='Terminwunsch' 
                  onChange={(e) => setConsultationRequest(e.target.value)}
                  value={consultationRequest}
                  />
              <button className='form-btn btn-green'>ABSENDEN</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contacts