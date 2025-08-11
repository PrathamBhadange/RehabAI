import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Brain, 
  Users, 
  Target, 
  Award, 
  Globe, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  MapPin,
  Calendar,
  Star,
  Zap,
  Shield,
  Activity,
  Stethoscope,
  Building,
  GraduationCap,
  BookOpen,
  Lightbulb,
  Coffee,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';

const stats = [
  { number: "10,000+", label: "Patients Served", icon: Users },
  { number: "500+", label: "Healthcare Providers", icon: Stethoscope },
  { number: "98%", label: "Success Rate", icon: TrendingUp },
  { number: "30%", label: "Faster Recovery", icon: Zap }
];

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "CEO & Co-Founder",
    background: "Former Head of Digital Health at Stanford Medicine",
    image: "👩‍⚕️",
    bio: "15+ years in rehabilitation medicine and digital health innovation",
    education: "MD, Stanford University • MBA, Harvard Business School",
    linkedin: "#",
    expertise: ["Digital Health", "Rehabilitation Medicine", "AI in Healthcare"]
  },
  {
    name: "Michael Rodriguez",
    role: "CTO & Co-Founder",
    background: "Former Principal Engineer at Google Health",
    image: "👨‍💻",
    bio: "Expert in AI/ML and computer vision with 12+ years at tech giants",
    education: "PhD Computer Science, MIT • MS AI, Carnegie Mellon",
    linkedin: "#",
    expertise: ["Computer Vision", "Machine Learning", "Healthcare AI"]
  },
  {
    name: "Dr. Amanda Foster",
    role: "Chief Medical Officer",
    background: "Board-certified Physical Medicine & Rehabilitation",
    image: "👩‍⚕️",
    bio: "20+ years treating patients and developing rehabilitation protocols",
    education: "MD, Johns Hopkins • Residency, Mayo Clinic",
    linkedin: "#",
    expertise: ["Physical Medicine", "Rehabilitation", "Clinical Research"]
  },
  {
    name: "James Park",
    role: "VP of Engineering",
    background: "Former Lead at Tesla Autopilot AI Team",
    image: "👨‍💼",
    bio: "Specialized in real-time AI systems and mobile applications",
    education: "MS Computer Engineering, UC Berkeley",
    linkedin: "#",
    expertise: ["AI Systems", "Mobile Development", "Real-time Processing"]
  },
  {
    name: "Dr. Maria Gonzalez",
    role: "Head of Clinical Research",
    background: "Former Research Director at NIH",
    image: "👩‍🔬",
    bio: "Leading clinical trials and evidence-based protocol development",
    education: "PhD Biomedical Engineering, Duke • Postdoc, NIH",
    linkedin: "#",
    expertise: ["Clinical Trials", "Biomedical Research", "Evidence-based Medicine"]
  },
  {
    name: "David Kim",
    role: "VP of Product",
    background: "Former Product Lead at Fitbit Health",
    image: "👨‍💼",
    bio: "Expert in healthcare product design and user experience",
    education: "MBA Stanford • BS Design, RISD",
    linkedin: "#",
    expertise: ["Product Strategy", "UX Design", "Healthcare Products"]
  }
];

const timeline = [
  {
    year: "2020",
    title: "Company Founded",
    description: "RehabAI was founded by a team of physicians and AI researchers at Stanford",
    icon: Lightbulb
  },
  {
    year: "2021",
    title: "MVP Development",
    description: "Built first AI movement analysis prototype with 50 pilot patients",
    icon: Brain
  },
  {
    year: "2022",
    title: "Clinical Trials",
    description: "Completed successful clinical trials showing 30% faster recovery times",
    icon: Stethoscope
  },
  {
    year: "2023",
    title: "FDA Clearance",
    description: "Received FDA clearance for AI-powered rehabilitation assessment",
    icon: Award
  },
  {
    year: "2024",
    title: "Scale & Growth",
    description: "Serving 10,000+ patients across 500+ healthcare providers nationwide",
    icon: TrendingUp
  }
];

