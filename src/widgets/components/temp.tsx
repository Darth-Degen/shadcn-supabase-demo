import React from "react";
import { easeInOut, motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Check,
  Star,
  PlayCircle,
  ArrowUpRight,
  Github,
  Twitter,
  Linkedin,
  Mail,
  ChevronRight,
  Badge,
} from "lucide-react";
import { cn } from "@widgets/lib/utils";
import { Textarea } from "@components";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

// ---------- helpers ----------
const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeInOut, delay },
  },
});

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

// ---------- decorative components ----------
const GridBG = () => (
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]"
  >
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.15]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path
            d="M 32 0 L 0 0 0 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </pattern>
        <radialGradient id="rad" cx="50%" cy="50%" r="75%">
          <stop
            offset="0%"
            stopColor="hsl(var(--primary))"
            stopOpacity="0.15"
          />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      <rect width="100%" height="100%" fill="url(#rad)" />
    </svg>
  </div>
);

const Shine = ({ className = "" }: { className?: string }) => (
  <div
    aria-hidden
    className={cn(
      "absolute -inset-1 rounded-2xl blur-2xl opacity-30",
      className
    )}
  />
);

// ---------- main page ----------
const LandingPage = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* <GridBG />
      <Header />
      <main className="relative"> */}
      <Hero />
      <LogosStrip />
      <FeatureShowcase />
      <DeepDiveTabs />
      <Metrics />
      <Testimonials />
      <Pricing />
      <CTA />
      <Contact />
      {/* </main>
      <Footer /> */}
    </div>
  );
};

