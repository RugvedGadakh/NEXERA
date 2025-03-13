const LogoSection = () => {
    const logos = [
      { name: 'Company 1', src: '/Images/CustomersLogo/elevate_logo.png' },
      { name: 'Company 2', src: '/Images/CustomersLogo/TechStar.png' },
      { name: 'Company 3', src: '/Images/CustomersLogo/VCP.png' },
      { name: 'Company 4', src: '/Images/CustomersLogo/CareLink.png' },
    ];

    const LogoItem = ({ logo }) => (
      <div className="flex justify-center">
        <div className="relative group w-40 h-40 flex items-center justify-center bg-white rounded-lg p-4">
          <img
            src={logo.src}
            alt={`${logo.name} logo`}
            className="max-w-full max-h-full object-contain transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:brightness-110"
          />
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-in-out rounded-lg"></div>
        </div>
      </div>
    );

    return (
      <section id="clients" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Trusted by Industry Leaders</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Our solutions are empowering businesses across various sectors, driving innovation and growth.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
            {logos.map((logo, index) => (
              <LogoItem key={index} logo={logo} />
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default LogoSection;
