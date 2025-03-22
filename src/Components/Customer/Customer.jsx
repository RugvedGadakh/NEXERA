const LogoSection = () => {
    const logos = [
      { name: 'Company 1', src: '/Images/CustomersLogo/elevate_logo.png', link: 'https://getelevate.xyz/' },
      { name: 'Company 2', src: '/Images/CustomersLogo/TechStar.png', link: 'https://www.techstarautomation.in/' },
      { name: 'Company 3', src: '/Images/CustomersLogo/VCP.png', link: 'https://vcpexportenterprisesllp.com/' },
      { name: 'Company 4', src: '/Images/CustomersLogo/CareLink.png', link: 'https://www.carelinkpharma.in/' },
    ];

    const LogoItem = ({ logo }) => (
      <div className="flex flex-col items-center justify-center">
        <div className="relative group w-40 h-40 flex items-center justify-center bg-white rounded-lg p-4 border-2 border-gray-200 shadow-md">
          <img
            src={logo.src}
            alt={`${logo.name} logo`}
            className="max-w-full max-h-full object-contain transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:brightness-110"
          />
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-in-out rounded-lg"></div>
        </div>
        <a href={logo.link} target="_blank" rel="noopener noreferrer">
          <button className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
            View Project
          </button>
        </a>
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
