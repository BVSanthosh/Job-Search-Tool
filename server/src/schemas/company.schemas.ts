import { z } from "zod";

const CompanyInsightsSchema = z.object({
  company: z.object({
    name: z.string(),
    description: z.string(),
    industry: z.string(),
    founded: z.union([z.string(), z.null()]),
    headquarters: z.string(),
    employeeCount: z.string(),
    fundingStage: z.string(),
    revenueEstimate: z.union([z.string(), z.null()])
  }),

  productsAndServices: z.object({
    coreProducts: z.array(z.string()),
    businessModel: z.string(),
    techStack: z.array(z.string()),
  }),

  cultureAndCareers: z.object({
    workEnvironment: z.string(),
    values: z.array(z.string()),
    hiringRegions: z.array(z.string()),
    visaSponsorship: z.union([
      z.literal("Yes"),
      z.literal("No"),
      z.literal("Unclear")
    ])
  }),

  keyPeople: z.object({
    founders: z.array(z.string()),
    ceo: z.string(),
    notableEmployees: z.array(z.string())
  }),

  recentNews: z.array(
    z.object({
      title: z.string(),
      date: z.string(), 
      summary: z.string(),
      source: z.string()
    })
  ),

  insightScore: z.object({
    innovation: z.union([
      z.literal("High"),
      z.literal("Medium"),
      z.literal("Low")
    ]),
    growthPotential: z.union([
      z.literal("High"),
      z.literal("Medium"),
      z.literal("Low")
    ]),
    techMaturity: z.union([
      z.literal("Advanced"),
      z.literal("Intermediate"),
      z.literal("Early-stage")
    ]),
    marketPosition: z.union([
      z.literal("Leader"),
      z.literal("Challenger"),
      z.literal("Niche"),
      z.literal("Emerging")
    ])
  }),
});

const CompanyItemSchema = z.object({
  title: z.string()
});

const CompanySearchResponseSchema = z.object({
  items: z.array(CompanyItemSchema),
});

export { CompanyInsightsSchema, CompanyItemSchema, CompanySearchResponseSchema };