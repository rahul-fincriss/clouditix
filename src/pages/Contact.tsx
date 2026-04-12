import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SectionWrapper from "@/components/SectionWrapper";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Message sent", description: "We'll get back to you within 24 hours." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="hero-gradient py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Start Your Transformation Journey</h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Let's discuss how Clouditix can help you unlock the power of your data.
          </p>
        </div>
      </section>

      <SectionWrapper className="py-24">
        <div className="container max-w-xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Name</label>
              <Input required placeholder="Your name" className="bg-secondary border-border" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Email</label>
              <Input required type="email" placeholder="you@company.com" className="bg-secondary border-border" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Company</label>
              <Input placeholder="Company name" className="bg-secondary border-border" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Area of Interest</label>
              <Select>
                <SelectTrigger className="bg-secondary border-border">
                  <SelectValue placeholder="Select an area" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="data-strategy">Data Strategy</SelectItem>
                  <SelectItem value="ai-analytics">AI & Analytics</SelectItem>
                  <SelectItem value="financial-crime">Financial Crime Platform</SelectItem>
                  <SelectItem value="guest360">Guest360 CDP</SelectItem>
                  <SelectItem value="cloud">Cloud Transformation</SelectItem>
                  <SelectItem value="governance">Data Governance</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Message</label>
              <Textarea required placeholder="Tell us about your challenges..." className="bg-secondary border-border min-h-[120px]" />
            </div>
            <Button type="submit" size="lg" disabled={sending} className="bg-primary hover:bg-primary/90 gap-2">
              {sending ? "Sending..." : "Send Message"} <Send size={18} />
            </Button>
          </form>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Contact;
