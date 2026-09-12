/**
 * PROJECTS DATA FILE
 * ==========================================
 * To add a new project:
 * 1. Copy the project template object below.
 * 2. Fill in your project details (Title, Category, Tools, Problem, Insights, Images, links).
 * 3. Save this file - your new project will automatically appear on the Projects page & get its own detailed project view!
 * 
 * Supported Categories:
 * - "Data Analytics"
 * - "Business Analytics"
 * - "SQL"
 * - "Power BI"
 * - "Python"
 * - "Machine Learning"
 * - "Business Intelligence"
 */

export const categories = [
    "All",
    "Data Analytics",
    "Business Analytics",
    "SQL",
    "Power BI",
    "Python",
    "Machine Learning",
    "Business Intelligence"
];

// Add your real projects to this array:
export const projects = [
    /* 
    EXAMPLE PROJECT TEMPLATE (Uncomment and fill to add your first real project!):
    {
      id: "customer-churn-analysis",
      title: "Customer Churn & Retention Analytics",
      category: "Data Analytics",
      description: "End-to-end data analysis identifying key churn drivers and customer retention strategies using SQL and Power BI.",
      tools: ["Python", "Pandas", "SQL", "Power BI", "DAX"],
      image: "/images/projects/churn_dashboard.png",
      github: "https://github.com/your-username/customer-churn-analysis",
      demo: "https://app.powerbi.com/view?r=sample-link",
      objective: "Identify top factors contributing to customer attrition and provide data-driven recommendations to improve retention by 15%.",
      businessProblem: "The business experienced an unexpected 12% rise in customer churn over the past two quarters without clear insights into root causes.",
      dataset: "Telco Customer Dataset containing 7,043 customer records with demographics, subscription services, account info, and tenure status.",
      methodology: [
        "Raw Data Ingestion",
        "Data Cleaning & Imputation",
        "Feature Transformation",
        "Exploratory Data Analysis",
        "DAX Measure Formulation",
        "Interactive Dashboarding",
        "Business Insights & Action Plan"
      ],
      dataCleaning: "Handled missing values in total charges, standardized categorical fields, transformed binary flags, and created tenure cohorts for granular analysis.",
      analysis: "Executed RFM (Recency, Frequency, Monetary) segmentation and calculated churn rates across customer tenure, contract types, and payment methods.",
      visualizations: [
        { title: "Executive Overview Dashboard", url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80", caption: "Interactive KPI metrics showing overall churn rate, MRR impact, and contract distribution." },
        { title: "Cohort Analysis Breakdown", url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80", caption: "Monthly retention cohorts pinpointing critical high-risk tenure windows." }
      ],
      insights: [
        "Customers on month-to-month contracts exhibit a 42% churn rate compared to 11% for 1-year contracts.",
        "Electronic check payment users show 3x higher attrition rates than automated bank transfer users.",
        "First-year customers account for 68% of total annual customer churn volume."
      ],
      recommendations: [
        "Incentivize month-to-month contract holders to switch to annual plans with a 10% loyalty discount.",
        "Promote automatic payments (ACH/Credit Card) during onboarding to mitigate payment method friction.",
        "Establish targeted proactive retention offers at the 3-month and 6-month tenure milestones."
      ]
    }
    */
];

// Sample Demo Project provided purely for recruiters testing preview functionality if no real projects added yet.
export const sampleDemoProject = {
    id: "sales-performance-bi-dashboard",
    title: "E-Commerce Sales Performance & Profitability Analysis",
    category: "Business Intelligence",
    description: "End-to-end Power BI & SQL project analyzing product performance, customer segments, and regional profitability across 50,000+ sales transactions.",
    tools: ["SQL", "MySQL", "Power BI", "DAX", "Excel", "Python"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/placeholder/sales-bi-dashboard",
    demo: "https://app.powerbi.com/view?r=placeholder",
    objective: "Uncover high-margin product categories, optimize regional inventory allocation, and construct automated DAX measures for executive reporting.",
    businessProblem: "Revenue growth grew by 8% YoY, but net profitability decreased by 4% due to uncontrolled discount strategies and supply chain overheads.",
    dataset: "Global Retail Superstore Sales Dataset (2021 - 2024) containing 51,000+ order records with customer details, order priorities, discounts, and profit margins.",
    methodology: [
        "Raw Data",
        "Data Cleaning",
        "Data Transformation",
        "Exploratory Data Analysis",
        "Data Analysis",
        "Dashboard",
        "Business Insights"
    ],
    dataCleaning: "Cleaned null transaction IDs, converted dates to ISO format, removed outlier order values, and constructed dimensional Star Schema tables (FactSales, DimCustomer, DimProduct, DimDate).",
    analysis: "Used SQL CTEs and Window Functions to compute month-over-month sales growth, customer lifetime value (CLV), and discount elasticity across product sub-categories.",
    visualizations: [
        { title: "Executive Sales & Profitability Dashboard", url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80", caption: "High-level KPI overview showing Total Sales, Profit Margin %, YoY Growth, and Regional Maps." },
        { title: "Discount & Profit Elasticity Analysis", url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80", caption: "Scatter plot highlighting products with negative margins under >20% discounts." }
    ],
    insights: [
        "Discounts exceeding 20% in the Office Supplies sub-category led to negative net profit margins of -14%.",
        "Technology products generated 45% of total company profit while representing only 28% of order volume.",
        "The Central sales region experienced highest shipping delays (avg 5.8 days) leading to a 12% drop in repeat purchases."
    ],
    recommendations: [
        "Cap promotional discounts at 15% across all office supply sub-categories to eliminate unprofitable sales.",
        "Reallocate regional inventory buffer stocks to central distribution hubs to reduce shipping lead times below 3 days.",
        "Prioritize marketing spend on high-margin Technology products to maximize overall gross margin."
    ]
};

export const getProjects = () => projects;

export const getProjectById = (id) => {
    const project = projects.find(p => p.id === id);
    if (project) return project;
    if (id === sampleDemoProject.id) return sampleDemoProject;
    return null;
};
