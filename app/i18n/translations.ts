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
  | "footer.legal";

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
  },
};
