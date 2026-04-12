import { Card, CardContent } from "@/components/ui/card";
import SectionWrapper from "@/components/SectionWrapper";
import { Users, Fingerprint, BarChart3, Heart } from "lucide-react";

const guest360Features = [
  { icon: Users, title: "Unified Guest Profile", desc: "Consolidate data from PMS, POS, loyalty, and digital touchpoints." },
  { icon: Fingerprint, title: "Identity Resolution", desc: "Probabilistic and deterministic matching across channels." },
  { icon: BarChart3, title: "AI-Driven Segmentation", desc: "Dynamic micro-segments for personalized engagement." },
  { icon: Heart, title: "Lifecycle Engagement", desc: "Pre-stay, during-stay, and post-stay orchestration." },
];

const Guest360 = () => (
  <div className="min-h-screen pt-16">
    <section className="hero-gradient py-24 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <Users className="text-accent" size={32} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl">
          Guest360 — Hospitality CDP
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
          A unified Customer Data Platform designed for hospitality, delivering personalized guest experiences across every touchpoint.
        </p>
      </div>
    </section>

    <SectionWrapper className="py-24">
      <div className="container">
        <h2 className="text-2xl font-bold mb-10 text-center">Key Capabilities</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {guest360Features.map((f) => (
            <Card key={f.title} className="bg-card border-border hover:border-accent/50 transition-all card-glow group">
              <CardContent className="p-6">
                <f.icon className="text-accent mb-3 group-hover:scale-110 transition-transform" size={28} />
                <h3 className="font-semibold mb-2 text-sm">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  </div>
);

export default Guest360;
