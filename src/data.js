export const personalInfo = {
  name: "Mohamed Alaa",
  title: "Senior Unity Engineer",
  email: "mohamedalaasalem1@gmail.com",
  phone: "+201555117858",
  location: "Cairo, Egypt",
  linkedin: "https://www.linkedin.com/in/m1-mohamedalaa/",
  github: "https://github.com/MohamedAlaa2180",
  hackerrank: "https://www.hackerrank.com/profile/mohamedalaasale1",
  summary: "Senior Unity Engineer with 7+ years of expertise in game development, AR/VR solutions, and interactive experiences. Led development teams at Genesis Creations through July 2026, delivering cutting-edge VR training platforms and innovative multiplayer games. Proven track record with 600K+ combined downloads across published titles, including Kortifo (200K+), Experience Makkah (250K+), and Rehlatie (150K+). Specialized in multiplayer systems, VR/AR development, performance optimization, and scalable architecture design. Expert in Unity, C#, Photon/Netcode, Meta SDK, Firebase, and cloud services integration."
};

export const experience = [
  {
    company: "Genesis Creations",
    position: "Lead Unity Engineer",
    period: "May 2025 - July 2026",
    location: "Cairo, Egypt",
    achievements: [
      "Started by leading a team of 4 mid-level and senior Unity developers, then expanded to leading juniors, mid-seniors, and seniors across multiple concurrent projects",
      "Collaborated with product owners to define sprint goals, break down features into tasks, and plan agile sprints effectively",
      "Provided technical mentorship to junior developers across multiple teams, supporting their growth and maintaining code standards",
      "Conducted training sessions for bootcamp Unity developers, teaching intermediate and advanced Unity concepts to accelerate their learning and integration",
      "Improved company-wide development workflow by introducing modern technologies, tools, and strategic process optimizations",
      "Designed scalable development architectures for new projects and refactored legacy codebases to improve maintainability and performance"
    ]
  },
  {
    company: "Nahdet Misr",
    position: "Senior Game Developer",
    period: "April 2024 - May 2025",
    location: "Cairo, Egypt",
    achievements: [
      "Contributed to the development of Rehlatie an educational 2D mobile game using Unity, working closely with other developers and testers to ensure feature completeness and code quality",
      "Designed and implemented a performance optimization strategy that reduced app size and improved runtime efficiency by using Unity Addressables and refactoring complex systems",
      "Integrated Firebase services including Cloud Functions, Remote Config, Crashlytics, and Analytics to enable real-time configuration and improve stability",
      "Managed builds and deployment processes for both App Store and Google Play, ensuring compliance with store guidelines and maintaining release stability",
      "Provided technical support and conducted code reviews for junior team members to uphold code quality and promote best development practices",
      "Rehlatie achieved over 150,000 downloads across both stores, highlighting the success of its design, performance, and user engagement"
    ]
  },
  {
    company: "UMAMI Games",
    position: "Senior Game Developer",
    period: "October 2022 - April 2024",
    location: "Cairo, Egypt",
    achievements: [
      "Worked on Kortifo, a multiplayer 2D card game, contributing to both core gameplay mechanics and backend integration using Unity",
      "Designed and architected the Daily and Weekly Objectives System, integrating with Unity Cloud Code to enable dynamic and remotely configurable mission logic",
      "Built a fully featured Shop System supporting virtual currency and real-money In-App Purchases (IAP), leveraging Unity IAP and Remote Config for scalable offer management",
      "Developed a Card Effect Queue System to determine execution order for complex in-game interactions, ensuring consistent and fair gameplay logic",
      "Implemented Unity Netcode for GameObjects to support real-time multiplayer gameplay, handling synchronization and networked card actions",
      "Integrated Unity services including Cloud Save, Remote Config, Cloud Code, and IAP, enabling robust backend connectivity and remote feature tuning",
      "Collaborated directly with the art team to translate Figma designs into polished in-game UI with high visual fidelity and user-centric UX",
      "Supported the deployment and maintenance of builds on App Store and Google Play, contributing to submission workflows and QA validation",
      "Kortifo achieved over 200,000 downloads across both stores, reflecting the game's polished execution and strong market engagement"
    ]
  },
  {
    company: "EDGE PRO",
    position: ".NET Developer",
    period: "March 2022 - July 2022",
    location: "Cairo, Egypt",
    achievements: [
      "Contributed to backend development of several government web platforms using ASP.NET and C#, with a focus on API development and system integration",
      "Designed and implemented RESTful APIs to support secure data exchange between services and external systems",
      "Worked with MySQL and PostgreSQL databases to handle data modeling, query optimization, and stored procedures",
      "Collaborated with front-end developers and system administrators to ensure smooth deployment and functionality across all modules",
      "Assisted in debugging and maintaining legacy code, improving stability and system responsiveness"
    ]
  },
  {
    company: "AVATARIS",
    position: "Junior Game Developer",
    period: "January 2022 - March 2022",
    location: "Remote",
    achievements: [
      "Worked remotely on a mobile game project, primarily focusing on UI development and integration using Unity",
      "Translated designs from Figma into interactive and responsive in-game interfaces, ensuring alignment with gameplay flow",
      "Collaborated with graphic designers to optimize asset import workflows and improve rendering quality across devices",
      "Maintained clean and scalable UI architecture to support future feature expansions and localization"
    ]
  },
  {
    company: "Vhorus",
    position: "Junior Game Developer",
    period: "October 2019 - December 2021",
    location: "Cairo, Egypt",
    achievements: [
      "Served as the sole Unity developer in a 3-person team alongside one artist and one graphic designer",
      "Developed multiple Augmented Reality (AR) applications primarily for advertising and interactive brand activations, using Vuforia and AR Foundation with Unity",
      "Designed and built a 2D Tangram Puzzle Game, focusing on intuitive user interaction and mobile performance",
      "Led the full development of Experience Makkah, a cross-platform VR simulation of the Hajj journey using Google Cardboard SDK, surpassing 250,000 downloads on Google Play Store",
      "Implemented scene management, interactive camera systems, and spatial audio to deliver a deeply immersive mobile VR experience",
      "Optimized build size, memory usage, and rendering pipeline for smooth operation on mid-tier mobile devices"
    ]
  },
  {
    company: "CLOUD SOFT",
    position: "Junior Game Programmer",
    period: "February 2019 - October 2019",
    location: "Cairo, Egypt",
    achievements: [
      "Acted as the sole Unity developer, responsible for end-to-end development of 2D educational mobile games incorporating Augmented Reality (AR) features",
      "Designed and implemented interactive learning experiences tailored for students, blending AR content with traditional gameplay mechanics",
      "Utilized Unity and AR toolkits to develop engaging educational content optimized for Android devices",
      "Managed asset integration, gameplay logic, UI/UX flow, and performance tuning to ensure accessibility and stability across a range of mobile devices",
      "Delivered projects independently, aligning with educational objectives and meeting production timelines with minimal supervision"
    ]
  }
];

