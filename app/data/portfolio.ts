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

interface ExperienceData {
  company: string;
  position: string;
  duration: string;
  highlights: string[];
}

interface EducationData {
  degree: string;
  institution: string;
  year: string;
  description: string;
}

export const portfolioData = {
  personal: {
    name: "Maheswari Manoharan",
    title: "Software Engineering Professional Specializing In Modern Cloud Technologies Powered With Artificial Intelligence",
    location: "Atlanta Metropolitan Area",
    summary: "I am a T-Shaped Software Engineer with hands-on experience in the Analysis, Design, Development, Testing, Deployment, and Support of enterprise applications. Passionate about leveraging innovative technologies.",
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
      highlights: [
        "Leading Implementation Engineering team in Strategic Analytics division, transforming complex data ecosystems into scalable, secure, high-performing services for commercial and specialty insurance (Surety with Moody's integration, Healthcare, Professional Liability - Cyber, Lawyers, PUA, Real Estate)",
        "Delivering enterprise-grade APIs, predictive analytics models, and modern data platforms that empower enterprise-wide decision-making",
        "Partnering with MLOps, Data Engineering, Feature Engineering, Data Science, and Data Visualization teams to align technical excellence with business outcomes",
        "Overseeing project architecture and leading technical discussions to ensure alignment with business goals",
        "Executing GitHub Actions-based CI/CD deployments across Python APIs, ModelServe services, Databricks workloads, Azure Data Factory pipelines, and database changes in Snowflake/Azure SQL",
        "Managing distributed engineering team across U.S. and offshore time zones, driving consistency through daily standups, code reviews, and structured project ceremonies",
        "Maintaining operational excellence through PR reviews, CAB approvals, Asana task tracking, and cross-functional delivery coordination"
      ]
    },
    {
      company: "Cox Automotive (Manheim)",
      position: "Lead/Senior Software Engineer - Shop Operations/Seal/Proton Team",
      duration: "April 2022 - May 2025",
      highlights: [
        "Developed services in Python/AWS Serverless Application Model (SAM), deployed in AWS using AWS Code Pipeline/GitHub Actions with various AWS services like CloudFormation, Event Bridge, Lambda, S3, SNS, SQS, CloudWatch, Route53, DynamoDB, AWS Chatbot, Amazon OpenSearch, Batch, AWS Lambda Power tools",
        "Developed microservices and APIs leveraging event-driven architecture with Change Data Capture (CDC), enabling seamless event and message propagation across the Manheim ecosystem",
        "Wrote automation/unit tests using pytest and supported functional, regression and end-to-end testing for key deliverables",
        "Participated in architectural design discussions, worked on Lucid chart architecture diagrams, provided on-call support on team rotations and reviewed GitHub pull requests",
        "Upgraded AWS RDS (Relational Database Service) Oracle and Postgres Databases",
        "Supported Java services connecting to AS400/Postgres database and Ruby applications; Used Terraform as Infrastructure as code (IAC), Jenkins for CI/CD, deployed in AWS on Elastic Beanstalk/EC2 instances",
        "Maintained Rally, authored stories, ran standups, presented quarterly planning meetings, took client calls",
        "Participated in developer, QA and SRE interview panels to hire new team members, onboarded several team members, maintained knowledge sharing documents, cross-trained the team on new and legacy services",
        "Worked closely with Cox Auto security group to mitigate security issues using tools like Aqua, Veracode and helped implement automated change requests, universal notifier, security orchestrator",
        "Worked on key deliverables to support CarMax, Hertz/Auto Integrate, AMP/RRC, LMS, Capture retirement/Designated Description Service integration"
      ]
    },
    {
      company: "Cox Automotive (Manheim)",
      position: "Senior Software Engineer - Vehicle Information/Vipar Team",
      duration: "June 2020 - April 2022",
      highlights: [
        "Worked as technical lead on rotation and backend developer providing accurate and quality vehicle imaging services for all vehicles sold in the Manheim marketplace",
        "Developed microservices using Java, Spring Framework, Spring Boot, SOAP web services & REST APIs that used MySQL Aurora, DynamoDB and AS400 databases",
        "Deployed services in AWS that used SQS, SNS, EC2, Elastic Beanstalk, CloudWatch, CloudFront, X-Ray, S3, CloudFormation using Job DSL, Terraform as IAC, and Jenkins for CI/CD",
        "Wrote unit, automation and performance tests using JUnit, Cucumber, Wire Mock, JMeter",
        "Supported on-call rotations, worked closely with offshore team to maintain several on-premises legacy Tomcat webservices that use Enterprise JNDI and provided technical guidance to migrate them to AWS",
        "Used other tools/technologies like Rally, SAFe Agile (Kanban), Datadog, New Relic, Splunk, PagerDuty, Aqua, Git, Maven, Artifactory, Docker",
        "Worked on key deliverables to support Manheim Image Capture (MIC) and Fyusion"
      ]
    },
    {
      company: "Cox Automotive (Manheim)",
      position: "Full Stack Developer - Redline Team",
      duration: "January 2020 - June 2020",
      highlights: [
        "Worked as full stack developer with Seller Dashboard which enables sellers to list their vehicles in the Manheim ecosystem",
        "Developed application using Angular (NgRx), Ruby on Rails, Marble",
        "Implemented Jasmine, RSpec unit testing and Capybara automated browser testing",
        "Deployed in AWS through Jenkins CI/CD"
      ]
    },
    {
      company: "Cox Automotive (Manheim)",
      position: "Backend Developer - EpICS Team",
      duration: "March 2015 - December 2019",
      highlights: [
        "Worked as backend developer with enterprise integration team that interacted with several Manheim teams like OVE, DEBI, Manheim.com, AS400, BEE, Eventer, ODS, Oracle financial",
        "Built and deployed several high performing APIs using AWS Elastic Beanstalk, EC2, CloudFormation, DynamoDB using Jenkins",
        "Developed and maintained several webservices in Java, Spring Framework, Spring Boot, SOAP & REST APIs, Tibco SOA (Service Oriented Architecture) that is deployed on on-premises Tomcat, Tibco servers, Oracle, AS400/DB2 databases, JDBC, stored procedure, PCML, FTP, EMS, and JMS queues",
        "Implemented authentication, authorization using Manheim's LDAP & Mashery, developed services using event driven architecture with Manheim API Cookbook standards",
        "Provided on-call support to both internal and external clients and maintained 100+ webservices that were part of Manheim's Common Services",
        "Worked on key deliverables to support MMR (Manheim Market Report)/Valuations API for eMMR relaunch, GFB API (Guaranteed First Bid) for Manheim Express(Manex), VIN decoding services like VinExplosion, legacy Ready auto transportation, AS400 to Salesforce bridge, Finalize Arbitrations, AS400 Notes API, Ford Quic, Auction Inventory Registration, Transaction Web Service (TWS), Nissan dashboard, support MBonDemand, RMS, Gavel to Gate (G2G) and several others"
      ]
    },
    {
      company: "Sterling Backcheck",
      position: "Senior Software Engineer - Client Integrations Team",
      duration: "July 2013 - March 2015",
      highlights: [
        "Worked as full stack developer with Client Integrations team to on-board new clients and provide support for existing clients providing pre-employment background checks",
        "Developed applications using Java, JSP, Spring Framework, SOAP web services",
        "Wrote unit tests using JUnit, screen scraper testing using Selenium and performance test using JMeter",
        "Worked with database administrator and wrote SQL code for performance tuning SQL Server database issues",
        "Very hands on with troubleshooting issues in Tomcat webserver, JBoss application server and Apache webserver",
        "Provided on-call rotation, worked with offshore teams, coordinated with product and other engineering teams in the company and security teams to mitigate risks with PII information",
        "Worked on key deliverables to support employment background checks for Lockheed Martin, Taleo, Tumi, Amazon and several (80+) other clients",
        "Took part in several support calls with various clients and directly interacted with higher executives of the company to support client integrations as background check is a very time sensitive business in the hiring process"
      ]
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
      name: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services",
      issued: "December 2025",
      expires: "December 2028",
      credentialId: "b672254c-de4b-4da9-89c3-daf75c2ffe2f",
      credentialUrl: "https://www.credly.com/badges/b672254c-de4b-4da9-89c3-daf75c2ffe2f"
    },
    {
      name: "Databricks Fundamentals",
      issuer: "Databricks",
      issued: "June 2025",
      expires: "June 2026",
      credentialId: "4abc3d1b-e1cc-4afd-a138-afd6d76374f9",
      credentialUrl: "https://credentials.databricks.com/4abc3d1b-e1cc-4afd-a138-afd6d76374f9#acc.XzxFho6d"
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
      name: "HashiCorp Certified: Terraform Associate (002)",
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