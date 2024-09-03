import Navigation from './Navigation';
import Skills from './Skills';
import Experiences from './Experiences';
import Projects from './Projects';
import Footer from './Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('skills');

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 p-8 font-sans">
      <Header />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-lg p-6"
      >
        {activeSection === 'skills' && <Skills />}
        {activeSection === 'experience' && <Experiences />}
        {activeSection === 'projects' && <Projects />}
      </motion.div>
      <Footer />
    </div>
  );
};