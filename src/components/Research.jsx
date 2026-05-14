import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, History, Zap, ShieldAlert, FlaskConical, ArrowRight, ArrowLeft, HeartPulse, CloudLightning, Activity, Beaker, ShieldCheck, Microscope, ExternalLink, X } from 'lucide-react';

const publishedResearch = [
  {
    title: "Integrative and lifestyle medicine strategies should include Earthing (grounding): Review of research evidence and clinical observations",
    source: "Naprapathic Healing Center, Illinois & Lake Norman Integrative Psychiatry",
    summary: "2019 review reports grounding reduces inflammation pain stress improves sleep circulation recovery Earth electrons may neutralize free radicals ~20 studies show benefits in HRV DOMS wound healing anxiety fatigue BP.",
    fullDescription: "The 2019 review article on Earthing (grounding) claims that direct contact with the Earth — such as walking barefoot outdoors or using grounding products indoors — may help reduce inflammation, pain, stress, and improve sleep, circulation, recovery, and overall well-being. The authors suggest the Earth's natural electrons may neutralize free radicals and support the body's electrical balance. The paper reviewed around 20 studies involving thermal imaging, blood flow, athletic recovery (DOMS), heart rate variability, chronic pain, and wound healing, along with many clinical observations from doctors and practitioners. Several figures in the article showed reduced inflammation, improved circulation, and faster healing after grounding sessions. The review also discussed possible benefits for anxiety, fatigue, autoimmune conditions, blood pressure, and athletic performance.",
    link: "https://www.sciencedirect.com/science/article/pii/S1550830719305476"
  },
  {
    title: "Grounding – The universal anti-inflammatory remedy",
    source: "Department of Radiation Oncology, Sun Yat-sen University Cancer Center",
    summary: "Earth-electron exposure may help reduce inflammation, oxidative stress, blood viscosity, and cardiovascular risk while improving circulation, HRV, sleep, wound healing, and stress regulation.",
    fullDescription: "The article “Grounding – The Universal Anti-Inflammatory Remedy” presents grounding (earthing) as a natural method that may help reduce chronic inflammation, oxidative stress, blood viscosity, and cardiovascular risk by reconnecting the body to the Earth's electrons. The authors claim modern lifestyles, especially wearing non-conductive shoes and living indoors, have disconnected humans from the Earth's natural electrical energy and Schumann resonances. The paper discusses studies suggesting grounding may improve blood flow, heart rate variability (HRV), sleep, wound healing, athletic recovery, stress regulation, and blood pressure while reducing red blood cell clumping and inflammation. It also explores possible applications in Covid-19 recovery, diabetes, hypertension, cardiovascular disease, and aging-related disorders. Several studies cited in the article reported improved circulation, reduced pain, faster healing, and lower blood viscosity after grounding sessions. The authors propose that Earth's free electrons act as natural antioxidants that neutralize free radicals and support mitochondrial energy production (ATP). The article also highlights research involving premature infants, athletes, and hypertensive patients showing possible physiological benefits from grounding. However, many of the studies discussed were small, observational, or anecdotal, and the authors themselves acknowledge that grounding research is still in its early stages and requires further scientific validation.",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10105021/"
  },
  {
    title: "Why Grounding May Be the Future of Natural Skincare Treatments",
    source: "European Journal of Medical and Health Sciences",
    summary: "Combined conductive skincare and earthing may enhance blood flow, skin repair, and nutrient absorption while reducing inflammation, stress, and free radicals. It supports microcirculation, healing, hydration, and healthier skin function.",
    fullDescription: "This article explains how localized grounding (earthing) combined with conductive skincare may improve traditional skincare results by increasing blood flow and supporting skin repair. Grounding connects the body to the Earth's natural electrical charge, which may help improve circulation, reduce inflammation, lower stress, and enhance overall skin health. The study highlights that better blood flow allows the skin to absorb nutrients and skincare ingredients more effectively while improving oxygen delivery and tissue regeneration. Unlike many cosmetic procedures that can cause pain, redness, or side effects, grounding is presented as a simple, natural, and non-invasive method. Researchers observed that grounded individuals showed improved facial microcirculation, faster wound healing, reduced blood viscosity, and better autonomic nervous system regulation. The article also explains that grounding may neutralize harmful free radicals by supplying electrons to the body, acting as a natural antioxidant. Conductive skincare products combined with grounding patches may further improve hydration, anti-inflammatory effects, and skin texture. Additional benefits mentioned include reduced stress, improved sleep, balanced cortisol levels, and healthier overall body physiology. Overall, the article suggests that grounding could become an important supportive therapy in modern skincare and wellness treatments.",
    link: "https://www.researchgate.net/publication/353156602_How_Localized_Grounding_Combined_with_Conductive_Skincare_Improves_the_Outcomes_of_the_Traditional_Skincare"
  },
  {
    title: "The effect of earthing (grounding) on human physiology",
    source: "California Institute for Human Science, Graduate School & Research Center",
    summary: "Direct Earth contact caused instant changes in EEG, EMG, and blood flow (<1 sec), helping balance stress levels, reduce electrical interference, and support better sleep, circulation, and nervous system regulation.",
    fullDescription: "This study found that direct contact with the Earth (earthing) created immediate changes in brain signals (EEG), muscle tension (EMG), and blood flow, often within less than one second. It showed the body may naturally rebalance stress levels — relaxing people with high stress and stimulating those with low energy. Researchers also observed reduced electrical interference from surrounding devices when the body was grounded. Overall, the findings suggest earthing may support better sleep, lower stress, improved circulation, and healthier nervous system function.",
    link: "#"
  },
  {
    title: "The Effect of Earthing on Human Physiology Part 2",
    source: "Gaetan Chevalier, Ph.D., Kazuhito Mori, Ph.D.",
    summary: "Physiological exposure to Earth's electrical contact produced rapid changes in EEG, EMG, and blood flow (<1 sec), helping regulate stress response, reduce electrical interference, and improve sleep quality, circulation, and nervous system balance.",
    fullDescription: "This research found that grounding the body to the Earth caused immediate changes in brain activity, muscle tension, and blood circulation — often in less than one second. Researchers saw that grounding helped the body move toward a calmer, more balanced nervous system, which may support better sleep and reduced stress. It also reduced electrical interference from surrounding devices, suggesting the body becomes more stable when connected to the Earth. The study suggests grounding may help normalize body functions naturally, though larger studies are still needed.",
    link: "https://journals.holosuniversity.org/index.php/seemj/article/view/9/7"
  },
  {
    title: "Earthing: Health Implications of Reconnecting the Human Body to the Earth's Surface Electrons",
    source: "Incorporating Environmental Health in Clinical Medicine",
    summary: "Earth contact studies show reduced inflammation, stress, pain, and cortisol imbalance while improving sleep quality, energy, HRV, circulation, and recovery by stabilizing the body's electrical and nervous systems.",
    fullDescription: "This research article explores how direct contact with the Earth, known as earthing or grounding, may positively affect human health. Researchers suggest that the Earth’s surface contains free electrons that can help stabilize the body’s electrical systems and reduce inflammation. Modern lifestyles, including rubber-soled shoes and indoor living, may disconnect people from this natural electrical connection. Multiple pilot studies reviewed in the paper reported improvements in sleep quality, chronic pain, stress levels, muscle recovery, energy, and overall well-being among grounded participants. Grounding during sleep was also linked with healthier cortisol rhythms, which may support better stress regulation and deeper sleep. Additional studies suggested grounding could improve heart rate variability, support the parasympathetic nervous system, and reduce blood viscosity, potentially benefiting cardiovascular health. Researchers also found that grounding significantly lowered electrical voltage induced on the body from surrounding electrical environments. The proposed mechanism is that electrons from the Earth may neutralize free radicals involved in inflammation, similar to how antioxidants work in the body.",
    link: "https://onlinelibrary.wiley.com/doi/10.1155/2012/291541"
  },
  {
    title: "Grounding Patients With Hypertension Improves Blood Pressure: A Case History Series Study",
    source: "Howard K. Elkin, MD, FACC; Angela Winter, RN, BSN",
    summary: "Pilot study (10 hypertensive patients) found grounding reduced systolic blood pressure by 8.6-22.7%, while improving sleep, anxiety, stress, fatigue, and energy, supporting natural hypertension relief and better health balance.",
    fullDescription: "This pilot study investigated whether grounding (Earthing) could help reduce high blood pressure in hypertensive patients. Ten participants grounded themselves for 10–12 hours daily using conductive sheets and mats connected to the Earth over a period of several months. Blood pressure readings were monitored both at home and during regular clinic visits. Results showed that every participant experienced significant improvement in systolic blood pressure, with reductions ranging from 8.6% to 22.7% and an average decrease of 14.3%. Several patients were able to better control their hypertension with reduced dependence on medication, while others avoided medication entirely. Participants also reported additional benefits such as improved sleep, reduced anxiety, lower stress levels, better energy, and greater relaxation. Researchers believe grounding may improve blood pressure through reduced inflammation, better nervous system balance, improved circulation, and normalization of physiological functions. The study highlights how modern lifestyles and insulated footwear may disconnect humans from the Earth’s natural electrical charge, potentially contributing to chronic health issues. Although larger clinical trials are needed, findings suggest grounding may be a safe, natural, and supportive therapy for hypertension management.",
    link: "#"
  },
  {
    title: "The Effects of Grounding (Earthing) on Bodyworkers' Pain and Overall Quality of Life: A Randomized Controlled Trial",
    source: "Department of Family Medicine and Public Health, University of California",
    summary: "RCT (16 massage therapists, 6 weeks) showed grounding reduced pain, fatigue, burnout, and depression while improving energy, physical function, and mood. Benefits persisted after study, supporting better occupational recovery.",
    fullDescription: "This randomized controlled trial examined the effects of grounding (Earthing) on massage therapists’ pain levels, physical function, and overall quality of life. Sixteen massage therapists participated in a six-week double-blind study where they were grounded both while working and sleeping for four weeks. Researchers found significant improvements during the grounding phase, including reduced pain, fatigue, tiredness, and depressed mood. Participants also experienced increased energy levels, better physical function, and improved emotional well-being compared to periods when they were not grounded. One month after the study, improvements in physical function and reductions in fatigue and depression were still noticeable. The study highlights how massage therapists commonly suffer from inflammation-related injuries such as tendonitis, wrist pain, shoulder strain, and burnout due to the physical demands of their profession. Researchers suggest grounding may help support recovery by improving inflammatory biomarkers, blood viscosity, and heart rate variability (HRV). The findings indicate that grounding could serve as a simple, natural, and non-invasive wellness tool to improve occupational health, recovery, and long-term quality of life for bodyworkers and massage therapists.",
    link: "https://www.sciencedirect.com/science/article/pii/S1550830718302519"
  },
  {
    title: "Classification of EEG Signal for Body Earthing Application",
    source: "Faculty of Electrical & Electronics Engineering, Universiti Malaysia Pahang",
    summary: "2018 EEG study showed grounding increased alpha waves (relaxation) and reduced beta waves (stress/anxiety). STFT/CWT analysis and ANN (86.7%) confirmed measurable calmer brain states after earthing.",
    fullDescription: "This 2018 research explored how body grounding (earthing) affects brainwave activity and stress levels using EEG signal analysis. Researchers recorded EEG signals from 30 participants before and after grounding using the Emotiv EPOC Headset and analyzed Alpha and Beta brainwave bands. The study found that Alpha brainwave activity significantly increased after grounding, indicating a more relaxed mental state, while Beta brainwave activity decreased, showing reduced stress and anxiety levels. Advanced signal-processing techniques such as STFT and CWT were used to examine brainwave changes, while an Artificial Neural Network (ANN) classified stress and relaxation states with 86.7% accuracy. The findings suggest that grounding may positively influence the nervous system by helping stabilize emotional and mental stress. Researchers concluded that body earthing can support relaxation, improve emotional balance, and reduce stress-related brain activity. The study also highlighted the potential of EEG technology and AI-based analysis for measuring grounding’s physiological effects. Overall, the research provides scientific evidence that grounding may help promote calmer brain function and better mental well-being.",
    link: "https://www.researchgate.net/publication/326197955_Classification_of_EEG_Signal_for_Body_Earthing_Application"
  },
  {
    title: "Electrical Grounding Improves Vagal Tone in Preterm Infants",
    source: "Charles Palmer, Kim K. Doheny, Yur Gordin",
    summary: "A clinical study found grounding reduced preterm infants’ body voltage by 95% and improved vagal tone by 67%, suggesting stronger nervous system balance, lower stress, and better recovery support.",
    fullDescription: "staying in neonatal intensive care units (NICUs). Vagal tone is an important indicator of nervous system balance, stress regulation, and overall resilience in premature babies. Researchers found that incubators and medical equipment generated measurable electromagnetic fields that created electrical voltage on infants’ skin. In the study, 26 preterm infants were connected to an electrical ground using a conductive patch and wire linked to a grounded outlet. Grounding reduced the skin’s electrical voltage by approximately 95%, showing that the surrounding electrical environment strongly affects the body. The researchers also discovered that infants with higher skin voltage generally had lower vagal tone before grounding. During grounding, vagal tone improved by about 67%, indicating better autonomic nervous system function and relaxation response. However, after grounding was removed, vagal tone returned to pre-grounding levels. The study concludes that electrical grounding may help reduce stress vulnerability and potentially lower the risk of complications such as necrotizing enterocolitis in preterm infants, although further research is still needed to confirm long-term clinical benefits.",
    link: "https://karger.com/neo/article-abstract/112/2/187/231565/Electrical-Grounding-Improves-Vagal-Tone-in?redirectedFrom=fulltext"
  },
  {
    title: "Differences in Blood Urea and Creatinine Concentrations in Earthed and Unearthed Subjects during Cycling Exercise",
    source: "Paweł Sokal, Zbigniew Jastrzębski",
    summary: "A controlled study found grounding during exercise lowered blood urea levels, suggesting reduced protein breakdown and better recovery. Results indicate earthing may support muscle repair, metabolism, and athletic performance.",
    fullDescription: "This study examined whether electrical grounding during exercise influences human biochemical responses. Forty-two healthy male participants performed cycling exercise in a double-blind, crossover design where they were either earthed (connected to the Earth) or unearthed during training and recovery. Blood samples were taken before, during, and after exercise to measure urea and creatinine levels. Results showed that subjects who were earthed had significantly lower blood urea levels throughout exercise and recovery compared to unearthed conditions, with strong statistical significance. Creatinine levels remained mostly unchanged during exercise but showed slight reductions during recovery in some earthed conditions. Researchers suggest that lower urea levels may indicate reduced protein breakdown or increased renal excretion. The study proposes that grounding may influence metabolic processes by affecting the body’s electrical environment and enzyme activity involved in protein metabolism. Overall, the findings suggest that earthing during exercise may promote a more positive protein balance and could potentially benefit athletic recovery and performance.",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3771483/"
  },
  {
    title: "Grounding the Body Improves Sleep Quality in Patients with Mild Alzheimer’s Disease",
    source: "Department of Chinese Medicine, Kaohsiung Chang Gung Memorial Hospital",
    summary: "A 12-week clinical study found grounding improved sleep in mild Alzheimer's patients, with 62.5% showing better rest. Results suggest grounding may support natural sleep recovery without medication.",
    fullDescription: "This study checked whether grounding could help older patients with mild Alzheimer’s disease, especially for sleep, anxiety, and depression. Researchers tested grounding as a natural therapy because many AD patients have sleep problems and emotional stress. The study included 22 patients, but only 15 completed the full 12-week program. They were divided into two groups: one used a real grounding mat, and the other used a sham mat (same-looking mat but without actual grounding). Patients used the mat for 30 minutes, 5 times per week, for 12 weeks. Researchers measured sleep quality, anxiety, and depression at the start and after 12 weeks using standard medical questionnaires. The main result was improved sleep. The grounding group’s sleep score improved strongly: PSQI = 0.3 ± 0.7, while the sham group stayed worse at 3.0 ± 1.9, with p = 0.006, showing a meaningful difference. Also, 62.5% of grounded patients showed better sleep, compared with only 14.3% in the sham group. This suggests grounding may help AD patients sleep more deeply and comfortably. For anxiety and depression, results were not significant. The anxiety score (BAI p = 0.613) and depression score (BDI-II p = 0.189) showed little difference, so grounding did not clearly improve these conditions. Researchers also measured body electrical signals at two acupuncture points. The grounding group showed some changes, but results were not statistically strong enough to confirm a clear body-electron effect. Overall, the study concluded that grounding may be a simple non-drug method to improve sleep in mild Alzheimer’s patients, but more people and larger studies are needed to confirm effects on anxiety and depression.",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8954071/"
  }
];

