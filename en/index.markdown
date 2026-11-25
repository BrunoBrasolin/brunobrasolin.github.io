# Bruno Brasolin Carravieri
**Senior Software Engineer \| Full-Stack \| Software Architecture \| AI-Assisted Software Engineering**

- **E-mail:** [brunobrasolinc@gmail.com](mailto:brunobrasolinc@gmail.com)
- **LinkedIn:** [linkedin.com/in/bruno-brasolin](https://www.linkedin.com/in/bruno-brasolin/)
- **GitHub:** [github.com/BrunoBrasolin](https://github.com/BrunoBrasolin)
- **Website:** [brunobrasolin.github.io/en](https://brunobrasolin.github.io/en/) \| [Versão em português](https://brunobrasolin.github.io/)

## Summary
- 6+ years of software development experience: scheduling and sales/financial management platforms, corporate portals, and systems for port and customs operations
- **Full-Stack:** Java, .NET, Python, React, Angular, TypeScript, Next.js, Laravel
- **Architecture and technical leadership:** solution design, business rule definition with key users, and leadership of teams of 2 to 4 analysts
- **Integrations:** Open Finance, payment/billing providers, electronic invoice (nota fiscal) providers, Recintos API (Brazil's Siscomex Single Window), legacy .NET MVC systems, RabbitMQ
- **Applied AI:** Claude Code, LLMs, RAG, LangChain, LlamaIndex, and standardized skills, workflows, and subagents for AI-assisted development
- **Data, cloud, and DevOps:** PostgreSQL, Oracle Database, SQL Server, Elasticsearch, Qdrant, Azure, Azure DevOps, Docker, Oracle Cloud Infrastructure, CI/CD with GitOps
- Microsoft AZ-400 certification and MBA in Software Engineering from FIAP

## Experience

### Megazap Business
- Senior Software Engineer \| 08/2025 - Present

#### Projects
- **Scheduling Platform**
  - Scalable scheduling system built for businesses of different types and sizes: from small shops, such as barbershops, to large clinics with multiple units and addresses
  - Responsible for developing and implementing the system
  - Implemented automatic scheduling and automatic appointment approval
  - Built access and permission management
  - Structured support for multi-unit, multi-address operations, adaptable to different operational needs and usage scales
  - **Technologies:** Java, React, PostgreSQL
  - **Tools:** IntelliJ IDEA, Visual Studio Code
  - **Impact:** [QUANTIDADE AQUI] businesses served \| [QUANTIDADE AQUI] units and addresses \| [QUANTIDADE AQUI] registered professionals \| [QUANTIDADE AQUI] appointments per month \| [QUANTIDADE AQUI] users with access
- **Sales and Financial Platform**
  - System for integrated management of sales and financial processes, with a sales module and integrations with Open Finance, payment/billing providers, and electronic invoice providers
  - Plug-and-play integration architecture that supports different service providers for each type of integration
  - Defined business rules and the expected flows and behavior of the solution
  - Produced technical designs and architecture definitions for the solution
  - Guided development by balancing the product's technical and business needs
  - Used Claude Code to support implementation, directed by the business rules, flows, and technical definitions I established
  - **Technologies:** Java, React, PostgreSQL
  - **Tools:** Claude Code, IntelliJ IDEA, Visual Studio Code
  - **Impact:** [QUANTIDADE AQUI] client companies \| [QUANTIDADE AQUI] sales recorded \| [QUANTIDADE AQUI] billing charges issued \| [QUANTIDADE AQUI] electronic invoices issued \| [QUANTIDADE AQUI] providers integrated
- **LLM Engineering for Software Development**
  - Structured and standardized the use of LLMs across Megazap's projects, aligning AI-assisted development with each project's business rules, technical decisions, and needs
  - Defined how LLMs should be used in the projects and organized the responsibilities of each agent and model
  - Created and organized skills (reusable instructions for agents), development workflows, and subagents with specific responsibilities
  - Established a reusable approach to support software development with AI
  - Built a generic API bootstrap template that generates the base structure of a new project with a single Bash command
  - **Tools:** LLMs, Claude Code, Bash
  - **Agent work structures:** skills, workflows, subagents
  - **Stack of the supported projects:** Java, React, PostgreSQL
  - **Impact:** [QUANTIDADE AQUI] projects using the standard \| [QUANTIDADE AQUI] APIs created from the template \| [QUANTIDADE AQUI] people using the workflows \| time to set up a new API reduced from [QUANTIDADE AQUI] to [QUANTIDADE AQUI]

### Brasil Terminal Portuário
- Senior Systems Analyst _(Senior Software Engineer)_ \| 04/2025 - 08/2025
- Mid-Level Systems Analyst _(Mid-Level Software Engineer)_ \| 01/2024 - 03/2025

#### Projects
- **Corporate Design System**
  - _03/2025 - 04/2025_
  - Component library to standardize the UI across the company's multiple Angular projects
  - Created the design system as a Node package, installable via `npm install`, hosted and versioned on Azure Artifacts
  - Developed reusable, pre-styled components (buttons, tables, menus, modals, and more), focused on visual consistency and productivity
  - Defined design and front-end architecture standards for the company's Angular ecosystem, simplifying maintenance
  - Published Storybook documentation with examples and use cases for each component to ease adoption in new projects
  - **Technologies:** Angular, TypeScript, SCSS, Node.js, Azure Artifacts, Storybook
  - **Impact:** [QUANTIDADE AQUI] consuming applications \| [QUANTIDADE AQUI] components available \| [QUANTIDADE AQUI] developers using the package
- **New Corporate Website**
  - _11/2024 - 04/2025_
  - The company's new corporate website, built in partnership with external vendors
  - Coordinated the vendors involved in the project
  - Followed the content strategy with the marketing and communications teams
  - Prepared and configured the cloud environment on Azure
  - Implemented user behavior monitoring and analytics with Microsoft Clarity
  - Led reviews during the testing phase and provided post-go-live support to ensure delivery stability and quality
  - **Technologies:** Next.js (SSR), Azure, Microsoft Clarity
  - **Impact:** [QUANTIDADE AQUI] vendors coordinated \| [QUANTIDADE AQUI] pages published \| [QUANTIDADE AQUI] monthly visitors
- **Single Portal - Customer Portal**
  - _06/2024 - 12/2024_
  - Customer portal that integrates a legacy .NET MVC system into a new Angular front end, with a unified experience across systems
  - Integrated the legacy system into the Angular front end using an embedded strategy
  - Standardized and unified the layout across systems and implemented usability improvements
  - Led more than 10 workshops with customers to gather requirements and validate solutions
  - Ran load and stress tests to ensure application performance and stability
  - **Technologies:** .NET MVC, Angular, JavaScript, JMeter
  - **Impact:** 10+ customer workshops \| [QUANTIDADE AQUI] customers with portal access \| [QUANTIDADE AQUI] active users \| [QUANTIDADE AQUI] monthly visits
- **SAP Assistant**
  - _xx/2024 - xx/2024_
  - Chatbot that converts natural language questions into SQL and runs SAP queries from mobile devices
  - NLP/IR architecture in Python with FastAPI, LangChain, and LlamaIndex
  - RAG (Retrieval-Augmented Generation) to combine semantic search with accurate response generation
  - Integrated Microsoft-provided GPT models (ChatGPT) to create, refine, and validate queries
  - Knowledge base built from procedure documentation in Confluence, with semantic search via Qdrant, to answer user questions
  - Conversation history persisted in Elasticsearch for auditing and continuous context
  - Angular and TypeScript front end with assistant, history, feedback, and result visualization
  - User discovery: observed real workflows during site visits, ran interviews, usability tests, and log analysis to prioritize intents and UX/AI improvements
  - CI/CD via GitOps, with APIs exposed through Microsoft APIM
  - **Technologies:** Python, FastAPI, LangChain, LlamaIndex, RAG, ChatGPT (Microsoft), Elasticsearch, Qdrant, Angular, TypeScript, Confluence, Microsoft APIM, GitOps
  - **Impact:** [QUANTIDADE AQUI] users \| [QUANTIDADE AQUI] queries run \| [QUANTIDADE AQUI] documents indexed \| [QUANTIDADE AQUI] departments served

### T2S Tecnologia
- Mid-Level Systems Analyst _(Mid-Level Software Engineer)_ \| 07/2022 - 01/2024
- Junior Systems Analyst _(Junior Software Engineer)_ \| 12/2021 - 06/2022
- Trainee Systems Analyst _(Software Engineer Trainee)_ \| 08/2021 - 11/2021

#### Projects
- **BTP \| Specialized Technical Consulting**
  - _09/2022 - 01/2024_
  - Technical consulting for Brasil Terminal Portuário (BTP), from scope analysis to project development
  - Analyzed project scope to identify technical and functional requirements
  - Defined business rules with key users
  - Designed the project architecture
  - Developed the projects with .NET and Angular
  - Led a team of 2 to 4 analysts
  - **Technologies:** .NET, Angular, Azure DevOps, Docker, Elastic Stack, IIS, Oracle Database, RabbitMQ, Visual Studio
  - **Impact:** [QUANTIDADE AQUI] projects delivered \| [QUANTIDADE AQUI] key users involved \| [QUANTIDADE AQUI] departments served
- **BTP \| Systems Support**
  - _07/2022 - 09/2022_
  - Maintenance and support of BTP's systems
  - Handled support tickets, focusing on permanent incident resolution rather than temporary workarounds
  - **Technologies:** .NET, Angular, Azure DevOps, Docker, Elastic Stack, IIS, Oracle Database, RabbitMQ, Visual Studio
  - **Impact:** [QUANTIDADE AQUI] tickets resolved \| [QUANTIDADE AQUI] systems supported \| [QUANTIDADE AQUI] users supported
- **Santos Brasil \| Bonded Warehouse**
  - _04/2022 - 07/2022_
  - System for Santos Brasil's bonded warehouse operations
  - Led a team of 3 to 4 analysts in developing the system
  - Aligned system rules with the key user
  - **Technologies:** .NET, Oracle Database, SQL Server, Visual Studio
  - **Impact:** [QUANTIDADE AQUI] users \| [QUANTIDADE AQUI] warehouse processes covered \| [QUANTIDADE AQUI] features delivered
- **Santos Brasil \| Recintos Module Integration**
  - _10/2021 - 06/2022_
  - Integration of Santos Brasil's systems with the [Recintos API](https://api-docs.portalunico.siscomex.gov.br/swagger/rcnt.html) (customs facilities) of Brazil's Siscomex Single Window (Portal Único)
  - **Technologies:** .NET, Oracle Database, SQL Server, Visual Studio
  - **Impact:** [QUANTIDADE AQUI] endpoints integrated \| [QUANTIDADE AQUI] messages sent \| [QUANTIDADE AQUI] operations processed
- **Santos Brasil \| Systems Support**
  - _02/2022 - 03/2022_
  - First-level (L1) support for Santos Brasil's systems
  - **Technologies:** Oracle Database
  - **Impact:** [QUANTIDADE AQUI] tickets resolved \| [QUANTIDADE AQUI] users supported \| [QUANTIDADE AQUI] systems supported

### KBRTec
- Front-End Developer Intern \| 04/2021 - 08/2021
  - Maintained WordPress websites
  - **Technologies:** WordPress
  - **Impact:** [QUANTIDADE AQUI] websites maintained \| [QUANTIDADE AQUI] requests delivered

### Ótima Ideia
- Full-Stack Developer \| 07/2020 - 03/2021
  - Developed WordPress websites
  - Developed web systems with Laravel
  - Mentored interns
  - **Technologies:** WordPress, Laravel
  - **Impact:** [QUANTIDADE AQUI] websites delivered \| [QUANTIDADE AQUI] systems developed \| [QUANTIDADE AQUI] interns mentored
- Front-End Developer Intern \| 04/2020 - 06/2020
  - Developed WordPress websites
  - **Technologies:** WordPress
  - **Impact:** [QUANTIDADE AQUI] websites developed

### Personal Projects
- **Gamidas**
  - Self-managed environment for developing and hosting personal projects
  - Intentionally over-engineered architecture used to practice messaging, micro-frontends, containers, and code quality
  - Hosted on Oracle Cloud Infrastructure with nginx, Docker, and a custom domain
  - LLM experiments using Python, Flask, LangChain, and LangSmith
  - **Technologies:** .NET, Angular, Module Federation, Python, Flask, LangChain, LangSmith, RabbitMQ, Docker, Docker Hub, nginx, Oracle Cloud Infrastructure, GitHub, SonarCloud, registro.br
  - **Impact:** [QUANTIDADE AQUI] projects published \| [QUANTIDADE AQUI] services running \| [QUANTIDADE AQUI] users

## Education

### FIAP
- _09/2024 - 09/2025_
- MBA in Software Engineering
- Top 10 out of 120+ startups in Startup One, with the startup Find Motors

### Fatec Praia Grande
- _01/2019 - 12/2021_
- Technologist Degree (Tecnólogo) in Systems Analysis and Development, a 3-year undergraduate program

## Certifications
- [AZ-400: Designing and Implementing Microsoft DevOps Solutions](https://learn.microsoft.com/en-us/credentials/certifications/exams/az-400/) \| 09/2023

## Presentations
### Startup One: Find Motors
- _02/2026_
- Final pitch of the startup Find Motors at Startup One (FIAP)
- [Link](https://drive.google.com/file/d/1L9Ff_cw_5Oc84KnsF0tDRzK9r39VE_8Y/view?usp=drive_link)

### Customs Regime Change: The Role of Technology in the Process
- _10/2023_
- Presentation for the International Trade program at Fatec Praia Grande
- Explained the customs regime change process, highlighting where T2S, through information technology, played a decisive role in improving the client's operations

## Languages
- Portuguese: native
- English: [NÍVEL AQUI]
