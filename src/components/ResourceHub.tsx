import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, Headphones, Clock, Users, Brain } from "lucide-react";

const ResourceHub = () => {
  const resources = [
    {
      id: 1,
      title: "Stress Management Techniques",
      description: "Learn practical strategies to manage academic and personal stress effectively.",
      type: "Article",
      duration: "5 min read",
      category: "Stress",
      icon: Brain,
      difficulty: "Beginner"
    },
    {
      id: 2,
      title: "Guided Meditation for Students",
      description: "A 10-minute guided meditation session designed specifically for college students.",
      type: "Audio",
      duration: "10 min",
      category: "Meditation",
      icon: Headphones,
      difficulty: "Beginner"
    },
    {
      id: 3,
      title: "Building Healthy Study Habits",
      description: "Video guide on creating sustainable study routines that support mental well-being.",
      type: "Video",
      duration: "15 min",
      category: "Academic",
      icon: Video,
      difficulty: "Intermediate"
    },
    {
      id: 4,
      title: "Understanding Anxiety in College",
      description: "Comprehensive guide to recognizing and managing anxiety symptoms in academic settings.",
      type: "Article",
      duration: "8 min read",
      category: "Anxiety",
      icon: BookOpen,
      difficulty: "Beginner"
    },
    {
      id: 5,
      title: "Sleep Hygiene for Better Mental Health",
      description: "Evidence-based tips for improving sleep quality and its impact on mental wellness.",
      type: "Article",
      duration: "6 min read",
      category: "Sleep",
      icon: BookOpen,
      difficulty: "Beginner"
    },
    {
      id: 6,
      title: "Peer Support Group Discussion",
      description: "Join a moderated discussion with fellow students about mental health topics.",
      type: "Live Session",
      duration: "45 min",
      category: "Community",
      icon: Users,
      difficulty: "All Levels"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Stress: "bg-warning/10 text-warning border-warning/20",
      Meditation: "bg-success/10 text-success border-success/20",
      Academic: "bg-primary/10 text-primary border-primary/20",
      Anxiety: "bg-destructive/10 text-destructive border-destructive/20",
      Sleep: "bg-accent/30 text-accent-foreground border-accent",
      Community: "bg-primary/10 text-primary border-primary/20"
    };
    return colors[category as keyof typeof colors] || "bg-muted text-muted-foreground";
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Resource Hub</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Access curated mental health resources, including articles, guided meditations, 
          and educational content designed specifically for college students.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <Card key={resource.id} className="group hover:shadow-card transition-all duration-300 cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between mb-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <resource.icon className="h-5 w-5 text-primary" />
                </div>
                <Badge 
                  variant="outline" 
                  className={getCategoryColor(resource.category)}
                >
                  {resource.category}
                </Badge>
              </div>
              <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                {resource.title}
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {resource.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {resource.duration}
                </div>
                <Badge variant="secondary" className="text-xs">
                  {resource.difficulty}
                </Badge>
              </div>
              
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Access {resource.type}
                </Button>
                <Button variant="ghost" size="sm">
                  <BookOpen className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" size="lg" className="gap-2">
          <BookOpen className="h-4 w-4" />
          View All Resources
        </Button>
      </div>
    </div>
  );
};

export default ResourceHub;