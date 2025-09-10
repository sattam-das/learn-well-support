import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, AlertTriangle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type?: 'normal' | 'crisis' | 'resource';
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm your mental health support assistant. I'm here to listen and help you with any concerns you might have. How are you feeling today?",
      sender: 'bot',
      timestamp: new Date(),
      type: 'normal'
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const detectCrisisKeywords = (message: string): boolean => {
    const crisisKeywords = [
      'suicide', 'kill myself', 'end it all', 'want to die', 'hurt myself',
      'no point', 'give up', 'hopeless', 'worthless', 'can\'t go on'
    ];
    return crisisKeywords.some(keyword => 
      message.toLowerCase().includes(keyword.toLowerCase())
    );
  };

  const generateBotResponse = (userMessage: string): Message => {
    const isCrisis = detectCrisisKeywords(userMessage);
    
    if (isCrisis) {
      return {
        id: Date.now().toString(),
        content: "I'm very concerned about what you've shared. These feelings are serious, and you don't have to face them alone. Please consider reaching out to a crisis helpline immediately: National Suicide Prevention Lifeline (988) or contact your campus counseling center. Would you like me to help you find immediate professional support?",
        sender: 'bot',
        timestamp: new Date(),
        type: 'crisis'
      };
    }

    // Simple response generation based on keywords
    const responses = {
      stressed: "I understand you're feeling stressed. That's completely normal for students. Some effective stress management techniques include deep breathing exercises, breaking tasks into smaller steps, and taking regular breaks. Would you like to try a quick breathing exercise together?",
      anxious: "Anxiety can feel overwhelming, but there are ways to manage it. Try the 5-4-3-2-1 grounding technique: name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste. This can help bring you back to the present moment.",
      depressed: "I hear that you're going through a difficult time. Depression affects many students, and seeking support is a sign of strength. Have you considered speaking with a counselor? I can help you find resources on campus.",
      overwhelmed: "Feeling overwhelmed is common when juggling academic and personal responsibilities. Let's break down what's on your plate. What's the most pressing concern you're facing right now?",
      lonely: "Loneliness can be particularly challenging in college. Building connections takes time, but there are ways to start. Have you considered joining study groups, clubs, or campus activities that align with your interests?",
      sleep: "Sleep issues can significantly impact your mental health and academic performance. Good sleep hygiene includes maintaining a consistent sleep schedule, avoiding screens before bed, and creating a calming bedtime routine."
    };

    const lowerMessage = userMessage.toLowerCase();
    for (const [keyword, response] of Object.entries(responses)) {
      if (lowerMessage.includes(keyword)) {
        return {
          id: Date.now().toString(),
          content: response,
          sender: 'bot',
          timestamp: new Date(),
          type: 'normal'
        };
      }
    }

    // Default responses
    const defaultResponses = [
      "Thank you for sharing that with me. Can you tell me more about how this is affecting your daily life?",
      "I hear you. It sounds like you're dealing with something challenging. What kind of support would be most helpful right now?",
      "That sounds difficult to handle. Remember that seeking help is a sign of strength. What steps do you think might help you feel better?",
      "I appreciate you opening up about this. Many students face similar challenges. Would you like to explore some coping strategies together?"
    ];

    return {
      id: Date.now().toString(),
      content: defaultResponses[Math.floor(Math.random() * defaultResponses.length)],
      sender: 'bot',
      timestamp: new Date(),
      type: 'normal'
    };
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = generateBotResponse(inputMessage);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Card className="h-[600px] flex flex-col shadow-card">
      <div className="p-4 border-b bg-gradient-chat rounded-t-lg">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary rounded-full">
            <Bot className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Mental Health Assistant</h3>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              Available 24/7 • Confidential
            </p>
          </div>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.sender === 'bot' && (
                <div className="p-2 bg-primary/10 rounded-full flex-shrink-0 h-fit">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
              )}
              
              <div className={`max-w-[80%] ${message.sender === 'user' ? 'order-1' : ''}`}>
                <div
                  className={`p-3 rounded-2xl shadow-chat ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground ml-auto'
                      : message.type === 'crisis'
                      ? 'bg-destructive/10 border border-destructive/20'
                      : 'bg-card border'
                  }`}
                >
                  {message.type === 'crisis' && (
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-destructive" />
                      <Badge variant="destructive" className="text-xs">Crisis Support</Badge>
                    </div>
                  )}
                  <p className={`text-sm leading-relaxed ${
                    message.sender === 'user' 
                      ? 'text-primary-foreground' 
                      : message.type === 'crisis'
                      ? 'text-destructive'
                      : 'text-card-foreground'
                  }`}>
                    {message.content}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground mt-1 px-3">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>

              {message.sender === 'user' && (
                <div className="p-2 bg-primary/10 rounded-full flex-shrink-0 h-fit">
                  <User className="h-4 w-4 text-primary" />
                </div>
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-3 justify-start">
              <div className="p-2 bg-primary/10 rounded-full flex-shrink-0 h-fit">
                <Bot className="h-4 w-4 text-primary" />
              </div>
              <div className="bg-card border p-3 rounded-2xl shadow-chat">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      <div className="p-4 border-t bg-muted/30">
        <div className="flex gap-2">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Share how you're feeling... (Press Enter to send)"
            className="flex-1 bg-background"
          />
          <Button 
            onClick={handleSendMessage}
            disabled={!inputMessage.trim()}
            className="bg-gradient-hero hover:opacity-90 transition-opacity"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          <Heart className="h-3 w-3 inline mr-1" />
          Your conversations are confidential and secure
        </p>
      </div>
    </Card>
  );
};

export default ChatBot;