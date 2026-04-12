import SectionWrapper from "@/components/SectionWrapper";
import { Search, PenTool, Rocket } from "lucide-react";

const phases = [
  {
    icon: Search,
    phase: "Phase 1",
    title: "Discover & Align",
    desc: "We immerse ourselves in your business context to understand challenges, opportunities, and strategic objectives.",
    activities: [
      "Stakeholder interviews & workshops",
      "Current-state assessment",
      "Use case prioritization",
      "Quick-win identification",
    ],
  },
  {
    icon: PenTool,
    phase: "Phase 2",
    title: "Design & Build",
    desc: "We architect solutions and build iteratively, ensuring alignment with your goals at every step.",
    activities: [
      "Solution architecture design",
      "Agile development sprints",
      "Data pipeline implementation",
      "Model training & validation",
    ],
  },
  {
    icon: Rocket,
    phase: "Phase 3",
    title: "Scale & Optimize",
    desc: "We operationalize solutions, enable your teams, and continuously optimize for sustained value.",
    activities: [
      "Production deployment",
      "Knowledge transfer & training",
      "Performance monitoring",
      "Continuous improvement",
    ],
  },
];

const Approach = () => (
  <div className="min-h-screen pt-16">
    <section className="hero-gradient py-24">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Approach</h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          A proven three-phase model that balances speed with precision, delivering outcomes that stick.
        </p>
      </div>
    </section>

    <SectionWrapper className="py-24">
      <div className="container max-w-4xl">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 hidden md:block" />

          <div className="flex flex-col gap-16">
            {phases.map((p, i) => (
              <div key={p.title} className="flex gap-8 items-start">
                {/* Icon dot */}
                <div className="hidden md:flex shrink-0 w-12 h-12 rounded-full bg-secondary border-2 border-primary items-center justify-center z-10">
                  <p.icon className="text-primary" size={20} />
                </div>

                <div className="flex-1">
                  <span className="text-xs text-primary font-semibold uppercase tracking-widest">{p.phase}</span>
                  <h3 className="text-2xl font-bold mt-1 mb-3">{p.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {p.activities.map((a) => (
                      <div key={a} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {a}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  </div>
);

export default Approach;
