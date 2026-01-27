export const defaultLocale = "en" as const;

export const locales = ["en", "fr", "zh-Hant", "zh-Hans"] as const;

export type Locale = (typeof locales)[number];

export type TranslationKey =
  | "nav.about"
  | "nav.programs"
  | "nav.camp"
  | "nav.blog"
  | "nav.faq"
  | "nav.contact"
  | "nav.enroll"
  | "program.sat"
  | "program.headStart"
  | "program.academicSupport"
  | "program.academicOnline"
  | "program.empowerment"
  | "program.robotics"
  | "program.ai"
  | "program.pcb"
  | "hero.title"
  | "hero.subtitle"
  | "hero.cta.primary"
  | "hero.cta.secondary"
  | "hero.card.science"
  | "hero.card.tech"
  | "hero.card.engineering"
  | "hero.card.math"
  | "about.title"
  | "about.subtitle"
  | "about.feature.fun.title"
  | "about.feature.fun.body"
  | "about.feature.expert.title"
  | "about.feature.expert.body"
  | "about.feature.projects.title"
  | "about.feature.projects.body"
  | "programs.title"
  | "programs.subtitle"
  | "programs.card.robotics.title"
  | "programs.card.robotics.body"
  | "programs.card.coding.title"
  | "programs.card.coding.body"
  | "programs.card.science.title"
  | "programs.card.science.body"
  | "programs.card.math.title"
  | "programs.card.math.body"
  | "why.title"
  | "why.stat.satisfaction"
  | "why.stat.teachers"
  | "why.stat.courses"
  | "why.stat.years"
  | "contact.title"
  | "contact.subtitle"
  | "contact.card.email"
  | "contact.card.call"
  | "contact.card.visit"
  | "contact.card.location"
  | "contact.offer.title"
  | "contact.offer.body"
  | "contact.offer.cta"
  | "footer.tagline"
  | "footer.legal"
  | "camp.hero.season"
  | "camp.hero.title"
  | "camp.hero.titleEmphasis"
  | "camp.hero.subtitle"
  | "camp.hero.cta.primary"
  | "camp.hero.cta.secondary"
  | "camp.dayFlow.label"
  | "camp.dayFlow.title"
  | "camp.dayFlow.slot1.time"
  | "camp.dayFlow.slot1.body"
  | "camp.dayFlow.slot2.time"
  | "camp.dayFlow.slot2.body"
  | "camp.dayFlow.slot3.time"
  | "camp.dayFlow.slot3.body"
  | "camp.dayFlow.footer.label"
  | "camp.dayFlow.footer.cta"
  | "camp.banner.title"
  | "camp.banner.tag1"
  | "camp.banner.tag2"
  | "camp.banner.tag3"
  | "camp.banner.tag4"
  | "camp.formats.label"
  | "camp.formats.title"
  | "camp.formats.subtitle"
  | "camp.formats.card.day.title"
  | "camp.formats.card.day.body"
  | "camp.formats.card.day.ages"
  | "camp.formats.card.week.title"
  | "camp.formats.card.week.body"
  | "camp.formats.card.week.ages"
  | "camp.formats.card.teen.title"
  | "camp.formats.card.teen.body"
  | "camp.formats.card.teen.ages"
  | "camp.enroll.label"
  | "camp.enroll.title"
  | "camp.enroll.subtitle"
  | "camp.enroll.cta.primary"
  | "camp.enroll.cta.secondary";

