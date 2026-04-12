import SectionWrapper from "@/components/SectionWrapper";
import { Target, Award, Users, TrendingUp } from "lucide-react";

const strengths = [
  { icon: Target, title: "Outcome-Focused", desc: "We measure success by business impact, not deliverables. Every engagement is tied to clear, measurable outcomes." },
  { icon: Award, title: "Senior Practitioners", desc: "Our team brings decades of experience from leading consulting firms and technology companies." },
  { icon: Users, title: "Collaborative Partnership", desc: "We work alongside your teams, not in silos. Knowledge transfer is built into every engagement." },
  { icon: TrendingUp, title: "Industry Depth", desc: "Deep domain expertise in Banking, Financial Services, Hospitality, and SaaS verticals." },
];

const About = () => (
  <div className="min-h-screen pt-16">
    <section className="hero-gradient py-24">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Clouditix</h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          We are a specialized Data & AI consulting firm helping mid to large enterprises transform into intelligent, data-driven organizations.
        </p>
      </div>
    </section>

    <SectionWrapper className="py-24">
      <div className="container max-w-3xl">
        <h2 className="text-2xl font-bold mb-6">Who We Are</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Clouditix was founded with a clear mission: to bridge the gap between enterprise data ambitions and real-world outcomes. We combine strategic consulting rigor with hands-on technical depth to help organizations unlock the full potential of their data assets.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Our team comprises seasoned professionals from top-tier consulting firms, global banks, and leading technology companies. We bring a rare blend of business acumen and engineering excellence to every engagement.
        </p>
      </div>
    </SectionWrapper>

    <SectionWrapper className="py-24 bg-secondary/30">
      <div className="container">
        <h2 className="text-2xl font-bold text-center mb-12">What Sets Us Apart</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((s) => (
            <div key={s.title} className="p-6 rounded-lg border border-border bg-card text-center">
              <s.icon className="mx-auto mb-4 text-primary" size={32} />
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  </div>
);

export default About;
