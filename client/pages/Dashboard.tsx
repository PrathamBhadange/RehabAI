import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Activity, 
  User, 
  Calendar, 
  TrendingUp, 
  Video, 
  Settings,
  LogOut,
  Bell,
  Search,
  Plus,
  Eye,
  Edit,
  BarChart3,
  Clock,
  Users,
  Target,
  Award,
  MessageCircle,
  Phone,
  ChevronRight,
  Play,
  Pause,
  CheckCircle,
  AlertCircle,
  Heart,
  Brain,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data for demonstration
const mockPatients = [
  {
    id: 1,
    name: "Sarah Johnson",
    condition: "Knee Replacement Recovery",
    progress: 78,
    nextSession: "Today, 2:00 PM",
    status: "active",
    lastActivity: "2 hours ago"
  },
  {
    id: 2,
    name: "Michael Chen",
    condition: "Shoulder Surgery Recovery",
    progress: 45,
    nextSession: "Tomorrow, 10:00 AM",
    status: "active",
    lastActivity: "5 hours ago"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    condition: "Hip Replacement Recovery",
    progress: 92,
    nextSession: "Friday, 3:00 PM",
    status: "completing",
    lastActivity: "1 day ago"
  },
  {
    id: 4,
    name: "David Kim",
    condition: "Stroke Recovery",
    progress: 34,
    nextSession: "Monday, 11:00 AM",
    status: "active",
    lastActivity: "3 hours ago"
  }
];

const mockAppointments = [
  {
    id: 1,
    patient: "Sarah Johnson",
    time: "2:00 PM",
    type: "Progress Review",
    status: "upcoming"
  },
  {
    id: 2,
    patient: "Michael Chen",
    time: "3:30 PM",
    type: "Initial Assessment",
    status: "upcoming"
  },
  {
    id: 3,
    patient: "Lisa Wang",
    time: "4:00 PM",
    type: "Follow-up",
    status: "completed"
  }
];

