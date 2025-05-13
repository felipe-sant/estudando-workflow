import React, { useState } from 'react';
import './App.css';  // Importando o arquivo de estilos
import Inicio from './components/Inicio';
import Mapa from './components/Mapa';
import Dados from './components/Dados';
import QuemSomos from './components/QuemSomos';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('inicio');

  return (
    <div className="bg-gray-100 font-sans min-h-screen flex flex-col">
      <header className="header">
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
        </div>
        <nav className="nav">
          <button
            className={`nav-btn ${activeTab === 'inicio' ? 'active' : ''}`}
            onClick={() => setActiveTab('inicio')}
          >
            Início
          </button>
          <button
            className={`nav-btn ${activeTab === 'mapa' ? 'active' : ''}`}
            onClick={() => setActiveTab('mapa')}
          >
            Mapa
          </button>
          <button
            className={`nav-btn ${activeTab === 'dados' ? 'active' : ''}`}
            onClick={() => setActiveTab('dados')}
          >
            Dados
          </button>
          <button
            className={`nav-btn ${activeTab === 'quem' ? 'active' : ''}`}
            onClick={() => setActiveTab('quem')}
          >
            Quem Somos
          </button>
        </nav>
      </header>
      <main className="flex-grow p-6">
        {activeTab === 'inicio' && <Inicio />}
        {activeTab === 'mapa' && <Mapa />}
        {activeTab === 'dados' && <Dados />}
        {activeTab === 'quem' && <QuemSomos />}
      </main>
      <footer className="footer">
        <p>© 2025 Turi - Todos os direitos reservados</p>
      </footer>
    </div>
  );
};

export default App;

