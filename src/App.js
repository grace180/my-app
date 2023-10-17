import './App.css'
import React, { useState } from 'react';
import anugrah from './anugrah.jpg';

const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const handleAccordionClick = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const accordionData = [
    { title: 'Jurusan', content: 'Informatika ' },
    { title: 'Jalur Sukses', content: 'Corporate Entreprenuership' },
    { title: 'Angkatan', content: '2022' },
    { title: 'Hobby', content: 'Nonton drakor dan Tidur' },
  ];

 
  return (
    <><div className="app">
      <div className="container">
        <div className="sisiKiri">
          <div className="imageContainer">
            <img src="./anugrah.jpg" alt="Profil"
              style={{ display: isVisible ? 'block' : 'none' }} />
            <button onClick={toggleVisibility}>Toggle Image</button>
          </div>
        </div>
        <div className="sisiKanan">
          <div className="accordion">
            {accordionData.map((item, index) => (
              <div key={index} className="accordionItem">
                <div className="accordion-title" onClick={() => handleAccordionClick(index)}>
                  {item.title}
                </div>
                {activeAccordion === index && (
                  <div className="accordionContent">{item.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div><div className='Organisasi'>
        <h2>Riwayat Organisasi</h2>
        <p className='organisasii'>Informatika Student Union</p>
      </div></>
  );
};

export default App;