export const projects = [
  {
    id: "gaming-room",
    title: "Gaming Room VR",
    shortDescription: "Playable Meta Quest game room where you walk around, grab objects with your hands, play pool, and throw darts.",
    description: "Gaming Room VR is a playable Meta Quest experience: a stylized multi-room game space where you walk around, pick up objects with your hands, play pool, and throw darts. Built in Unity 6 with the Universal Render Pipeline, it uses Meta's Interaction SDK for hand grabbing, throw physics, and teleport locomotion.\n\nThe pool cue is two-handed. The rear hand strokes while the forward hand is a bridge the shaft slides through. A strike assist uses tip speed to drive the ball along the cue axis, so glancing hits still travel forward, and shaft contact with the balls is ignored. Darts scale their release velocity for a readable throw, stick when the tip hits the board within a set angle, and pull back out when grabbed. Stylized hand meshes are calibrated and driven from the Interaction SDK hand skeleton, including a bone layout different from the default OpenXR hand.",
    thumbnail: "/Alaa-portfolio/projects/gaming-room/GamingRoom_Thumbnail.jpg",
    platform: ["Meta Quest (Horizon OS)", "Android (ARM64)"],
    technologies: [
      "Unity 6 (6000.4)",
      "C#",
      "Universal Render Pipeline (URP)",
      "OpenXR",
      "Unity XR Management",
      "Meta XR Core SDK",
      "Meta Interaction SDK (v205)",
      "Unity Input System",
      "Unity Physics"
    ],
    tags: ["VR", "Meta Quest", "Hand Tracking", "Billiards", "Darts", "Prototype"],
    role: "Solo Developer",
    duration: "2026 · v0.1.0",
    company: "Personal Project",
    features: [
      "Two-handed pool cue: the rear hand strokes while the forward hand is a bridge the shaft slides through",
      "Cue strike assist driven by tip speed along the cue axis, so glancing hits still travel forward",
      "Shaft contact with the balls is ignored so only the cue tip strikes",
      "Full billiard table with sixteen balls and six pockets",
      "Throwable darts with release velocity scaled for a readable throw",
      "A dart sticks when the tip hits the board within a set angle, and grabbing it pulls it back out",
      "Custom stylized hand meshes calibrated and driven from the Interaction SDK hand skeleton",
      "Hand skeleton uses a different bone layout from the default OpenXR hand",
      "Hand-grab poses for the cue, darts, and other props",
      "Teleport locomotion across the rooms",
      "Quest-ready rendering with URP, baked lightmaps, light probes, a reflection probe, and foveated rendering"
    ],
    achievements: [
      "Shipped a playable Quest prototype with hand tracking, grab poses, and teleport locomotion",
      "Built a two-handed cue whose shaft slides through a bridge hand, with strike assist that keeps shots traveling along the cue",
      "Implemented dart throw, stick, and pull-out behavior from release velocity and tip contact angle",
      "Drove custom hand meshes from the Meta Interaction SDK skeleton instead of the default OpenXR hand layout",
      "Set up Quest rendering on URP with baked global illumination, light probes, a reflection probe, and foveated rendering"
    ],
    images: [
      "/Alaa-portfolio/projects/gaming-room/GamingRoom_Screenshot_1.jpg",
      "/Alaa-portfolio/projects/gaming-room/GamingRoom_Screenshot_2.jpg",
      "/Alaa-portfolio/projects/gaming-room/GamingRoom_Screenshot_3.jpg"
    ],
    videos: [
      "/Alaa-portfolio/projects/gaming-room/GamingRoom_Video.mp4"
    ],
    links: {
      playStore: "",
      appStore: "",
      other: ""
    }
  },
  {
    id: "the-last-runner",
    title: "The Last Runner",
    shortDescription: "3D endless runner on a stylized city street. Switch lanes, jump, and slide to stay alive and collect coins.",
    description: "The Last Runner is a lane-based endless runner built in Unity 6. A character runs down a repeating urban street, dodging obstacles and picking up coin lines while the road recycles behind the camera so the run never ends. The player stays in place while the world streams toward them.\n\nThe bend in the road is visual only. A custom URP lit shader curves the world around the player, while collisions and movement stay on a flat track. Game flow is driven by a state machine and an event bus, so movement, UI, audio, and animation stay independent of each other.",
    thumbnail: "/Alaa-portfolio/projects/the-last-runner/TheLastRunner_Thumbnail.jpg",
    platform: ["PC (Windows)"],
    technologies: [
      "Unity 6 (6000.4.9f1)",
      "C#",
      "Universal Render Pipeline (URP 17)",
      "Cinemachine 3",
      "Unity Input System",
      "uGUI",
      "TextMesh Pro",
      "Animator",
      "DOTween",
      "Reflex",
      "Custom HLSL shader"
    ],
    tags: ["Endless Runner", "3D", "Shaders", "Object Pooling", "PC"],
    role: "Solo Developer",
    duration: "2026 · v0.1.0",
    company: "Personal Project",
    features: [
      "Three-lane movement: switch lanes, jump with a short coyote-time window, and slide by shrinking the collider to pass under overhead obstacles",
      "Endless street: road segments, obstacles, and coins spawn ahead and return to object pools once they fall behind the camera",
      "Two obstacle types: low obstacles must be jumped, and overhead barriers must be slid under",
      "Coins spawn in short lines. Collecting them updates the HUD, plays a shine effect, and raises the coin sound pitch for a short combo",
      "The run starts with three lives. A hit freezes the game and opens a collision screen so the player can spend a life and continue after a countdown, or restart",
      "Continuing grants a brief invulnerability window",
      "Start screen, a 3–2–1 countdown, pause, and restart. Input is locked while the game is paused or the player is stunned",
      "Run, jump, slide, and stun animations are driven from gameplay events",
      "A custom URP lit shader bends the street around the camera without changing gameplay positions",
      "Music and sound effects go through an audio mixer, and sound effects use a pooled set of sources",
      "Keyboard controls: A / Left and D / Right to change lanes, Space, W, or Up to jump, S or Down to slide, Escape to pause"
    ],
    achievements: [
      "Built a lane-based endless runner where the world streams toward a stationary player and recycled segments never end the street",
      "Separated the curved-world look from gameplay with a custom HLSL lit shader, so collisions stay on a flat track",
      "Drove movement, UI, audio, and animation from a state machine and event bus so those systems stay independent",
      "Pooled road segments, obstacles, coins, and sound sources to keep spawning cheap during a long run",
      "Shipped a portfolio build with lives, a continue countdown, invulnerability, and coyote-time jumps"
    ],
    images: [
      "/Alaa-portfolio/projects/the-last-runner/TheLastRunner_Screenshot_1.jpg",
      "/Alaa-portfolio/projects/the-last-runner/TheLastRunner_Screenshot_2.jpg",
      "/Alaa-portfolio/projects/the-last-runner/TheLastRunner_Screenshot_3.jpg"
    ],
    videos: [
      "/Alaa-portfolio/projects/the-last-runner/TheLastRunner_Video.mp4"
    ],
    links: {
      playStore: "",
      appStore: "",
      other: ""
    }
  },
  {
    id: "vrc",
    title: "VRC - Virtual Interactive Cleanroom",
    shortDescription: "First-of-its-kind VR training platform in Canada for pharmacy professionals to master sterile compounding protocols.",
    description: "The Virtual Interactive Cleanroom (VRC) is a groundbreaking immersive VR training solution designed to help pharmacy professionals boost their sterile compounding skills through on-demand virtual training. This first-of-its-kind platform in Canada addresses the critical challenge of ensuring compliance and skill mastery in sterile compounding for hospital and compounding pharmacies. The system allows pharmacists and technicians to practice essential protocols including garbing, hand hygiene, and laminar flow hood cleaning in a realistic virtual environment with real-time feedback to ensure precision adherence to sterile protocols.",
    thumbnail: "/Alaa-portfolio/projects/vrc/VRC_Thumbnail.jpg",
    platform: ["Meta Quest (VR)"],
    technologies: ["Unity", "C#", "Meta SDK", "Backend Services", "Custom VR Interaction System"],
    tags: ["VR", "Training", "Healthcare", "Simulation", "Educational"],
    role: "Team Leader & Lead Developer",
    duration: "2024 - 2025",
    company: "Genesis Creations",
    features: [
      "Realistic virtual cleanroom environment replicating pharmaceutical standards",
      "Complete garbing simulation with proper donning procedures",
      "Hand hygiene training with step-by-step protocols",
      "Laminar flow hood cleaning procedures",
      "Physical object simulation (mops, tissues, cleaning tools)",
      "Floor cleaning mechanics with realistic physics",
      "Surface cleaning using various cleaning tools",
      "Hand washing simulation with proper technique validation",
      "PPE simulation (masks, gloves) with correct wearing procedures",
      "Real-time feedback system ensuring protocol compliance",
      "Dynamic cleaning system working on any surface with any tool",
      "Modular objectives system orchestrating interactions and steps",
      "Automated workflow handling with minimal manual intervention",
      "Immersive hand tracking and interaction mechanics",
      "Performance optimized for Meta Quest platform"
    ],
    achievements: [
      "Led team of 7 junior and senior developers",
      "Delivered Canada's first VR sterile compounding training platform",
      "Developed complete dynamic cleaning system from scratch",
      "Created modular objectives system for automated workflow orchestration",
      "Implemented realistic pharmaceutical cleanroom environment",
      "Achieved real-time protocol validation and feedback",
      "Designed scalable system architecture supporting multiple training modules",
      "Successfully integrated Meta SDK for advanced VR interactions",
      "Delivered production-ready solution for hospital and compounding pharmacies",
      "Provided technical leadership and mentorship to development team"
    ],
    images: [
      "/Alaa-portfolio/projects/vrc/VRC_Screenshot_1.jpg",
      "/Alaa-portfolio/projects/vrc/VRC_Screenshot_2.jpg",
      "/Alaa-portfolio/projects/vrc/VRC_Screenshot_3.jpg",
      "/Alaa-portfolio/projects/vrc/VRC_Screenshot_4.jpg",
      "/Alaa-portfolio/projects/vrc/VRC_Screenshot_5.jpg",
      "/Alaa-portfolio/projects/vrc/VRC_Screenshot_6.jpg"
    ],
    videos: [
      "/Alaa-portfolio/projects/vrc/VRC_Video.mp4"
    ],
    links: {
      playStore: "",
      appStore: "",
      other: ""
    }
  },
  {
    id: "dxb",
    title: "DXB",
    shortDescription: "Interactive 3D facility walkthrough with VR-first presentation and NetEco-backed live operations dashboards for GITEX-style demos and stakeholder tours.",
    description: "DXB is an interactive 3D experience built for showcase and operations storytelling: visitors move through a modeled facility—from exterior and security to the data hall, power, cooling, and NOC-style areas—while UI ties what they see to real operational concepts. The product targets GITEX-style demos and stakeholder walkthroughs, with Meta Quest VR as the primary immersive mode and a Windows desktop path using separate PC-oriented content.\n\nOn the engineering side, the app connects to Schneider Electric NetEco-style services (login session, power, domain energy, environment, alarms, doors) so dashboards and rack-facing UI can reflect live or realistic facility data, not only static geometry. Scene flow, teleport/loading, and controller-driven menus support a guided tour without breaking presence in VR.",
    thumbnail: "/Alaa-portfolio/projects/dxb/DXB_Thumbnail.jpg",
    platform: ["Meta Quest (Android, VR)", "Windows (64-bit) PC"],
    technologies: [
      "Unity",
      "C#",
      "Universal Render Pipeline (URP)",
      "OpenXR",
      "Meta XR SDK",
      "XR Interaction Toolkit",
      "Unity Input System",
      "Cinemachine",
      "TextMeshPro",
      "Unity glTFast",
      "DOTween",
      "Odin Inspector",
      "UniTask",
      "NetEco HTTP/API integration"
    ],
    tags: ["Unity", "Virtual Reality", "OpenXR", "Meta Quest", "Digital Twin"],
    role: "Lead Unity Engineer",
    duration: "2025",
    company: "Genesis Creations",
    features: [
      "Multi-zone facility walkthrough with dedicated scenes for data center, IT equipment, power control, battery, MV, pump, NOC, security, exterior, plus main menu and staging flow",
      "VR-first interaction using Meta XR stack with OpenXR and XR Interaction Toolkit—controller actions for menus, scene changes, and walkthrough toggles",
      "Cross-platform presentation with runtime switching between VR (Android / Quest) and PC (Windows) object sets for correct inputs and rig per build",
      "Live operations dashboards via NetEco-backed services for power, domain energy, environment, domain alarms, and doors; session handling and typed C# API layer",
      "Dynamic facility UI with dashboard panels on periodic refresh and rack-oriented updaters for power, temperature, CPU, memory, network, and uptime",
      "Interaction polish: door animations and flows, outline/highlight system, world-space UI and billboarding, Cinemachine-style presentation, glTFast for efficient 3D where used",
      "Async, production-minded code with UniTask for non-blocking login/API work and dummy service implementations for offline or demo-safe runs"
    ],
    achievements: [
      "Delivered end-to-end multi-scene facility tour suited for Quest VR and Windows desktop stakeholders",
      "Integrated NetEco-style services for session login and live facility data across power, energy, environment, alarms, and doors",
      "Built typed async API layer in C# with UniTask and offline-capable dummy implementations",
      "Shipped VR interaction and guided tour flow with OpenXR, Meta XR SDK, and XR Interaction Toolkit"
    ],
    images: [
      "/Alaa-portfolio/projects/dxb/DXB_Screenshot_1.jpg",
      "/Alaa-portfolio/projects/dxb/DXB_Screenshot_2.jpg",
      "/Alaa-portfolio/projects/dxb/DXB_Screenshot_3.jpg",
      "/Alaa-portfolio/projects/dxb/DXB_Screenshot_4.jpg"
    ],
    videos: [],
    links: {
      playStore: "",
      appStore: "",
      other: ""
    }
  },
  {
    id: "zombieleta",
    title: "Zombieleta",
    shortDescription: "Fast-paced multiplayer action game where humans battle zombies in intense survival matches.",
    description: "Zombieleta is a thrilling multiplayer action game where players engage in an intense battle between humans and zombies. At the start of each match, all participants begin as humans; after 10 seconds, one player transforms into a zombie whose mission is to catch and convert the remaining humans. As more humans are turned into zombies, the challenge intensifies for the survivors, who must hide and employ strategic abilities to endure until the timer runs out.",
    thumbnail: "/Alaa-portfolio/projects/zombieleta/Zombieleta_Thumbnail.jpg",
    platform: ["Android"],
    technologies: ["Unity", "C#", "Photon Unity Networking (Fusion)", "Unity Services"],
    tags: ["Multiplayer", "Action", "Mobile"],
    role: "Solo Game Developer",
    duration: "2024 - 2025",
    company: "Dream-Catcher (Personal Project)",
    features: [
      "Dynamic role-switching gameplay where players transform between humans and zombies",
      "Real-time multiplayer functionality powered by Photon Fusion",
      "Strategic abilities including poison syringe and healing mechanics",
      "Poison syringe immobilizes zombies but makes humans vulnerable, adding tactical depth",
      "Healing ability allows humans to save poisoned teammates",
      "Tense hide-and-seek gameplay with timer-based survival mechanics",
      "Team-based zombie coordination to convert all humans before time runs out"
    ],
    achievements: [
      "Completed full development lifecycle as sole developer",
      "Successfully deployed on Google Play Store",
      "Designed and implemented engaging multiplayer mechanics with high replayability",
      "Seamlessly integrated real-time multiplayer ensuring smooth online matches",
      "Created strategic depth through unique ability systems"
    ],
    images: [
      "/Alaa-portfolio/projects/zombieleta/Zombieleta_Screenshot_1.jpg",
      "/Alaa-portfolio/projects/zombieleta/Zombieleta_Screenshot_2.jpg",
      "/Alaa-portfolio/projects/zombieleta/Zombieleta_Screenshot_3.jpg",
      "/Alaa-portfolio/projects/zombieleta/Zombieleta_Screenshot_4.jpg",
      "/Alaa-portfolio/projects/zombieleta/Zombieleta_Screenshot_5.jpg",
      "/Alaa-portfolio/projects/zombieleta/Zombieleta_Screenshot_6.jpg"
    ],
    videos: ["https://www.youtube.com/embed/h0EL8jTQM1k"],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.DreamCatcher.Zombieleta&pli=1",
      appStore: ""
    }
  },
  {
    id: "kortifo",
    title: "Kortifo",
    shortDescription: "Multiplayer 2D football trivia card battle game with over 200,000 downloads across App Store and Google Play.",
    description: "Kortifo is a competitive multiplayer card battle game that blends football trivia with strategic card gameplay. Players build decks, answer football questions, and compete in real-time matches against thousands of players worldwide. The game features robust backend integration, dynamic mission systems, and seamless multiplayer experience powered by Unity Netcode.",
    thumbnail: "/Alaa-portfolio/projects/kortifo/Kortifo_Thumbnail.jpg",
    platform: ["Android", "iOS"],
    technologies: ["Unity", "C#", "Unity Netcode", "Unity Cloud Code", "Unity IAP", "Firebase Remote Config", "Cloud Save", "Figma"],
    tags: ["Multiplayer", "Card Game", "Trivia", "Mobile"],
    role: "Senior Game Developer",
    duration: "October 2022 - April 2024",
    company: "UMAMI Games",
    features: [
      "Real-time multiplayer card battles with Unity Netcode for GameObjects",
      "Daily and Weekly Objectives System with Unity Cloud Code for dynamic missions",
      "Modular Shop System supporting virtual currency and real-money IAP transactions",
      "Card Effect Queue System to manage complex in-game logic flow and card interactions",
      "Firebase Remote Config for dynamic content updates and A/B testing",
      "Cloud save functionality for seamless cross-device progression",
      "League and season systems with competitive rewards",
      "Over 10,000 football trivia questions covering local and international football",
      "Fully customizable experience with cosmetics, fields, cards, and avatars",
      "Stickers and memes system for player communication during matches",
      "High-resolution graphics reflecting Middle Eastern culture"
    ],
    achievements: [
      "200,000+ downloads across App Store and Google Play",
      "Led design and architecture of core game systems",
      "Architected scalable multiplayer infrastructure supporting thousands of concurrent players",
      "Implemented remote feature tuning reducing deployment cycles by 60%",
      "Successfully published to both iOS and Android platforms",
      "Translated Figma designs into high-fidelity in-game UI with pixel-perfect accuracy",
      "Maintained 4.5+ star rating on Google Play Store"
    ],
    images: [
      "/Alaa-portfolio/projects/kortifo/Kortifo_Screenshot_1.jpg",
      "/Alaa-portfolio/projects/kortifo/Kortifo_Screenshot_2.jpg",
      "/Alaa-portfolio/projects/kortifo/Kortifo_Screenshot_3.jpg",
      "/Alaa-portfolio/projects/kortifo/Kortifo_Screenshot_4.jpg",
      "/Alaa-portfolio/projects/kortifo/Kortifo_Screenshot_5.jpg",
      "/Alaa-portfolio/projects/kortifo/Kortifo_Screenshot_6.jpg",
      "/Alaa-portfolio/projects/kortifo/Kortifo_Screenshot_7.jpg"
    ],
    videos: ["https://www.youtube.com/embed/DAhBdYbARYU"],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.UMAMI.Kortifo&hl=en_US",
      appStore: "https://apps.apple.com/eg/app/kortifo-%D9%83%D9%88%D8%B1%D8%AA%D9%8A%D9%81%D9%88/id6466821053"
    }
  },
  {
    id: "rehlatie",
    title: "Rehlatie",
    shortDescription: "Educational 2D mobile game gamifying Islamic knowledge with over 150,000 downloads for younger audiences.",
    description: "Rehlatie is an educational 2D game that gamifies Islamic knowledge for younger audiences, making learning engaging and interactive through fun gameplay mechanics. The project focused heavily on performance optimization and scalable architecture using modern Unity features, with a comprehensive Firebase backend integration.",
    thumbnail: "/Alaa-portfolio/projects/rehlatie/Rehlatie_Thumbnail.jpg",
    platform: ["Android", "iOS"],
    technologies: ["Unity", "C#", "Unity Addressables", "Firebase Cloud Functions", "Firebase Remote Config", "Firebase Crashlytics", "Firebase Analytics"],
    tags: ["Educational", "2D", "Mobile", "Islamic"],
    role: "Senior Game Developer",
    duration: "April 2024 - May 2025",
    company: "Nahdet Misr",
    features: [
      "Gamified Islamic knowledge learning for children and young audiences",
      "Performance-optimized 2D gameplay mechanics with smooth animations",
      "Unity Addressables for efficient asset management and reduced memory footprint",
      "Firebase Cloud Functions for serverless backend operations",
      "Firebase Crashlytics for real-time crash reporting and debugging",
      "Firebase Remote Config for dynamic content updates without redeployment",
      "Firebase Analytics for user behavior tracking and engagement metrics",
      "Cross-platform deployment pipeline for both iOS and Android",
      "Engaging mini-games and interactive challenges",
      "Progress tracking and reward systems to motivate learners"
    ],
    achievements: [
      "150,000+ downloads across App Store and Google Play",
      "Led comprehensive performance optimization plan",
      "Reduced app size by 40% using Unity Addressables",
      "Improved runtime efficiency by 35% through system refactoring",
      "Implemented Firebase backend successfully reducing server costs",
      "Maintained 4.5+ star rating on both stores",
      "Delivered complete feature set on time and within budget",
      "Provided technical mentorship to junior team members"
    ],
    images: [
      "/Alaa-portfolio/projects/rehlatie/Rehlatie_Screenshot_1.jpg",
      "/Alaa-portfolio/projects/rehlatie/Rehlatie_Screenshot_2.jpg",
      "/Alaa-portfolio/projects/rehlatie/Rehlatie_Screenshot_3.jpg",
      "/Alaa-portfolio/projects/rehlatie/Rehlatie_Screenshot_4.jpg",
      "/Alaa-portfolio/projects/rehlatie/Rehlatie_Screenshot_5.jpg",
      "/Alaa-portfolio/projects/rehlatie/Rehlatie_Screenshot_6.jpg",
      "/Alaa-portfolio/projects/rehlatie/Rehlatie_Screenshot_7.jpg",
      "/Alaa-portfolio/projects/rehlatie/Rehlatie_Screenshot_8.jpg"
    ],
    videos: [],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.nahdetmisr.rehlatie&hl=en_US",
      appStore: ""
    }
  },
  {
    id: "experience-makkah",
    title: "Experience Makkah",
    shortDescription: "Cross-platform mobile VR simulation offering an immersive virtual Hajj journey with over 250,000 downloads.",
    description: "Experience Makkah is a groundbreaking cross-platform mobile VR application that offers users an immersive virtual Hajj journey. As the sole Unity developer, I handled the entire app development including VR camera systems, spatial audio implementation, and comprehensive platform-specific optimization for both Android and iOS. Built using Google Cardboard SDK, the app provides an accessible and deeply engaging spiritual experience optimized for mid-tier mobile devices.",
    thumbnail: "/Alaa-portfolio/projects/experience-makkah/ExperienceMakkah_Thumbnail.jpg",
    platform: ["Android", "iOS"],
    technologies: ["Unity", "C#", "Google Cardboard SDK", "Spatial Audio", "AR Foundation", "Vuforia"],
    tags: ["VR", "Mobile", "Simulation", "Educational"],
    role: "Solo Unity Developer",
    duration: "October 2019 - December 2021",
    company: "Vhorus",
    features: [
      "Fully immersive mobile VR experience powered by Google Cardboard SDK",
      "Virtual tour of Al Masjid Al Haram (Holy Mosque) in Makkah",
      "Interactive Kaaba room entry and exploration",
      "Complete Hajj and Umrah simulation (Sa'y between Safa and Marwa, Muzdalifah, Jamarat)",
      "Al Masjid Al Nabawi (Prophet's Mosque) virtual tour",
      "Quran recitation with synchronized visualization",
      "Custom VR camera systems with intuitive controls",
      "Spatial audio implementation for realistic soundscapes and Azan",
      "Bilingual support (English and Arabic)",
      "Scene management and dynamic loading systems",
      "Platform-specific optimization for Android and iOS",
      "Memory management for smooth performance on mid-tier devices",
      "Cross-platform rendering pipeline optimization"
    ],
    achievements: [
      "250,000+ downloads on Google Play Store",
      "Successfully launched on both iOS App Store and Google Play",
      "Completed full development lifecycle as sole Unity developer",
      "Designed and implemented all VR systems from scratch",
      "Optimized for smooth 60fps operation on mid-tier mobile devices",
      "Reduced memory footprint by 50% through optimization",
      "Featured as innovative use of mobile VR for Islamic education",
      "4.1+ star rating with 644 reviews on Google Play",
      "Positive impact on Islamic education and Hajj preparation globally"
    ],
    images: [
      "/Alaa-portfolio/projects/experience-makkah/ExperienceMakkah_Screenshot_1.jpg",
      "/Alaa-portfolio/projects/experience-makkah/ExperienceMakkah_Screenshot_2.jpg",
      "/Alaa-portfolio/projects/experience-makkah/ExperienceMakkah_Screenshot_3.jpg",
      "/Alaa-portfolio/projects/experience-makkah/ExperienceMakkah_Screenshot_4.jpg",
      "/Alaa-portfolio/projects/experience-makkah/ExperienceMakkah_Screenshot_5.jpg",
      "/Alaa-portfolio/projects/experience-makkah/ExperienceMakkah_Screenshot_6.jpg"
    ],
    videos: ["https://www.youtube.com/embed/7XONnbZy8wQ"],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.vhorus.makkah&hl=en_US",
      appStore: "https://apps.apple.com/us/app/experience-makkah-vol-2/id1509327242"
    }
  },
  {
    id: "darbk-khdr",
    title: "Darbk Khdr (دربك خضر)",
    shortDescription: "Mobile & VR adventure game immersing players in rich Saudi Arabian cultural traditions and heritage.",
    description: "Darbk Khdr is a mobile and VR adventure game that immerses players in the rich traditions of Saudi Arabia. As the sole developer, I handled the complete development lifecycle from concept to deployment. The game offers an engaging experience highlighting cultural narratives and heritage, with players choosing between two characters, Majd and Yazid, to embark on an exciting adventure in the Saudi desert.",
    thumbnail: "/Alaa-portfolio/projects/darbk-khdr/DarbkKhidr_Thumbnail.jpg",
    platform: ["Android", "Meta Quest (VR)"],
    technologies: ["Unity", "C#", "Adobe Photoshop", "Google Play Services", "Meta Quest SDK"],
    tags: ["Adventure", "VR", "Mobile", "Cultural", "Educational"],
    role: "Solo Game Developer",
    duration: "2023 - 2024",
    company: "Dream-Catcher (Personal Project)",
    features: [
      "Cross-platform adventure game for mobile and VR headsets",
      "Authentic Saudi Arabian cultural narratives and heritage integration",
      "Two playable characters (Majd and Yazid) with unique perspectives",
      "Immersive Saudi desert environment exploration",
      "Traditional elements incorporated into gameplay and visuals",
      "Cultural challenges and educational content",
      "Intuitive gameplay mechanics appealing to broad audiences",
      "Optimized performance across various Android devices",
      "VR experience optimized for Meta Quest platform",
      "Collaborated with artists to deliver high-quality cultural assets",
      "Arabic language support with cultural authenticity"
    ],
    achievements: [
      "Completed full development lifecycle as sole developer",
      "Successfully launched on both Google Play and Meta Quest Store",
      "Integrated authentic Saudi Arabian cultural elements",
      "Designed engaging gameplay mechanics enhancing user retention",
      "Optimized assets and code for smooth performance on mid-tier devices",
      "Collaborated effectively with art team for culturally authentic visuals",
      "Created educational gaming experience promoting Saudi heritage",
      "Cross-platform deployment showcasing technical versatility"
    ],
    images: [
      "/Alaa-portfolio/projects/darbk-khdr/DarbkKhidr_Screenshot_1.jpg",
      "/Alaa-portfolio/projects/darbk-khdr/DarbkKhidr_Screenshot_2.jpg",
      "/Alaa-portfolio/projects/darbk-khdr/DarbkKhidr_Screenshot_3.jpg",
      "/Alaa-portfolio/projects/darbk-khdr/DarbkKhidr_Screenshot_4.jpg",
      "/Alaa-portfolio/projects/darbk-khdr/DarbkKhidr_Screenshot_5.jpg"
    ],
    videos: [],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.RMG.DarbkKhdrDemo",
      appStore: "",
      other: "https://www.meta.com/experiences/9097137060321303/"
    }
  },
  {
    id: "tangram",
    title: "Tangram of 7",
    shortDescription: "2D puzzle game challenging players to solve classic tangram shapes with intuitive drag-and-drop mechanics.",
    description: "Tangram of 7 is a mind-training puzzle game where players create imaginative shapes and designs using seven simple, rotatable wooden-like pieces. As the sole developer, I designed the complete game mechanics, visual flow, and interaction patterns, ensuring smooth drag-and-drop functionality and device responsiveness. The game trains both right and left brain hemispheres through clever puzzle-solving challenges.",
    thumbnail: "/Alaa-portfolio/projects/tangram/Tangram_Thumbnail.jpg",
    platform: ["Android", "iOS"],
    technologies: ["Unity", "C#", "SpriteShape", "Custom UI System"],
    tags: ["Puzzle", "2D", "Mobile", "Educational"],
    role: "Solo Developer",
    duration: "2021",
    company: "Vhorus",
    features: [
      "Classic tangram puzzle gameplay with seven wooden pieces",
      "Smooth drag-and-drop functionality with intuitive controls",
      "Custom UI system for seamless user experience",
      "SpriteShape implementation for crisp 2D visuals",
      "Multiple puzzle shapes and character designs",
      "Brain training mechanics stimulating left and right hemispheres",
      "Device-responsive design for various screen sizes",
      "Battery-friendly optimization",
      "Suitable for all ages from children to adults",
      "Small app size for quick downloads",
      "Ad-supported free-to-play model"
    ],
    achievements: [
      "500+ downloads across App Store and Google Play",
      "Completed full development as sole developer",
      "Designed intuitive puzzle mechanics from scratch",
      "Implemented custom UI system for smooth interactions",
      "Achieved 5.0-star rating on App Store (4 reviews)",
      "Optimized for battery efficiency and performance",
      "Successfully launched on both iOS and Android platforms",
      "Created educational tool suitable for schools and childcare facilities"
    ],
    images: [
      "/Alaa-portfolio/projects/tangram/Tangram_Screenshot_1.jpg",
      "/Alaa-portfolio/projects/tangram/Tangram_Screenshot_2.jpg",
      "/Alaa-portfolio/projects/tangram/Tangram_Screenshot_3.jpg",
      "/Alaa-portfolio/projects/tangram/Tangram_Screenshot_4.jpg",
      "/Alaa-portfolio/projects/tangram/Tangram_Screenshot_5.jpg"
    ],
    videos: [],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.Vhorus.TangramOf7&hl=en_US",
      appStore: "https://apps.apple.com/eg/app/tangram-of-7/id1591046876?l=ar"
    }
  },
  {
    id: "egyptian-car-pricer",
    category: "ai",
    title: "Egyptian Car Pricer",
    shortDescription: "Fine-tuned Qwen2.5-3B that estimates an Egyptian-market asking price in EGP from a short spec sheet.",
    description: "Egyptian Car Pricer estimates a classified-ad asking price in Egyptian pounds from brand, model, year, mileage, fuel, and transmission. It fine-tunes Qwen/Qwen2.5-3B with QLoRA on prompt/completion pairs from the Egyptian cars dataset, then serves the adapter locally.\n\nLabeled Hub train and validation rows are cleaned and split into a held-out validation set and a 1,000-row test set. The Hub test split is unused because every completion is 0. The lite training run is one epoch on 8,000 rows. A local FastAPI form loads the base model in 4-bit on the GPU and attaches the step-500 LoRA checkpoint. Outputs are listing-style estimates, not appraisals.",
    thumbnail: "/Alaa-portfolio/projects/egyptian-car-pricer/ECP_Thumbnail.jpg",
    platform: ["Local (Windows, NVIDIA GPU)"],
    technologies: [
      "Python",
      "Qwen2.5-3B",
      "QLoRA",
      "PEFT",
      "Transformers",
      "bitsandbytes",
      "TRL",
      "FastAPI",
      "Hugging Face Datasets"
    ],
    tags: ["LLM", "QLoRA", "Fine-tuning", "Price estimation"],
    role: "Solo Developer",
    duration: "2026",
    company: "Personal Project",
    features: [
      "Spec-sheet prompt: brand, model, year, mileage, fuel, and transmission, ending with “Price is EGP”",
      "QLoRA fine-tune of Qwen/Qwen2.5-3B in 4-bit NF4, not the Instruct checkpoint",
      "Cleaned Egyptian classified-ad data with held-out validation and a 1,000-row test set",
      "Lite training run: one epoch on 8,000 rows, best checkpoint at step 500",
      "Eval against the train mean, the train median, the unadapted base model, and the adapter",
      "Local predict form that loads the 4-bit model and LoRA adapter on the GPU"
    ],
    achievements: [
      "Trained a small open model to continue a spec sheet with an integer EGP asking price",
      "Kept the same 1,000 test cars out of both the lite and full training sets",
      "Shipped a local form on an RTX 3050 that runs the base model in 4-bit with the step-500 adapter",
      "Reported test-set average error of about 172,000 EGP, and labeled the output as a listing estimate rather than an appraisal"
    ],
    images: [
      "/Alaa-portfolio/projects/egyptian-car-pricer/ECP_screen1.jpg",
      "/Alaa-portfolio/projects/egyptian-car-pricer/ECP_screen2.jpg",
      "/Alaa-portfolio/projects/egyptian-car-pricer/ECP_screen3.jpg"
    ],
    videos: [
      "/Alaa-portfolio/projects/egyptian-car-pricer/ECP_Video.mp4"
    ],
    links: {
      playStore: "",
      appStore: "",
      other: ""
    }
  },
  {
    id: "portfolio-assistant",
    category: "ai",
    title: "Portfolio Assistant",
    shortDescription: "Chatbot on this site that answers questions about Mohamed from a personal knowledge base, using BM25 and Groq.",
    description: "Portfolio Assistant is the chatbot behind the Ask me button on this site. It answers questions about Mohamed Alaa's background, projects, experience, skills, education, and recommendations from a markdown knowledge base, instead of relying on the model's memory.\n\nA question is ranked against those notes with BM25. The top matching chunks, plus the conversation so far, are sent to Groq's gpt-oss-20b. The prompt tells the model to say when the notes do not cover the question, and not to invent jobs, metrics, or technologies. The same answer path serves a local Gradio page and the portfolio's POST /chat API.",
    thumbnail: "/Alaa-portfolio/projects/portfolio-assistant/PA_Thumbnail.jpg",
    platform: ["Web", "Local"],
    technologies: [
      "Python",
      "FastAPI",
      "Gradio",
      "BM25",
      "rank-bm25",
      "Groq",
      "gpt-oss-20b",
      "Uvicorn"
    ],
    tags: ["Chatbot", "BM25", "Groq", "Knowledge base"],
    role: "Solo Developer",
    duration: "2026",
    company: "Personal Project",
    features: [
      "Markdown notes for profile, experience, projects, skills, education, and recommendations",
      "BM25 search that drops common question words so names and project titles rank higher",
      "Overview notes split by heading, and longer notes split on paragraph boundaries",
      "Top 10 chunks plus earlier turns are sent with the current question",
      "Groq gpt-oss-20b at temperature 0, instructed not to invent jobs, metrics, or technologies",
      "FastAPI POST /chat used by the Ask me widget, with a local Gradio page for testing",
      "CORS limited to this site and local development, and a per-IP question limit"
    ],
    achievements: [
      "Shipped the chat widget on this portfolio, backed by a personal knowledge base",
      "Grounded answers in retrieved notes so the model does not fill gaps from memory",
      "Kept one answer path for the public widget and the local Gradio test page",
      "Included conversation history in retrieval so follow-up questions stay on the same topic"
    ],
    images: [
      "/Alaa-portfolio/projects/portfolio-assistant/PA_screen1.jpg",
      "/Alaa-portfolio/projects/portfolio-assistant/PA_screen2.jpg",
      "/Alaa-portfolio/projects/portfolio-assistant/PA_screen3.jpg"
    ],
    videos: [
      "/Alaa-portfolio/projects/portfolio-assistant/PA_Video.mp4"
    ],
    links: {
      playStore: "",
      appStore: "",
      other: ""
    }
  }
];

