import Header from '../components/Header.jsx';
import BreakRump from '../components/BreakRump.jsx';
import ExcellenceSection from '../components/ExcellenceSection.jsx';
import JourneySection from '../components/JourneySection.jsx';
import VisionSection from '../components/VisionSection.jsx';
import SatisfactionSection from '../components/SatisfactionSection.jsx';
import ExpertsSection from '../components/ExpertsSection.jsx';
import { useLd } from '../Context/LdContext.jsx';

const About = () => {
   const { content } = useLd();
   console.log(content)
  return (
    <>
      <Header />
      <BreakRump />
      <ExcellenceSection />
      <JourneySection />
      <VisionSection />
      <SatisfactionSection />
      <ExpertsSection />
    </>
  );
};

export default About;