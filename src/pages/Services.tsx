import { Card, CardContent } from "@/components/ui/card";
import SectionWrapper from "@/components/SectionWrapper";
import { Database, Cog, ShieldCheck, Brain, Cloud } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Data Strategy",
    desc: "Define a data vision and roadmap aligned to business priorities. We assess maturity, identify gaps, and design target-state architectures that unlock enterprise-wide value.",
    points: ["Data maturity assessment", "Target-state architecture", "Roadmap & prioritization"],
  },
  {
    icon: Cog,
    title: "Data Engineering",
    desc: "Build scalable, reliable data pipelines that power analytics and AI. From ingestion to transformation, we ensure data flows seamlessly across your organization.",
    points: ["ETL/ELT pipelines", "Real-time streaming", "Data lake & warehouse design"],
  },
  {
    icon: ShieldCheck,
    title: "Data Governance",
    desc: "Establish policies, standards, and stewardship frameworks that ensure data quality, compliance, and trust across your data ecosystem.",
    points: ["Policy & standards framework", "Data quality management", "Lineage & cataloging"],
  },
  {
    icon: Brain,
    title: "AI/ML Implementation",
    desc: "From proof-of-concept to production, we build and deploy machine learning models that deliver measurable business impact.",
    points: ["Use case identification", "Model development & training", "MLOps & monitoring"],
  },
  {
    icon: Cloud,
    title: "Cloud Transformation",
    desc: "Migrate and modernize your data infrastructure on cloud-native platforms. We optimize for performance, cost, and scalability.",
    points: ["Cloud migration strategy", "Platform modernization", "Cost optimization"],
  },
];

const Services = () => (
  <div className="min-h-screen pt-16">
    <section className="hero-gradient py-24">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          End-to-end capabilities across the data and AI lifecycle, delivered by senior practitioners with deep domain expertise.
        </p>
      </div>
    </section>

    <SectionWrapper className="py-24">
      <div className="container">
        <div className="grid gap-6">
          {services.map((s) => (
            <Card key={s.title} className="bg-card border-border hover:border-primary/50 transition-all card-glow group">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="shrink-0">
                    <s.icon className="text-primary group-hover:scale-110 transition-transform" size={36} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{s.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.points.map((p) => (
                        <span key={p} className="text-xs px-3 py-1 rounded-full bg-secondary border border-border text-muted-foreground">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  </div>
);

export default Services;