export const skills = {
  "Game Development": [
    "Unity (2D & 3D)",
    "C# Programming",
    "Game Mechanics & Physics",
    "Addressables System",
    "UI/UX Implementation",
    "Performance & Memory Optimization"
  ],
  "Multiplayer & Backend": [
    "Unity Netcode for GameObjects",
    "Photon PUN & Photon Fusion",
    "Firebase (Cloud Functions, Crashlytics, Remote Config)",
    "Unity Cloud Code & Cloud Save",
    "In-App Purchases (IAP)",
    "RESTful APIs, MySQL & PostgreSQL"
  ],
  "AR / VR & Platforms": [
    "Meta Quest / Oculus SDK",
    "XR Interaction Toolkit & OpenXR",
    "Vuforia & AR Foundation",
    "Google Cardboard SDK",
    "Spatial Audio & Interaction Systems",
    "Android, iOS & Windows PC"
  ],
  "Tools & Technologies": [
    "Git & GitHub",
    "Postman",
    "Figma",
    "Jira & Trello",
    "Visual Studio",
    "ASP.NET"
  ],
  "Game Systems": [
    "Multiplayer Synchronization",
    "Card Effect & Queue Systems",
    "Daily & Weekly Objectives System",
    "Save & Inventory Systems",
    "Analytics Integration",
    "Localization & Live Ops Tuning"
  ],
  "Leadership & Methodologies": [
    "Technical Team Leadership",
    "Agile / Scrum & Sprint Planning",
    "Code Reviews & Standards",
    "Bootcamp Mentorship & Training",
    "Architecture Design & Refactoring",
    "Problem Solving & Root Cause Analysis"
  ]
};

