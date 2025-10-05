import { motion } from "framer-motion";
import { ACHIEVEMENTS, CODING_PROFILES } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const AchievementCard = ({ achievement, index }: { achievement: any; index: number }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.75)}
    className={`group relative overflow-hidden rounded-2xl p-6 cursor-pointer card-lift ${
      achievement.highlight
        ? "glass-strong border border-accent/40 shadow-accent-glow"
        : "glass border border-white/20"
    } hover:shadow-accent-glow transition-all duration-300`}
  >
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div 
          className="text-3xl mr-4 p-2 rounded-xl"
          style={{ backgroundColor: `${achievement.color}20` }}
        >
          {achievement.icon}
        </div>
        <div>
          <h3 className="text-white font-bold text-[18px] mb-1">{achievement.title}</h3>
          <p className="text-secondary text-[14px] leading-5">{achievement.description}</p>
        </div>
      </div>
      <div className="text-right">
        <div 
          className="text-xl font-bold mb-1"
          style={{ color: achievement.color }}
        >
          {achievement.stats}
        </div>
        <div 
          className="text-xs font-medium px-2 py-1 rounded-full"
          style={{ 
            backgroundColor: `${achievement.color}30`,
            color: achievement.color
          }}
        >
          {achievement.category}
        </div>
      </div>
    </div>
  </motion.div>
);

const CodingProfileCard = ({ profile, index }: { profile: any; index: number }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.75)}
    className="group"
  >
    <a
      href={profile.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 rounded-xl glass border border-white/20 hover:border-accent/50 hover:shadow-accent-glow transition-all duration-300 card-lift cursor-pointer"
    >
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-white font-semibold text-[16px] group-hover:text-accent transition-colors duration-300">
          {profile.name}
        </h4>
        <div 
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: profile.color }}
        />
      </div>
      
      <div 
        className="text-lg font-bold mb-1"
        style={{ color: profile.color }}
      >
        {profile.rating}
      </div>
      
      <div className="text-secondary text-[13px] group-hover:text-white/80 transition-colors duration-300">
        {profile.rank}
      </div>
    </a>
  </motion.div>
);

const Achievements = () => {
  return (
    <SectionWrapper idName="achievements">
      <>
        {/* Header Section */}
        <motion.div variants={textVariant()} className="text-center mb-12">
          <h2 className="text-white font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[25px] mb-4">
            Achievements & 
            <span className="text-accent"> Recognition</span>
          </h2>
          <p className="text-secondary text-[16px] max-w-3xl mx-auto leading-[28px]">
            Hackathon victories, Open source contribution and consistent performance across platforms
          </p>
        </motion.div>

        {/* Key Stats Row */}
        <motion.div 
          variants={fadeIn("up", "spring", 0.2, 0.75)}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          <div className="text-center p-4 rounded-xl glass-strong border border-accent/30 cursor-pointer hover:shadow-accent-glow transition-all duration-300 card-lift">
            <div className="text-2xl font-bold text-accent mb-1">1600+</div>
            <div className="text-secondary text-xs">LeetCode Rating</div>
          </div>
          <div className="text-center p-4 rounded-xl glass-strong border border-accent/30 cursor-pointer hover:shadow-accent-glow transition-all duration-300 card-lift">
            <div className="text-2xl font-bold text-accent mb-1">1</div>
            <div className="text-secondary text-xs">Medium Tech Blogs</div>
          </div>
          <div className="text-center p-4 rounded-xl glass-strong border border-accent/30 cursor-pointer hover:shadow-accent-glow transition-all duration-300 card-lift">
            <div className="text-2xl font-bold text-accent mb-1">1st</div>
            <div className="text-secondary text-xs">Hackathons Place</div>
          </div>
          <div className="text-center p-4 rounded-xl glass-strong border border-accent/30 cursor-pointer hover:shadow-accent-glow transition-all duration-300 card-lift">
            <div className="text-2xl font-bold text-accent mb-1">fineract</div>
            <div className="text-secondary text-xs">Open source contribution</div>
          </div>
        </motion.div>

        {/* Achievements Grid - Compact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {ACHIEVEMENTS.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className={`stagger-${(index % 6) + 1}`}
            >
              <AchievementCard achievement={achievement} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Coding Profiles Section - More Visible */}
        <motion.div variants={textVariant()} className="text-center">
          <h3 className="text-white font-black md:text-[35px] sm:text-[28px] text-[22px] mb-6">
            Coding 
            <span className="text-accent"> Profiles</span>
          </h3>
          <p className="text-secondary text-[14px] max-w-2xl mx-auto leading-[24px] mb-8">
            Connect with me on these platforms to see my latest solutions
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {CODING_PROFILES.map((profile, index) => (
              <CodingProfileCard key={profile.name} profile={profile} index={index} />
            ))}
          </div>
        </motion.div>
      </>
    </SectionWrapper>
  );
};

export default Achievements;
