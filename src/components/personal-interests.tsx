import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const InterestCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <motion.div
    variants={fadeIn("up", "spring", 0.2, 0.75)}
    className="group relative overflow-hidden rounded-xl p-4 glass border border-white/10 hover:border-accent/30 hover:shadow-accent-glow transition-all duration-300 card-lift cursor-pointer"
  >
    <div className="flex items-center space-x-3">
      <div className="text-2xl">{icon}</div>
      <div>
        <h4 className="text-white font-semibold text-sm group-hover:text-accent transition-colors duration-300">
          {title}
        </h4>
        <p className="text-secondary text-xs group-hover:text-white/80 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);

const PersonalInterests = () => {
  const interests = [
    { icon: "📝", title: "Blogs", description: "Writing about tech and life" },
    { icon: "📚", title: "Reading", description: "Love exploring books" },
    { icon: "♟️", title: "Chess", description: "Strategic thinking" },
    { icon: "🏃", title: "Outdoor Games", description: "Active lifestyle" },
    { icon: "🍕", title: "Food", description: "Culinary adventures" },
    { icon: "✈️", title: "Traveling", description: "Exploring new places" },
  ];

  return (
    <SectionWrapper>
      <motion.div variants={textVariant()} className="text-center mb-8">
        <h2 className="text-white font-black md:text-[40px] sm:text-[30px] text-[25px] mb-4">
          Beyond 
          <span className="text-accent"> Code</span>
        </h2>
        <p className="text-secondary text-[14px] max-w-2xl mx-auto leading-[24px]">
          When I'm not coding, you'll find me pursuing my passions and interests
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {interests.map((interest, index) => (
          <InterestCard
            key={interest.title}
            icon={interest.icon}
            title={interest.title}
            description={interest.description}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default PersonalInterests;
