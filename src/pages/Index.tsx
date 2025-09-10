import { useState } from "react";
import { MessageCircle, Calendar, BookOpen, Users, ArrowRight, Shield, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import ChatBot from "@/components/ChatBot";
import ResourceHub from "@/components/ResourceHub";
import BookingSystem from "@/components/BookingSystem";
import heroImage from "@/assets/hero-mental-health.jpg";

const Index = () => {
  const [activeTab, setActiveTab] = useState("chat");

  const features = [
    {
      icon: MessageCircle,
      title: "AI-Guided Support",
      description: "24/7 confidential chat support with crisis detection and personalized coping strategies.",
      color: "text-primary"
    },
    {
      icon: Calendar,
      title: "Professional Counseling",
      description: "Book sessions with licensed counselors specializing in student mental health.",
      color: "text-success"
    },
    {
      icon: BookOpen,
      title: "Resource Library",
      description: "Access curated articles, guided meditations, and wellness tools in multiple languages.",
      color: "text-warning"
    },
    {
      icon: Users,
      title: "Peer Support",
      description: "Connect with fellow students in moderated support groups and forums.",
      color: "text-destructive"
    }
  ];

  const stats = [
    { number: "24/7", label: "Available Support" },
    { number: "100%", label: "Confidential" },
    { number: "15+", label: "Expert Counselors" },
    { number: "500+", label: "Students Helped" }
  ];

  return (
    <div className="min-h-screen bg-gradient-calm">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Mental Health
              <span className="block text-primary-glow">Matters</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              A comprehensive digital support system designed specifically for college students. 
              Get confidential help, professional counseling, and peer support when you need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3"
                onClick={() => setActiveTab("chat")}
              >
                Start Chatting Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 px-8 py-3"
                onClick={() => setActiveTab("booking")}
              >
                Book a Session
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Support System</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform combines AI technology, professional expertise, and peer community 
              to provide holistic mental health support for students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 group">
                <CardHeader>
                  <div className="mx-auto p-4 bg-gradient-chat rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Application Tabs */}
      <section className="py-20 bg-white/30">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
              <TabsTrigger value="chat" className="gap-2">
                <MessageCircle className="h-4 w-4" />
                Chat
              </TabsTrigger>
              <TabsTrigger value="resources" className="gap-2">
                <BookOpen className="h-4 w-4" />
                Resources
              </TabsTrigger>
              <TabsTrigger value="booking" className="gap-2">
                <Calendar className="h-4 w-4" />
                Book
              </TabsTrigger>
            </TabsList>

            <TabsContent value="chat" className="mt-0">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">AI Mental Health Assistant</h3>
                  <p className="text-muted-foreground">
                    Start a confidential conversation with our AI assistant trained in mental health support.
                  </p>
                </div>
                <ChatBot />
              </div>
            </TabsContent>

            <TabsContent value="resources" className="mt-0">
              <ResourceHub />
            </TabsContent>

            <TabsContent value="booking" className="mt-0">
              <BookingSystem />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Trust & Privacy Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Your Privacy & Safety</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="p-4 bg-success/10 rounded-full mb-4">
                  <Shield className="h-8 w-8 text-success" />
                </div>
                <h3 className="font-semibold mb-2">100% Confidential</h3>
                <p className="text-sm text-muted-foreground">
                  All conversations and data are encrypted and completely private.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">24/7 Availability</h3>
                <p className="text-sm text-muted-foreground">
                  Support is available whenever you need it, day or night.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-4 bg-destructive/10 rounded-full mb-4">
                  <Heart className="h-8 w-8 text-destructive" />
                </div>
                <h3 className="font-semibold mb-2">Professional Care</h3>
                <p className="text-sm text-muted-foreground">
                  Licensed counselors and evidence-based resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">MindCare</h3>
            <p className="text-muted-foreground mb-4">
              Digital Mental Health Support for Students
            </p>
            <div className="flex justify-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Crisis Resources</a>
              <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
            </div>
            <div className="mt-6 text-xs text-muted-foreground">
              <p>If you're experiencing a mental health crisis, please contact emergency services or call 988.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;