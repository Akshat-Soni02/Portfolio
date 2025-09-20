import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Breadcrumb = () => {
  const [currentSection, setCurrentSection] = useState("about");
  const sections = ["about", "work", "achievements", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      let current = "about";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            current = section;
          }
        }
      }
      
      setCurrentSection(current);
    };

    // Initial check
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getSectionName = (section: string) => {
    switch (section) {
      case "about": return "";
      case "work": return "";
      case "achievements": return "";
      case "contact": return "";
      default: return section;
    }
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col space-y-3">
        {sections.map((section, index) => (
          <motion.div
            key={section}
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <a
              href={`#${section}`}
              className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                currentSection === section
                  ? "bg-accent shadow-accent-glow scale-125"
                  : "bg-white/30 hover:bg-white/60"
              }`}
            />
            {currentSection === section && (
              <motion.div
                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-tertiary/90 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-sm font-medium whitespace-nowrap"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
              >
                {getSectionName(section)}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-tertiary/90" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb;
