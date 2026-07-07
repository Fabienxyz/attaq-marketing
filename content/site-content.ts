export const siteConfig = {
  name: "Attaq.ai",
  contactEmail: "fabien@attaq.ai",
  briefingSubject: "Attaq.ai — Technical Briefing Request",
} as const;

export const navLinks = [
  { label: "Ecosystem", href: "#better-together" },
  { label: "Challenge", href: "#asymmetric-disadvantage" },
  { label: "Security Graph", href: "#attaq-answer" },
  { label: "Product", href: "#see-it" },
  { label: "Integration", href: "#protect-investment" },
] as const;

export const heroContent = {
  eyebrow: "Built for the AI era. Made in the EU.",
  headline: "Continuous Attack Path Analysis",
  headlineSecondary: "for Elastic Security™ and OpenSearch™",
  subheadline: "Prioritize what matters",
  partnershipLabel: "In partnership with",
  partnershipName: "ElastiFlow",
  body: "By integrating topology with a behavioral overlay of actual traffic, ATTAQ.AI bridges the visibility gap for OpenSearch™ and Elasticsearch™ users. Security and development teams can accelerate prioritization by analyzing blast radius, critical asset attack paths, and the security consequences of configuration updates across identities, network, applications, and infrastructure.",
  cta: "Request a technical briefing",
} as const;

export const betterTogetherContent = {
  stack: [
    { name: "Elastic Security™", type: "wordmark" as const },
    { name: "ElastiFlow", type: "logo" as const },
    { name: "ATTAQ.AI", type: "brand" as const },
  ],
  outcomes: [
    "Continuous Attack Path Analysis",
    "Prioritized Security Decisions",
  ],
} as const;

export const asymmetricDisadvantageContent = {
  headline: "Your asymmetric disadvantage",
  subheadline: "The attacker pays once. You pay forever.",
  cards: [
    {
      title: "Cost asymmetry",
      body: "AI has given attackers nation-state capabilities at commodity prices.",
    },
    {
      title: "Knowledge asymmetry",
      body: "The attacker knows exactly one thing — their attack path. You must know everything.",
    },
    {
      title: "Time asymmetry",
      body: "Attackers operate at machine speed; a SOC drowning in alerts operates at human-triage speed.",
    },
  ],
} as const;

export const attaqAnswerContent = {
  headline: "The Attaq.ai answer",
  subheadline: "Faster insights through Security Graph.",
  capabilities: [
    {
      title: "Instant Topology Map",
      body: "Map what can go wrong if something is reached — in minutes, agentless.",
    },
    {
      title: "Behavioral Overlay",
      body: "See whether someone is actually traversing a path right now.",
    },
    {
      title: "Blast Radius Analysis",
      body: "If something is compromised, what could be reached next?",
    },
    {
      title: "Paths to Crown Jewels",
      body: "Understand every path to your most valuable assets.",
    },
    {
      title: "Timeline Analysis",
      body: "Measure the impact of configuration changes on security posture.",
    },
  ],
} as const;

export const seeItContent = {
  headline: "See it, don't infer it",
  subheadline: "Uncover potential attack paths faster.",
  bullets: [
    "Potential attack paths, before they are exploited",
    "Graph representation of relations and paths between entities",
    "Observed activity and signals overlaid on topology",
    "Proximity to crown jewels for risk-based prioritization",
    "Timeline view for retrospective analysis",
  ],
} as const;

export const protectInvestmentContent = {
  headline: "Protect your investment",
  subheadline: "Seamless integration with your existing environment.",
  points: [
    "Reuses existing Elastic™ and OpenSearch™ deployments — no rip and replace",
    "Agentless topology map in minutes",
    "Behavioural overlay through data planes",
    "Designed for humans and agents",
  ],
} as const;

export const finalCtaContent = {
  headline: "See your attack paths in minutes.",
  cta: "Request a technical briefing",
  contactLabel: "Contact",
} as const;

export const footerContent = {
  tagline:
    "Prioritized security decisions. Faster remediation. Reduced risk. Measurable impact.",
  euLine: "Made in the EU.",
} as const;
