const Mapa = () => {
    return (
      <div className="w-full max-w-4xl mx-auto text-center py-12" id="mapa">
        <h2 className="text-3xl font-bold text-slate-800 mb-2 font-display uppercase tracking-wide">Onde estamos</h2>
        <p className="text-slate-600 mb-6">
          Venha nos visitar! Estamos localizados no coração de São Paulo.
        </p>
        <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg border border-gray-300">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9845830947615!2d-46.66377632446059!3d-23.568997178794618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59dacc2ac643%3A0xaaccc218be49552!2sAv.%20Nove%20de%20Julho%2C%203384%20-%20Jardim%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001406-100%2C%20Brasil!5e0!3m2!1spt-BR!2skr!4v1792418397451!5m2!1spt-BR!2skr" 
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
        </div>
      </div>
    );
  };
  
  export default Mapa;
  