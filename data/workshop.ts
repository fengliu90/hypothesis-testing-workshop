export type NavItem = {
  label: string;
  href: string;
};

export type TopicGroup = {
  title: string;
  items: string[];
};

export type Speaker = {
  name: string;
  affiliation: string;
  topic: string;
  // Update this with a local image path or public URL when headshots are available.
  headshot: string | null;
};

export type Organizer = {
  name: string;
  affiliation: string;
  role: string;
  // Update this with a local image path or public URL when organizer headshots are available.
  headshot: string | null;
  // Add a short bio here when organizer bios are ready to publish.
  bio: string;
};

export type ScheduleItem = {
  time: string;
  title: string;
};

export type ScheduleSession = {
  title: string;
  items: ScheduleItem[];
};

export type FAQ = {
  question: string;
  answer: string;
};

export const workshop = {
  site: {
    shortTitle: "ICML 2026",
    title: "ICML 2026 Workshop on Hypothesis Testing",
    subtitle:
      "Advancing the foundations and applications of hypothesis testing in machine learning",
    description:
      "A workshop bringing together researchers developing modern testing methodology and applying it across machine learning, including robustness, distribution shift, security, medicine, and LLM evaluation.",
    contactEmail: "fengliu.ml@gmail.com",
  },
  navigation: {
    items: [
      { label: "Why", href: "#why" },
      { label: "Topics", href: "#topics" },
      { label: "Speakers", href: "#speakers" },
      { label: "Call for Papers", href: "#call" },
      { label: "Schedule", href: "#schedule" },
      { label: "Organizers", href: "#organizers" },
      { label: "Attend", href: "#attend" },
      { label: "FAQ", href: "#faq" },
    ] satisfies NavItem[],
    submitLabel: "CFP",
  },
  links: {
    // Update this when the main submission page is finalized.
    submission: "#call",
    // Update this with the final OpenReview forum URL.
    openReview: "https://openreview.net/group?id=ICML.cc/2026/Workshop/Hypothesis_Testing",
  },
  logistics: {
    // Update this once the workshop date is confirmed.
    workshopDate: "Workshop date: July 11",
    // Update this once the ICML venue assignment is confirmed.
    venue: "Venue: The COEX Convention & Exhibition Center, Seoul, South Korea",
    registration: "Registration information: Follow the ICML 2026 registration page.",
    contact: "Contact: fengliu.ml@gmail.com",
  },
  hero: {
    eyebrow: "ICML 2026 Workshop",
    primaryCtaLabel: "View Call for Papers",
    primaryCtaHref: "#call",
    secondaryCtaLabel: "See Workshop Schedule",
    secondaryCtaHref: "#schedule",
    glanceLabel: "At a glance",
    submissionLabel: "Call for papers and submission details",
    highlights: [
      "6 invited speakers",
      "Contributed talks and posters",
      "Panel discussion",
    ],
  },
  sections: {
    why: {
      eyebrow: "Why this workshop",
      title:
        "Hypothesis testing remains a core tool for reliable machine learning.",
      description:
        "The workshop highlights both the enduring foundations of statistical testing and the new demands created by modern machine learning.",
      items: [
        "Hypothesis testing remains central to scientific inquiry and continues to play a foundational role in machine learning, where empirical claims often depend on reliable comparisons, validation procedures, and uncertainty-aware decision making.",
        "Modern machine learning introduces new challenges for testing methodology, including adaptive analysis, distribution shift, model complexity, safety-critical deployment, and the evaluation of increasingly powerful systems such as large language models.",
        "This workshop aims to bridge foundational advances in testing with practical applications across machine learning, creating a common forum for researchers working on both rigorous methodology and real-world impact.",
      ],
    },
    topics: {
      eyebrow: "Topics",
      title: "Foundations and applications",
      description:
        "The program spans methodological advances in testing as well as high-impact machine learning domains where rigorous testing is essential.",
      groups: [
        {
          title: "Foundations of Testing Methods",
          items: [
            "Anytime-valid inference and e-values",
            "Adaptive hypothesis testing and differential privacy",
            "Learned-representation tests",
            "Conditional independence and homogeneity testing",
            "Foundational limits and impossibility results",
          ],
        },
        {
          title: "Impacts and Applications",
          items: [
            "A/B testing",
            "Domain adaptation and model selection",
            "Out-of-distribution detection and anomaly detection",
            "Validation of ML assumptions and explanations",
            "Membership inference and adversarial testing",
            "Medical subgroup shift detection",
            "LLM-related testing problems",
          ],
        },
      ] satisfies TopicGroup[],
    },
    speakers: {
      eyebrow: "Keynote speakers",
      title: "Leading perspectives across foundations and applications",
      description:
        "The invited program brings together researchers spanning testing theory, security, medicine, and learning-based decision systems.",
      label: "Keynote Speaker",
      items: [
        {
          name: "Arthur Gretton",
          affiliation: "University College London and Google DeepMind",
          topic: "Foundations",
          headshot: "/speakers/arthur.png",
        },
        {
          name: "Yao Xie",
          affiliation: "Georgia Institute of Technology",
          topic: "Foundations",
          headshot: "/speakers/yao.jpg",
        },
        {
          name: "TBA",
          affiliation: "TBA",
          topic: "Foundations",
          headshot: null,
        },
        {
          name: "Bo Li",
          affiliation: "University of Illinois Urbana-Champaign and Virtue AI",
          topic: "Security",
          headshot: "/speakers/bo.jpg",
        },
        {
          name: "TBA",
          affiliation: "TBA",
          topic: "Application",
          headshot: null,
        },
        {
          name: "Yisong Yue",
          affiliation: "Caltech and Latitude AI",
          topic: "Robotics / Control",
          headshot: "/speakers/yisong.jpg",
        },
      ] satisfies Speaker[],
    },
    callForPapers: {
      eyebrow: "Call for Papers",
      title:
        "We invite submissions on modern hypothesis testing in machine learning.",
      description:
        "We welcome submissions on the theory, methodology, and practice of hypothesis testing in machine learning. The workshop is designed to bring together researchers developing new testing methods and researchers applying them in important ML domains. Submissions should follow the ICML 2026 format. If you have any questions regarding submissions, please first read FAQ section below. If questions remain, just email us :).",
      topicsTitle: "Topics of interest",
      topics: [
        "Theoretical advances in modern hypothesis testing",
        "Testing under adaptivity, dependence, and privacy constraints",
        "Evaluation under robustness challenges and distribution shift",
        "Testing problems arising in security, medicine, and LLM systems",
      ],
      submissionTypesTitle: "Submission types",
      submissionTypes: [
        "Contributed short papers (4 pages)",
        "Contributed long papers (8 pages)",
      ],
      detailsTitle: "Submission details",
      deadlines: [
        "Submission deadline: 12 May 2026 (extended)",
        "Notification date: 22 May 2026",
        "Camera-ready deadline: 17 June 2026",
        "Workshop date: July 11",
      ],
      note:
        "Accepted submissions may be presented as posters and some of them will be selected for contributed talks (i.e., orals).",
      noteLabel: "Presentation format",
      submitButtonLabel: "Submit via OpenReview",
    },
    schedule: {
      eyebrow: "Schedule",
      title: "Single-day workshop program",
      description:
        "The program is organized around foundational advances, domain-facing applications, and a closing panel discussion.",
      sessionCountLabel: "items",
      sessions: [
        {
          title: "Session 1: Foundation of Testing",
          items: [
            { time: "09:00-09:50", title: "Opening and Keynote 1" },
            { time: "09:50-10:00", title: "Contributed Talk 1" },
            { time: "10:00-10:45", title: "Keynote 2" },
            { time: "10:45-10:55", title: "Contributed Talk 2" },
            { time: "10:55-11:10", title: "Morning Tea Break" },
            { time: "11:10-11:55", title: "Keynote 3" },
            { time: "11:55-12:05", title: "Contributed Talk 3" },
          ],
        },
        {
          title: "Session 2: Important Sectors Related to Testing",
          items: [
            { time: "13:30-14:15", title: "Keynote 4" },
            { time: "14:15-14:25", title: "Contributed Talk 4" },
            { time: "14:25-15:10", title: "Keynote 5" },
            {
              time: "15:10-15:50",
              title: "Afternoon Tea Break / Poster Session",
            },
            { time: "15:50-16:35", title: "Keynote 6" },
          ],
        },
        {
          title: "Session 3: Panel Discussion",
          items: [
            { time: "16:35-16:55", title: "Panel Discussion" },
            { time: "16:55-17:00", title: "Closing Remarks" },
          ],
        },
      ] satisfies ScheduleSession[],
    },
    organizers: {
      eyebrow: "Organizers",
      title: "Workshop organizers",
      description:
        "The organizing team (alphabetical order by surname) brings together expertise from academia and industry across statistics and machine learning.",
      reviewerRecruitment: {
        text:
          "If you are interested in being a program committee member (i.e., reviewing submissions), please fill out this",
        linkLabel: "Google form",
        href:
          "https://docs.google.com/forms/d/e/1FAIpQLSddz5AxGWOgvX3a5v5GRmudXIC5XfKH3z0s778PPmY6mgLCkw/viewform",
      },
      items: [
        {
          name: "Xiuyuan Cheng",
          affiliation: "Duke University",
          role: "Organizer",
          headshot: "/organizers/xiuyuan.jpg",
          bio: "Researcher working at the intersection of machine learning, statistics, and modern testing methodology.",
        },
        {
          name: "Feng Liu",
          affiliation: "University of Melbourne",
          role: "Organizer",
          headshot: "/organizers/Feng_Liu.png",
          bio: "Researcher in trustworthy machine learning, hypothesis testing, distribution shift, and statistical foundations for robust evaluation.",
        },
        {
          name: "Lester Mackey",
          affiliation: "Microsoft Research / Stanford affiliation",
          role: "Organizer",
          headshot: "/organizers/lester.jpg",
          bio: "Researcher in scalable inference, adaptive data analysis, and reliable machine learning systems.",
        },
        {
          name: "Shayak Sen",
          affiliation: "Snowflake",
          role: "Organizer",
          headshot: "/organizers/shayak.jpeg",
          bio: "Researcher focused on statistical methodology, experimentation, and practical decision-making systems.",
        },
        {
          name: "Danica J. Sutherland",
          affiliation: "University of British Columbia",
          role: "Organizer",
          headshot: "/organizers/danica.jpg",
          bio: "Researcher in machine learning and statistics with interests in testing, kernels, and reliable model evaluation.",
        },
        {
          name: "Nathaniel Xu",
          affiliation: "University of British Columbia",
          role: "Organizer",
          headshot: "/organizers/nate.jpeg",
          bio: "Researcher working on statistical machine learning and practical testing problems in modern data settings.",
        },
      ] satisfies Organizer[],
    },
    attend: {
      eyebrow: "Attend / Logistics",
      title: "Attendance and practical information",
      description:
        "Venue, registration, and contact details will be updated here as ICML 2026 planning progresses.",
      details: [
        "The workshop is intended for researchers and practitioners interested in the foundations and applications of hypothesis testing across modern machine learning.",
        "Additional details about attendance, access, and conference-specific policies will be added here once ICML 2026 logistics are finalized.",
        "Please check back for updates on venue assignment, registration procedures, and any workshop-specific instructions.",
      ],
      cardTitle: "Workshop logistics",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common questions",
      description:
        "A few common questions about attendance, submissions, and presentation format.",
      items: [
        {
          question: "Do I need to register for ICML?",
          answer:
            "Yes. Workshop attendance will typically require registration through ICML. Any additional workshop-specific registration details will be posted here when available.",
        },
        {
          question: "Will there be a poster session?",
          answer:
            "Yes. The planned schedule includes a poster presentation session, and all accepted submissions will be presented as posters.",
        },
        {
          question: "How will contributed talks be selected?",
          answer:
            "Contributed talks will be selected from accepted submissions by the organizers based on relevance, quality, and fit with the workshop program.",
        },
        {
          question: "Will the accepted workshop papers be archival (i.e., published in official proceedings)",
          answer:
            "No, they will be non-archival. You can submit early work and papers under review elsewhere without worrying about violating dual-submission policies. We also welcome recent papers that have already been published in top venues (within the last three years), including your ICML main-conference papers.",
        },
        {
          question: "Will the page limits apply to the whole paper (i.e., including references and appendix)",
          answer:
            "No, the page limits only apply to the main body of the paper.",
        },
      ] satisfies FAQ[],
    },
    footer: {
      contactLabel: "Contact",
    },
  },
} as const;