export const translations: Record<Locale, Record<TranslationKey, string>> = {
  en: {
    "nav.about": "About",
    "nav.programs": "Programs",
    "nav.camp": "Camp",
    "nav.blog": "Blog",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.enroll": "Enroll Now",
    "program.sat": "SAT Prep Program",
    "program.headStart": "Head Start Learning",
    "program.academicSupport": "Academic Support Program",
    "program.academicOnline": "Academic Program (Online)",
    "program.empowerment": "Empowerment Classes",
    "program.robotics": "Robotics",
    "program.ai": "AI & Machine Learning",
    "program.pcb": "PCB Design",
    "hero.title": "Learn, Play, Create!",
    "hero.subtitle":
      "Canada's most exciting STEM education adventure! Join turned-e! academy where science meets fun, and every student becomes a future innovator!",
    "hero.cta.primary": "Start Your Journey",
    "hero.cta.secondary": "Watch Video",
    "hero.card.science": "Science",
    "hero.card.tech": "Tech",
    "hero.card.engineering": "Engineering",
    "hero.card.math": "Math",
    "about.title": "What Makes Us Special?",
    "about.subtitle":
      "We're not just another education company - we're a launchpad for young minds!",
    "about.feature.fun.title": "Fun-First Learning",
    "about.feature.fun.body":
      "Who says learning can't be hilarious? We mix education with games, jokes, and lots of \"aha!\" moments!",
    "about.feature.expert.title": "Expert Instructors",
    "about.feature.expert.body":
      "Our teachers are like superheroes - with PhDs! They make rocket science feel like a playground adventure.",
    "about.feature.projects.title": "Hands-On Projects",
    "about.feature.projects.body":
      "Build robots, code games, launch rockets! You'll create things so cool, your friends will be jealous.",
    "programs.title": "Amazing Programs",
    "programs.subtitle": "Choose your adventure in the world of STEM!",
    "programs.card.robotics.title": "Robotics",
    "programs.card.robotics.body":
      "Build and program awesome robots that actually move!",
    "programs.card.coding.title": "Coding",
    "programs.card.coding.body":
      "Create games, apps, and websites like a pro developer!",
    "programs.card.science.title": "Science Labs",
    "programs.card.science.body":
      "Explode, fizz, and discover the magic of science!",
    "programs.card.math.title": "Math Masters",
    "programs.card.math.body":
      "Crack codes and solve puzzles that'll blow your mind!",
    "why.title": "Join 10,000+ Happy Learners!",
    "why.stat.satisfaction": "Satisfaction Rate",
    "why.stat.teachers": "Expert Teachers",
    "why.stat.courses": "Fun Courses",
    "why.stat.years": "Years Experience",
    "contact.title": "Ready to Start?",
    "contact.subtitle": "Let's make learning the best part of your day!",
    "contact.card.email": "Email Us",
    "contact.card.call": "Call Us",
    "contact.card.visit": "Visit Us",
    "contact.card.location": "Toronto, Canada",
    "contact.offer.title": "Special Offer: First Class FREE!",
    "contact.offer.body":
      "Try any program for free and see why kids can't stop talking about us!",
    "contact.offer.cta": "Claim Your Free Class",
    "footer.tagline":
      "Inspiring the next generation of innovators across Canada",
    "footer.legal":
      "2024 turned-e! academy. All rights reserved. | Made with love and lots of code",
    "camp.hero.season": "Camp season 2026",
    "camp.hero.title": "STEM camps that feel like missions.",
    "camp.hero.titleEmphasis": "Launch bold ideas.",
    "camp.hero.subtitle":
      "Turned-E Academy camps turn school breaks into immersive build labs. Students collaborate on real projects in coding, robotics, and STEM design with mentor support.",
    "camp.hero.cta.primary": "Reserve a Camp Seat",
    "camp.hero.cta.secondary": "Download Camp Guide",
    "camp.dayFlow.label": "Camp day flow",
    "camp.dayFlow.title": "Build. Test. Showcase.",
    "camp.dayFlow.slot1.time": "9:00 - 10:30",
    "camp.dayFlow.slot1.body": "Team briefing and concept design.",
    "camp.dayFlow.slot2.time": "10:45 - 12:30",
    "camp.dayFlow.slot2.body": "Build sprint with mentors and prototyping.",
    "camp.dayFlow.slot3.time": "1:15 - 3:00",
    "camp.dayFlow.slot3.body": "Code lab, testing, and demo prep.",
    "camp.dayFlow.footer.label": "Weekly demo night",
    "camp.dayFlow.footer.cta": "See projects",
    "camp.banner.title": "Camps built for ages 7-17.",
    "camp.banner.tag1": "Full day camps",
    "camp.banner.tag2": "Weekly intensives",
    "camp.banner.tag3": "Teen innovation labs",
    "camp.banner.tag4": "Mobile camp teams",
    "camp.formats.label": "Camp formats",
    "camp.formats.title": "Pick the experience that fits your family.",
    "camp.formats.subtitle":
      "Every camp includes team projects, mentor check-ins, and a showcase to celebrate student progress.",
    "camp.formats.card.day.title": "Day Camps",
    "camp.formats.card.day.body":
      "Weekly themes with robotics, coding, and science labs.",
    "camp.formats.card.day.ages": "Ages 7-12",
    "camp.formats.card.week.title": "Week Intensives",
    "camp.formats.card.week.body":
      "Deep dives into game dev, AI, and engineering builds.",
    "camp.formats.card.week.ages": "Ages 9-15",
    "camp.formats.card.teen.title": "Teen Labs",
    "camp.formats.card.teen.body":
      "Portfolio projects, leadership roles, and demo coaching.",
    "camp.formats.card.teen.ages": "Ages 13-17",
    "camp.enroll.label": "Camp enrollment",
    "camp.enroll.title": "Save your spot for summer or winter break.",
    "camp.enroll.subtitle":
      "We accept rolling registrations until each camp is full.",
    "camp.enroll.cta.primary": "Register Now",
    "camp.enroll.cta.secondary": "Talk to a Camp Advisor",
  },
  fr: {
    "nav.about": "A propos",
    "nav.programs": "Programmes",
    "nav.camp": "Camp",
    "nav.blog": "Blog",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.enroll": "S'inscrire",
    "program.sat": "Programme de preparation SAT",
    "program.headStart": "Apprentissage Head Start",
    "program.academicSupport": "Programme de soutien academique",
    "program.academicOnline": "Programme academique (en ligne)",
    "program.empowerment": "Cours d'autonomisation",
    "program.robotics": "Robotique",
    "program.ai": "IA et apprentissage automatique",
    "program.pcb": "Conception PCB",
    "hero.title": "Apprendre, jouer, creer !",
    "hero.subtitle":
      "L'aventure STEM la plus passionnante du Canada ! Rejoignez turned-e! academy ou la science rencontre le fun et chaque eleve devient un futur innovateur.",
    "hero.cta.primary": "Commencer l'aventure",
    "hero.cta.secondary": "Voir la video",
    "hero.card.science": "Science",
    "hero.card.tech": "Tech",
    "hero.card.engineering": "Ingenierie",
    "hero.card.math": "Mathematiques",
    "about.title": "Ce qui nous rend uniques",
    "about.subtitle":
      "Nous ne sommes pas une ecole comme les autres : nous sommes un tremplin pour les jeunes esprits.",
    "about.feature.fun.title": "Apprendre en s'amusant",
    "about.feature.fun.body":
      "Qui a dit que l'apprentissage ne pouvait pas etre drole ? On melange education, jeux, blagues et beaucoup de moments \"aha !\".",
    "about.feature.expert.title": "Experts passionnes",
    "about.feature.expert.body":
      "Nos enseignants sont comme des superheros - avec un doctorat ! Ils rendent la science des fusees aussi amusante qu'un terrain de jeu.",
    "about.feature.projects.title": "Projets concrets",
    "about.feature.projects.body":
      "Construisez des robots, codez des jeux, lancez des fusees ! Vous allez creer des choses si cool que vos amis seront jaloux.",
    "programs.title": "Programmes incroyables",
    "programs.subtitle": "Choisissez votre aventure dans l'univers STEM !",
    "programs.card.robotics.title": "Robotique",
    "programs.card.robotics.body":
      "Construisez et programmez des robots qui bougent vraiment !",
    "programs.card.coding.title": "Programmation",
    "programs.card.coding.body":
      "Creez des jeux, des applis et des sites comme un pro !",
    "programs.card.science.title": "Labos de science",
    "programs.card.science.body":
      "Explosez, faites des reactions, et decouvrez la magie de la science !",
    "programs.card.math.title": "As des maths",
    "programs.card.math.body":
      "Craquez des codes et resoudre des enigmes qui vont vous surprendre !",
    "why.title": "Rejoignez 10 000+ eleves ravis !",
    "why.stat.satisfaction": "Taux de satisfaction",
    "why.stat.teachers": "Enseignants experts",
    "why.stat.courses": "Cours amusants",
    "why.stat.years": "Annees d'experience",
    "contact.title": "Pret a commencer ?",
    "contact.subtitle": "Faisons de l'apprentissage le meilleur moment de la journee !",
    "contact.card.email": "Ecrivez-nous",
    "contact.card.call": "Appelez-nous",
    "contact.card.visit": "Venez nous voir",
    "contact.card.location": "Toronto, Canada",
    "contact.offer.title": "Offre speciale : premier cours GRATUIT !",
    "contact.offer.body":
      "Essayez n'importe quel programme gratuitement et voyez pourquoi les enfants en parlent sans arret !",
    "contact.offer.cta": "Reserver un cours gratuit",
    "footer.tagline":
      "Inspirer la prochaine generation d'innovateurs au Canada",
    "footer.legal":
      "2024 turned-e! academy. Tous droits reserves. | Fait avec amour et beaucoup de code",
    "camp.hero.season": "Saison des camps 2026",
    "camp.hero.title": "Des camps STEM comme des missions.",
    "camp.hero.titleEmphasis": "Lancez des idees audacieuses.",
    "camp.hero.subtitle":
      "Les camps Turned-E Academy transforment les vacances scolaires en ateliers immersifs. Les eleves collaborent sur de vrais projets en code, robotique et conception STEM avec l'appui de mentors.",
    "camp.hero.cta.primary": "Reserver une place",
    "camp.hero.cta.secondary": "Telecharger le guide",
    "camp.dayFlow.label": "Deroule d'une journee",
    "camp.dayFlow.title": "Construire. Tester. Presenter.",
    "camp.dayFlow.slot1.time": "9:00 - 10:30",
    "camp.dayFlow.slot1.body": "Brief d'equipe et conception du concept.",
    "camp.dayFlow.slot2.time": "10:45 - 12:30",
    "camp.dayFlow.slot2.body": "Sprint de construction avec mentors et prototypage.",
    "camp.dayFlow.slot3.time": "1:15 - 3:00",
    "camp.dayFlow.slot3.body": "Atelier code, tests et preparation demo.",
    "camp.dayFlow.footer.label": "Soiree demo hebdo",
    "camp.dayFlow.footer.cta": "Voir les projets",
    "camp.banner.title": "Des camps pour les 7-17 ans.",
    "camp.banner.tag1": "Camps a la journee",
    "camp.banner.tag2": "Intensifs hebdomadaires",
    "camp.banner.tag3": "Labos d'innovation ados",
    "camp.banner.tag4": "Equipes mobiles",
    "camp.formats.label": "Formats de camp",
    "camp.formats.title": "Choisissez l'experience ideale pour votre famille.",
    "camp.formats.subtitle":
      "Chaque camp inclut des projets d'equipe, des bilans mentor et une vitrine pour celebrer les progres.",
    "camp.formats.card.day.title": "Camps de jour",
    "camp.formats.card.day.body":
      "Themes hebdo avec robotique, code et labos de science.",
    "camp.formats.card.day.ages": "Ages 7-12",
    "camp.formats.card.week.title": "Intensifs de semaine",
    "camp.formats.card.week.body":
      "Immersions dans dev de jeux, IA et constructions d'ingenierie.",
    "camp.formats.card.week.ages": "Ages 9-15",
    "camp.formats.card.teen.title": "Labos ados",
    "camp.formats.card.teen.body":
      "Projets portfolio, roles de leadership et coaching de demo.",
    "camp.formats.card.teen.ages": "Ages 13-17",
    "camp.enroll.label": "Inscriptions camp",
    "camp.enroll.title": "Gardez votre place pour l'ete ou l'hiver.",
    "camp.enroll.subtitle": "Inscriptions en continu jusqu'au complet.",
    "camp.enroll.cta.primary": "S'inscrire",
    "camp.enroll.cta.secondary": "Parler a un conseiller camp",
  },
  "zh-Hant": {
    "nav.about": "關於我們",
    "nav.programs": "課程",
    "nav.camp": "營隊",
    "nav.blog": "部落格",
    "nav.faq": "常見問題",
    "nav.contact": "聯絡我們",
    "nav.enroll": "立即報名",
    "program.sat": "SAT 備考課程",
    "program.headStart": "Head Start 學習",
    "program.academicSupport": "學術支援課程",
    "program.academicOnline": "線上學術課程",
    "program.empowerment": "自信養成課",
    "program.robotics": "機器人",
    "program.ai": "AI 與機器學習",
    "program.pcb": "PCB 設計",
    "hero.title": "學、玩、創！",
    "hero.subtitle":
      "加拿大最有趣的 STEM 學習冒險！加入 turned-e! academy，讓科學變好玩，讓每位學生成為未來創新者。",
    "hero.cta.primary": "開始學習旅程",
    "hero.cta.secondary": "觀看影片",
    "hero.card.science": "科學",
    "hero.card.tech": "科技",
    "hero.card.engineering": "工程",
    "hero.card.math": "數學",
    "about.title": "我們為何與眾不同",
    "about.subtitle": "我們不只是教育公司，更是啟動孩子好奇心的發射台！",
    "about.feature.fun.title": "好玩優先的學習",
    "about.feature.fun.body":
      "誰說學習不能有趣？我們把知識、遊戲、笑聲和滿滿的「啊哈！」時刻融合在一起。",
    "about.feature.expert.title": "專業師資",
    "about.feature.expert.body":
      "老師就像超級英雄一樣專業！讓火箭科學也能像遊樂場般好玩。",
    "about.feature.projects.title": "實作專題",
    "about.feature.projects.body":
      "做機器人、寫遊戲、發射火箭！打造超酷作品讓同學都羨慕。",
    "programs.title": "超棒課程",
    "programs.subtitle": "選擇你的 STEM 冒險旅程！",
    "programs.card.robotics.title": "機器人",
    "programs.card.robotics.body": "打造並操控真正會動的機器人！",
    "programs.card.coding.title": "程式設計",
    "programs.card.coding.body": "像專業工程師一樣做遊戲、做 App、做網站！",
    "programs.card.science.title": "科學實驗室",
    "programs.card.science.body": "爆炸、噴發、探索科學的魔法！",
    "programs.card.math.title": "數學高手",
    "programs.card.math.body": "破解密碼、解開謎題，腦力全開！",
    "why.title": "加入 10,000+ 位快樂學員！",
    "why.stat.satisfaction": "滿意度",
    "why.stat.teachers": "專業老師",
    "why.stat.courses": "有趣課程",
    "why.stat.years": "教學年資",
    "contact.title": "準備開始了嗎？",
    "contact.subtitle": "讓學習成為孩子一天中最期待的時光！",
    "contact.card.email": "電子郵件",
    "contact.card.call": "電話聯絡",
    "contact.card.visit": "親自拜訪",
    "contact.card.location": "加拿大 多倫多",
    "contact.offer.title": "特別優惠：第一堂課免費！",
    "contact.offer.body": "免費體驗任一課程，看看孩子為何愛不釋手！",
    "contact.offer.cta": "領取免費課程",
    "footer.tagline": "啟發加拿大下一代的創新者",
    "footer.legal": "2024 turned-e! academy. 保留所有權利。| 用愛與程式打造",
    "camp.hero.season": "2026 營隊季",
    "camp.hero.title": "像任務一樣的 STEM 營隊。",
    "camp.hero.titleEmphasis": "點燃大膽想法。",
    "camp.hero.subtitle":
      "Turned-E Academy 營隊把假期變成沉浸式建造實驗室。學生在導師陪伴下合作完成程式、機器人與 STEM 設計專案。",
    "camp.hero.cta.primary": "預留營隊名額",
    "camp.hero.cta.secondary": "下載營隊指南",
    "camp.dayFlow.label": "營隊日流程",
    "camp.dayFlow.title": "打造。測試。展示。",
    "camp.dayFlow.slot1.time": "9:00 - 10:30",
    "camp.dayFlow.slot1.body": "團隊簡報與概念設計。",
    "camp.dayFlow.slot2.time": "10:45 - 12:30",
    "camp.dayFlow.slot2.body": "與導師進行製作衝刺與原型測試。",
    "camp.dayFlow.slot3.time": "1:15 - 3:00",
    "camp.dayFlow.slot3.body": "程式實驗室、測試與展示準備。",
    "camp.dayFlow.footer.label": "每週成果夜",
    "camp.dayFlow.footer.cta": "查看作品",
    "camp.banner.title": "適合 7-17 歲的營隊。",
    "camp.banner.tag1": "全日營隊",
    "camp.banner.tag2": "每週密集",
    "camp.banner.tag3": "青少年創新實驗室",
    "camp.banner.tag4": "行動營隊團隊",
    "camp.formats.label": "營隊形式",
    "camp.formats.title": "挑選最適合家庭的體驗。",
    "camp.formats.subtitle":
      "每個營隊都有團隊專案、導師檢核與成果展示，紀錄學生成長。",
    "camp.formats.card.day.title": "日間營隊",
    "camp.formats.card.day.body": "每週主題，包含機器人、程式與科學實驗。",
    "camp.formats.card.day.ages": "7-12 歲",
    "camp.formats.card.week.title": "每週密集營",
    "camp.formats.card.week.body": "深入遊戲開發、AI 與工程打造。",
    "camp.formats.card.week.ages": "9-15 歲",
    "camp.formats.card.teen.title": "青少年實驗室",
    "camp.formats.card.teen.body": "作品集專案、領導角色與展示教練。",
    "camp.formats.card.teen.ages": "13-17 歲",
    "camp.enroll.label": "營隊報名",
    "camp.enroll.title": "為暑假或寒假保留名額。",
    "camp.enroll.subtitle": "採滾動式報名，額滿為止。",
    "camp.enroll.cta.primary": "立即報名",
    "camp.enroll.cta.secondary": "與營隊顧問聊聊",
  },
  "zh-Hans": {
    "nav.about": "关于我们",
    "nav.programs": "课程",
    "nav.camp": "营队",
    "nav.blog": "博客",
    "nav.faq": "常见问题",
    "nav.contact": "联系我们",
    "nav.enroll": "立即报名",
    "program.sat": "SAT 备考课程",
    "program.headStart": "Head Start 学习",
    "program.academicSupport": "学术支持课程",
    "program.academicOnline": "线上学术课程",
    "program.empowerment": "自信提升课",
    "program.robotics": "机器人",
    "program.ai": "AI 与机器学习",
    "program.pcb": "PCB 设计",
    "hero.title": "学、玩、创！",
    "hero.subtitle":
      "加拿大最有趣的 STEM 学习冒险！加入 turned-e! academy，让科学变好玩，让每位学生成为未来创新者。",
    "hero.cta.primary": "开启学习旅程",
    "hero.cta.secondary": "观看视频",
    "hero.card.science": "科学",
    "hero.card.tech": "科技",
    "hero.card.engineering": "工程",
    "hero.card.math": "数学",
    "about.title": "我们为何与众不同",
    "about.subtitle": "我们不只是教育公司，更是点燃孩子好奇心的发射台！",
    "about.feature.fun.title": "好玩优先的学习",
    "about.feature.fun.body":
      "谁说学习不能有趣？我们把知识、游戏、笑声和满满的“啊哈！”时刻融合在一起。",
    "about.feature.expert.title": "专业师资",
    "about.feature.expert.body":
      "老师就像超级英雄一样专业！让火箭科学也能像游乐场般好玩。",
    "about.feature.projects.title": "实作项目",
    "about.feature.projects.body":
      "做机器人、写游戏、发射火箭！打造超酷作品让同学都羡慕。",
    "programs.title": "超棒课程",
    "programs.subtitle": "选择你的 STEM 冒险旅程！",
    "programs.card.robotics.title": "机器人",
    "programs.card.robotics.body": "打造并操控真正会动的机器人！",
    "programs.card.coding.title": "编程",
    "programs.card.coding.body": "像专业工程师一样做游戏、做 App、做网站！",
    "programs.card.science.title": "科学实验室",
    "programs.card.science.body": "爆炸、喷发、探索科学的魔法！",
    "programs.card.math.title": "数学高手",
    "programs.card.math.body": "破解密码、解开谜题，脑力全开！",
    "why.title": "加入 10,000+ 位快乐学员！",
    "why.stat.satisfaction": "满意度",
    "why.stat.teachers": "专业老师",
    "why.stat.courses": "有趣课程",
    "why.stat.years": "教学年资",
    "contact.title": "准备开始了吗？",
    "contact.subtitle": "让学习成为孩子一天中最期待的时光！",
    "contact.card.email": "电子邮件",
    "contact.card.call": "电话联系",
    "contact.card.visit": "亲自拜访",
    "contact.card.location": "加拿大 多伦多",
    "contact.offer.title": "特别优惠：第一堂课免费！",
    "contact.offer.body": "免费体验任一课程，看看孩子为何爱不释手！",
    "contact.offer.cta": "领取免费课程",
    "footer.tagline": "启发加拿大下一代的创新者",
    "footer.legal": "2024 turned-e! academy. 保留所有权利。| 用爱与程序打造",
    "camp.hero.season": "2026 营队季",
    "camp.hero.title": "像任务一样的 STEM 营队。",
    "camp.hero.titleEmphasis": "点燃大胆想法。",
    "camp.hero.subtitle":
      "Turned-E Academy 营队把假期变成沉浸式建造实验室。学生在导师陪伴下合作完成编程、机器人与 STEM 设计项目。",
    "camp.hero.cta.primary": "预留营队名额",
    "camp.hero.cta.secondary": "下载营队指南",
    "camp.dayFlow.label": "营队日流程",
    "camp.dayFlow.title": "打造。测试。展示。",
    "camp.dayFlow.slot1.time": "9:00 - 10:30",
    "camp.dayFlow.slot1.body": "团队简报与概念设计。",
    "camp.dayFlow.slot2.time": "10:45 - 12:30",
    "camp.dayFlow.slot2.body": "与导师进行制作冲刺与原型测试。",
    "camp.dayFlow.slot3.time": "1:15 - 3:00",
    "camp.dayFlow.slot3.body": "编程实验室、测试与展示准备。",
    "camp.dayFlow.footer.label": "每周成果夜",
    "camp.dayFlow.footer.cta": "查看作品",
    "camp.banner.title": "适合 7-17 岁的营队。",
    "camp.banner.tag1": "全日营队",
    "camp.banner.tag2": "每周密集",
    "camp.banner.tag3": "青少年创新实验室",
    "camp.banner.tag4": "移动营队团队",
    "camp.formats.label": "营队形式",
    "camp.formats.title": "挑选最适合家庭的体验。",
    "camp.formats.subtitle":
      "每个营队都有团队项目、导师检核与成果展示，记录学生成长。",
    "camp.formats.card.day.title": "日间营队",
    "camp.formats.card.day.body": "每周主题，包含机器人、编程与科学实验。",
    "camp.formats.card.day.ages": "7-12 岁",
    "camp.formats.card.week.title": "每周密集营",
    "camp.formats.card.week.body": "深入游戏开发、AI 与工程打造。",
    "camp.formats.card.week.ages": "9-15 岁",
    "camp.formats.card.teen.title": "青少年实验室",
    "camp.formats.card.teen.body": "作品集项目、领导角色与展示辅导。",
    "camp.formats.card.teen.ages": "13-17 岁",
    "camp.enroll.label": "营队报名",
    "camp.enroll.title": "为暑假或寒假保留名额。",
    "camp.enroll.subtitle": "采取滚动报名，额满为止。",
    "camp.enroll.cta.primary": "立即报名",
    "camp.enroll.cta.secondary": "与营队顾问聊聊",
  },
};
