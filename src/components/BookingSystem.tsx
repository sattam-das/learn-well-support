import { useState } from "react";
import { Calendar, Clock, User, MapPin, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const BookingSystem = () => {
  const [selectedCounselor, setSelectedCounselor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const counselors = [
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      specialization: "Anxiety & Stress Management",
      experience: "8 years",
      availability: "Mon-Fri",
      rating: 4.9
    },
    {
      id: "2",
      name: "Dr. Michael Chen",
      specialization: "Academic Performance & Study Skills",
      experience: "6 years",
      availability: "Tue-Sat",
      rating: 4.8
    },
    {
      id: "3",
      name: "Dr. Emily Rodriguez",
      specialization: "Depression & Emotional Wellness",
      experience: "10 years",
      availability: "Mon-Thu",
      rating: 4.9
    }
  ];

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", 
    "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  const handleBooking = () => {
    // Handle booking logic here
    console.log("Booking:", { selectedCounselor, selectedDate, selectedTime });
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Book a Counseling Session</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Schedule a confidential one-on-one session with our licensed mental health professionals. 
          All sessions are completely private and secure.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Counselor Selection */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Available Counselors
            </CardTitle>
            <CardDescription>
              Choose a counselor based on their specialization and availability
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {counselors.map((counselor) => (
              <div 
                key={counselor.id}
                className={`p-4 rounded-lg border cursor-pointer transition-all ${
                  selectedCounselor === counselor.id 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => setSelectedCounselor(counselor.id)}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold">{counselor.name}</h3>
                    <p className="text-sm text-muted-foreground">{counselor.specialization}</p>
                  </div>
                  <Badge variant="secondary">★ {counselor.rating}</Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {counselor.experience}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {counselor.availability}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Booking Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Schedule Session
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="date">Preferred Date</Label>
              <Input
                id="date"
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="time">Preferred Time</Label>
              <Select value={selectedTime} onValueChange={setSelectedTime}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time slot" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="session-type">Session Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select session type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="in-person">In-Person</SelectItem>
                  <SelectItem value="virtual">Virtual (Video Call)</SelectItem>
                  <SelectItem value="phone">Phone Call</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="concerns">Brief Description (Optional)</Label>
              <Textarea 
                id="concerns"
                placeholder="Share any specific concerns or topics you'd like to discuss..."
                className="min-h-[80px]"
              />
            </div>

            <div className="p-3 bg-success/10 rounded-lg border border-success/20">
              <div className="flex items-center gap-2 text-success text-sm">
                <Shield className="h-4 w-4" />
                <span className="font-medium">100% Confidential</span>
              </div>
              <p className="text-xs text-success mt-1">
                Your information and sessions are completely private and secure.
              </p>
            </div>

            <Button 
              onClick={handleBooking}
              className="w-full bg-gradient-hero hover:opacity-90"
              disabled={!selectedCounselor || !selectedDate || !selectedTime}
            >
              Book Session
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Access */}
      <Card className="bg-gradient-calm border-0">
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Need Immediate Support?</h3>
            <p className="text-muted-foreground mb-4">
              If you're experiencing a mental health crisis, please reach out immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline" className="gap-2">
                <MapPin className="h-4 w-4" />
                Campus Counseling Center
              </Button>
              <Button variant="outline" className="gap-2">
                Crisis Helpline: 988
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingSystem;