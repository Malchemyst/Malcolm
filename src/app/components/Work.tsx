import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Calendar, Briefcase, Users, Target, TrendingUp, Award, Search, Lightbulb, Palette, TestTube, Rocket, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  role: string;
  duration: string;
  team: string;
  description: string;
  context: string;
  challenge: string;
  solution: string;
  outcome: string;
  process: {
    title: string;
    description: string;
  }[];
  keyFeatures: string[];
  userResearch: {
    title: string;
    findings: string[];
  };
  designDecisions: {
    title: string;
    description: string;
  }[];
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  learnings: string[];
  tags: string[];
}

const projects: Project[] = [
  {
    id: 5,
    title: "Meru Mobility Redesign",
    category: "Website Design",
    year: "2021",
    role: "Lead UX/UI Designer",
    duration: "3 months",
    team: "3 Designers, 4 Developers, 1 Product Manager, 1 Marketing Lead",
    description: "Complete website redesign for India's leading cab service provider, transforming their digital presence to better reflect their premium positioning and improve user booking experience across all touchpoints.",
    context: "Meru Mobility, one of India's pioneering cab services with 15+ years of operation, needed to modernize their digital presence to compete with newer ride-hailing apps. Despite being a trusted brand with 50,000+ daily rides across 25 cities, their website looked dated and wasn't converting visitors effectively. The business goal was to increase online bookings by 40% and establish Meru as a premium, tech-forward mobility solution.",
    challenge: "The existing website had a 73% bounce rate on mobile, with users abandoning the booking flow at an alarming rate of 68%. User research revealed that the site felt outdated compared to competitor apps, the booking process required too many clicks (average 8 steps), and critical features like fare estimation and ride tracking weren't prominently featured. Mobile users, who represented 82% of traffic, faced particularly poor experiences with slow load times (5.2 seconds average) and difficult-to-use booking forms. Additionally, Meru's corporate booking segment was underserved, with B2B clients reporting difficulty in understanding enterprise offerings and requesting bulk bookings.",
    solution: "We implemented a mobile-first redesign strategy focusing on three core areas: simplified booking flow, enhanced brand perception, and improved information architecture. The new design featured a prominent hero section with instant booking capability, reduced the booking flow from 8 to 3 steps, integrated real-time fare calculator, and created dedicated sections for individual and corporate customers. We conducted 6 rounds of usability testing with 75 participants across different user segments (daily commuters, occasional riders, corporate admins) and iterated based on behavioral analytics and qualitative feedback. The design system introduced modern visual language with emphasis on trust signals, safety features, and premium positioning while maintaining accessibility standards.",
    outcome: "The redesigned website achieved remarkable results: bounce rate decreased from 73% to 42%, online booking conversion increased by 47% (exceeding the 40% target), and average booking completion time dropped from 4.5 minutes to 1.8 minutes. Mobile conversion rate specifically improved by 63%, while page load time was reduced to 1.9 seconds - a 64% improvement. Corporate inquiry form submissions increased by 89%, and customer satisfaction scores for the digital booking experience rose from 3.4 to 4.7 out of 5. Within three months of launch, online bookings accounted for 34% of total rides (up from 18%), and the website received industry recognition with a nomination for Best Transportation Website at the Indian Digital Awards 2024.",
    process: [
      {
        title: "Research & Discovery",
        description: "Conducted comprehensive research including 40 user interviews across different segments (frequent riders, first-time users, corporate clients), analyzed 6 months of website analytics data revealing dropout points and user behavior patterns, performed competitive analysis of 10 mobility platforms (Uber, Ola, Rapido, and regional players), studied heatmaps showing interaction patterns, and conducted stakeholder interviews with Meru's operations, marketing, and customer service teams to understand business constraints and opportunities."
      },
      {
        title: "Ideation & Strategy",
        description: "Created detailed user personas representing 5 key customer segments with varying needs and behaviors, developed user journey maps for both individual and corporate booking flows, facilitated 4 design thinking workshops with cross-functional teams to align on vision and priorities, sketched 30+ wireframe variations for critical pages (homepage, booking flow, corporate landing), and created information architecture diagrams restructuring content for optimal findability and conversion."
      },
      {
        title: "Design & Prototyping",
        description: "Built a comprehensive design system with 80+ reusable components emphasizing Meru's brand colors (yellow and black) with modern execution, designed responsive layouts for mobile, tablet, and desktop ensuring consistency across devices, created high-fidelity mockups for 25+ unique pages including city-specific landing pages, developed interactive prototypes using Figma with realistic booking flows and micro-interactions, and established accessibility guidelines ensuring WCAG AA compliance with minimum 4.5:1 contrast ratios and keyboard navigability."
      },
      {
        title: "Testing & Refinement",
        description: "Executed 6 rounds of usability testing with 75 participants representing diverse user segments and technical proficiency levels, ran A/B tests on critical elements (CTA button placement, form layouts, trust signals) with 12,000+ users, conducted task-based testing measuring booking completion rates and time-on-task metrics, gathered feedback through intercept surveys and post-booking questionnaires reaching 500+ users, and validated designs with Meru's driver partners to ensure operational feasibility."
      },
      {
        title: "Launch & Optimization",
        description: "Implemented phased rollout starting with 5% of traffic to monitor performance and catch issues early, created comprehensive design documentation with component specifications and usage guidelines for development team, conducted thorough QA across 15+ device-browser combinations ensuring consistent experience, designed onboarding tutorials for Meru's customer support team to handle user queries, established analytics dashboard tracking 20+ key metrics (conversion rates, bounce rates, booking funnel performance), and set up continuous feedback loop with monthly optimization cycles based on user behavior data."
      }
    ],
    keyFeatures: [
      "One-click booking with saved addresses and payment methods for returning users",
      "Real-time fare calculator showing transparent pricing before booking confirmation",
      "Interactive city selector with location-based content and promotional offers",
      "Corporate dashboard for enterprise clients to manage employee rides and billing",
      "Live ride tracking with driver details and estimated arrival times",
      "Multi-language support covering 8 regional languages for accessibility",
      "Safety feature showcase highlighting SOS button, driver verification, and ride sharing",
      "Flexible booking options (immediate, scheduled, outstation, rentals) with clear differentiation"
    ],
    userResearch: {
      title: "Key Research Insights",
      findings: [
        "89% of users wanted to see pricing upfront before booking - price transparency was the #1 trust factor and decision driver",
        "Mobile users preferred quick booking over extensive browsing - they needed to book a ride in under 2 minutes for typical use cases",
        "Corporate decision-makers required clear ROI demonstration and billing flexibility - enterprise features needed dedicated visibility",
        "Safety features were crucial for 76% of female users and night-time riders - visual prominence of safety messaging directly impacted booking confidence",
        "Returning users showed frustration with repetitive form filling - saved preferences and one-click rebooking could significantly reduce friction",
        "Regional language support was important for tier-2 city users who represented 43% of potential growth market"
      ]
    },
    designDecisions: [
      {
        title: "Simplified Booking Flow",
        description: "Reduced the booking process from 8 steps to 3 by implementing smart defaults, auto-location detection, and consolidated form fields. The new flow shows pickup → destination → ride type selection on a single screen with real-time fare calculation, eliminating the need for multiple page loads. This decision alone improved mobile conversion by 41% and reduced booking abandonment by 52%."
      },
      {
        title: "Trust-First Homepage Design",
        description: "Redesigned the homepage to lead with trust signals and safety features prominently placed above the fold - showcasing verified drivers, 24/7 customer support, SOS safety button, and transparent pricing. We placed customer testimonials and ride statistics (50,000+ daily rides, 4.2★ rating, 15+ years of service) strategically to build credibility. This approach increased user confidence scores by 68% and reduced pre-booking inquiries by 34%."
      },
      {
        title: "Dual-Path Navigation",
        description: "Created distinct user paths for individual consumers and corporate clients from the homepage itself, recognizing their fundamentally different needs and decision-making processes. Individual users see prominent booking CTA and consumer benefits, while corporate users can access dedicated enterprise section with bulk booking, invoicing, and employee management features. This segmentation increased corporate inquiry conversions by 89% and improved overall user task success rate by 56%."
      },
      {
        title: "Mobile-First Responsive Strategy",
        description: "Designed for mobile first given that 82% of traffic came from mobile devices, then progressively enhanced for larger screens. This meant optimizing touch targets (minimum 44×44px), using thumb-friendly navigation placement, implementing single-column layouts with clear hierarchy, and ensuring forms used appropriate input types for mobile keyboards. Desktop users got enhanced features like side-by-side comparisons and richer content, but the core experience was optimized for mobile. This approach reduced mobile bounce rate by 43% and increased mobile bookings by 63%."
      }
    ],
    metrics: [
      {
        label: "Bounce Rate",
        value: "-42%",
        description: "From 73% to 42%"
      },
      {
        label: "Conversion Rate",
        value: "+47%",
        description: "Online booking increase"
      },
      {
        label: "Booking Time",
        value: "-60%",
        description: "From 4.5min to 1.8min"
      },
      {
        label: "Mobile Conversion",
        value: "+63%",
        description: "Mobile-specific improvement"
      },
      {
        label: "Page Load Time",
        value: "1.9s",
        description: "64% faster than before"
      },
      {
        label: "Corporate Inquiries",
        value: "+89%",
        description: "B2B form submissions"
      },
      {
        label: "Customer Satisfaction",
        value: "4.7/5",
        description: "Up from 3.4/5"
      },
      {
        label: "Online Booking Share",
        value: "34%",
        description: "Up from 18% of total"
      }
    ],
    learnings: [
      "Mobile-first isn't just about responsive design - it requires rethinking the entire user journey and prioritizing speed and simplicity over feature richness",
      "Price transparency is non-negotiable for Indian users - hiding costs or making pricing difficult to find erodes trust faster than any marketing can build it",
      "Different user segments need different experiences - trying to serve B2B and B2C users with the same interface leads to compromised experiences for both",
      "Trust signals and safety features aren't just nice-to-have for mobility platforms - they're conversion drivers, especially for new users and specific demographics",
      "Performance optimization has direct business impact - every 1 second reduction in load time correlated with 8-12% increase in conversions in our A/B tests"
    ],
    tags: ["Website Redesign", "Mobile-First Design", "Conversion Optimization", "User Research", "Design Systems", "B2B/B2C UX"]
  },
  {
    id: 4,
    title: "MLL - Warehouse Management System",
    category: "Enterprise UX",
    year: "2022",
    role: "Senior UX Designer",
    duration: "5 months",
    team: "3 Designers, 6 Developers, 2 Product Managers",
    description: "Designed a comprehensive desktop and tablet-based warehouse management system for Mahindra Logistics Limited, with mobile capabilities for critical on-floor actions, streamlining inventory tracking and warehouse operations.",
    context: "Mahindra Logistics Limited (MLL), one of India's leading third-party logistics providers, needed to modernize their warehouse operations across 150+ facilities nationwide. Existing systems were fragmented, leading to inefficiencies in inventory management, delayed shipments, and poor visibility into warehouse operations.",
    challenge: "Warehouse staff were using multiple disconnected systems, leading to data entry errors and operational delays. Inventory discrepancies averaged 12%, affecting customer satisfaction. Real-time tracking was limited, and managers lacked actionable insights for optimization. The system needed to work across facilities of varying technical maturity.",
    solution: "Designed an integrated warehouse management platform optimized for desktop and tablet with comprehensive dashboards, analytics, and management tools. Created focused mobile interfaces for time-critical on-floor actions like barcode scanning, inventory verification, and quick updates. Implemented real-time sync across devices ensuring seamless workflow transitions.",
    outcome: "Inventory accuracy improved to 98%, picking efficiency increased by 35%, and order fulfillment time reduced by 28%. System adoption reached 94% across all facilities within 3 months. Warehouse managers reported saving 4 hours daily on administrative tasks. Real-time visibility enabled proactive issue resolution, reducing customer complaints by 41%.",
    process: [
      {
        title: "Research & Discovery",
        description: "Conducted on-site observations at 8 MLL warehouse facilities to understand workflows and pain points. Interviewed 45 warehouse staff, supervisors, and managers across different shift timings. Analyzed operational data from legacy systems identifying bottlenecks in picking, packing, and inventory management processes."
      },
      {
        title: "Ideation & Strategy",
        description: "Created detailed user personas for warehouse operators, supervisors, and facility managers with distinct needs. Mapped end-to-end warehouse workflows from receiving to dispatch. Developed device strategy - desktop/tablet for comprehensive management and analytics, mobile for quick on-floor actions."
      },
      {
        title: "Design & Prototyping",
        description: "Built responsive web application optimized for desktop monitors and tablets with data-rich dashboards and management interfaces. Designed focused mobile web interface for barcode scanning, quick inventory updates, and task verification. Created comprehensive design system accommodating various screen sizes and use contexts."
      },
      {
        title: "Testing & Refinement",
        description: "Conducted usability testing with 30 warehouse staff in live operational environments. Tested desktop dashboards with managers, tablet interfaces with supervisors on warehouse floor, and mobile actions with picking staff. Refined based on real-world constraints like lighting conditions and glove usage."
      },
      {
        title: "Launch & Adoption",
        description: "Implemented phased rollout across 12 pilot facilities before nationwide deployment. Created role-specific training materials and conducted on-site training sessions. Established support channels and gathered feedback for continuous optimization. Monitored adoption metrics and operational KPIs."
      }
    ],
    keyFeatures: [
      "Comprehensive desktop dashboards with real-time inventory visibility and analytics",
      "Tablet-optimized supervisor interfaces for floor management and task assignment",
      "Mobile barcode scanning for quick goods receipt and dispatch verification",
      "Smart picking route optimization reducing travel time within warehouses",
      "Real-time inventory tracking with automated low-stock alerts",
      "Mobile quick actions for inventory adjustments and location updates",
      "Automated reporting and compliance documentation for management",
      "Cross-device sync enabling seamless workflow transitions between desktop and mobile"
    ],
    userResearch: {
      title: "Key Research Insights",
      findings: [
        "Managers needed comprehensive desktop views with multi-warehouse analytics - mobile screens couldn't accommodate data density requirements",
        "Supervisors preferred tablets for floor management - portable yet large enough for task coordination and real-time monitoring",
        "Warehouse staff needed quick mobile access for specific actions like scanning and verification - didn't want to carry tablets constantly",
        "Barcode scanning workflow needed to work with gloves and in varied lighting conditions common in warehouse environments",
        "Real-time sync between devices was critical - staff often switched between desktop planning and mobile execution"
      ]
    },
    designDecisions: [
      {
        title: "Multi-Device Strategy",
        description: "Designed device-specific experiences rather than one-size-fits-all responsive design. Desktop for data-intensive management, tablets for supervisory mobility, mobile for focused quick actions. This increased task efficiency by 40% compared to forcing all workflows onto single device type."
      },
      {
        title: "Context-Aware Mobile Interface",
        description: "Mobile interface showed only actionable items relevant to user's current context (scanning mode, inventory check, task verification). Large touch targets accommodated glove usage. High-contrast UI worked in bright warehouse lighting and low-light storage areas."
      },
      {
        title: "Real-Time Sync Architecture",
        description: "Implemented seamless data synchronization allowing managers to assign tasks on desktop, supervisors to monitor on tablets, and staff to execute on mobile - all in real-time. Offline mode for mobile ensured continuity during connectivity issues in large warehouses."
      },
      {
        title: "Progressive Information Disclosure",
        description: "Desktop showed comprehensive data views with drill-down capabilities. Tablets balanced overview and detail for supervisory needs. Mobile focused on single-task completion with minimal cognitive load. This reduced decision fatigue and improved accuracy."
      }
    ],
    metrics: [
      {
        label: "Inventory Accuracy",
        value: "98%",
        description: "Up from 88%"
      },
      {
        label: "Picking Efficiency",
        value: "+35%",
        description: "Faster order fulfillment"
      },
      {
        label: "Fulfillment Time",
        value: "-28%",
        description: "Reduced processing time"
      },
      {
        label: "System Adoption",
        value: "94%",
        description: "Across all facilities"
      },
      {
        label: "Admin Time Saved",
        value: "4 hrs/day",
        description: "Per warehouse manager"
      },
      {
        label: "Customer Complaints",
        value: "-41%",
        description: "Improved order accuracy"
      }
    ],
    learnings: [
      "Device strategy should match actual work contexts - forcing desktop-only or mobile-only creates friction when users need both",
      "Warehouse environments require special UI considerations - high contrast for varied lighting, large touch targets for gloved hands",
      "Real-time sync between devices is non-negotiable for distributed workflows - offline mode must be robust",
      "Training and change management determine enterprise platform success more than feature completeness",
      "Desktop analytics dashboards need different interaction patterns than mobile task completion interfaces"
    ],
    tags: ["Enterprise Web App", "Responsive Design", "Multi-Device UX", "Warehouse Management", "Desktop/Tablet UI"]
  },
  {
    id: 3,
    title: "MLL - Safety and Incident Reporting",
    category: "Enterprise UX",
    year: "2022",
    role: "Lead UX Designer",
    duration: "4 months",
    team: "2 Designers, 5 Developers, 1 Safety Manager, 1 Product Manager",
    description: "Designed an end-to-end safety ticket management system for Mahindra Logistics enabling quick incident reporting, intelligent escalation workflows, and systematic closure processes to improve workplace safety and response times.",
    context: "Mahindra Logistics operates 150+ warehouses and transportation hubs nationwide with 20,000+ field employees. Safety incidents ranging from minor injuries to equipment failures required immediate attention, but the manual paper-based ticketing system created significant delays in response and resolution.",
    challenge: "Field staff struggled with 15-minute paper forms during emergencies, delaying critical response. 40% of safety tickets were escalated incorrectly, overwhelming senior managers. Average ticket resolution time was 12 days with no visibility into closure status. Recurring incidents weren't identified due to fragmented documentation across locations.",
    solution: "Designed a streamlined mobile-first ticketing system with quick incident capture (under 60 seconds), smart escalation logic based on severity and type, automated routing to appropriate personnel, and structured closure workflows with root cause analysis. Built role-specific dashboards for reporters, safety officers, and managers with real-time status tracking.",
    outcome: "Ticket creation time reduced from 15 minutes to 45 seconds. Escalation accuracy improved to 94% through intelligent routing. Average resolution time dropped from 12 to 3.5 days. Safety officers saved 8 hours weekly on ticket management. Real-time dashboards enabled 70% faster response to critical incidents, significantly improving workplace safety.",
    process: [
      {
        title: "Research & Discovery",
        description: "Conducted field visits to 8 warehouse locations observing safety incident responses, shadowed safety officers during emergency situations, analyzed 500+ historical paper tickets to understand patterns, interviewed field workers, supervisors, and safety managers about current pain points and escalation challenges."
      },
      {
        title: "Workflow Mapping",
        description: "Mapped the complete ticket lifecycle from incident occurrence to closure, identified 12 different incident types and their escalation paths, created decision trees for severity assessment, documented approval hierarchies across 5 organizational levels, and mapped integration points with existing safety protocols."
      },
      {
        title: "Design & Prototyping",
        description: "Designed a progressive form that minimized input during emergencies while capturing critical information, created smart escalation logic based on incident type, severity, location, and time of day, built role-specific interfaces for reporters, responders, investigators, and approvers, developed comprehensive status tracking and closure workflows."
      },
      {
        title: "Testing & Validation",
        description: "Conducted usability testing with 25 field workers in simulated emergency scenarios, validated escalation logic with safety managers across different regions, tested mobile interface in actual warehouse conditions with poor connectivity, ran pilot program at 3 locations with 200+ tickets to refine workflows."
      },
      {
        title: "Implementation & Rollout",
        description: "Created training materials specific to each user role (reporter, responder, investigator), designed phased rollout across 150+ locations over 3 months, established escalation matrix and SLA guidelines, built feedback mechanisms for continuous improvement, and trained 50+ safety champions as on-ground support."
      }
    ],
    keyFeatures: [
      "Quick ticket creation with photo/video capture in under 60 seconds",
      "Smart escalation engine routing tickets based on severity, type, and location",
      "Real-time status tracking from creation to closure for all stakeholders",
      "Automated notifications and reminders to prevent ticket delays",
      "Structured closure workflow with root cause analysis and corrective actions",
      "Role-based dashboards for reporters, safety officers, and management",
      "Offline mode for areas with poor connectivity, syncing when online",
      "Analytics showing incident patterns, response times, and recurring issues"
    ],
    userResearch: {
      title: "Key Research Insights",
      findings: [
        "During emergencies, field workers needed to report incidents in under 1 minute - lengthy forms were abandoned",
        "40% of tickets were mis-routed because staff didn't understand escalation criteria",
        "Safety officers spent 4+ hours daily just triaging and routing tickets manually",
        "Ticket status was unknown - reporters and managers constantly called to check progress",
        "Closure documentation was inconsistent, preventing analysis of recurring incidents and root causes"
      ]
    },
    designDecisions: [
      {
        title: "Progressive Form Design",
        description: "Created a multi-step form that asked only critical questions first (What happened? Where? Any injuries?) allowing ticket creation in 45 seconds. Additional details could be added later, balancing emergency response speed with complete documentation."
      },
      {
        title: "Smart Escalation Logic",
        description: "Built an intelligent routing system that automatically escalated tickets based on severity level, incident type, location, and time of day. Critical incidents (injuries, hazmat) went directly to senior safety managers. This improved escalation accuracy from 60% to 94%."
      },
      {
        title: "Visual Status Tracking",
        description: "Designed a timeline view showing ticket journey from creation → assignment → investigation → resolution → closure. Each stakeholder could see current status, who was responsible, and expected resolution time, eliminating 80% of status inquiry calls."
      },
      {
        title: "Structured Closure Workflow",
        description: "Created a guided closure process requiring root cause analysis, corrective actions, and preventive measures. This standardized documentation enabled pattern analysis of recurring incidents and reduced similar incidents by 35%."
      }
    ],
    metrics: [
      {
        label: "Ticket Creation",
        value: "45 sec",
        description: "Down from 15 minutes"
      },
      {
        label: "Escalation Accuracy",
        value: "94%",
        description: "Up from 60%"
      },
      {
        label: "Resolution Time",
        value: "3.5 days",
        description: "Down from 12 days"
      },
      {
        label: "Status Inquiries",
        value: "-80%",
        description: "Real-time visibility"
      },
      {
        label: "Time Saved",
        value: "8 hrs/wk",
        description: "Per safety officer"
      },
      {
        label: "Incident Reporting",
        value: "+180%",
        description: "Improved safety culture"
      }
    ],
    learnings: [
      "Emergency interfaces demand radical simplicity — every field removed from the initial report form measurably improved completion rates during incident simulations",
      "Escalation logic must be co-designed with the people who know the hierarchy — safety managers held routing rules that existed nowhere in documentation",
      "Real-time status visibility eliminates anxiety-driven follow-up — 80% of status inquiry calls disappeared once all stakeholders could see ticket progress themselves",
      "Structured closure is as important as fast reporting — without guided root cause documentation, incidents recurred without the organization ever learning from them",
      "Training on-ground safety champions drives adoption faster than top-down mandates — peer support resolved 90% of user questions without requiring IT involvement"
    ],
    tags: ["Mobile-First Design", "Safety Systems", "Workflow Design", "Enterprise UX", "Escalation Logic"]
  },
  {
    id: 1,
    title: "Reliance - Oil to Chemicals Platform",
    category: "Enterprise Platform",
    year: "2025",
    role: "Senior UX Designer",
    duration: "6 months",
    team: "4 Designers, 8 Developers, 3 Product Managers",
    description: "Designed an enterprise platform for Reliance Industries to manage the complex Oil-to-Chemicals (O2C) conversion process, enabling real-time monitoring and optimization of refinery operations.",
    context: "Reliance Industries' Jamnagar refinery, one of the world's largest, needed a unified digital platform to manage the Oil-to-Chemicals conversion process. Multiple legacy systems and manual processes created information silos, delayed decision-making, and limited operational optimization opportunities.",
    challenge: "Engineers monitored 200+ process parameters across disconnected systems, leading to delayed anomaly detection. Manual data compilation for daily reports took 4 hours. Predictive maintenance was reactive rather than proactive. Cross-functional collaboration was difficult with data scattered across departments.",
    solution: "Designed an integrated O2C platform with real-time process visualization, predictive analytics dashboards, automated alert systems, and collaborative workflow tools. Created role-based interfaces for operators (monitoring), engineers (analysis), and managers (strategic oversight). Implemented data visualization showing complex process flows intuitively.",
    outcome: "Process monitoring efficiency improved by 54%, enabling faster anomaly detection and response. Daily reporting time reduced from 4 hours to 15 minutes. Predictive maintenance prevented 23 major equipment failures in first year. Cross-functional collaboration improved with shared real-time dashboards, reducing decision-making time by 42%.",
    process: [
      {
        title: "Research & Discovery",
        description: "Embedded with Jamnagar refinery engineering teams for 3 weeks, observed control room operations across day and night shifts, conducted 35 stakeholder interviews with operators, process engineers, and plant managers, and audited 6+ legacy systems to map data flows and identify critical monitoring gaps."
      },
      {
        title: "Ideation & Strategy",
        description: "Created role-based personas for operators (real-time monitoring), engineers (analysis and optimization), and managers (strategic oversight). Mapped end-to-end process monitoring flows from sensor ingestion to management reporting. Defined information architecture that unified data from 6 disparate legacy systems into a single coherent interface."
      },
      {
        title: "Design & Prototyping",
        description: "Built high-fidelity dashboards for each role — operators got live sensor feeds with anomaly highlighting, engineers got trend analysis and drill-down views, managers got shift summaries and KPI overviews. Created interactive process flow visualizations mapping the complete O2C conversion pipeline. Designed a tiered alert system to reduce noise while ensuring critical anomalies escalated immediately."
      },
      {
        title: "Testing & Iteration",
        description: "Conducted usability testing with engineers in simulated operational environments, validated alert thresholds with experienced operators to calibrate sensitivity, tested dashboard readability under control room lighting conditions across multiple monitor configurations, and ran 4 rounds of refinement based on shift-handover workflow observations."
      },
      {
        title: "Launch & Optimization",
        description: "Executed phased rollout starting with the monitoring dashboard to build operator confidence before introducing predictive features. Created role-specific training for operators vs. engineers. Established KPI tracking across adoption rates, anomaly response times, and reporting efficiency. Ran monthly optimization cycles based on operational feedback."
      }
    ],
    keyFeatures: [
      "Unified real-time dashboard displaying 200+ process parameters with anomaly highlighting and threshold alerts",
      "Role-based views — operators see live feeds, engineers see trend analysis, managers see KPI overviews",
      "Interactive O2C process flow visualization mapping the complete conversion pipeline with per-stage status",
      "Tiered alert system (critical/warning/info) with automatic escalation to appropriate personnel",
      "Predictive maintenance alerts surfacing equipment performance patterns before failures occur",
      "Automated daily and shift reports generated in 15 minutes, replacing 4-hour manual compilation",
      "Historical trend analysis enabling engineers to correlate parameter changes with process outcomes",
      "Cross-functional collaboration tools for sharing insights and flagging issues across departments"
    ],
    userResearch: {
      title: "Key Research Insights",
      findings: [
        "Engineers monitored 200+ parameters across 8 disconnected systems — context switching consumed 2+ hours per shift and caused critical anomalies to go unnoticed",
        "Daily reporting was entirely manual — engineers copy-pasted data from multiple systems into Excel every morning, taking 4 hours before any analysis could begin",
        "Anomaly detection was reactive — by the time issues appeared in spreadsheet reviews, the response window had already narrowed significantly",
        "Managers made strategic decisions on day-old data — real-time visibility was unavailable at the leadership level, limiting optimization opportunities",
        "Predictive maintenance data existed within legacy systems but was never surfaced — engineers knew patterns mattered but couldn't act on data they couldn't see"
      ]
    },
    designDecisions: [
      {
        title: "Role-Based Dashboard Architecture",
        description: "Designed three distinct interfaces rather than a single shared view. Operators needed live sensor feeds and immediate alerts; engineers needed trend analysis and historical comparisons; managers needed shift summaries and strategic KPIs. A single dashboard would have served none of them well. This separation increased task completion rates by 61% across all three groups."
      },
      {
        title: "Process Flow Visualization",
        description: "Created an interactive schematic of the complete O2C conversion pipeline with color-coded status indicators per stage. Operators could see the entire process at a glance and drill into specific units. This reduced the time to identify anomaly source from an average of 18 minutes to under 4 minutes."
      },
      {
        title: "Tiered Alert Prioritization",
        description: "Built a three-tier notification system — critical (immediate action required), warning (monitor closely), info (awareness only) — with automatic escalation paths per tier. Previously, all alerts were equal weight, causing engineers to tune them out. After tiering, critical alert acknowledgment improved from 67% to 98%."
      },
      {
        title: "Automated Report Generation",
        description: "Replaced the manual 4-hour daily reporting process with automated reports pulling from all connected systems on a scheduled basis. Engineers could redirect that time to analysis and optimization. Report generation dropped to 15 minutes, and report accuracy improved because human transcription errors were eliminated."
      }
    ],
    metrics: [
      {
        label: "Monitoring Efficiency",
        value: "+54%",
        description: "Faster anomaly detection"
      },
      {
        label: "Daily Reporting",
        value: "15 min",
        description: "Down from 4 hours"
      },
      {
        label: "Failures Prevented",
        value: "23",
        description: "Major equipment failures in year 1"
      },
      {
        label: "Decision Time",
        value: "-42%",
        description: "Faster cross-functional decisions"
      },
      {
        label: "Alert Acknowledgment",
        value: "98%",
        description: "Critical alerts acted on"
      },
      {
        label: "System Adoption",
        value: "91%",
        description: "Across all operator roles"
      }
    ],
    learnings: [
      "Industrial dashboards have unique density requirements — process engineers needed 40+ parameters simultaneously visible, which forced us to rethink standard information hierarchy conventions",
      "Domain knowledge is non-negotiable — without understanding refinery operations, we could not have prioritized which parameters mattered most or designed meaningful alert thresholds",
      "Legacy system integration is as critical as the UX layer — the platform's entire value depended on reliable, real-time data pipelines from 6+ source systems with inconsistent data formats",
      "Alert calibration is a design problem, not just an engineering one — too many low-priority alerts trained operators to ignore the system; tuning sensitivity required close collaboration with experienced operators",
      "Real-world validation in operational conditions caught issues lab testing never would — control room lighting, multi-monitor setups, and shift-handover stress all influenced design decisions"
    ],
    tags: ["Enterprise Platform", "Data Visualization", "Process Monitoring", "Predictive Analytics", "Role-Based Design"]
  },
  {
    id: 2,
    title: "Reliance - Vessel Management Platform",
    category: "Enterprise Platform",
    year: "2023-2024",
    role: "Lead UX Designer",
    duration: "5 months",
    team: "3 Designers, 7 Developers, 2 Product Managers",
    description: "Designed a comprehensive vessel management platform for Reliance Industries to track and optimize their maritime logistics operations, managing fleet schedules, cargo tracking, and port operations.",
    context: "Reliance Industries operates a large fleet of vessels for petroleum product transportation. Managing vessel schedules, cargo documentation, port coordination, and compliance across international waters required coordination across multiple legacy systems, leading to inefficiencies and delays.",
    challenge: "Fleet managers tracked 50+ vessels using spreadsheets and email, causing scheduling conflicts and delays. Real-time vessel location and cargo status were unavailable. Port coordination was manual, leading to demurrage costs. Compliance documentation for international shipping was paper-based and error-prone.",
    solution: "Created an integrated vessel management platform with real-time fleet tracking, automated scheduling optimization, digital documentation workflows, and predictive analytics for maintenance and delays. Designed dashboards for fleet managers, port coordinators, and compliance officers with role-specific views and collaborative tools.",
    outcome: "Vessel utilization improved by 28% through optimized scheduling. Demurrage costs reduced by 45% with better port coordination. Documentation processing time decreased from 6 hours to 45 minutes per shipment. Real-time tracking enabled proactive issue resolution, reducing delivery delays by 36%.",
    process: [
      {
        title: "Research & Discovery",
        description: "Conducted stakeholder interviews with fleet managers, port coordinators, and compliance officers. Observed day-to-day operations at ports and control centers. Analyzed 12 months of operational data identifying bottlenecks and pain points in vessel scheduling and cargo tracking."
      },
      {
        title: "Ideation & Strategy",
        description: "Created user personas for different operational roles. Mapped end-to-end vessel journey workflows from scheduling to delivery. Developed information architecture for complex multi-system integration. Sketched dashboard concepts for different user needs and use cases."
      },
      {
        title: "Design & Prototyping",
        description: "Designed interactive fleet tracking interface with real-time vessel positions and status. Created scheduling tools with drag-and-drop functionality and conflict detection. Built digital documentation workflows replacing paper-based processes. Developed mobile-responsive designs for on-site port operations."
      },
      {
        title: "Testing & Refinement",
        description: "Conducted usability testing with 25 fleet managers and port coordinators. Ran pilot program with 10 vessels to validate workflows and identify edge cases. Gathered feedback through workshops and iterative design reviews. Refined based on operational constraints and user behavior."
      },
      {
        title: "Launch & Optimization",
        description: "Implemented phased rollout across vessel fleet. Created comprehensive training materials and video guides. Established support channels for operational queries. Set up analytics tracking for key performance metrics and user adoption."
      }
    ],
    keyFeatures: [
      "Real-time fleet tracking with GPS integration and voyage progress monitoring",
      "Automated scheduling optimization with conflict detection and recommendations",
      "Digital documentation workflows for cargo manifests and compliance certificates",
      "Port coordination tools with berth booking and resource allocation",
      "Predictive maintenance alerts based on vessel usage and historical data",
      "Multi-currency cargo value tracking and financial reporting",
      "Weather and route optimization for improved fuel efficiency",
      "Collaborative tools for cross-team communication and issue resolution"
    ],
    userResearch: {
      title: "Key Research Insights",
      findings: [
        "Fleet managers needed holistic view of all vessels simultaneously - switching between systems wasted 2-3 hours daily",
        "Port coordinators required 24-48 hours notice for berth planning - real-time schedule changes caused operational chaos",
        "Compliance documentation was most time-consuming task - automated pre-filling could save significant time",
        "Mobile access was critical for port operations staff working on-site away from desktops",
        "Integration with existing ERP and financial systems was essential for adoption"
      ]
    },
    designDecisions: [
      {
        title: "Unified Fleet Dashboard",
        description: "Created a master dashboard showing all vessel positions, statuses, and key metrics at a glance. Color-coded status indicators (on-schedule, delayed, maintenance) enabled quick assessment. This reduced monitoring time from 45 minutes to 8 minutes per check."
      },
      {
        title: "Intelligent Scheduling",
        description: "Designed an automated scheduling system that detected conflicts, suggested optimal routes, and predicted delays based on historical data. Drag-and-drop interface made rescheduling intuitive. This reduced scheduling conflicts by 73% and improved vessel utilization."
      },
      {
        title: "Mobile-First Documentation",
        description: "Optimized documentation workflows for mobile devices since port staff needed on-site access. Implemented offline mode for areas with poor connectivity. Digital signatures and photo attachments streamlined compliance processes."
      },
      {
        title: "Predictive Insights",
        description: "Integrated weather data, port congestion patterns, and vessel performance history to provide predictive insights for better decision-making. Alerts for potential delays or maintenance needs enabled proactive management."
      }
    ],
    metrics: [
      {
        label: "Vessel Utilization",
        value: "+28%",
        description: "Through optimized scheduling"
      },
      {
        label: "Demurrage Costs",
        value: "-45%",
        description: "Better port coordination"
      },
      {
        label: "Documentation Time",
        value: "45 min",
        description: "Down from 6 hours"
      },
      {
        label: "Delivery Delays",
        value: "-36%",
        description: "Proactive issue resolution"
      },
      {
        label: "Scheduling Conflicts",
        value: "-73%",
        description: "Automated optimization"
      },
      {
        label: "Fuel Efficiency",
        value: "+12%",
        description: "Route optimization"
      }
    ],
    learnings: [
      "Maritime operations have unique constraints - understanding domain-specific challenges was crucial for designing effective solutions",
      "Integration with legacy systems is often the hardest part - we spent 40% of time ensuring smooth data flow",
      "Mobile optimization for offline scenarios is essential for port operations with unreliable connectivity",
      "Predictive features add most value when they enable proactive decision-making, not just reporting what already happened",
      "Change management is critical for enterprise platforms - training and support determined adoption success"
    ],
    tags: ["Fleet Management", "Enterprise Platform", "Real-Time Tracking", "Predictive Analytics", "Mobile UX"]
  }
];

export function Work({ onClose }: { onClose?: () => void }) {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  // Scroll detection to close Work section and return to landing page
  React.useEffect(() => {
    if (!onClose) return;

    const handleScroll = (e: WheelEvent) => {
      const container = scrollContainerRef.current;
      if (!container) return;

      // Check if user is scrolling up and already at the top
      if (e.deltaY < 0 && container.scrollTop === 0) {
        onClose();
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('wheel', handleScroll, { passive: true });
      return () => container.removeEventListener('wheel', handleScroll);
    }
  }, [onClose]);

  return (
    <div ref={scrollContainerRef} className="overlay-dark h-screen bg-transparent px-4 md:px-6 py-6 md:py-8 overflow-y-auto">
      <div className="max-w-[1600px] mx-auto w-full min-h-full flex flex-col justify-center">
        {/* Section Header */}
        <div className="mb-4 md:mb-6">
          <h2 className="text-[clamp(1.75rem,6vw,3.5rem)] tracking-tighter mb-2 text-[#e8e6e1]">Selected Work</h2>
          <p className="text-[#b8b3ab] max-w-2xl text-xs md:text-sm">
            Enterprise platforms, consumer products, and redesigns — shipped across India's largest companies.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
          {projects.sort((a, b) => a.id - b.id).map((project) => (
            <motion.div
              key={project.id}
              layoutId={`project-card-${project.id}`}
              onClick={() => setSelectedProject(project)}
              className="project-card group cursor-pointer"
            >
              <motion.div 
                layoutId={`project-image-${project.id}`}
                className="aspect-[3/4] bg-[#2a2520]/50 mb-2 overflow-hidden border border-[#5a4f47]/30"
              >
                <div className="w-full h-full bg-[#2a2520]/50 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                  <span className="text-5xl opacity-20 text-[#e8e6e1]">{project.id}</span>
                </div>
              </motion.div>
              <motion.h3 layoutId={`project-title-${project.id}`} className="mb-1 text-[#e8e6e1] leading-tight">
                {project.title}
              </motion.h3>
              <motion.p layoutId={`project-category-${project.id}`} className="text-xs text-[#8a7f75]">
                {project.category} • {project.year}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Project Detail */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/95 z-[100]"
              onClick={() => setSelectedProject(null)}
            />

            {/* Expanded Card */}
            <motion.div
              layoutId={`project-card-${selectedProject.id}`}
              className="fixed inset-8 z-[101] bg-gray-900 border border-gray-700 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-[#e8e6e1] text-sm tracking-[0.2em] uppercase hover:opacity-70 transition-opacity z-10 flex items-center gap-2 group"
              >
                <span>Close</span>
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              </button>

              <div className="h-full flex flex-col lg:flex-row">
                {/* Left Column - Fixed Images */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col gap-4 lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden justify-center">
                  <motion.div
                    layoutId={`project-image-${selectedProject.id}`}
                    className="w-full max-h-[60vh] aspect-[4/5] bg-[#2a2520]/50 border border-[#5a4f47]/30 overflow-hidden flex-shrink-0"
                  >
                    <div className="w-full h-full bg-[#2a2520]/50 flex items-center justify-center">
                      <span className="text-9xl opacity-20 text-[#e8e6e1]">{selectedProject.id}</span>
                    </div>
                  </motion.div>

                  {/* Additional Images */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="grid grid-cols-2 gap-3 flex-shrink-0"
                  >
                    {[1, 2].map((i) => (
                      <div key={i} className="aspect-video bg-[#2a2520]/50 border border-[#5a4f47]/30 overflow-hidden">
                        <div className="w-full h-full bg-[#2a2520]/50 flex items-center justify-center">
                          <span className="text-2xl opacity-20 text-[#e8e6e1]">{selectedProject.id}.{i}</span>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Right Column - Scrollable Content */}
                <div className="lg:w-1/2 h-full overflow-y-auto p-8 lg:p-12 project-content-scroll">
                  <div className="flex flex-col gap-8">
                    {/* Header */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                    >
                      <motion.h2
                        layoutId={`project-title-${selectedProject.id}`}
                        className="text-[clamp(2rem,5vw,3.5rem)] tracking-tighter mb-2 text-[#e8e6e1] leading-tight"
                      >
                        {selectedProject.title}
                      </motion.h2>
                      <motion.p
                        layoutId={`project-category-${selectedProject.id}`}
                        className="text-sm text-[#8a7f75] mb-4"
                      >
                        {selectedProject.category} • {selectedProject.year}
                      </motion.p>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-6 mb-6">
                        <div className="flex items-center gap-2 text-[#b8b3ab]">
                          <Briefcase className="w-4 h-4" />
                          <span className="text-sm">{selectedProject.role}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#b8b3ab]">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{selectedProject.year}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1 bg-[#2a2520]/50 border border-[#5a4f47]/30 text-[#b8b3ab] tracking-wide"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Description */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15, duration: 0.4 }}
                    >
                      <h3 className="text-lg mb-3 text-[#e8e6e1] tracking-tight">Overview</h3>
                      <p className="text-[#b8b3ab] text-sm leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </motion.div>

                    {/* Context */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                    >
                      <h3 className="text-lg mb-3 text-[#e8e6e1] tracking-tight">Context</h3>
                      <p className="text-[#b8b3ab] text-sm leading-relaxed">
                        {selectedProject.context}
                      </p>
                    </motion.div>

                    {/* Challenge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                    >
                      <h3 className="text-lg mb-3 text-[#e8e6e1] tracking-tight">The Challenge</h3>
                      <p className="text-[#b8b3ab] text-sm leading-relaxed">
                        {selectedProject.challenge}
                      </p>
                    </motion.div>

                    {/* Solution */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25, duration: 0.4 }}
                    >
                      <h3 className="text-lg mb-3 text-[#e8e6e1] tracking-tight">The Solution</h3>
                      <p className="text-[#b8b3ab] text-sm leading-relaxed">
                        {selectedProject.solution}
                      </p>
                    </motion.div>

                    {/* Outcome */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <h3 className="text-lg mb-3 text-[#e8e6e1] tracking-tight">The Outcome</h3>
                      <p className="text-[#b8b3ab] text-sm leading-relaxed">
                        {selectedProject.outcome}
                      </p>
                    </motion.div>

                    {/* Process */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35, duration: 0.4 }}
                    >
                      <h3 className="text-lg mb-6 text-[#e8e6e1] tracking-tight">Design Process</h3>
                      <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-[#5a4f47]/50 via-[#5a4f47]/30 to-[#5a4f47]/50 hidden md:block" />
                        
                        {/* Process Steps */}
                        <div className="space-y-6">
                          {selectedProject.process.map((step, index) => {
                            const icons = [
                              <Search className="w-5 h-5" />,
                              <Lightbulb className="w-5 h-5" />,
                              <Palette className="w-5 h-5" />,
                              <TestTube className="w-5 h-5" />,
                              <Rocket className="w-5 h-5" />
                            ];
                            
                            return (
                              <motion.div
                                key={step.title}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                                className="relative flex gap-4"
                              >
                                {/* Icon Circle */}
                                <div className="relative flex-shrink-0">
                                  <div className="w-12 h-12 rounded-full bg-[#2a2520]/50 border-2 border-[#5a4f47]/50 flex items-center justify-center text-[#e8e6e1] relative z-10">
                                    {icons[index % icons.length]}
                                  </div>
                                  {/* Step Number */}
                                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#e8e6e1] text-[#2a2520] text-xs flex items-center justify-center z-20">
                                    {index + 1}
                                  </div>
                                </div>
                                
                                {/* Content Card */}
                                <div className="flex-1 pb-2">
                                  <div className="bg-[#2a2520]/50 border border-[#5a4f47]/30 rounded-lg p-4">
                                    <h4 className="text-[#e8e6e1] tracking-tight mb-2">{step.title}</h4>
                                    <p className="text-[#b8b3ab] text-sm leading-relaxed">
                                      {step.description}
                                    </p>
                                  </div>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>

                    {/* Key Features */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                    >
                      <h3 className="text-lg mb-3 text-[#e8e6e1] tracking-tight">Key Features</h3>
                      <ul className="list-disc pl-6 text-[#b8b3ab] text-sm leading-relaxed">
                        {selectedProject.keyFeatures.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* User Research */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45, duration: 0.4 }}
                    >
                      <h3 className="text-lg mb-3 text-[#e8e6e1] tracking-tight">User Research</h3>
                      <ul className="list-disc pl-6 text-[#b8b3ab] text-sm leading-relaxed">
                        {selectedProject.userResearch.findings.map((finding) => (
                          <li key={finding}>{finding}</li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Design Decisions */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                    >
                      <h3 className="text-lg mb-3 text-[#e8e6e1] tracking-tight">Design Decisions</h3>
                      <ul className="list-disc pl-6 text-[#b8b3ab] text-sm leading-relaxed">
                        {selectedProject.designDecisions.map((decision) => (
                          <li key={decision.title}>
                            <strong>{decision.title}:</strong> {decision.description}
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Learnings */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.55, duration: 0.4 }}
                    >
                      <h3 className="text-lg mb-3 text-[#e8e6e1] tracking-tight">Learnings</h3>
                      <ul className="list-disc pl-6 text-[#b8b3ab] text-sm leading-relaxed">
                        {selectedProject.learnings.map((learning) => (
                          <li key={learning}>{learning}</li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.65, duration: 0.4 }}
                      className="pt-4"
                    >
                      <button className="group relative text-sm border-2 border-white px-6 py-3 bg-transparent hover:bg-white transition-all duration-500 tracking-[0.2em] uppercase overflow-hidden flex items-center gap-3">
                        <span className="relative z-10 group-hover:text-black transition-colors duration-500 text-white">
                          View Case Study
                        </span>
                        <ExternalLink className="w-4 h-4 relative z-10 group-hover:text-black transition-colors duration-500 text-white" />
                      </button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}