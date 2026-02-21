import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Package, Plane, ShoppingCart, MapPin, Truck, GraduationCap, Sun, Droplet, Mail, Phone, MapPinned } from 'lucide-react';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'apropos', 'services', 'technologies', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "Importation",
      description: "Nous importons des biens de consommation, des matériaux de construction et des technologies renouvelables ainsi que des intrants agricoles."
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Exportation",
      description: "Nous mettons en avant les produits agricoles et les ressources minérales du Tchad favorisant ainsi leur présence sur les marchés internationaux."
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Commerce Général",
      description: "Notre plateforme d'E-commerce facilite l'accès aux produits locaux, tout en soutenant les entreprises locales, régionales et sous régionales."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Tourisme",
      description: "Nous proposons des services de voyage et de tourisme adaptés pour découvrir le patrimoine culturel et naturel du Tchad."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Logistique & Transport",
      description: "Nous offrons des solutions de transport efficaces pour l'Importation et l'Exportation, garantissant la fluidité de la chaîne."
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Formation et Conseil",
      description: "Nous développons des programmes de formation en gestion et fournissons des conseils aux PME, les aident à croître et à se professionnaliser."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-emerald-600">MACKA FILS</h1>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[
                  { id: 'accueil', label: 'Accueil' },
                  { id: 'apropos', label: 'À propos' },
                  { id: 'services', label: 'Services' },
                  { id: 'technologies', label: 'Technologies' },
                  { id: 'contact', label: 'Contact' }
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'text-emerald-600 border-b-2 border-emerald-600'
                        : 'text-gray-700 hover:text-emerald-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-emerald-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {[
                { id: 'accueil', label: 'Accueil' },
                { id: 'apropos', label: 'À propos' },
                { id: 'services', label: 'Services' },
                { id: 'technologies', label: 'Technologies' },
                { id: 'contact', label: 'Contact' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium ${
                    activeSection === item.id
                      ? 'text-emerald-600 bg-emerald-50'
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section
        id="accueil"
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(16,185,129,0.08), rgba(45,212,191,0.04)), url(${image2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Bienvenue chez <span className="text-emerald-600">MACKA FILS</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              MACKA FILS est une Entreprise dynamique engagée dans le développement économique du Tchad.
              Nous spécialisons dans l'Importation, l'Exportation et divers services qui répondent aux
              besoins de notre pays et de la région.
            </p>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Notre mission est de créer des opportunités durables tout en misant sur l'innovation et
              la responsabilité sociale.
            </p>
            <button
              onClick={() => scrollToSection('services')}
              className="mt-10 inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Découvrir nos services
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section id="apropos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            À propos de nous
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-3xl font-bold text-emerald-600 mb-6">Notre Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Chez MACKA FILS, nous croyons à un avenir où le Tchad prospère grâce à des initiatives
                économiquement viables et durables. Notre vision est de devenir un leader dans
                l'Import-Export et les services associés tout en favorisant le développement local.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-3xl font-bold text-emerald-600 mb-6">Notre Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Notre mission est de fournir des produits et services de qualité, d'encourager les
                partenariats et de promouvoir les ressources locales afin de contribuer au développement
                économique de notre Nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(249,250,251,0.7), rgba(249,250,251,0.7)), url(${image1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
            Nos Services et Activités
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Découvrez notre gamme complète de services conçus pour soutenir le développement économique du Tchad
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl hover:bg-white/80 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="technologies" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
            Technologies & Innovation
          </h2>
          <p className="text-xl text-center text-emerald-600 font-semibold mb-12">
            Engagement envers les Technologies Durables
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-10 rounded-2xl shadow-xl">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Chez MACKA FILS, nous sommes convaincus que les technologies renouvelables sont essentielles
                pour un avenir durable. Nous nous spécialisons dans l'importation de panneaux solaires et de
                systèmes de purification d'eau, améliorant ainsi l'accès à l'énergie et à l'eau potable au Tchad.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Sun className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Énergie Solaire</h4>
                    <p className="text-gray-600">
                      Panneaux solaires de haute qualité pour un accès durable à l'énergie
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Droplet className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Purification d'Eau</h4>
                    <p className="text-gray-600">
                      Systèmes avancés pour garantir l'accès à l'eau potable
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Contactez-nous
          </h2>
          <p className="text-xl text-center text-gray-300 mb-16">
            Pour toute question ou demande de partenariat, n'hésitez pas à nous contacter.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-800 p-8 rounded-xl text-center hover:bg-gray-750 transition-colors">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Email</h3>
              <a href="mailto:etsmackafils@gmail.com" className="text-emerald-400 hover:text-emerald-300">
                etsmackafils@gmail.com
              </a>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl text-center hover:bg-gray-750 transition-colors">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Téléphone</h3>
              <p className="text-emerald-400">+235 60 93 22 00</p>
              <p className="text-emerald-400">+235 99 24 22 74</p>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl text-center hover:bg-gray-750 transition-colors">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPinned className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Adresse</h3>
              <p className="text-gray-300">Ville de N'Djamena</p>
              <p className="text-gray-300">Arrondissement: 3ème</p>
              <p className="text-gray-300">Quartier: Rue de 30 m</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-950 text-gray-400 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} MACKA FILS. Tous droits réservés.
          </p>
          <p className="text-sm mt-2">
            Développement économique durable au Tchad
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
