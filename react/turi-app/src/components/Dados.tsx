import React from 'react';

const Dados: React.FC = () => {
  return (
    <section id="dados" className="tab-content">
      <div className="bg-gray-200 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold mb-4">Filtros</h3>
        <div className="flex flex-wrap md:flex-nowrap items-end gap-4">
          <div>
            <p className="font-semibold text-sm mb-1">Tipo do mapa:</p>
            <div className="flex gap-2">
              <label className="flex items-center gap-1"><input type="radio" name="tipoMapa" checked /> Estado</label>
              <label className="flex items-center gap-1"><input type="radio" name="tipoMapa" /> Bioma</label>
            </div>
          </div>
          <div>
            <p className="font-semibold text-sm mb-1">Tipo de dados:</p>
            <div className="flex gap-2">
              <label className="flex items-center gap-1"><input type="radio" name="tipoDado" checked /> Focos de Calor</label>
              <label className="flex items-center gap-1"><input type="radio" name="tipoDado" /> Risco de Fogo</label>
              <label className="flex items-center gap-1"><input type="radio" name="tipoDado" /> Áreas Queimadas</label>
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold">Data Inicial</label>
            <select className="block p-2 text-sm rounded-md border border-gray-300">
              <option>Data Inicial</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-semibold">Data Final</label>
            <select className="block p-2 text-sm rounded-md border border-gray-300">
              <option>Data Final</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-semibold">Estado / Bioma</label>
            <select className="block p-2 text-sm rounded-md border border-gray-300">
              <option>Bioma</option>
            </select>
          </div>
          <div className="ml-auto">
            <button className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-md">Aplicar Filtros</button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <div className="w-full md:w-2/3 text-center">
          <h2 className="text-xl font-bold mb-4">Média de todos os dados</h2>
          <canvas id="graficoPizza" aria-label="Gráfico de barras mostrando distribuição média" role="img"></canvas>
        </div>
      </div>
    </section>
  );
};

export default Dados;
