/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ahmed Ali",
  title: "Hi, I'm Ahmed — Network & Security Professional",
  subTitle: emoji(
    "Network & Security specialist with hands-on experience across SOC operations, firewalls (Fortinet/Sophos), identity (Cisco ISE), SIEM, and enterprise infrastructure. I build resilient networks, optimize security posture, and lead 24/7 teams to operational excellence."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1OO2JnlprVBTWCw_DOwt3CwPUVE1ZY4cI/view?usp=sharing", // You can replace with a direct CV link
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "",
  linkedin: "https://www.linkedin.com/in/ahmed-ali890/",
  gmail: "Ahmad.aly890@outlook.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "NETWORK & SECURITY ENGINEER — BUILDING STABLE, SECURE, SCALABLE SYSTEMS",
  skills: [
    emoji("⚡ Design, harden, and troubleshoot enterprise networks & security controls"),
    emoji("⚡ Fortinet (NSE 1-4, 7 SD-WAN), Sophos firewalls, IPS, VPN, HA, SD‑WAN"),
    emoji("⚡ Identity-based access with Cisco ISE; VLANs, WLAN controllers"),
    emoji("⚡ SIEM monitoring, incident handling, vulnerability assessment, and playbooks"),
    emoji("⚡ Endpoint protection (Kaspersky Security Center) and Windows Server administration")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    { skillName: "Networking", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "Security", fontAwesomeClassname: "fas fa-shield-alt" },
    { skillName: "Linux", fontAwesomeClassname: "fab fa-linux" },
    { skillName: "Windows Server", fontAwesomeClassname: "fab fa-windows" },
    { skillName: "Fortinet", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "Cisco ISE", fontAwesomeClassname: "fas fa-user-shield" },
    { skillName: "VPN", fontAwesomeClassname: "fas fa-lock" },
    { skillName: "SIEM", fontAwesomeClassname: "fas fa-search" },
    { skillName: "Virtualization", fontAwesomeClassname: "fas fa-server" },
    { skillName: "Scripting", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Databases", fontAwesomeClassname: "fas fa-database" }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Nile Higher Institute for Science and Technology",
      logo: require("./assets/images/stanfordLogo.png"), // placeholder
      subHeader: "BSc in Information Technology — Grade: Very Good",
      duration: "2013 - 2017",
      desc: "Core focus on networking, systems, and security fundamentals."
    },
    {
      schoolName: "National Telecommunication Institute (NTI)",
      logo: require("./assets/images/harvardLogo.png"), // placeholder
      subHeader: "Cybersecurity Operations",
      duration: "2019",
      desc: "Hands-on security operations and incident response practices."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    { Stack: "Network/Security Architecture", progressPercentage: "90%" },
    { Stack: "Operations & Incident Response", progressPercentage: "85%" },
    { Stack: "Systems & Automation", progressPercentage: "70%" }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "System Operation Supervisor",
      company: "WAVZ (Egypt Post Project)",
      companylogo: require("./assets/images/airbnbLogo.png"), // placeholder
      date: "Mar 2024 – Present",
      desc: "Lead SOC operators across multiple 24/7/365 shifts; oversee performance, schedules, and coordination with internal/external response teams."
    },
    {
      role: "Security Consultant",
      company: "Technology Village",
      companylogo: require("./assets/images/quoraLogo.png"), // placeholder
      date: "Dec 2023 – Present",
      desc: "Deployed/maintained FortiGate firewalls (policy, IPS, VPNs, UTM, HA), Cisco ISE identity policies, WLAN/VLAN, and Kaspersky Security Center."
    },
    {
      role: "Resident Operations Manager",
      company: "WAVZ (Citizen Card Project)",
      companylogo: require("./assets/images/facebookLogo.png"), // placeholder
      date: "Jul 2023 – Feb 2024",
      desc: "Ensured on-time, cost-effective delivery; tracked progress and coordinated stakeholders across Port Said operation."
    },
    {
      role: "System Operations Engineer",
      company: "WAVZ (Egypt Post Project)",
      companylogo: require("./assets/images/saayaHealthLogo.webp"), // placeholder
      date: "Jun 2022 – Jul 2023",
      desc: "Monitored SIEM/security tools, escalated incidents, ran vulnerability assessments, and authored procedures."
    },
    {
      role: "Network & Security Engineer",
      company: "Albargasy Group",
      companylogo: require("./assets/images/nextuLogo.webp"), // placeholder
      date: "Jan 2021 – Jun 2022",
      desc: "Implemented security policies, awareness programs; managed Aruba switches & Sophos firewalls; handled endpoint and cloud security."
    },
    {
      role: "Network Engineer",
      company: "Albargasy Group",
      companylogo: require("./assets/images/pwaLogo.webp"), // placeholder
      date: "Jul 2019 – Jan 2021",
      desc: "Managed firewalls, routers, VPNs, servers, and Hyper‑V; enforced network policies and resolved incidents."
    }
  ]
};

