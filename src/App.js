import { useState } from 'react';
import './App.css';

export function App() {

  const rawData = [
    {id: 1, alt: "andrey_stolyarov.jfif", filename: "andrey_stolyarov.jfif", category: 1, downloads: 0},
    {id: 2, alt: "denchik.jpg", filename: "denchik.jpg", category: 2, downloads: 24},
    {id: 3, alt: "dolboeb_png.png", filename: "dolboeb_png.png", category: 3, downloads: 234},
    {id: 4, alt: "FOMA.png", filename: "FOMA.png", category: 1, downloads: 546},
    {id: 5, alt: "im1488ge.png", filename: "im1488ge.png", category: 2, downloads: 21},
    {id: 6, alt: "image.png", filename: "image.png", category: 3, downloads: 87},
    {id: 7, alt: "image1488.png", filename: "image1488.png", category: 1, downloads: 90},
    {id: 8, alt: "koshevoy.png", filename: "koshevoy.png", category: 2, downloads: 234},
    {id: 9, alt: "miyagi.png", filename: "miyagi.png", category: 3, downloads: 2},
    {id: 10, alt: "Mussolini_mezzobusto.jpg", filename: "Mussolini_mezzobusto.jpg", category: 1, downloads: 56},
    {id: 11, alt: "theDeep.png", filename: "theDeep.png", category: 2, downloads: 854},
    {id: 12, alt: "vova_adidas.jpg", filename: "vova_adidas.jpg", category: 3, downloads: 3},
  ];

  const [data, setData] = useState(rawData);

  function handleClick(id) {
    const newData = data.map(item => {
      if(id === item.id) {
        return {...item, downloads: item.downloads + 1};
      }
      return item;
    })
    setData(newData);
  }

  

  return (
    <div className="app">
      <div className='content'>
        <header>
          <h1>Kategorie zdjęć</h1>
          <div className='switch-container'>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="ctrId"/>
              <label class="form-check-label" for="ctrId">Kwiaty</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id=" ctrId2"/>
              <label class="form-check-label" for=" ctrId2">Zwierzą</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id=" ctrId3"/>
              <label class="form-check-label" for=" ctrId3">Samochody</label>
            </div>
          </div>
        </header>
        <article className='card-container'>
          {
            data.map(item => (
              <div className='gallery-card' key={item.id}>
                <div className='image-container'>
                  <img className='card-image' src={item.filename} alt={item.alt}></img>
                </div>
                <h4>Pobrań: {item.downloads}</h4>
                <button type="button" class="btn btn-success" onClick={() => handleClick(item.id)}>Pobierz</button>
              </div>
            ))
          }
        </article>
      </div>
    </div>
  );
}
