import React from 'react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
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
  );
};

export default Header;
