import type { MetadataRoute } from "next";

const BASE_URL = "https://barrana.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    // Core pages
    { url: `${BASE_URL}`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },

    // Knowledge / educational pages
    { url: `${BASE_URL}/what-is-ai-automation`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/ai-agents-vs-chatbots`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/how-businesses-use-ai-agents`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/ai-automation-cost-canada`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/best-ai-workflows`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },

    // Service pages
    { url: `${BASE_URL}/automate-lead-follow-up`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/ai-receptionist`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/does-ai-replace-staff`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Comparison pages
    { url: `${BASE_URL}/zapier-vs-n8n-vs-custom-ai`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/ai-agent-vs-automation`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Location pages
    { url: `${BASE_URL}/ai-automation-vaughan`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/ai-automation-toronto`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/ai-automation-markham`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/ai-automation-mississauga`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/ai-automation-richmond-hill`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },

    // Workflow hub
    { url: `${BASE_URL}/automation-workflows`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },

    // Industry workflow pages
    { url: `${BASE_URL}/workflows/immigration-intake`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/workflows/accounting-documents`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/workflows/contractor-leads`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/workflows/clinic-appointments`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
  ];

  return routes;
}