// ---------- header ----------
const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a className="group inline-flex items-center gap-2" href="#">
          <div className="relative h-7 w-7 overflow-hidden rounded-xl bg-primary/15">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-primary to-primary/60 animate-pulse" />
          </div>
          <span className="font-semibold tracking-tight">Nova</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {[
            ["Features", "#features"],
            ["Pricing", "#pricing"],
            ["Docs", "#deepdive"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <Button key={label} variant="ghost" className="rounded-xl" asChild>
              <a href={href}>{label}</a>
            </Button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="rounded-xl" asChild>
            <a href="#">Sign in</a>
          </Button>
          <Button size="sm" className="rounded-xl px-4">
            <Sparkles className="mr-2 h-4 w-4" /> Get started
          </Button>
        </div>
      </div>
      <Separator />
    </header>
  );
};

// ---------- hero ----------
const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-28 lg:px-8">
        <motion.div {...fadeUp(0.05)}>
          <Badge className="rounded-full px-3 py-1 text-sm">
            <span className="inline-flex items-center gap-1">
              <Zap className="h-4 w-4" /> New: AI-powered Workflows
            </span>
          </Badge>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Build polished products
            <span className="bg-gradient-to-br from-primary via-primary to-primary/60 bg-clip-text text-transparent">
              {" "}
              faster
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-muted-foreground">
            A component system powered by shadcn/ui. Ship beautiful interfaces
            with an elegant API, robust accessibility, and a developer
            experience that feels like magic.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button className="rounded-2xl px-6" size="lg">
              Explore Components <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="rounded-2xl" size="lg">
              <PlayCircle className="mr-2 h-4 w-4" /> Watch demo
            </Button>
          </div>
          <div className="mt-6 flex items-center gap-5 text-sm text-muted-foreground">
            <div className="inline-flex items-center gap-1">
              <ShieldCheck className="h-4 w-4" /> MIT License
            </div>
            <div className="inline-flex items-center gap-1">
              <Star className="h-4 w-4" /> 12k+ stars
            </div>
            <div className="inline-flex items-center gap-1">
              <Zap className="h-4 w-4" /> PnP ready
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.15)} className="relative">
          <Shine className="bg-primary/30" />
          <Card className="relative overflow-hidden rounded-2xl border-primary/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Live Preview
                <Badge className="rounded-full">v4</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-xl border bg-card p-4">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 md:col-span-5">
                    <div className="space-y-2">
                      {["Button", "Input", "Tabs", "Card", "Accordion"].map(
                        (item, i) => (
                          <div
                            key={item}
                            className="flex items-center justify-between rounded-lg border px-3 py-2"
                          >
                            <span>{item}</span>
                            <ChevronRight className="h-4 w-4 text-muted-foreground" />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-7">
                    <Tabs defaultValue="preview">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                        <TabsTrigger value="code">Code</TabsTrigger>
                        <TabsTrigger value="props">Props</TabsTrigger>
                      </TabsList>
                      <TabsContent value="preview" className="space-y-3">
                        <Input placeholder="Email" />
                        <Button className="w-full">Subscribe</Button>
                        <Accordion type="single" collapsible>
                          <AccordionItem value="a1">
                            <AccordionTrigger>Why shadcn?</AccordionTrigger>
                            <AccordionContent>
                              Accessible, unstyled primitives you can compose to
                              your taste.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </TabsContent>
                      <TabsContent value="code">
                        <pre className="max-h-56 overflow-auto rounded-xl bg-muted p-4 text-xs">
                          <code>{`<Button>Subscribe</Button>`}</code>
                        </pre>
                      </TabsContent>
                      <TabsContent value="props">
                        <div className="text-sm text-muted-foreground">
                          No props table yet. This is a demo.
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

// ---------- logos strip ----------
const LogosStrip = () => (
  <section className="py-10 sm:py-12">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <p className="mb-6 text-center text-sm text-muted-foreground">
        Trusted by forward-thinking teams
      </p>
      <div className="grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-6">
        {["Nova", "Apex", "Umber", "Kite", "Pulse", "Layer"].map((brand) => (
          <div
            key={brand}
            className="flex items-center justify-center rounded-xl border bg-muted/20 py-3 text-muted-foreground"
          >
            {brand}
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ---------- feature showcase ----------
const FeatureShowcase = () => (
  <section id="features" className="relative py-16 sm:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div {...fadeUp()} className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">
          Designed for speed and control
        </h2>
        <p className="mt-3 text-muted-foreground">
          Composable primitives, delightful ergonomics, and zero lock-in.
        </p>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {[
          {
            title: "Accessible",
            desc: "WCAG-friendly out of the box.",
            icon: ShieldCheck,
          },
          {
            title: "Lightning Fast",
            desc: "Small, tree-shakeable, blazing fast.",
            icon: Zap,
          },
          {
            title: "Composable",
            desc: "Compose primitives to craft unique UX.",
            icon: Sparkles,
          },
          {
            title: "Typesafe",
            desc: "Great DX with TypeScript first.",
            icon: Check,
          },
          {
            title: "Beautiful",
            desc: "New York style defaults with taste.",
            icon: Star,
          },
          {
            title: "Open Source",
            desc: "MIT licensed. Use it anywhere.",
            icon: ArrowUpRight,
          },
        ].map(({ title, desc, icon: Icon }, i) => (
          <motion.div key={title} {...fadeUp(i * 0.05)}>
            <Card className="group relative h-full overflow-hidden rounded-2xl transition-shadow hover:shadow-lg">
              <Shine className="bg-primary/20 opacity-0 transition-opacity group-hover:opacity-40" />
              <CardHeader>
                <CardTitle className="inline-flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

// ---------- deep dive tabs ----------
const DeepDiveTabs = () => (
  <section id="deepdive" className="py-16 sm:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <h3 className="text-2xl font-semibold">
            From prototype to production
          </h3>
          <p className="mt-2 text-muted-foreground">
            Switch between views to see how components adapt.
          </p>
        </div>
        <div className="md:col-span-2">
          <Tabs defaultValue="dev" className="w-full">
            <TabsList>
              <TabsTrigger value="dev">Developer</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="ops">Ops</TabsTrigger>
            </TabsList>
            <TabsContent value="dev" className="mt-4">
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-base">CLI scaffold</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="max-h-80 overflow-auto rounded-xl bg-muted p-4 text-xs">
                    <code>{`npx shadcn-ui add button input tabs card accordion`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="design" className="mt-4">
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-base">Design tokens</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-3">
                    {["--radius", "--primary", "--muted"].map((t) => (
                      <div key={t} className="rounded-xl border p-3">
                        <div className="h-8 w-full rounded-md bg-primary/20" />
                        <div className="mt-2 text-xs text-muted-foreground">
                          {t}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="ops" className="mt-4">
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-base">Ship confidently</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {[
                      "Accessible by default",
                      "Light/Dark modes",
                      "First-class TypeScript",
                      "Tree-shakeable imports",
                    ].map((li) => (
                      <li key={li} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> {li}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  </section>
);

// ---------- metrics ----------
const Metric = ({ value, label }: { value: string; label: string }) => (
  <div className="rounded-2xl border bg-card p-6 text-center shadow-sm">
    <div className="text-3xl font-semibold tracking-tight">{value}</div>
    <div className="mt-1 text-sm text-muted-foreground">{label}</div>
  </div>
);

const Metrics = () => (
  <section className="py-14">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Metric value="12k+" label="GitHub stars" />
        <Metric value="150+" label="Components" />
        <Metric value="99.9%" label="Uptime" />
        <Metric value="2x" label="Faster shipping" />
      </div>
    </div>
  </section>
);

// ---------- testimonials ----------
const TestimonialCard = ({
  name,
  role,
  quote,
}: {
  name: string;
  role: string;
  quote: string;
}) => (
  <Card className="h-full rounded-2xl">
    <CardContent className="space-y-4 p-6">
      <div className="flex items-center gap-3">
        <Avatar className="h-9 w-9">
          <AvatarFallback>
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium leading-none">{name}</div>
          <div className="text-xs text-muted-foreground">{role}</div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">“{quote}”</p>
    </CardContent>
  </Card>
);

const Testimonials = () => (
  <section className="py-16">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h3 className="text-3xl font-semibold">Loved by builders</h3>
        <p className="mt-2 text-muted-foreground">
          What developers say about Nova.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            name: "Wallace Palmer",
            role: "Frontend Engineer",
            quote:
              "The DX is stellar. I shipped a polished MVP in days, not weeks.",
          },
          {
            name: "Ada Lovelace",
            role: "Product Designer",
            quote: "Primitives that respect design systems—chef’s kiss.",
          },
          {
            name: "Linus T.",
            role: "Tech Lead",
            quote: "Composable and predictable. Our team velocity jumped.",
          },
        ].map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
    </div>
  </section>
);

// ---------- pricing ----------
const Tier = ({
  name,
  price,
  features,
  cta = "Get started",
  highlight = false,
}: {
  name: string;
  price: string;
  features: string[];
  cta?: string;
  highlight?: boolean;
}) => (
  <Card
    className={cn(
      "relative h-full rounded-2xl",
      highlight && "border-primary shadow-md"
    )}
  >
    {highlight && (
      <Badge className="absolute -top-3 left-6 rounded-full">Popular</Badge>
    )}
    <CardHeader>
      <CardTitle>{name}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-6">
      <div className="text-4xl font-semibold">{price}</div>
      <ul className="space-y-2 text-sm">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary" /> {f}
          </li>
        ))}
      </ul>
      <Button className="w-full rounded-xl">{cta}</Button>
    </CardContent>
  </Card>
);

const Pricing = () => (
  <section id="pricing" className="py-16">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h3 className="text-3xl font-semibold">Simple, transparent pricing</h3>
        <p className="mt-2 text-muted-foreground">
          Start free. Scale when you’re ready.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        <Tier
          name="Starter"
          price="$0"
          features={["All core components", "MIT license", "Basic support"]}
        />
        <Tier
          name="Pro"
          price="$19"
          features={["All Starter", "Advanced components", "Theme presets"]}
          highlight
        />
        <Tier
          name="Enterprise"
          price="Custom"
          features={["Everything in Pro", "Priority support", "Design review"]}
          cta="Contact sales"
        />
      </div>
    </div>
  </section>
);

// ---------- call to action ----------
const CTA = () => (
  <section className="relative py-20">
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <Card className="relative overflow-hidden rounded-3xl border-primary/20">
        <Shine className="bg-primary/30" />
        <CardContent className="relative grid gap-6 p-8 md:grid-cols-2 md:items-center">
          <div>
            <h4 className="text-pretty text-2xl font-semibold sm:text-3xl">
              Level up your product with Nova
            </h4>
            <p className="mt-2 text-muted-foreground">
              Drop-in components with first-class accessibility and a delightful
              API.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button size="lg" className="rounded-2xl">
                Start building <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-2xl">
                View on GitHub <Github className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="rounded-2xl border bg-card p-4">
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                ["Accessibility", "AA+"],
                ["Bundle size", "tiny"],
                ["DX", "A+"],
                ["Customization", "full"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl border p-3">
                  <div className="text-xs text-muted-foreground">{k}</div>
                  <div className="text-lg font-semibold">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);

// ---------- contact ----------
const Contact = () => (
  <section id="contact" className="py-20">
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h4 className="text-2xl font-semibold">Tell us about your project</h4>
          <p className="mt-2 text-muted-foreground">
            We’ll get back within 1–2 business days.
          </p>
          <div className="mt-6 space-y-4">
            <Input placeholder="Your name" />
            <Input placeholder="Email" type="email" />
            <Textarea placeholder="What are you building?" rows={6} />
            <Button className="rounded-xl">Send message</Button>
          </div>
        </div>
        <div className="rounded-2xl border p-6">
          <h5 className="font-medium">Why choose Nova?</h5>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {[
              "Composable primitives you own",
              "Great accessibility by default",
              "Typesafe from day one",
              "Active community & docs",
            ].map((li) => (
              <li key={li} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" /> {li}
              </li>
            ))}
          </ul>
          <Separator className="my-6" />
          <div className="flex items-center gap-3 text-sm">
            <Mail className="h-4 w-4" /> support@n0va.dev
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ---------- footer ----------
const Footer = () => (
  <footer className="border-t">
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
      <div>
        <div className="flex items-center gap-2">
          <div className="relative h-7 w-7 overflow-hidden rounded-xl bg-primary/15">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-primary to-primary/60 animate-pulse" />
          </div>
          <span className="font-semibold tracking-tight">Nova</span>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          A sleek, composable UI kit built on shadcn/ui.
        </p>
        <div className="mt-4 flex items-center gap-2">
          <Button
            size="icon"
            variant="ghost"
            className="rounded-xl"
            aria-label="Twitter"
          >
            <Twitter className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="rounded-xl"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="rounded-xl"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div>
        <h6 className="font-medium">Product</h6>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#deepdive">Docs</a>
          </li>
        </ul>
      </div>
      <div>
        <h6 className="font-medium">Company</h6>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li>About</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </div>
      <div>
        <h6 className="font-medium">Resources</h6>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li>Support</li>
          <li>Status</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
    <div className="border-t py-6 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} Nova UI. All rights reserved.
    </div>
  </footer>
);

export default LandingPage;
