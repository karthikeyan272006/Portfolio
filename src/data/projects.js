/**
 * PROJECTS DATA FILE
 * ==========================================
 * To add a new project:
 * 1. Copy any project object below as a template.
 * 2. Fill in your project details.
 * 3. Set the correct "category" — it must match one of the keys in PROJECT_SECTIONS below.
 * 4. Save — your project will auto-appear in its category section on the Projects page!
 *
 * Supported Categories (must match exactly):
 * - "Power BI"
 * - "SQL"
 * - "Python"
 * - "Data Analytics"
 * - "Machine Learning"
 */

// ─── Category Sections (controls display order & labels) ───────────────────
export const PROJECT_SECTIONS = [
  { key: "Power BI", label: "Power BI Dashboards", icon: "BarChart3" },
  { key: "SQL", label: "SQL Projects", icon: "Database" },
  { key: "Python", label: "Python & EDA", icon: "Code" },
  { key: "Data Analytics", label: "Data Analytics", icon: "TrendingUp" },
  { key: "Machine Learning", label: "Machine Learning", icon: "Cpu" },
];

// ─── Your Projects ──────────────────────────────────────────────────────────
export const projects = [
  {
    id: "blinkit-sales-performance",
    title: "BlinkIT Grocery Sales Performance Dashboard",
    category: "Power BI",
    description: "End-to-end Power BI dashboard analyzing BlinkIT's grocery sales data — covering outlet performance, item-type revenue splits, and tier-wise sales trends across locations.",
    tools: ["Power BI", "DAX", "Excel", "Data Modeling"],
    image: "/blinkit%20dashboard/dashboard_snap.png",
    github: "",
    demo: "",
    // Power BI "Publish to Web" embed URL — paste your link here
    powerbiLink: "",
    // GitHub repository link for this project
    codeLink: "",
    objective: "Analyze BlinkIT grocery outlet data to uncover top-selling item categories, high-performing outlet types, and regional sales distribution for strategic decision-making.",
    businessProblem: "BlinkIT needed visibility into which outlet tiers and item categories drive the most revenue, and where performance gaps exist across Tier 1, 2, and 3 locations.",
    dataset: "BlinkIT Grocery Data (Excel) with sales records across multiple outlet tiers, item types, and outlet sizes.",
    methodology: [
      "Data Import & Cleaning",
      "Data Modeling",
      "DAX Measure Creation",
      "KPI Development",
      "Interactive Dashboard Design",
      "Business Insights"
    ],
    dataCleaning: "Cleaned raw Excel data, standardized item type labels, handled blank outlet size fields, and structured the data for efficient Power BI data modeling.",
    analysis: "Built DAX measures for total sales, average sales per outlet, item count, and average ratings. Segmented analysis by outlet tier, outlet size, item fat content, and item type.",
    visualizations: [
      {
        title: "BlinkIT Sales Dashboard",
        url: "/blinkit%20dashboard/dashboard_snap.png",
        caption: "Power BI dashboard showing KPI cards, outlet performance by tier, item type breakdown, and fat content analysis."
      }
    ],
    insights: [
      "Tier 3 outlets contributed the highest total sales volume compared to Tier 1 and Tier 2 outlets.",
      "Fruits & Vegetables and Snack Foods were the top-performing item categories by revenue.",
      "Regular fat content items significantly outsold low-fat items across all outlet tiers."
    ],
    recommendations: [
      "Prioritize inventory stocking for Fruits & Vegetables and Snack Foods in Tier 3 outlets.",
      "Invest in expanding medium-sized outlets in Tier 3 cities given their strong sales performance.",
      "Leverage Power BI bookmarks for executive-level drill-down reporting by outlet location type."
    ]
  },

  /*
  ─── ADD MORE PROJECTS BELOW ────────────────────────────────────────────────
  Copy this template and fill in your details:

  {
      id: "unique-project-id",
      title: "Your Project Title",
      category: "SQL",          // Must match a key in PROJECT_SECTIONS above
      description: "Short description shown on the card.",
      tools: ["SQL", "MySQL", "Excel"],
      image: "/your-folder/screenshot.png",  // Place files in /public/
      github: "https://github.com/your-username/repo",
      demo: "",
      powerbiLink: "",  // Power BI Publish-to-Web URL (for Power BI projects)
      codeLink: "",     // GitHub repo link
      objective: "What was the goal?",
      businessProblem: "What problem did you solve?",
      dataset: "What data did you use?",
      methodology: ["Step 1", "Step 2", "Step 3"],
      dataCleaning: "How did you clean the data?",
      analysis: "What analysis did you perform?",
      visualizations: [
          { title: "Chart Name", url: "/your-folder/chart.png", caption: "Description." }
      ],
      insights: ["Insight 1", "Insight 2"],
      recommendations: ["Recommendation 1", "Recommendation 2"]
  },
  */
];

// ─── Helpers ────────────────────────────────────────────────────────────────
export const getProjects = () => projects;

export const getProjectById = (id) => {
  return projects.find(p => p.id === id) || null;
};

/** Returns projects grouped by section key, preserving PROJECT_SECTIONS order */
export const getProjectsBySection = () => {
  return PROJECT_SECTIONS.map(section => ({
    ...section,
    projects: projects.filter(p => p.category === section.key)
  })).filter(section => section.projects.length > 0);
};