const values = [
  {
    title: "Patient-First",
    description: "Every decision is made with patient outcomes and experience as the top priority",
    icon: Heart
  },
  {
    title: "Scientific Rigor",
    description: "All features are backed by clinical research and evidence-based medicine",
    icon: BookOpen
  },
  {
    title: "Innovation",
    description: "Continuously pushing the boundaries of what's possible in rehabilitation",
    icon: Zap
  },
  {
    title: "Accessibility",
    description: "Making high-quality rehabilitation care accessible to everyone, everywhere",
    icon: Globe
  },
  {
    title: "Privacy & Security",
    description: "Maintaining the highest standards of data protection and patient privacy",
    icon: Shield
  },
  {
    title: "Collaboration",
    description: "Working closely with healthcare providers to improve the entire care ecosystem",
    icon: Users
  }
];

const investors = [
  { name: "Andreessen Horowitz", type: "Lead Series A", logo: "🏢" },
  { name: "GV (Google Ventures)", type: "Series A", logo: "🔍" },
  { name: "Bessemer Venture Partners", type: "Series A", logo: "💼" },
  { name: "Stanford Health Care", type: "Strategic", logo: "🏥" },
  { name: "Mayo Clinic Ventures", type: "Strategic", logo: "⚕️" },
  { name: "Kaiser Permanente", type: "Strategic", logo: "🏥" }
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 medical-gradient-subtle">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-medical-blue/10 text-medical-blue border-medical-blue/20">
                About RehabAI
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-medical-navy">
                Revolutionizing Rehabilitation with
                <span className="text-medical-blue"> Artificial Intelligence</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We're on a mission to make high-quality rehabilitation accessible to everyone, 
                combining cutting-edge AI technology with clinical expertise to improve patient outcomes worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="medical-gradient text-white" asChild>
                  <Link to="/careers">Join Our Mission <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white" asChild>
                  <Link to="/research">Our Research</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <Card key={index} className="text-center p-4">
                      <Icon className="h-8 w-8 text-medical-blue mx-auto mb-2" />
                      <div className="text-2xl font-bold text-medical-navy">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 border-2 border-medical-blue/20">
              <CardHeader className="text-center pb-6">
                <Target className="h-12 w-12 text-medical-blue mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground text-center leading-relaxed">
                  To democratize access to high-quality rehabilitation care by empowering patients 
                  and healthcare providers with AI-powered tools that deliver better outcomes, 
                  reduce costs, and improve quality of life.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-medical-green/20">
              <CardHeader className="text-center pb-6">
                <Globe className="h-12 w-12 text-medical-green mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground text-center leading-relaxed">
                  A world where every person has access to personalized, effective rehabilitation 
                  care regardless of their location, economic status, or physical limitations, 
                  powered by intelligent technology and human expertise.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-medical-navy mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From startup to transforming healthcare - see how we've grown
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-medical-blue/20"></div>
            <div className="space-y-12">
              {timeline.map((milestone, index) => {
                const Icon = milestone.icon;
                return (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                      <Card className="inline-block max-w-md">
                        <CardHeader>
                          <div className="flex items-center space-x-3">
                            {index % 2 === 0 ? (
                              <>
                                <div>
                                  <Badge className="bg-medical-blue/10 text-medical-blue">{milestone.year}</Badge>
                                  <CardTitle className="text-lg mt-2">{milestone.title}</CardTitle>
                                </div>
                                <Icon className="h-8 w-8 text-medical-blue" />
                              </>
                            ) : (
                              <>
                                <Icon className="h-8 w-8 text-medical-green" />
                                <div>
                                  <Badge className="bg-medical-green/10 text-medical-green">{milestone.year}</Badge>
                                  <CardTitle className="text-lg mt-2">{milestone.title}</CardTitle>
                                </div>
                              </>
                            )}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="relative z-10">
                      <div className="h-4 w-4 bg-white border-4 border-medical-blue rounded-full"></div>
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-medical-navy mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              World-class experts in healthcare, AI, and technology working together to transform rehabilitation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-base font-medium text-medical-blue">
                    {member.role}
                  </CardDescription>
                  <Badge variant="outline" className="text-xs">
                    {member.background}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground text-center">{member.bio}</p>
                  
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-medical-navy">Education:</div>
                    <div className="text-xs text-muted-foreground">{member.education}</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-medical-navy">Expertise:</div>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-center space-x-3 pt-2">
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={member.linkedin}>
                        <Linkedin className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-medical-light-blue">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-medical-navy mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="h-12 w-12 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-medical-blue" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investors & Partners */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-medical-navy mb-4">
              Backed by Leading Investors
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Supported by top-tier venture capital and strategic healthcare partners
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investors.map((investor, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">{investor.logo}</div>
                <div className="font-semibold text-medical-navy">{investor.name}</div>
                <div className="text-sm text-muted-foreground">{investor.type}</div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="inline-block p-6 border-2 border-medical-green/20 bg-medical-green/5">
              <div className="text-center space-y-2">
                <Award className="h-8 w-8 text-medical-green mx-auto" />
                <div className="font-semibold text-medical-navy">Series A: $25M Raised</div>
                <div className="text-sm text-muted-foreground">
                  Funding to accelerate AI research and global expansion
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-medical-navy">
                Where We're Located
              </h2>
              <p className="text-xl text-muted-foreground">
                Headquartered in the heart of Silicon Valley with a global remote-first team
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-medical-blue mt-1" />
                  <div>
                    <div className="font-semibold text-medical-navy">Headquarters</div>
                    <div className="text-muted-foreground">
                      450 Serra Mall, Stanford, CA 94305<br />
                      Stanford Research Park
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Building className="h-5 w-5 text-medical-green mt-1" />
                  <div>
                    <div className="font-semibold text-medical-navy">R&D Center</div>
                    <div className="text-muted-foreground">
                      Boston, MA - Partnership with MIT<br />
                      Advanced AI Research Lab
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Globe className="h-5 w-5 text-medical-blue mt-1" />
                  <div>
                    <div className="font-semibold text-medical-navy">Global Team</div>
                    <div className="text-muted-foreground">
                      Remote-first with team members in<br />
                      15+ countries across 4 continents
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
                <CardDescription>
                  We'd love to hear from you. Reach out to learn more about our mission.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="justify-start" asChild>
                    <Link to="/careers">
                      <Users className="mr-2 h-4 w-4" />
                      Careers
                    </Link>
                  </Button>
                  <Button variant="outline" className="justify-start" asChild>
                    <Link to="/press">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Press Kit
                    </Link>
                  </Button>
                  <Button variant="outline" className="justify-start" asChild>
                    <Link to="/investors">
                      <TrendingUp className="mr-2 h-4 w-4" />
                      Investors
                    </Link>
                  </Button>
                  <Button variant="outline" className="justify-start" asChild>
                    <Link to="/research">
                      <GraduationCap className="mr-2 h-4 w-4" />
                      Research
                    </Link>
                  </Button>
                </div>
                
                <div className="pt-4 border-t">
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>Email: hello@rehabai.com</div>
                    <div>Phone: 1-800-REHAB-AI</div>
                    <div>Press: press@rehabai.com</div>
                  </div>
                </div>
                
                <div className="flex space-x-4 pt-4">
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="#">
                      <Twitter className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="#">
                      <Linkedin className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="#">
                      <Github className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 medical-gradient text-white">
        <div className="container text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Join Us in Transforming Healthcare
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Whether you're a patient seeking better care, a provider looking to improve outcomes, 
            or a talented individual wanting to make a difference - we'd love to connect.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-medical-blue hover:bg-gray-100" asChild>
              <Link to="/careers">Explore Careers</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-medical-blue" asChild>
              <Link to="/start-recovery">Try Our Platform</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
