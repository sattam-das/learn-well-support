import { Brain, Heart, MessageCircle, Calendar, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-hero rounded-xl">
              <Brain className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">WellNexa</h1>
              <p className="text-sm text-muted-foreground">Student Mental Health Support</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost" className="gap-2">
              <MessageCircle className="h-4 w-4" />
              Chat Support
            </Button>
            <Button variant="ghost" className="gap-2">
              <Calendar className="h-4 w-4" />
              Book Session
            </Button>
            <Button variant="ghost" className="gap-2">
              <BookOpen className="h-4 w-4" />
              Resources
            </Button>
            <Button variant="ghost" className="gap-2">
              <Heart className="h-4 w-4" />
              Wellness
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;