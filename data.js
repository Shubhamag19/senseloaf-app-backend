const questionSets = [
  {
    setId: 1,
    title: "Process Identification",
    questions: [
      {
        id: 1,
        questionIndex: "1",
        question:
          "How do you currently identify processes that could be automated with AI?",
        options: [
          {
            id: 1,
            option: "More than 90% (Almost everything is manual)",
          },
          {
            id: 2,
            option: "70-90% (Some automation, but mostly manual)",
          },
          {
            id: 3,
            option: "30-70% (A balanced mix of automation and manual work",
          },
          {
            id: 4,
            option: "Less than 30% (Most processes are already automated)",
          },
        ],
        optionsFeedback: [
          {
            id: 1,
            option: "You have selected: More than 90% (Almost everything is manual)",
          },
          {
            id: 2,
            option: "You have selected: 70-90% (Some automation, but mostly manual)",
          },
          {
            id: 3,
            option: "You have selected: 30-70% (A balanced mix of automation and manual work",
          },
          {
            id: 4,
            option: "You have selected: Less than 30% (Most processes are already automated)",
          },
        ],
      },
    ],
  },
  {
    setId: 2,
    title: "Data Availability",
    questions: [
      {
        id: 1,
        questionIndex: "1",
        question: "How is your back-office data currently stored and managed ?",
        options: [
          {
            id: 1,
            option: "Primarily paper-based or ad-hoc digital files.",
          },
          {
            id: 2,
            option:
              "Partially digitized, but not consistently formatted or stored.",
          },
          {
            id: 3,
            option:
              "Largely digitized with some standards, but not fully ready for AI processing.",
          },
          {
            id: 4,
            option:
              "Fully standardized, structured, & accessible through centralized databases/APIs.",
          },
        ],
        optionsFeedback: [
          {
            id: 1,
            option: "You have selected: Primarily paper-based or ad-hoc digital files.",
          },
          {
            id: 2,
            option:
              "You have selected: Partially digitized, but not consistently formatted or stored.",
          },
          {
            id: 3,
            option:
              "You have selected: Largely digitized with some standards, but not fully ready for AI processing.",
          },
          {
            id: 4,
            option:
              "You have selected: Fully standardized, structured, & accessible through centralized databases/APIs.",
          },
        ],
      },
      {
        id: 2,
        questionIndex: "2",
        question:
          "What tools do you currently use for back-office data management and processing? ( Multi-Select )",
        options: [
          {
            id: 1,
            option: "No formal data management tools",
          },
          {
            id: 2,
            option:
              "Traditional databases (e.g., Oracle, MySQL, Microsoft SQL)",
          },
          {
            id: 3,
            option:
              "Enterprise resource planning (ERP/ CRM) systems (e.g., SAP, Oracle ERP)",
          },
          {
            id: 4,
            option:
              "Robotic Process Automation (RPA) tools (e.g., UiPath, Automation Anywhere)",
          },
          {
            id: 5,
            option:
              "Business Intelligence (BI) tools (e.g., Tableau, Power BI)",
          },
          {
            id: 6,
            option: "AI-powered data platforms (e.g., Databricks, Snowflake)",
          },
        ],
        optionsFeedback: [
          {
            id: 1,
            option: "You have selected: No formal data management tools",
          },
          {
            id: 2,
            option:
              "You have selected: Traditional databases (e.g., Oracle, MySQL, Microsoft SQL)",
          },
          {
            id: 3,
            option:
              "You have selected: Enterprise resource planning (ERP/ CRM) systems (e.g., SAP, Oracle ERP)",
          },
          {
            id: 4,
            option:
              "You have selected: Robotic Process Automation (RPA) tools (e.g., UiPath, Automation Anywhere)",
          },
          {
            id: 5,
            option:
              "You have selected: Business Intelligence (BI) tools (e.g., Tableau, Power BI)",
          },
          {
            id: 6,
            option: "You have selected: AI-powered data platforms (e.g., Databricks, Snowflake)",
          },
        ],
      },
    ],
  },
  {
    setId: 3,
    title: "Technology Readiness",
    questions: [
      {
        id: 1,
        questionIndex: "1",
        question:
          "Which best describes your current software environment for automation?",
        options: [
          {
            id: 1,
            option: "No automation - All tasks are performed manually",
          },
          {
            id: 2,
            option:
              "Basic automation - Using macros, spreadsheets, or simple scripts",
          },
          {
            id: 3,
            option:
              "Intermediate automation - Some tasks are automated using RPA (Robotic Process Automation)",
          },
          {
            id: 4,
            option:
              "Advanced automation - AI-powered automation (machine learning, NLP) is being used",
          },
        ],
        optionsFeedback: [
          {
            id: 1,
            option: "You have selected: No automation - All tasks are performed manually",
          },
          {
            id: 2,
            option:
              "You have selected: Basic automation - Using macros, spreadsheets, or simple scripts",
          },
          {
            id: 3,
            option:
              "You have selected: Intermediate automation - Some tasks are automated using RPA (Robotic Process Automation)",
          },
          {
            id: 4,
            option:
              "You have selected: Advanced automation - AI-powered automation (machine learning, NLP) is being used",
          },
        ],
      },
    ],
  },
  {
    setId: 4,
    title: "Talent & Culture",
    questions: [
      {
        id: 1,
        questionIndex: "1",
        question:
          "What is your approach to re-skilling or up-skilling employees impacted by automation?",
        options: [
          {
            id: 1,
            option: "No formal re-skilling programs in place",
          },
          {
            id: 2,
            option:
              "Limited training opportunities, mostly self-directed learning",
          },
          {
            id: 3,
            option:
              "Structured training programs, including online courses and workshops",
          },
          {
            id: 4,
            option:
              "Comprehensive career transition plans with personalized AI upskilling tracks",
          },
        ],
        optionsFeedback: [
          {
            id: 1,
            option: "You have selected: No formal re-skilling programs in place",
          },
          {
            id: 2,
            option:
              "You have selected: Limited training opportunities, mostly self-directed learning",
          },
          {
            id: 3,
            option:
              "You have selected: Structured training programs, including online courses and workshops",
          },
          {
            id: 4,
            option:
              "You have selected: Comprehensive career transition plans with personalized AI upskilling tracks",
          },
        ],
      },
    ],
  },
  {
    setId: 5,
    title: "Regulatory Compliance",
    questions: [
      {
        id: 1,
        questionIndex: "1",
        question:
          "How do you ensure compliance with relevant regulations (e.g., financial reporting, data privacy) in automated processes?",
        options: [
          {
            id: 1,
            option: "We have no compliance checks in place for automation.",
          },
          {
            id: 2,
            option: "We rely on manual audits after processes run.",
          },
          {
            id: 3,
            option:
              "We have partial automation with built-in compliance checks.",
          },
          {
            id: 4,
            option:
              "We have fully automated compliance monitoring with real-time alerts",
          },
        ],
        optionsFeedback: [
          {
            id: 1,
            option: "You have selected: We have no compliance checks in place for automation.",
          },
          {
            id: 2,
            option: "You have selected: We rely on manual audits after processes run.",
          },
          {
            id: 3,
            option:
              "You have selected: We have partial automation with built-in compliance checks.",
          },
          {
            id: 4,
            option:
              "You have selected: We have fully automated compliance monitoring with real-time alerts",
          },
        ],
      },
    ],
  },
];

module.exports = questionSets;
