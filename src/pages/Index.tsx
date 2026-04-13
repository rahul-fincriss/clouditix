import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionWrapper from "@/components/SectionWrapper";
import NetworkDecoration from "@/components/NetworkDecoration";
import {
  Database, ShieldCheck, Brain, Cloud, Building2,
  Zap, Lock, Layers, ArrowRight, AlertTriangle, Users
} from "lucide-react";

const capabilities = [
  { icon: Database, title: "Data Strategy & Architecture", desc: "Design future-proof data ecosystems aligned to business outcomes." },
  { icon: ShieldCheck, title: "Data Governance & Quality", desc: "Establish trust, lineage, and compliance across your data landscape." },
  { icon: Brain, title: "AI & Advanced Analytics", desc: "Unlock predictive and prescriptive intelligence at scale." },
  { icon: Cloud, title: "Cloud Data Platforms", desc: "Modernize infrastructure with cloud-native data platforms." },
  { icon: Building2, title: "Industry Solutions", desc: "Purpose-built accelerators for Banking, Hospitality, and SaaS." },
];

const values = [
  { icon: Zap, stat: "10×", label: "Faster Time to Insight", desc: "Accelerate decision-making with real-time data pipelines." },
  { icon: Lock, stat: "100%", label: "Trusted, Governed Data", desc: "Every data point traceable, compliant, and audit-ready." },
  { icon: Layers, stat: "AI-Ready", label: "Enterprise Foundation", desc: "Build the platform layer that powers your AI ambitions." },
];

const Index = () => (
  <div className="min-h-screen">
    {/* Hero */}
    <section className="hero-gradient relative min-h-[90vh] flex items-center overflow-hidden">
      <NetworkDecoration className="top-0 right-0" />
      <NetworkDecoration className="bottom-0 left-0 rotate-180" />
      <div className="container relative z-10 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
            Transforming Data into Decisions.{" "}
            <span className="text-gradient">Powering Intelligent Enterprises.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Data, AI, and Industry Solutions to drive growth, compliance, and efficiency.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/solutions">
              <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2">
                Explore Solutions <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary">
                Book a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Capabilities */}
    <SectionWrapper className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">Core Capabilities</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          End-to-end expertise across the data and AI value chain.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {capabilities.map((c) => (
            <Card key={c.title} className="bg-card border-border hover:border-primary/50 transition-all duration-300 card-glow group">
              <CardContent className="p-6 text-center">
                <c.icon className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" size={32} />
                <h3 className="font-semibold mb-2 text-sm">{c.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>

    {/* Featured Solutions */}
    <SectionWrapper className="py-24 bg-secondary/30">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Solutions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 card-glow overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="text-primary" size={28} />
                <h3 className="text-xl font-bold">Financial Crime Platform</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary text-primary-foreground font-semibold">NEW</span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                AI-powered alert management to reduce false positives by 30–50% and accelerate compliance workflows.
              </p>
              <Link to="/solutions">
                <Button variant="outline" className="gap-2 border-primary/50 text-primary hover:bg-primary/10">
                  See Platform in Action <ArrowRight size={16} />
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="bg-card border-border hover:border-accent/50 transition-all duration-300 card-glow overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-accent" size={28} />
                <h3 className="text-xl font-bold">Guest360 CDP</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Unified guest profiles with AI-driven segmentation for personalized hospitality experiences.
              </p>
              <Link to="/solutions">
                <Button variant="outline" className="gap-2 border-accent/50 text-accent hover:bg-accent/10">
                  Learn More <ArrowRight size={16} />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>

    {/* Value Proposition */}
    <SectionWrapper className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Why Clouditix</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div key={v.label} className="text-center">
              <v.icon className="mx-auto mb-4 text-primary" size={36} />
              <div className="text-4xl font-bold text-gradient mb-2">{v.stat}</div>
              <h3 className="font-semibold mb-2">{v.label}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>


    {/* Why Act Now */}
    <SectionWrapper className="py-24">
      <div className="container max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-4">Why Act Now?</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          AI is reshaping industries at an unprecedented pace. Enterprises that fail to build a strong data foundation today risk falling behind competitors who are already leveraging intelligent automation, predictive analytics, and compliant data ecosystems.
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2">
            Start a Pilot Program <ArrowRight size={18} />
          </Button>
        </Link>
      </div>
    </SectionWrapper>
  </div>
);

export default Index;
