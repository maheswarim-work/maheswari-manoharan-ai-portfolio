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
      position: "Software Engineering Manager",
      duration: "June 2025 - Present",
      description: "Leading Implementation Engineering team in Strategic Analytics division, transforming complex data ecosystems into scalable, secure, high-performing services for commercial and specialty insurance (Surety with Moody's integration, Healthcare, Professional Liability - Cyber, Lawyers, PUA, Real Estate). Delivering enterprise-grade APIs, predictive analytics models, and modern data platforms that empower enterprise-wide decision-making. Partnering with MLOps, Data Engineering, Feature Engineering, Data Science, and Data Visualization teams. Overseeing project architecture and leading technical discussions. Executing GitHub Actions-based CI/CD deployments across Python APIs, ModelServe services, Databricks workloads, Azure Data Factory pipelines, and database changes in Snowflake/Azure SQL. Managing distributed engineering team across U.S. and offshore time zones, maintaining operational excellence through PR reviews, CAB approvals, Asana task tracking, and cross-functional delivery coordination."
    },
    {
      company: "Cox Automotive (Manheim)",
      position: "Lead Software Engineer - Shop Operations/Seal/Proton Team",
      duration: "April 2022 - May 2025",
      description: "Led development of services in Python/AWS Serverless Application Model (SAM) deployed using AWS Code Pipeline/GitHub Actions. Developed microservices and APIs leveraging event-driven architecture with Change Data Capture (CDC), utilizing CloudFormation, Event Bridge, Lambda, S3, SNS, SQS, CloudWatch, Route53, DynamoDB, AWS Chatbot, Amazon OpenSearch, Batch, AWS Lambda Power tools. Wrote automation/unit tests using pytest, participated in architectural design discussions, upgraded AWS RDS Oracle and Postgres Databases. Supported Java services connecting to AS400/Postgres and Ruby applications. Used Terraform as IAC, Jenkins for CI/CD, deployed on Elastic Beanstalk/EC2. Maintained Rally, authored stories, ran standups, presented quarterly planning meetings. Participated in developer, QA and SRE interview panels, onboarded new team members. Worked with Cox Auto security group to mitigate security issues using Aqua, Veracode. Supported key deliverables for CarMax, Hertz/Auto Integrate, AMP/RRC, LMS, Capture retirement/Designated Description Service integration."
    },
    {
      company: "Cox Automotive (Manheim)",
      position: "Senior Software Engineer - Vehicle Information/Vipar Team",
      duration: "June 2020 - April 2022",
      description: "Technical lead and backend developer providing accurate vehicle imaging services for Manheim marketplace. Developed microservices using Java, Spring Framework, Spring Boot, SOAP web services & REST APIs with MySQL Aurora, DynamoDB and AS400 databases. Deployed services in AWS using SQS, SNS, EC2, Elastic Beanstalk, CloudWatch, CloudFront, X-Ray, S3, CloudFormation with Job DSL, Terraform, and Jenkins. Wrote unit, automation and performance tests using JUnit, Cucumber, Wire Mock, JMeter. Provided on-call support, worked with offshore team to maintain legacy Tomcat webservices with Enterprise JNDI and migrate them to AWS. Used Rally, SAFe Agile (Kanban), Datadog, New Relic, Splunk, PagerDuty, Aqua, Maven, Artifactory, Docker. Supported Manheim Image Capture (MIC) and Fyusion."
    },
    {
      company: "Cox Automotive (Manheim)",
      position: "Full Stack Developer - Redline Team",
      duration: "January 2020 - June 2020",
      description: "Full stack developer for Seller Dashboard enabling sellers to list vehicles in the Manheim ecosystem. Developed application using Angular (NgRx), Ruby on Rails, Marble. Implemented testing with Jasmine, RSpec unit testing and Capybara automated browser testing. Deployed in AWS through Jenkins CI/CD."
    },
    {
      company: "Cox Automotive (Manheim)",
      position: "Backend Developer - EpICS Team",
      duration: "March 2015 - December 2019",
      description: "Backend developer with enterprise integration team interacting with multiple Manheim systems (OVE, DEBI, Manheim.com, AS400, BEE, Eventer, ODS, Oracle financial). Built and deployed high-performing APIs using AWS Elastic Beanstalk, EC2, CloudFormation, DynamoDB via Jenkins. Developed and maintained webservices in Java, Spring Framework, Spring Boot, SOAP & REST APIs, Tibco SOA deployed on Tomcat, Tibco servers, Oracle, AS400/DB2 databases, JDBC, stored procedures, PCML, FTP, EMS, and JMS queues. Implemented authentication/authorization using LDAP & Mashery, developed services using event-driven architecture. Provided on-call support and maintained 100+ webservices. Key deliverables: MMR (Manheim Market Report)/Valuations API for eMMR relaunch, GFB API (Guaranteed First Bid) for Manheim Express, VIN decoding services (VinExplosion), Ready auto transportation, AS400 to Salesforce bridge, Finalize Arbitrations, AS400 Notes API, Ford Quic, Auction Inventory Registration, Transaction Web Service (TWS), Nissan dashboard, MBonDemand, RMS, Gavel to Gate (G2G)."
    },
    {
      company: "Sterling Backcheck",
      position: "Senior Software Engineer - Client Integrations Team",
      duration: "July 2013 - March 2015",
      description: "Full stack developer providing pre-employment background checks for client integrations. Developed applications using Java, JSP, Spring Framework, SOAP web services. Wrote unit tests using JUnit, screen scraper testing using Selenium, performance tests using JMeter. Worked with DBA on SQL Server database performance tuning. Troubleshot issues in Tomcat webserver, JBoss application server and Apache webserver. Provided on-call rotation, worked with offshore teams, coordinated with product and security teams for PII information security. Supported employment background checks for 80+ clients including Lockheed Martin, Taleo, Tumi, Amazon. Participated in support calls with clients and interacted with company executives for time-sensitive client integrations."
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