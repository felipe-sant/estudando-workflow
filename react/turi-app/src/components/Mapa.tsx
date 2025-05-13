import React from 'react';

const Mapa: React.FC = () => {
  return (
    <section id="mapa" className="tab-content">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="bg-gray-200 w-full md:w-64 p-4 shadow-lg rounded-lg">
          <h3 className="text-xl text-center font-bold mb-2">Filtros</h3>
          <div className="mb-4">
            <p className="font-semibold mb-1">Tipo de mapa:</p>
            <label><input type="radio" name="mapType" value="estado" checked /> Estados</label><br />
            <label><input type="radio" name="mapType" value="bioma" /> Biomas</label>
          </div>
          <div className="mb-4">
            <p className="font-semibold mb-1">Tipo de dados:</p>
            <label><input type="radio" name="dataType" value="foco" checked /> Focos de Calor</label><br />
            <label><input type="radio" name="dataType" value="risco" /> Riscos de Fogo</label><br />
            <label><input type="radio" name="dataType" value="queimada" /> Áreas queimadas</label>
          </div>
          <select id="estadoSelect" className="p-2 rounded-md border border-gray-300">
            <option>Estado</option>
            <option>SP</option>
            <option>MG</option>
            <option>PA</option>
          </select>
          <select id="cidadeSelect" className="p-2 rounded-md border border-gray-300">
            <option>Cidade</option>
          </select>
          <select id="biomaSelect" className="p-2 rounded-md border border-gray-300 hidden">
            <option>Biomas</option>
          </select>
          <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Ativar Filtros</button>
        </div>
        <div className="w-full">
          <div id="mapid" className="shadow-lg rounded-xl" style={{ minHeight: '600px' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Mapa;
