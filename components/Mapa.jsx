const Mapa = () => {
    return (
      <div className="w-full max-w-4xl mx-auto text-center py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Onde estamos</h2>
        <p className="text-gray-600 mb-6">
          Venha nos visitar! Estamos localizados no coração de São Paulo.
        </p>
        <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg border border-gray-300">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9726077781115!2d-46.66438538868505!3d-23.569427261801014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59dad8c77005%3A0x21cdb4720266018!2sAv.%20Nove%20de%20Julho%2C%203452%20-%20Jardim%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001406-000!5e0!3m2!1spt-BR!2sbr!4v1739208473492!5m2!1spt-BR!2sbr"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    );
  };
  
  export default Mapa;
  