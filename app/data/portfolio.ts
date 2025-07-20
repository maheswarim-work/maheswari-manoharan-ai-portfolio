interface PersonalData {
  name: string;
  title: string;
  location: string;
  summary: string;
  email: string;
  linkedin: string;
  github: string;
  twitter?: string;
}

export const portfolioData = {
  personal: {
    name: "Maheswari Manoharan",
    title: "Software Engineering Manager Specializing In Modern Cloud Technologies Powered With Artificial Intelligence",
    location: "Atlanta Metropolitan Area",
    summary: "As a Software Engineering Manager with a Master's in Computer Science, I bring 12+ years of expertise in cloud technologies, software development, and data platforms, with extensive experience in AWS, microservices architecture, and team leadership.",
    email: "maheswarim.work@gmail.com",
    linkedin: "https://www.linkedin.com/in/maheswarimanoharan/",
    github: "https://github.com/maheswarim-work",
    twitter: "https://x.com/MaheswariM2037",
  },
  experience: [
    {
      company: "Arch Capital Services LLC",
      position: "Software Engineering Manager, Strategic Analytics",
      duration: "Jun 2025 - Present",
      description: "Leading API implementation engineering initiatives in the commercial/specialty insurance space. Managing full lifecycle delivery of real-time and batch APIs, mentoring distributed teams including offshore engineers, and collaborating with engineering managers and product leads for capacity planning and delivery optimization."
    },
    {
      company: "Cox Automotive Inc.",
      position: "Lead Software Engineer / Senior Software Engineer",
      duration: "Apr 2022 - May 2025",
      description: "Led Shop Operations/Seal/Proton Team developing Python/AWS SAM services with event-driven architecture using CDC. Implemented microservices using Lambda, EventBridge, DynamoDB, SQS, SNS, and other AWS services. Managed infrastructure with Terraform, upgraded RDS databases, and supported key integrations for CarMax, Hertz, and other major clients."
    },
    {
      company: "Cox Automotive Inc.",
      position: "Senior Software Engineer - Vehicle Information Team",
      duration: "Jun 2020 - Apr 2022",
      description: "Technical lead developing Java microservices with Spring Boot for vehicle imaging services. Built REST APIs and SOAP services using MySQL Aurora and DynamoDB. Deployed on AWS using Elastic Beanstalk, CloudFormation, and Terraform. Led migration of legacy on-premises services to AWS cloud infrastructure."
    },
    {
      company: "Cox Automotive Inc.",
      position: "Senior Software Engineer - Redline Team",
      duration: "Jan 2020 - Jun 2020",
      description: "Full stack developer for Seller Dashboard using Angular (NgRx) and Ruby on Rails. Implemented features enabling sellers to list vehicles in the Manheim ecosystem. Developed unit tests with Jasmine/RSpec and automated browser testing with Capybara."
    },
    {
      company: "SterlingBackcheck",
      position: "Senior Software Engineer",
      duration: "Jul 2013 - Mar 2015",
      description: "Full stack developer in Client Integrations team onboarding new clients for pre-employment background checks. Developed applications using Java, JSP, Spring Framework, and SOAP web services. Managed integrations for 80+ clients including Lockheed Martin, Taleo, and Amazon. Handled PII security compliance and provided on-call support."
    }
  ],
  education: [
    {
      degree: "Master's in Computer Science",
      institution: "Bharathiar University",
      year: "",
      description: "Advanced studies in computer science and software engineering"
    }
  ],
  certifications: [
    {
      name: "Databricks Fundamentals",
      issuer: "Databricks",
      issued: "June 2025",
      expires: "June 2026",
      credentialId: ""
    },
    {
      name: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      issued: "May 2021",
      expires: "May 2024",
      credentialId: ""
    },
    {
      name: "HashiCorp Certified: Terraform Associate",
      issuer: "HashiCorp",
      issued: "October 2021",
      expires: "October 2023",
      credentialId: ""
    }
  ],
  skills: {
    cloud: ["AWS", "Azure", "Terraform", "CloudFormation", "Lambda", "EC2", "S3", "DynamoDB", "RDS", "EventBridge", "SQS", "SNS", "Elastic Beanstalk", "SAM"],
    development: ["Python", "Java", "Angular", "Spring Boot", "Spring Framework", "REST APIs", "SOAP"],
    data: ["Databricks", "Snowflake", "MySQL", "PostgreSQL", "Oracle", "SQL Server", "DynamoDB", "Aurora", "AS400", "CDC"],
    tools: ["Git", "Jenkins", "GitHub Actions", "Docker", "Maven", "pytest", "JUnit", "Selenium", "JMeter", "Cucumber", "CloudWatch", "Datadog", "Splunk"],
    methodologies: ["Agile", "SAFe", "Kanban", "DevOps", "Microservices", "Event-Driven Architecture", "API Design", "MLOps"]
  }
}