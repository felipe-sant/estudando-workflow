import React from 'react';

const cards = [
  {
    img: '/img/termometro.png',
    title: 'Focos de Calor',
    text: 'Mapa interativo com áreas com foco de calor - dados dos satélites do INPE',
  },
  {
    img: '/img/queimada.png',
    title: 'Risco de Fogo',
    text: 'Mapa interativo com áreas de risco de fogo - dados dos satélites do INPE',
  },
  {
    img: '/img/fogo.png',
    title: 'Áreas Queimadas',
    text: 'Mapa interativo com áreas queimadas - dados dos satélites do INPE',
  },
  {
    img: '/img/grafico.png',
    title: 'Gráficos',
    text: 'Gráficos com informações dos dados geográficos ambientais',
  },
];

const Inicio: React.FC = () => {
  return (
    <section className="tab-content active">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
        {cards.map((card, idx) => (
          <div key={idx} className="card p-4 bg-white rounded-xl shadow-md text-center w-full max-w-sm">
            <img src={card.img} alt={card.title} className="icon mx-auto mb-4" />
            <h2 className="card-title text-lg font-bold mb-2">{card.title}</h2>
            <p className="card-text text-sm text-gray-700">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Inicio;