export const activities = [
  {
    role: "Game Development Mentor",
    organization: "Traverse Summit 2024",
    description: "Mentored aspiring developers at Traverse Summit 2024 — the biggest high schoolers summit in the MENA region."
  },
  {
    role: "Unity Developer Instructor",
    organization: "Coursera",
    description: "Taught intermediate and advanced game development concepts, C# programming, and Unity workflows to global learners."
  },
  {
    role: "Unity Asset Store Publisher",
    organization: "Unity Developer Community",
    description: "Created and published reusable tools and game development assets for the worldwide Unity community."
  }
];

export const education = [
  {
    degree: "Bachelor of Software Engineering",
    institution: "Ain Shams University",
    period: "2014 - 2018",
    details: "Focus on Software Engineering, Object-Oriented Design, Data Structures & Algorithms, and System Architecture"
  }
];

export const certifications = [
  "Unity Certified Developer",
  "AR/VR Development Certification",
  "Mobile Game Development Course"
];

export const recommendations = [
  {
    id: "ahmed-abutahoun",
    name: "Ahmed Abutahoun",
    title: "Unity Developer @ Genesis Creations",
    date: "July 23, 2026",
    relation: "Mohamed was senior to Ahmed but didn’t manage Ahmed directly",
    message:
      "I had the privilege of having Mohamed Alaa as a lead during my bootcamp. Right from the get-go, he set a high standard with an early, thorough, and technical session, but what stood out most was his relentless support and approachable communication. While he wasn't my direct lead, he was always accessible for technical consultations and discussions.\n\nMohamed shined during the development of our bootcamp graduation game, stepping in to guide our work process; from planning, to assigning roles and tasks, and providing insightful code reviews that kept our work on track and pushed us consistently to write cleaner, more efficient code.\n\nBeyond his technical expertise, Mohamed is incredibly easy to get along with and has a natural sense of community among the team, bringing a positive, welcoming and collaborative energy that makes the workplace genuinely enjoyable. Any team looking for a deeply technical leader, a fantastic culture-add, and a mentor who knows how to guide a team to the finish line would be absolutely lucky to have him.",
    image:
      "https://media.licdn.com/dms/image/v2/C4D03AQF2VQnF2GWMVQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1642447037119?e=1786579200&v=beta&t=bqy-1Cb2eR_K2EZp7n_DF91Nlx64EphdAuPL0u1vIas",
    linkedin: "https://www.linkedin.com/in/ahmed-abutahoun/",
  },
  {
    id: "amjad-mohamed",
    name: "Amjad Mohamed",
    title: "Software Developer | Unity Developer @ Genesis Creations S.A.E | Author @ Udacity | ITI Graduate",
    date: "July 20, 2026",
    relation: "Reported to you directly",
    message:
      "I had the pleasure of working with Alaa on multiple projects during our time at Genesis. He has a rare ability to make complex workflows feel smooth and effortless. As a leader, Alaa is an exceptional listener who truly supports his team while keeping everyone aligned and motivated. I highly recommend him, he is an absolute asset who will bring immense value to any company fortunate enough to have him!",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQETPqAwchBmkQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730748897070?e=1786579200&v=beta&t=xhxRFn3ha988YsX_iUeheRKtDZU7ivyExvdbpcMBbXQ",
    linkedin: "https://www.linkedin.com/in/amjadmohamed/",
  },
  {
    id: "yousef-ismail",
    name: "Yousef Ismail",
    title: "Unity Developer @ Genesis Creations S.A.E",
    date: "July 19, 2026",
    relation: "Mohamed was senior to Yousef but didn’t manage Yousef directly",
    message:
      "It was great working with Mohamed Alaa, and I would like to state with confidence that he is one of the best leaders and game developers I have worked with.\n\nFirst of all, Mohamed has outstanding skills in analyzing complex technical problems, identifying their root causes, and proposing effective solutions. His problem-solving skills helped us many times overcome various obstacles without compromising development quality.\n\nSecondly, Mohamed is a great leader. He manages to create an atmosphere of mutual cooperation and learning for everybody, helping the team to learn new things and become better at what they do. He always mentors the team members and shares his experience.",
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQF5ankuphCyZA/profile-displayphoto-shrink_400_400/B4EZY1oYXpHMAg-/0/1744656503200?e=1785974400&v=beta&t=06VEF4mjxynXDSGeG1Fdi0oNuJKtDuhlPFg5HvE231w",
    linkedin: "https://www.linkedin.com/in/yousef-ismail-7918b1242/",
  },
  {
    id: "mohamed-rabea",
    name: "Mohamed Rabea",
    title: "Unity Developer @ Genesis Creations",
    date: "April 15, 2026",
    relation: "Reported to you directly",
    message:
      "I had the pleasure of working under Mohamed as a Unity Developer, and I can confidently say that a significant part of my growth came from his guidance and leadership.\n\nFrom our very first interaction, I was constantly learning. He has a strong ability to mentor and support his team, always knowing how to bring out the best in each individual. His leadership strikes a great balance between guidance and trust, especially early on, where his close follow-up and feedback helped me build a solid foundation in both technical and professional aspects.\n\nBeyond his technical expertise in Unity, what truly stands out is his ability to lead a team effectively, maintain high standards, and create an environment where improvement is continuous.\n\nI’m genuinely grateful for the experience of working with him.",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQEjSxMnswF3qw/profile-displayphoto-scale_400_400/B4DZeyAxdKHMAg-/0/1751038236975?e=1785974400&v=beta&t=_Y6Wq5QxA07sjbcLnLUq15i16f2gFofie8MqYLeOPxg",
    linkedin: "https://www.linkedin.com/in/mohamed-rabea3/",
  },
  {
    id: "mohab-abd-elmohsen",
    name: "Mohab Abd ElMohsen",
    title: "Unity Developer @ Genesis Creations",
    date: "April 14, 2026",
    relation: "Reported to you directly",
    message:
      "I have the pleasure of working with Mohamed and can confidently say he’s a great person to work with. He brings strong technical knowledge, clear thinking when solving problems, and always maintains a positive and supportive attitude within the team.\n\nHe’s reliable, collaborative, and always willing to help others or share his experience when needed. Beyond being a great colleague, he is also someone I consider a friend.\n\nWorking with him is a great experience, and I truly appreciate the professionalism and dedication he brings to his work.",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQExSnkKeAWGpg/profile-displayphoto-shrink_400_400/B4DZZAlcusGkAs-/0/1744840282287?e=1785974400&v=beta&t=DekLS0hC7sLPVs3ubtxYLbuaimvn7vV-9xa6g_AN39U",
    linkedin: "https://www.linkedin.com/in/hobapro/",
  },
  {
    id: "adham-ayman",
    name: "Adham Ayman",
    title: "Unity Game Developer @ Umami Games",
    date: "November 30, 2025",
    relation: "Reported to you directly",
    message:
      "I had the opportunity to work with Mohamed at Umami Games, and he is truly an outstanding senior developer. He has a deep technical understanding, approaches problems with clarity, and always delivers high quality solutions. What I appreciated most was how supportive and approachable he was—always willing to guide me, share his experience, and help me grow as a developer. His leadership, communication, and consistency make him a huge asset to any team. I highly recommend him for any senior or lead role.",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQHoomms5Hmtug/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1669649121520?e=1785974400&v=beta&t=OZx17ZbXYjvVvm9unQlyNqCJHPEUavxHOdXWVwuqU-w",
    linkedin: "https://www.linkedin.com/in/adham-ayman-b79109214/",
  },
  {
    id: "Mohamed-Fathi ",
    name: "Mohamed Fathi ",
    title: "Senior 3D Generalist | Technical Artist @ Vhorus",
    date: "November 30, 2025",
    relation: "Mohamed worked with me on the same team",
    message:
      "I worked with Mohamed Alaa as a Game Designer, and we went through many challenges together during our project. He was always one of the quickest and most creative people when it came to solving problems and delivering tasks efficiently. His ideas were always smart and unique, and he consistently pushed the work forward.\n\nWorking with him was honestly one of the best periods of the project, and I truly enjoyed collaborating with him.",
    image:
      "https://media.licdn.com/dms/image/v2/D4D35AQHoJ79i5lWuew/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1738522751034?e=1785063600&v=beta&t=v1n9j3_7eHFzMThP9OCRt-UPKhsSYhZ5qgLOL6atO_U",
    linkedin: "https://www.linkedin.com/in/mohamed-fathi-ahmed/",
  },
  {
    id: "omar-el-sayed",
    name: "Omar El-Sayed",
    title: "Product Manager | Game Designer | Game Producer @ Tamatem Games",
    date: "May 3, 2024",
    relation: "Managed you directly",
    message:
      "Having Mohamed on your programmers team will have a huge positive impact to the product you are working on. You would love to see how he delivers all his developed systems in Detailed-Oriented Diagrams and Flow-Charts and the tips & tricks he has up his sleeve in the Unity Engine.\n\nMohamed also mentored all the juniors programmers in the team and helped us in developing our well-established team of programmers.\n\nBeside all this, you definitely don't want to miss his cheerful spirit and the addition of his sense of humor to your working environment.",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQFV58-KwNojJQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1691663660959?e=1785974400&v=beta&t=73rVG5zahCcMsMbWzIMbFvaTc15qJl99Uo1r56SJoF0",
    linkedin: "https://www.linkedin.com/in/omarelsayed997/",
  },
];