/* Your Open Source Section */
const openSource = {
  showGithubProfile: "false",
  display: false
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "PLATFORMS & INITIATIVES I WORKED ON",
  projects: [
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Zakhrafaa (زخرفة) Platform",
      projectDesc: "Web marketplace for crystal/glass decoration — onboarding sellers, subscriptions, and catalog management.",
      footerLink: [
        { name: "Visit Website", url: "https://zakhrafa.vercel.app/home" }
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Jarrah Glass Art",
      projectDesc: "Hand‑decorated glass products: branding, catalog, and operations workflow.",
      footerLink: [
        { name: "Contact", url: "https://www.linkedin.com/in/ahmed-ali890/" }
      ]
    },
    {
      image: require("./assets/images/pwaLogo.webp"),
      projectName: "Network Implementations",
      projectDesc: "Enterprise network builds & upgrades for Option Travel and SC‑Zone Port Said.",
      footerLink: [
        { name: "Overview", url: "https://www.linkedin.com/in/ahmed-ali890/" }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Selected certifications and professional highlights",
  achievementsCards: [
    {
      title: "Certifications",
      subtitle:
        "CCNA R&S • CCNP Security SCOR • MCSA 2016 • CompTIA Security+ • ITIL Foundation • SANS Cyber Aces • CCNA CyberOps • CNSS (ICSI) • Fortinet NSE 1,2,3,4,7 (SD‑WAN)",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Certs",
      footerLink: [{ name: "LinkedIn Certifications", url: "https://www.linkedin.com/in/ahmed-ali890/details/certifications/" }]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Posts",
  subtitle: "Security notes & architecture thoughts",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Sections

const talkSection = {
  title: "Talks",
  subtitle: emoji("Knowledge sharing & workshops"),
  talks: [],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT TECHNOLOGY",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Download my latest CV",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to discuss a role or a project? My inbox is open.",
  number: "+20-106-417-1888",
  email_address: "Ahmad.aly890@outlook.com"
};

// Twitter Section

const twitterDetails = {
  userName: "", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Open for opportunities

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};


// === Auto-generated CV export ===
export const resume = {
  "name": "Ahmed Ali",
  "email": "Ahmad.aly890@outlook.com",
  "phone": "01064171888",
  "location": "Egypt",
  "summary": "Motivated and experienced Network & Security Professional seeking a challenging role to leverage my technical expertise, certifications, and leadership skills in a dynamic and growth-oriented environment. Passionate about cybersecurity and continuous improvement, aiming to contribute to organisational success through proactive security management and infrastructure optimisation.",
  "experience": [
    {
      "title": "System Operation Supervisor",
      "company": "WAVZ (Egypt Post Project)",
      "location": "Smart Village, Egypt",
      "date": "Mar 2024 – Present",
      "bullets": [
        "Lead a team of SOC Operators across multiple 24/7/365 shifts.",
        "Oversee daily SOC operations including attendance, performance, development, and shift scheduling.",
        "Support flexible scheduling, including weekends and holidays.",
        "Coordinate with internal and external emergency teams."
      ]
    },
    {
      "title": "Security Consultant",
      "company": "Technology Village",
      "location": "Remote",
      "date": "Dec 2023 – Present",
      "bullets": [
        "Deployed, configured, and maintained FortiGate firewalls end-to-end (rules, IPS, VPNs, UTM, HA).",
        "Implemented identity-based access with Cisco ISE and managed policy enforcement.",
        "Configured Wireless Controllers including WLAN, VLANs, and optimisation.",
        "Administered Kaspersky Security Center for endpoint protection and malware response.",
        "Handled security operations: troubleshooting, updates, planning, and architecture improvements."
      ]
    },
    {
      "title": "Resident Operations Manager",
      "company": "WAVZ (Citizen Card Project)",
      "location": "Port Said, Egypt",
      "date": "Jul 2023 – Feb 2024",
      "bullets": [
        "Ensured smooth, timely, and cost-effective project delivery.",
        "Monitored project progress and planned key segments.",
        "Demonstrated excellent negotiation and team collaboration skills."
      ]
    },
    {
      "title": "System Operations Engineer",
      "company": "WAVZ (Egypt Post Project)",
      "location": "Smart Village, Egypt",
      "date": "Jun 2022 – Jul 2023",
      "bullets": [
        "Monitored and analysed events using SIEM and security tools.",
        "Escalated incidents, conducted vulnerability assessments, and maintained documentation.",
        "Developed security procedures and responded to emerging threats."
      ]
    },
    {
      "title": "Network & Security Engineer",
      "company": "Albargasy Group",
      "location": "Giza, Egypt",
      "date": "Jan 2021 – Jun 2022",
      "bullets": [
        "Implemented security policies and conducted awareness training.",
        "Managed Aruba switches and Sophos firewalls, monitored AlienVault SIEM.",
        "Handled endpoint security and cloud services; conducted vulnerability scanning."
      ]
    },
    {
      "title": "Network Engineer",
      "company": "Albargasy Group",
      "location": "Giza, Egypt",
      "date": "Jul 2019 – Jan 2021",
      "bullets": [
        "Managed firewalls, routers, VPNs, servers, and Hyper-V hosts.",
        "Defined and enforced network policies; resolved network issues."
      ]
    }
  ],
  "projects": [
    "Network & Infrastructure Upgrade Project @ Albargasy Automotive",
    "Network Implementation @ Option Travel",
    "Network Implementation @ SC-Zone Port Said",
    "Zakhrafaa (زخرفة) Platform",
    "Jarrah Glass Art"
  ],
  "education": [
    {
      "degree": "BSc in Information Technology",
      "school": "Nile Higher Institute for Science and Technology",
      "location": "Mansoura, Egypt",
      "details": "Graduated: 2017 | Grade: Very Good"
    },
    {
      "degree": "Cybersecurity Operations",
      "school": "National Telecommunication Institute (NTI)",
      "location": "",
      "details": "Year: 2019"
    }
  ],
  "certifications": [
    "CCNA R&S 200-125",
    "MCSA Windows Server 2016",
    "SANS Cyber Aces",
    "CompTIA Security+",
    "ITIL Foundation",
    "CCNA CyberOps (Diploma & Certificate)",
    "CNSS Certified Network Security Specialist (ICSI)",
    "Fortinet NSE 1, 2, 3 | NSE 4 (Administrator), NSE 7 (SD-WAN)",
    "CCNP Security SCOR (350-701)"
  ],
  "skills": [
    "Time Management & Problem Solving",
    "IT Strategy & Security Architecture",
    "Team Communication & Leadership",
    "Infrastructure & Firewall Management",
    "SIEM Tools & Vulnerability Assessment",
    "Creative Design & Service-Oriented Mindset"
  ],
  "languages": [
    { "name": "Arabic", "level": "Native" },
    { "name": "English", "level": "Professional Proficiency" }
  ],
  "links": {
    "linkedin": "https://www.linkedin.com/in/ahmed-ali890/"
  }
};
