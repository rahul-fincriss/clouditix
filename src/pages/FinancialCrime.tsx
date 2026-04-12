import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionWrapper from "@/components/SectionWrapper";
import {
  AlertTriangle, Brain, Filter, Gauge, Shield, FileSearch, GitBranch,
  Cpu, ArrowRight
} from "lucide-react";

const fcrFeatures = [
  { icon: Brain, title: "Intelligent Alert Prioritization", desc: "Rules + ML engine to surface the highest-risk alerts first." },
  { icon: Filter, title: "False Positive Reduction", desc: "Reduce noise by 30–50% with adaptive scoring models." },
  { icon: Gauge, title: "Risk Scoring & Dynamic Thresholding", desc: "Context-aware risk scores that evolve with your data." },
  { icon: Shield, title: "Regulatory Watchlist Screening", desc: "Ingest external watchlists and screen in real-time." },
  { icon: FileSearch, title: "Case Management & Workflow", desc: "End-to-end investigation workflows with audit trails." },
  { icon: Cpu, title: "Real-time + Batch Processing", desc: "Flexible processing modes for alerts and transactions." },
  { icon: GitBranch, title: "Explainable AI", desc: "Transparent model outputs for audit and compliance." },
];

const fcrBenefits = [
  { stat: "30–50%", label: "Reduction in Investigation Effort" },
  { stat: "2×", label: "SLA Adherence Improvement" },
  { stat: "100%", label: "Regulatory Compliance Coverage" },
  { stat: "5×", label: "Faster Decision-Making" },
];

const FinancialCrime = () => (
  <div className="min-h-screen pt-16">
    <section className="hero-gradient py-24 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-primary" size={32} />
          <span className="text-xs px-2 py-0.5 rounded-full bg-primary text-primary-foreground font-semibold">NEW</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl">
          AI-Powered Financial Crime & Alert Management Platform
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
          Cut through alert noise. Prioritize real threats. Accelerate compliance.
        </p>
      </div>
    </section>

    <SectionWrapper className="py-20">
      <div className="container max-w-3xl">
        <h2 className="text-2xl font-bold mb-6">The Challenge</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "High volume of alerts with low signal-to-noise ratio",
            "False positives leading to operational inefficiency",
            "Lack of prioritization across alerts",
            "Disconnected regulatory watchlist screening",
          ].map((problem) => (
            <div key={problem} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50 border border-border">
              <div className="w-2 h-2 rounded-full bg-destructive mt-2 shrink-0" />
              <p className="text-sm text-muted-foreground">{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper className="py-20 bg-secondary/30">
      <div className="container">
        <h2 className="text-2xl font-bold mb-10 text-center">Key Features</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {fcrFeatures.map((f) => (
            <Card key={f.title} className="bg-card border-border hover:border-primary/50 transition-all card-glow group">
              <CardContent className="p-6">
                <f.icon className="text-primary mb-3 group-hover:scale-110 transition-transform" size={28} />
                <h3 className="font-semibold mb-2 text-sm">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper className="py-20">
      <div className="container max-w-3xl text-center">
        <h2 className="text-2xl font-bold mb-6">Architecture Highlights</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { title: "Seamless Integration", desc: "Works with Clari5, core banking, and existing alert sources." },
            { title: "Plug-and-Play APIs", desc: "RESTful APIs for rapid integration with your tech stack." },
            { title: "Flexible Deployment", desc: "Cloud, on-prem, or hybrid deployment models." },
          ].map((a) => (
            <div key={a.title} className="p-6 rounded-lg border border-border bg-card">
              <h3 className="font-semibold mb-2 text-sm">{a.title}</h3>
              <p className="text-xs text-muted-foreground">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper className="py-20 bg-secondary/30">
      <div className="container">
        <h2 className="text-2xl font-bold mb-10 text-center">Business Impact</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fcrBenefits.map((b) => (
            <div key={b.label} className="text-center p-6 rounded-lg border border-border bg-card">
              <div className="text-3xl font-bold text-gradient mb-2">{b.stat}</div>
              <p className="text-sm text-muted-foreground">{b.label}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2">
              See Platform in Action <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  </div>
);

export default FinancialCrime;