const Research = () => {
  const [selectedStudy, setSelectedStudy] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <>
    <div style={{ backgroundColor: '#FDFDFD', minHeight: '100vh', color: '#1A1A1A', paddingBottom: '150px' }}>
      
      {/* Hero Header */}
      <header style={{ height: '70vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
           <img src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=2000" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Forest Canopy" />
           <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), #FDFDFD)' }} />
        </div>

        <div style={{ position: 'relative', zIndex: 10, padding: '0 24px', maxWidth: '1000px' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 900, color: 'white', lineHeight: 0.9, letterSpacing: '-0.04em', marginBottom: '30px' }}
          >
            THE ARCHIVE OF <br /> <span style={{ color: '#A3B18A' }}>CONNECTION</span>
          </motion.h1>
          <p style={{ color: 'white', fontSize: '1.2rem', fontWeight: 300, maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
            A comprehensive clinical repository exploring the bio-electrical synchronization between the Earth and the Human Body.
          </p>
        </div>
      </header>

      {/* Chapter 1: The Bio-Electrical Baseline */}
      <section style={{ padding: 'clamp(60px, 5vw, 80px) 24px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(30px, 4vw, 50px)', alignItems: 'center' }}>
            <motion.div {...fadeIn}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#3B5233', textTransform: 'uppercase', letterSpacing: '0.3em', display: 'block', marginBottom: '20px' }}>Biological Foundation</span>
              <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '30px', lineHeight: 1.1 }}>The Earth as an <br /><span style={{ color: '#A3B18A' }}>Electron Reservoir</span></h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#444', marginBottom: '25px' }}>
                The Earth's surface possesses a limitless and continuously renewed supply of free or mobile electrons. The Earth's negative potential can create a stable internal bio-electrical environment for the normal functioning of all body systems.
              </p>
              <div style={{ padding: '25px', backgroundColor: '#F9F9F9', borderRadius: '24px', borderLeft: '4px solid #3B5233' }}>
                <p style={{ fontSize: '1rem', fontStyle: 'italic', color: '#1A1A1A', margin: 0 }}>
                  "When you maintain direct contact with the ground, this negative potential neutralizes the positive oxidative stress (free radicals) that builds up within our bodies from modern lifestyle stressors."
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ position: 'relative' }}
            >
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1440" style={{ width: '100%', borderRadius: '40px', boxShadow: '0 40px 100px rgba(0,0,0,0.1)' }} alt="Grounding Practice" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clinical Journal Section */}
      <section style={{ padding: 'clamp(60px, 12vw, 120px) 24px', backgroundColor: '#F6F6F6' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 80px)' }}>
            <Microscope size={40} color="#3B5233" style={{ marginBottom: '20px' }} />
            <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.02em' }}>Clinical Study Matrix</h2>
            <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', color: '#666', fontWeight: 300 }}>Peer-reviewed observations on human physiological shifts.</p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 30vw, 350px), 1fr))', 
            gap: 'clamp(20px, 4vw, 40px)' 
          }}>
            {/* Study 1: Cortisol */}
            <motion.div {...fadeIn} style={{ backgroundColor: 'white', padding: 'clamp(25px, 5vw, 45px)', borderRadius: '32px', boxShadow: '0 20px 50px rgba(0,0,0,0.03)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
                <div style={{ backgroundColor: '#EEF2ED', padding: '12px', borderRadius: '15px', color: '#3B5233' }}><Activity size={24} /></div>
                <span style={{ fontSize: '0.7rem', fontWeight: 900, color: '#A3B18A', letterSpacing: '0.1em' }}>HORMONE REGULATION</span>
              </div>
              <h3 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', fontWeight: 800, marginBottom: '20px' }}>Circadian Cortisol Alignment</h3>
              <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.7, marginBottom: '25px' }}>
                Subjects who slept grounded over an 8-week period showed a significant normalization of their diurnal cortisol secretion patterns. Baseline profiles that were previously erratic became synchronized with the 24-hour natural cycle.
              </p>
              <div style={{ borderTop: '1px solid #eee', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#1A1A1A', display: 'block' }}>PRIMARY OUTCOME:</span>
                <span style={{ fontSize: '0.9rem', color: '#3B5233', fontWeight: 600 }}>Deep sleep onset and morning alertness optimization.</span>
              </div>
            </motion.div>

            {/* Study 2: Zeta Potential */}
            <motion.div {...fadeIn} style={{ backgroundColor: 'white', padding: 'clamp(25px, 5vw, 45px)', borderRadius: '32px', boxShadow: '0 20px 50px rgba(0,0,0,0.03)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
                <div style={{ backgroundColor: '#EEF2ED', padding: '12px', borderRadius: '15px', color: '#3B5233' }}><Zap size={24} /></div>
                <span style={{ fontSize: '0.7rem', fontWeight: 900, color: '#A3B18A', letterSpacing: '0.1em' }}>ELECTRODYNAMICS</span>
              </div>
              <h3 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', fontWeight: 800, marginBottom: '20px' }}>Red Blood Cell Viscosity</h3>
              <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.7, marginBottom: '25px' }}>
                Grounding increases the surface charge on RBCs (Zeta Potential), which increases the spacing between cells. This natural "thinning" of the blood significantly improves cardiovascular efficiency and systemic oxygenation.
              </p>
              <div style={{ borderTop: '1px solid #eee', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#1A1A1A', display: 'block' }}>PRIMARY OUTCOME:</span>
                <span style={{ fontSize: '0.9rem', color: '#3B5233', fontWeight: 600 }}>Reduction in systemic blood viscosity by up to 270%.</span>
              </div>
            </motion.div>

            {/* Study 3: DOMS */}
            <motion.div {...fadeIn} style={{ backgroundColor: 'white', padding: 'clamp(25px, 5vw, 45px)', borderRadius: '32px', boxShadow: '0 20px 50px rgba(0,0,0,0.03)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
                <div style={{ backgroundColor: '#EEF2ED', padding: '12px', borderRadius: '15px', color: '#3B5233' }}><Beaker size={24} /></div>
                <span style={{ fontSize: '0.7rem', fontWeight: 900, color: '#A3B18A', letterSpacing: '0.1em' }}>RECOVERY SCIENCE</span>
              </div>
              <h3 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', fontWeight: 800, marginBottom: '20px' }}>Muscle Inflammation (DOMS)</h3>
              <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.7, marginBottom: '25px' }}>
                In studies involving eccentric exercise, grounded subjects showed significantly lower white blood cell counts and reduced pain levels. Grounding prevents the 'collateral damage' caused by the immune system during repair.
              </p>
              <div style={{ borderTop: '1px solid #eee', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#1A1A1A', display: 'block' }}>PRIMARY OUTCOME:</span>
                <span style={{ fontSize: '0.9rem', color: '#3B5233', fontWeight: 600 }}>Accelerated muscle tissue repair and pain reduction.</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Published Scientific Studies */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 24px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 60px)' }}>
            <BookOpen size={40} color="#3B5233" style={{ marginBottom: '20px' }} />
            <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '15px' }}>Published Research Literature</h2>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#666', fontWeight: 300, maxWidth: '800px', margin: '0 auto' }}>
              A curated database of independent clinical trials, randomized controlled studies, and peer-reviewed articles investigating the physiological effects of Earthing.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}>
            {publishedResearch.map((study, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="card-hover"
                style={{ 
                  backgroundColor: '#FDFDFD', 
                  borderRadius: '24px', 
                  padding: '30px', 
                  border: '1px solid #EBEBEB',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
                }}
              >
                {/* Decorative Top Line */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #3B5233, #A3B18A)' }} />

                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, lineHeight: 1.4, color: '#1A1A1A', marginBottom: '12px' }}>
                  {study.title}
                </h3>
                
                <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#A3B18A', marginBottom: '20px' }}>
                  {study.source}
                </p>

                <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.6, marginBottom: '25px', flexGrow: 1 }}>
                  {study.summary}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', borderTop: '1px solid #EBEBEB', paddingTop: '15px' }}>
                  <button 
                    onClick={() => setSelectedStudy(study)}
                    style={{ background: 'none', border: 'none', padding: 0, fontSize: '0.8rem', fontWeight: 800, color: '#1A1A1A', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}
                  >
                    READ MORE <ArrowRight size={14} />
                  </button>
                  
                  {study.link !== '#' ? (
                    <a href={study.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', fontWeight: 800, color: '#3B5233', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#1A1A1A'} onMouseLeave={(e) => e.currentTarget.style.color = '#3B5233'}>
                      SOURCE <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#999' }}>RESTRICTED</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Deficiency Section */}
      <section style={{ padding: 'clamp(60px, 5vw, 80px) 24px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '40px' }}>The Electron Deficiency Crisis</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginBottom: 'clamp(25px, 3vw, 40px)' }}>
             {[
               { title: "Insulated Footwear", desc: "Rubber and plastic soles act as electrical insulators, blocking the Earth's natural flow." },
               { title: "Elevated Living", desc: "Modern homes disconnect us from the Earth's surface charge, leaving us 'electron-starved'." },
               { title: "EMF Saturation", desc: "Ambient electromagnetic fields create additional electrical stress that needs neutralizing." }
             ].map((item, i) => (
               <div key={i} style={{ padding: '30px', border: '1px solid #eee', borderRadius: '24px' }}>
                  <h4 style={{ fontWeight: 800, marginBottom: '10px' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.5 }}>{item.desc}</p>
               </div>
             ))}
          </div>
          <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: 1.8, maxWidth: '800px', margin: '0 auto' }}>
            This lifestyle-induced disconnection is hypothesized to be a major contributor to chronic inflammation—the "silent killer" behind most modern lifestyle diseases. Earthing technology is the missing link to restoring this vital biological baseline.
          </p>
        </div>
      </section>

      {/* Chapter: The Pioneer */}
      <section style={{ padding: 'clamp(60px, 5vw, 80px) 24px', backgroundColor: '#F9F9F9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 'clamp(30px, 4vw, 50px)', alignItems: 'center' }}>
            <motion.div {...fadeIn}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                 <History size={24} color="#3B5233" />
                 <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.3em', color: '#3B5233' }}>The Origins</span>
              </div>
              <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '30px', lineHeight: 1.1 }}>How Grounding Started</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#444', marginBottom: '25px' }}>
                In 1998, Clint Ober applied his expertise in cable television grounding to the human body. He realized that while we ground our houses and cables to stabilize electrical signals, we had completely neglected the grounding of the human machine.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#444' }}>
                His early research, conducted alongside specialists at the University of California and the University of Oregon, formed the bedrock of what we now call 'Earthing Science.'
              </p>
            </motion.div>
            <div style={{ position: 'relative' }}>
               <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1440" style={{ width: '100%', borderRadius: '40px', boxShadow: '0 40px 100px rgba(0,0,0,0.1)' }} alt="Sleep Science" />
               <div style={{ position: 'absolute', bottom: '-40px', right: '-20px', backgroundColor: '#3B5233', color: 'white', padding: '30px', borderRadius: '30px', maxWidth: '250px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 900, display: 'block', lineHeight: 1 }}>1998</span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 500, opacity: 0.8 }}>The year the Earthing movement officially began.</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Human Archive: Real-World Evidence */}
      <section style={{ padding: 'clamp(60px, 5vw, 80px) 24px', backgroundColor: '#F9F9F9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(30px, 4vw, 50px)' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#3B5233', textTransform: 'uppercase', letterSpacing: '0.4em', display: 'block', marginBottom: '15px' }}>Field Observations</span>
            <h2 style={{ fontSize: '3.5rem', fontWeight: 900, letterSpacing: '-0.02em' }}>The Human Archive</h2>
            <p style={{ fontSize: '1.1rem', color: '#666', fontWeight: 300 }}>Synthesizing real-world outcomes from thousands of active grounding practitioners.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {[
              { 
                category: "Arthritis & Mobility", 
                title: "Morning Fluidity", 
                desc: "Users suffering from chronic joint stiffness frequently report a '90% reduction' in morning pain. By neutralising inflammatory buildup overnight, joints remain lubricated and mobile upon waking." 
              },
              { 
                category: "Travel & Circadian", 
                title: "Jet Lag Neutralization", 
                desc: "Frequent flyers use grounding to 're-sync' their internal clock after trans-continental travel. Connecting to the Earth's local frequency drastically shortens recovery time from time-zone shifts." 
              },
              { 
                category: "Wellness & Mood", 
                title: "The Calm Effect", 
                desc: "Many users report a 'profound sense of stillness' within 20 minutes of contact. This is clinically linked to the shift from Sympathetic (Fight or Flight) to Parasympathetic (Rest & Digest) nervous system dominance." 
              },
              { 
                category: "Menstrual Health", 
                title: "PMS Inflammation Relief", 
                desc: "Women report significantly lower intensity of menstrual cramps and associated back pain. Grounding's anti-inflammatory properties act as a non-pharmacological support during the cycle." 
              },
              { 
                category: "Respiratory Support", 
                title: "Snoring & Deep Breathing", 
                desc: "Anecdotal reports suggest a reduction in snoring intensity. Proponents link this to reduced inflammation in the airways, allowing for more efficient nocturnal respiration." 
              },
              { 
                category: "The Travel Test", 
                title: "Skepticism to Belief", 
                desc: "A common user narrative involves initial skepticism, followed by a 'rebound of symptoms' when traveling without their grounding sheets, confirming the impact through controlled absence." 
              }
            ].map((entry, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="card-hover"
                style={{ backgroundColor: 'white', padding: '35px', borderRadius: '24px', border: '1px solid #eee' }}
              >
                <span style={{ fontSize: '0.65rem', fontWeight: 900, color: '#A3B18A', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '10px' }}>{entry.category}</span>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '15px' }}>{entry.title}</h4>
                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6, margin: 0 }}>{entry.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Critical Precautions */}
      <section style={{ padding: 'clamp(60px, 5vw, 80px) 24px', backgroundColor: '#FFF9F9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 'clamp(30px, 4vw, 50px)', alignItems: 'center' }}>
            <motion.div {...fadeIn}>
              <div style={{ backgroundColor: '#D64545', color: 'white', display: 'inline-flex', padding: '12px 24px', borderRadius: '100px', gap: '10px', alignItems: 'center', marginBottom: '30px' }}>
                 <ShieldAlert size={20} />
                 <span style={{ fontSize: '0.8rem', fontWeight: 900, letterSpacing: '0.1em' }}>SAFETY PROTOCOLS</span>
              </div>
              <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '30px' }}>Scientific Guardrails</h2>
              <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: 1.7 }}>
                Safety is built into every EarthSync component. While grounding is a natural state, modern environments require precise engineering to ensure security.
              </p>
            </motion.div>

            <div style={{ display: 'grid', gap: '20px' }}>
              {[
                { icon: <Zap size={24} />, title: "Built-in Current Limiting", desc: "EarthSync cords feature a 100kΩ resistor, preventing any surge from traveling into the sheet while allowing free electron flow." },
                { icon: <CloudLightning size={24} />, title: "Storm Awareness", desc: "During electrical storms, we recommend unplugging grounding products to prevent any chance of surge through the ground path." },
                { icon: <HeartPulse size={24} />, title: "Pharmacological Interaction", desc: "Grounding naturally lowers blood viscosity. If you are on blood thinners (e.g., Warfarin), consult your physician for dosage monitoring." }
              ].map((p, i) => (
                <div key={i} style={{ padding: '30px', backgroundColor: 'white', borderRadius: '24px', border: '1px solid #FFEBEB', display: 'flex', gap: '25px', alignItems: 'center' }}>
                  <div style={{ color: '#D64545' }}>{p.icon}</div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '5px' }}>{p.title}</h4>
                    <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.5 }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section style={{ padding: 'clamp(60px, 5vw, 80px) 24px', textAlign: 'center', backgroundColor: '#1A1A1A', color: 'white' }}>
         <FlaskConical size={50} color="#A3B18A" style={{ marginBottom: '30px' }} />
         <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '30px' }}>Ready to Apply the Research?</h2>
         <Link to="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '15px', backgroundColor: '#3B5233', color: 'white', padding: '22px 50px', borderRadius: '100px', textDecoration: 'none', fontWeight: 900, fontSize: '1.1rem' }}>
            SHOP THE CLINICAL RANGE <ArrowRight size={20} />
         </Link>
      </section>

    </div>

      {/* Research Detail Modal */}
      <AnimatePresence>
        {selectedStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(10px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
            onClick={() => setSelectedStudy(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              style={{
                backgroundColor: 'white',
                borderRadius: '32px',
                padding: 'clamp(30px, 5vw, 50px)',
                maxWidth: '800px',
                width: '100%',
                maxHeight: '85vh',
                overflowY: 'auto',
                position: 'relative',
                boxShadow: '0 40px 100px rgba(0,0,0,0.2)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedStudy(null)}
                style={{ position: 'absolute', top: '25px', right: '25px', background: '#F0F0F0', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'background 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#E0E0E0'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#F0F0F0'}
              >
                <X size={20} color="#1A1A1A" />
              </button>

              <div style={{ paddingRight: '20px' }}>
                <p style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#3B5233', marginBottom: '15px' }}>
                  {selectedStudy.source}
                </p>
                <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 900, lineHeight: 1.2, color: '#1A1A1A', marginBottom: '25px' }}>
                  {selectedStudy.title}
                </h3>
                
                <div style={{ width: '60px', height: '4px', backgroundColor: '#A3B18A', marginBottom: '30px', borderRadius: '2px' }} />

                <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: 1.8, marginBottom: '30px' }}>
                  {selectedStudy.fullDescription}
                </p>

                {selectedStudy.link !== '#' && (
                  <a 
                    href={selectedStudy.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '10px', 
                      backgroundColor: '#1A1A1A', 
                      color: 'white', 
                      padding: '16px 30px', 
                      borderRadius: '100px', 
                      textDecoration: 'none', 
                      fontWeight: 800, 
                      fontSize: '0.95rem',
                      transition: 'background 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3B5233'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1A1A1A'}
                  >
                    ACCESS PUBLISHED STUDY <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Research;
