interface PersonalData {
  name: string;
  title: string;
  location: string;
  summary: string;
  email: string;
  linkedin: string;
  github: string;
  twitter?: string;
  phone?: string;
  visaStatus?: string;
}

export const portfolioData = {
  personal: {
    name: "Maheswari Manoharan",
    title: "Software Engineering Professional Specializing In Modern Cloud Technologies Powered With Artificial Intelligence",
    location: "Greater Phoenix Area",
    summary: "I am a T-Shaped Software Engineer with hands-on experience in the Analysis, Design, Development, Testing, Deployment, and Support of enterprise applications. Passionate about leveraging innovative technologies, I thrive in collaborative team environments that foster continuous growth and problem-solving. With 12+ years of expertise in cloud technologies, software development, and data platforms, I bring extensive experience in AWS, microservices architecture, and team leadership.",
    email: "maheswarim.work@gmail.com",
    linkedin: "https://www.linkedin.com/in/maheswarimanoharan/",
    github: "https://github.com/maheswarim-work",
    twitter: "https://x.com/MaheswariM2037",
    phone: "(203) 428-7963",
    visaStatus: "Naturalized U.S. citizen (No visa sponsorship required)"
  },
  experience: [
    {
      company: "Arch Capital Services LLC",
      position: "Software Engineering Manager, Strategic Analytics",
      duration: "Jun 2025 - Present",
      description: "Leading Implementation Engineering team transforming complex data ecosystems into scalable, secure services for commercial and specialty insurance (Surety with Moody's integration, Healthcare, Professional Liability - Cyber, Lawyers, PUA, Real Estate). Delivering enterprise-grade APIs, predictive analytics models, and modern data platforms. Managing architecture oversight, end-to-end GitHub Actions CI/CD deployments for Python APIs, ModelServe services, Databricks workloads, Azure Data Factory pipelines, and database changes in Snowflake/Azure SQL. Leading distributed teams across U.S. and offshore, maintaining operational excellence through PR reviews, CAB approvals, Asana tracking, and cross-functional coordination."
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
      company: "Cox Automotive Inc.",
      position: "Senior Software Engineer - EpICS Team",
      duration: "Mar 2015 - Dec 2019",
      description: "Backend developer with Manheim's enterprise integration team. Built and deployed high-performing APIs using AWS Elastic Beanstalk, EC2, CloudFormation, and DynamoDB via Jenkins. Developed webservices using Java, Spring Framework, Spring Boot, SOAP & REST APIs, Tibco SOA deployed on Tomcat, Tibco servers, Oracle, and AS400/DB2 databases. Provided on-call support and maintained 100+ webservices as part of Manheim Common Services. Key deliverables: MMR/Valuations API, GFB API for Manheim Express, VIN decoding services, AS400 to Salesforce bridge, Ford Quic, Transaction Web Service (TWS), and support for multiple Manheim platforms."
    },
    {
      company: "Sterling Backcheck",
      position: "Senior Software Engineer",
      duration: "Jul 2013 - Mar 2015",
      description: "Full stack developer in Client Integrations team onboarding new clients for pre-employment background checks. Developed applications using Java, JSP, Spring Framework, and SOAP web services. Managed integrations for 80+ clients including Lockheed Martin, Taleo, and Amazon. Handled PII security compliance and provided on-call support."
    }
  ],
  education: [
    {
      degree: "Master of Science in Computer Science",
      institution: "Bharathiar University, India",
      year: "",
      description: "Valedictorian - Advanced studies in computer science and software engineering"
    }
  ],
  certifications: [
    {
      name: "Databricks Fundamentals",
      issuer: "Databricks",
      issued: "June 2025",
      expires: "June 2026",
      credentialId: "",
      credentialUrl: ""
    },
    {
      name: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      issued: "May 2021",
      expires: "May 2024",
      credentialId: "d2b25f31-a00a-4277-9fed-f2c9402cf812",
      credentialUrl: "https://www.credly.com/badges/d2b25f31-a00a-4277-9fed-f2c9402cf812"
    },
    {
      name: "HashiCorp Certified: Terraform Associate",
      issuer: "HashiCorp",
      issued: "October 2021",
      expires: "October 2023",
      credentialId: "4289e9d1-09fb-4151-908e-8cd496c9692b",
      credentialUrl: "https://www.credly.com/badges/4289e9d1-09fb-4151-908e-8cd496c9692b"
    }
  ],
  skills: {
    cloud: ["AWS", "Azure", "Terraform", "CloudFormation", "Lambda", "EC2", "S3", "DynamoDB", "RDS", "EventBridge", "SQS", "SNS", "Elastic Beanstalk", "SAM", "CloudFront", "X-Ray", "Route53", "Batch", "App Config"],
    development: ["Python", "Java", "Angular", "NgRx", "Ruby on Rails", "Spring Boot", "Spring Framework", "REST APIs", "SOAP", "Tibco SOA", "JSP"],
    data: ["Databricks", "Snowflake", "MySQL", "PostgreSQL", "Oracle", "SQL Server", "DynamoDB", "Aurora", "AS400/DB2", "CDC", "Azure Data Factory", "Azure SQL"],
    tools: ["Git", "Jenkins", "GitHub Actions", "Docker", "Maven", "pytest", "JUnit", "Selenium", "JMeter", "Cucumber", "Wire Mock", "Jasmine", "RSpec", "Capybara", "CloudWatch", "Datadog", "Splunk", "New Relic", "PagerDuty", "Aqua", "Veracode", "Code Guru", "Rally", "Asana", "Artifactory"],
    methodologies: ["Agile", "SAFe", "Kanban", "DevOps", "Microservices", "Event-Driven Architecture", "API Design", "MLOps", "Feature Engineering", "Data Engineering"]
  }
}