const mockAnalytics = {
  totalPatients: 247,
  activeThisWeek: 89,
  completionRate: 94,
  averageProgress: 67,
  sessionsToday: 12,
  satisfactionScore: 4.8
};

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showPatientModal, setShowPatientModal] = useState(false);
  const [showAddPatientModal, setShowAddPatientModal] = useState(false);
  const [patients, setPatients] = useState(mockPatients);
  const [newPatient, setNewPatient] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    condition: '',
    surgeryDate: '',
    primaryPhysician: '',
    emergencyContact: '',
    emergencyPhone: '',
    notes: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Sarah Johnson completed today's exercises", time: "10 min ago", type: "success" },
    { id: 2, message: "New patient Michael Chen registered", time: "1 hour ago", type: "info" },
    { id: 3, message: "Weekly report is ready for review", time: "2 hours ago", type: "info" }
  ]);

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.condition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const validateForm = () => {
    const errors = {};

    if (!newPatient.firstName.trim()) errors.firstName = 'First name is required';
    if (!newPatient.lastName.trim()) errors.lastName = 'Last name is required';
    if (!newPatient.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(newPatient.email)) errors.email = 'Email is invalid';
    if (!newPatient.phone.trim()) errors.phone = 'Phone number is required';
    if (!newPatient.dateOfBirth) errors.dateOfBirth = 'Date of birth is required';
    if (!newPatient.condition.trim()) errors.condition = 'Condition is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleAddPatient = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      const patient = {
        id: patients.length + 1,
        name: `${newPatient.firstName} ${newPatient.lastName}`,
        condition: newPatient.condition,
        progress: 0,
        nextSession: "Not scheduled",
        status: "active",
        lastActivity: "Just added",
        ...newPatient
      };

      setPatients(prev => [...prev, patient]);

      // Add success notification
      setNotifications(prev => [
        {
          id: Date.now(),
          message: `New patient ${patient.name} added successfully`,
          time: "Just now",
          type: "success"
        },
        ...prev
      ]);

      // Reset form
      setNewPatient({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        condition: '',
        surgeryDate: '',
        primaryPhysician: '',
        emergencyContact: '',
        emergencyPhone: '',
        notes: ''
      });

      setShowAddPatientModal(false);
      setFormErrors({});

    } catch (error) {
      console.error('Error adding patient:', error);
      // Add error notification
      setNotifications(prev => [
        {
          id: Date.now(),
          message: "Error adding patient. Please try again.",
          time: "Just now",
          type: "error"
        },
        ...prev
      ]);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setNewPatient({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      condition: '',
      surgeryDate: '',
      primaryPhysician: '',
      emergencyContact: '',
      emergencyPhone: '',
      notes: ''
    });
    setFormErrors({});
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-medical-light-blue flex items-center justify-center">
        <Card>
          <CardContent className="pt-6">
            <p>Please sign in to access your dashboard.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-medical-light-blue">
      <div className="container py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-medical-navy">
              Welcome back, {user.firstName}!
            </h1>
            <p className="text-muted-foreground">
              {user.role === 'provider' ? 'Manage your patients and track outcomes' : 'Track your rehabilitation progress'}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-red-500 text-white text-xs">
                {notifications.length}
              </Badge>
            </Button>
            <Badge variant="outline" className="capitalize">
              {user.role}
            </Badge>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {user.role === 'provider' ? 'Total Patients' : 'Sessions Completed'}
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-medical-blue">
                {user.role === 'provider' ? mockAnalytics.totalPatients : '23'}
              </div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {user.role === 'provider' ? 'Active This Week' : 'Current Streak'}
              </CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-medical-green">
                {user.role === 'provider' ? mockAnalytics.activeThisWeek : '7 days'}
              </div>
              <p className="text-xs text-muted-foreground">
                {user.role === 'provider' ? '+8% from last week' : 'Personal best!'}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {user.role === 'provider' ? 'Completion Rate' : 'Progress'}
              </CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-medical-blue">
                {user.role === 'provider' ? `${mockAnalytics.completionRate}%` : '78%'}
              </div>
              <p className="text-xs text-muted-foreground">
                +2% from last week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {user.role === 'provider' ? 'Satisfaction Score' : 'Next Milestone'}
              </CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-medical-green">
                {user.role === 'provider' ? `${mockAnalytics.satisfactionScore}/5` : '85%'}
              </div>
              <p className="text-xs text-muted-foreground">
                {user.role === 'provider' ? 'Excellent rating' : '7% to go'}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value={user.role === 'provider' ? 'patients' : 'exercises'}>
              {user.role === 'provider' ? 'Patients' : 'Exercises'}
            </TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="mr-2 h-5 w-5 text-medical-blue" />
                      {user.role === 'provider' ? 'Recent Patient Activity' : 'Your Progress'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {user.role === 'provider' ? (
                      <div className="space-y-4">
                        {mockPatients.slice(0, 3).map((patient) => (
                          <div key={patient.id} className="flex items-center justify-between p-3 bg-medical-light-blue rounded-lg">
                            <div className="flex items-center space-x-3">
                              <div className="h-10 w-10 bg-medical-blue/10 rounded-full flex items-center justify-center">
                                <User className="h-5 w-5 text-medical-blue" />
                              </div>
                              <div>
                                <div className="font-medium">{patient.name}</div>
                                <div className="text-sm text-muted-foreground">{patient.condition}</div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <div className="text-right">
                                <div className="text-sm font-medium">{patient.progress}%</div>
                                <Progress value={patient.progress} className="w-20 h-2" />
                              </div>
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span>Overall Progress</span>
                          <span className="font-semibold">78%</span>
                        </div>
                        <Progress value={78} className="h-3" />
                        
                        <div className="grid grid-cols-3 gap-4 mt-6">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-medical-blue">23</div>
                            <div className="text-sm text-muted-foreground">Sessions Done</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-medical-green">7</div>
                            <div className="text-sm text-muted-foreground">Day Streak</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-medical-blue">4.2</div>
                            <div className="text-sm text-muted-foreground">Avg Score</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {user.role === 'provider' ? (
                        <>
                          <Button className="h-20 flex-col medical-gradient text-white" asChild>
                            <Link to="/start-recovery">
                              <Plus className="h-6 w-6 mb-2" />
                              Add Patient
                            </Link>
                          </Button>
                          <Button className="h-20 flex-col bg-medical-green text-white" asChild>
                            <Link to="/for-providers">
                              <Calendar className="h-6 w-6 mb-2" />
                              Schedule Session
                            </Link>
                          </Button>
                          <Button className="h-20 flex-col border-medical-blue text-medical-blue" variant="outline" asChild>
                            <Link to="/for-providers">
                              <BarChart3 className="h-6 w-6 mb-2" />
                              View Reports
                            </Link>
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button className="h-20 flex-col medical-gradient text-white" asChild>
                            <Link to="/start-recovery">
                              <Play className="h-6 w-6 mb-2" />
                              Start Exercise
                            </Link>
                          </Button>
                          <Button className="h-20 flex-col bg-medical-green text-white" asChild>
                            <Link to="/dashboard">
                              <Video className="h-6 w-6 mb-2" />
                              Join Session
                            </Link>
                          </Button>
                          <Button className="h-20 flex-col border-medical-blue text-medical-blue" variant="outline" asChild>
                            <Link to="/dashboard">
                              <TrendingUp className="h-6 w-6 mb-2" />
                              View Progress
                            </Link>
                          </Button>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Today's Schedule */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="mr-2 h-5 w-5 text-medical-green" />
                      Today's Schedule
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {user.role === 'provider' ? (
                        mockAppointments.slice(0, 3).map((appointment) => (
                          <div key={appointment.id} className="flex items-center justify-between p-2 bg-medical-light-blue rounded">
                            <div>
                              <div className="font-medium text-sm">{appointment.patient}</div>
                              <div className="text-xs text-muted-foreground">{appointment.type}</div>
                            </div>
                            <Badge variant={appointment.status === 'completed' ? 'default' : 'secondary'}>
                              {appointment.time}
                            </Badge>
                          </div>
                        ))
                      ) : (
                        <>
                          <div className="flex items-center justify-between p-2 bg-medical-light-blue rounded">
                            <div>
                              <div className="font-medium text-sm">Morning Exercises</div>
                              <div className="text-xs text-muted-foreground">Knee rehabilitation</div>
                            </div>
                            <Badge className="bg-medical-green">9:00 AM</Badge>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-medical-light-blue rounded">
                            <div>
                              <div className="font-medium text-sm">PT Session</div>
                              <div className="text-xs text-muted-foreground">Video call with Dr. Smith</div>
                            </div>
                            <Badge variant="outline">2:00 PM</Badge>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-medical-light-blue rounded">
                            <div>
                              <div className="font-medium text-sm">Evening Exercises</div>
                              <div className="text-xs text-muted-foreground">Flexibility training</div>
                            </div>
                            <Badge variant="outline">6:00 PM</Badge>
                          </div>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Notifications */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Bell className="mr-2 h-5 w-5 text-medical-blue" />
                      Recent Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {notifications.map((notification) => (
                        <div key={notification.id} className="flex items-start space-x-2">
                          <div className={`h-2 w-2 rounded-full mt-2 ${
                            notification.type === 'success' ? 'bg-medical-green' : 'bg-medical-blue'
                          }`} />
                          <div className="flex-1">
                            <p className="text-sm">{notification.message}</p>
                            <p className="text-xs text-muted-foreground">{notification.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Patients/Exercises Tab */}
          <TabsContent value={user.role === 'provider' ? 'patients' : 'exercises'} className="space-y-6">
            {user.role === 'provider' ? (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Patient Management</CardTitle>
                    <Button
                      className="medical-gradient text-white"
                      onClick={() => setShowAddPatientModal(true)}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Patient
                    </Button>
                  </div>
                  <CardDescription>
                    Manage your patients and track their progress
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Search className="h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search patients..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-1"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      {filteredPatients.map((patient) => (
                        <div key={patient.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-medical-light-blue transition-colors">
                          <div className="flex items-center space-x-4">
                            <div className="h-12 w-12 bg-medical-blue/10 rounded-full flex items-center justify-center">
                              <User className="h-6 w-6 text-medical-blue" />
                            </div>
                            <div>
                              <div className="font-medium">{patient.name}</div>
                              <div className="text-sm text-muted-foreground">{patient.condition}</div>
                              <div className="text-xs text-muted-foreground">Last active: {patient.lastActivity}</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="text-right">
                              <div className="text-sm font-medium">{patient.progress}% Complete</div>
                              <Progress value={patient.progress} className="w-24 h-2" />
                            </div>
                            <Badge variant={patient.status === 'active' ? 'default' : 'secondary'}>
                              {patient.status}
                            </Badge>
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <MessageCircle className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Video className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Today's Exercises</CardTitle>
                    <CardDescription>Complete your daily rehabilitation routine</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { name: "Knee Flexion", duration: "10 min", completed: true },
                      { name: "Range of Motion", duration: "15 min", completed: true },
                      { name: "Strength Training", duration: "20 min", completed: false },
                      { name: "Balance Exercise", duration: "10 min", completed: false }
                    ].map((exercise, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-medical-light-blue rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                            exercise.completed ? 'bg-medical-green text-white' : 'bg-gray-200'
                          }`}>
                            {exercise.completed ? <CheckCircle className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
                          </div>
                          <div>
                            <div className="font-medium">{exercise.name}</div>
                            <div className="text-sm text-muted-foreground">{exercise.duration}</div>
                          </div>
                        </div>
                        <Button 
                          variant={exercise.completed ? "outline" : "default"}
                          size="sm"
                          className={exercise.completed ? "" : "medical-gradient text-white"}
                          asChild
                        >
                          <Link to="/start-recovery">
                            {exercise.completed ? 'Review' : 'Start'}
                          </Link>
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Exercise Library</CardTitle>
                    <CardDescription>Browse available exercises</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { name: "Ankle Pumps", category: "Flexibility", difficulty: "Beginner" },
                      { name: "Wall Push-ups", category: "Strength", difficulty: "Intermediate" },
                      { name: "Seated Marching", category: "Cardio", difficulty: "Beginner" },
                      { name: "Heel Slides", category: "Mobility", difficulty: "Beginner" }
                    ].map((exercise, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-medical-light-blue transition-colors">
                        <div>
                          <div className="font-medium">{exercise.name}</div>
                          <div className="text-sm text-muted-foreground">{exercise.category} • {exercise.difficulty}</div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Play className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>

          {/* Schedule Tab */}
          <TabsContent value="schedule" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>
                    {user.role === 'provider' ? 'Appointment Schedule' : 'Your Schedule'}
                  </CardTitle>
                  <Button className="medical-gradient text-white">
                    <Plus className="mr-2 h-4 w-4" />
                    {user.role === 'provider' ? 'New Appointment' : 'Book Session'}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="h-12 w-12 bg-medical-blue/10 rounded-full flex items-center justify-center">
                          <Calendar className="h-6 w-6 text-medical-blue" />
                        </div>
                        <div>
                          <div className="font-medium">{appointment.patient}</div>
                          <div className="text-sm text-muted-foreground">{appointment.type}</div>
                          <div className="text-xs text-muted-foreground">Today at {appointment.time}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant={appointment.status === 'completed' ? 'default' : 'secondary'}>
                          {appointment.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Video className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Patient Satisfaction</span>
                        <span className="text-sm text-muted-foreground">4.8/5</span>
                      </div>
                      <Progress value={96} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Completion Rate</span>
                        <span className="text-sm text-muted-foreground">94%</span>
                      </div>
                      <Progress value={94} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Recovery Speed</span>
                        <span className="text-sm text-muted-foreground">+30%</span>
                      </div>
                      <Progress value={130} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Weekly Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-medical-light-blue rounded-lg">
                      <div className="text-2xl font-bold text-medical-blue">156</div>
                      <div className="text-sm text-muted-foreground">Sessions This Week</div>
                    </div>
                    <div className="text-center p-4 bg-medical-light-blue rounded-lg">
                      <div className="text-2xl font-bold text-medical-green">89%</div>
                      <div className="text-sm text-muted-foreground">Adherence Rate</div>
                    </div>
                    <div className="text-center p-4 bg-medical-light-blue rounded-lg">
                      <div className="text-2xl font-bold text-medical-blue">23</div>
                      <div className="text-sm text-muted-foreground">New Patients</div>
                    </div>
                    <div className="text-center p-4 bg-medical-light-blue rounded-lg">
                      <div className="text-2xl font-bold text-medical-green">12</div>
                      <div className="text-sm text-muted-foreground">Completed Programs</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Add Patient Modal */}
        {showAddPatientModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-medical-navy">Add New Patient</h2>
                  <p className="text-muted-foreground">Enter patient information to create a new profile</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setShowAddPatientModal(false);
                    resetForm();
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <form onSubmit={handleAddPatient} className="p-6">
                <div className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-medical-navy">Personal Information</h3>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={newPatient.firstName}
                          onChange={(e) => setNewPatient({...newPatient, firstName: e.target.value})}
                          placeholder="Enter first name"
                          className={formErrors.firstName ? "border-red-500" : ""}
                        />
                        {formErrors.firstName && (
                          <p className="text-sm text-red-500">{formErrors.firstName}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={newPatient.lastName}
                          onChange={(e) => setNewPatient({...newPatient, lastName: e.target.value})}
                          placeholder="Enter last name"
                          className={formErrors.lastName ? "border-red-500" : ""}
                        />
                        {formErrors.lastName && (
                          <p className="text-sm text-red-500">{formErrors.lastName}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={newPatient.email}
                          onChange={(e) => setNewPatient({...newPatient, email: e.target.value})}
                          placeholder="patient@email.com"
                          className={formErrors.email ? "border-red-500" : ""}
                        />
                        {formErrors.email && (
                          <p className="text-sm text-red-500">{formErrors.email}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          value={newPatient.phone}
                          onChange={(e) => setNewPatient({...newPatient, phone: e.target.value})}
                          placeholder="(555) 123-4567"
                          className={formErrors.phone ? "border-red-500" : ""}
                        />
                        {formErrors.phone && (
                          <p className="text-sm text-red-500">{formErrors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={newPatient.dateOfBirth}
                        onChange={(e) => setNewPatient({...newPatient, dateOfBirth: e.target.value})}
                        className={formErrors.dateOfBirth ? "border-red-500" : ""}
                      />
                      {formErrors.dateOfBirth && (
                        <p className="text-sm text-red-500">{formErrors.dateOfBirth}</p>
                      )}
                    </div>
                  </div>

                  {/* Medical Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-medical-navy">Medical Information</h3>

                    <div className="space-y-2">
                      <Label htmlFor="condition">Primary Condition *</Label>
                      <Select
                        value={newPatient.condition}
                        onValueChange={(value) => setNewPatient({...newPatient, condition: value})}
                      >
                        <SelectTrigger className={formErrors.condition ? "border-red-500" : ""}>
                          <SelectValue placeholder="Select primary condition" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="knee-replacement">Knee Replacement Recovery</SelectItem>
                          <SelectItem value="hip-replacement">Hip Replacement Recovery</SelectItem>
                          <SelectItem value="shoulder-surgery">Shoulder Surgery Recovery</SelectItem>
                          <SelectItem value="stroke-recovery">Stroke Recovery</SelectItem>
                          <SelectItem value="arthritis">Arthritis Management</SelectItem>
                          <SelectItem value="back-pain">Back Pain Relief</SelectItem>
                          <SelectItem value="cardiac-rehab">Cardiac Rehabilitation</SelectItem>
                          <SelectItem value="sports-injury">Sports Injury Recovery</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {formErrors.condition && (
                        <p className="text-sm text-red-500">{formErrors.condition}</p>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="surgeryDate">Surgery Date (if applicable)</Label>
                        <Input
                          id="surgeryDate"
                          type="date"
                          value={newPatient.surgeryDate}
                          onChange={(e) => setNewPatient({...newPatient, surgeryDate: e.target.value})}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="primaryPhysician">Primary Physician</Label>
                        <Input
                          id="primaryPhysician"
                          value={newPatient.primaryPhysician}
                          onChange={(e) => setNewPatient({...newPatient, primaryPhysician: e.target.value})}
                          placeholder="Dr. Smith"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Emergency Contact */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-medical-navy">Emergency Contact</h3>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="emergencyContact">Emergency Contact Name</Label>
                        <Input
                          id="emergencyContact"
                          value={newPatient.emergencyContact}
                          onChange={(e) => setNewPatient({...newPatient, emergencyContact: e.target.value})}
                          placeholder="Contact person name"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="emergencyPhone">Emergency Contact Phone</Label>
                        <Input
                          id="emergencyPhone"
                          value={newPatient.emergencyPhone}
                          onChange={(e) => setNewPatient({...newPatient, emergencyPhone: e.target.value})}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      value={newPatient.notes}
                      onChange={(e) => setNewPatient({...newPatient, notes: e.target.value})}
                      placeholder="Any additional information about the patient's condition, goals, or special considerations..."
                      className="min-h-[100px]"
                    />
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t mt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setShowAddPatientModal(false);
                      resetForm();
                    }}
                    className="flex-1"
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 medical-gradient text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                        Adding Patient...
                      </>
                    ) : (
                      <>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Patient
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
