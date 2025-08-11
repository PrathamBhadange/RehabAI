import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Activity, 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle, 
  Camera, 
  Smartphone,
  Brain,
  Target,
  TrendingUp,
  Clock,
  Zap,
  Heart,
  ArrowLeft,
  ChevronRight,
  Star
} from 'lucide-react';

const exercises = [
  {
    id: 1,
    name: "Knee Flexion",
    description: "Gentle knee bending exercise for post-surgery recovery",
    duration: 30,
    reps: 10,
    difficulty: "Beginner",
    bodyPart: "Knee",
    instructions: [
      "Sit comfortably in a chair with back support",
      "Slowly bend your knee, lifting your foot off the ground",
      "Hold for 2-3 seconds at the top",
      "Slowly lower your foot back down",
      "Repeat for the prescribed number of repetitions"
    ]
  },
  {
    id: 2,
    name: "Shoulder Rolls",
    description: "Improve shoulder mobility and reduce stiffness",
    duration: 45,
    reps: 15,
    difficulty: "Beginner",
    bodyPart: "Shoulder",
    instructions: [
      "Stand or sit with your arms at your sides",
      "Slowly roll your shoulders forward in a circular motion",
      "Complete 5 forward rolls, then reverse direction",
      "Keep movements smooth and controlled",
      "Focus on your breathing throughout"
    ]
  },
  {
    id: 3,
    name: "Ankle Pumps",
    description: "Promote circulation and ankle flexibility",
    duration: 20,
    reps: 20,
    difficulty: "Beginner",
    bodyPart: "Ankle",
    instructions: [
      "Lie down or sit comfortably",
      "Point your toes away from you, then flex them back",
      "Feel the stretch in your calf muscles",
      "Keep movements slow and deliberate",
      "This helps prevent blood clots and improves circulation"
    ]
  }
];

export default function StartRecovery() {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [currentRep, setCurrentRep] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(exercises[0].duration);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState<string[]>([]);
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(time => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      handleExerciseComplete();
    }
    return () => clearInterval(interval);
  }, [isActive, timeRemaining]);

  const startExercise = () => {
    setIsActive(true);
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setAiAnalysis([
        "✅ Good posture detected",
        "📊 Movement form: Excellent",
        "⚡ Perfect range of motion",
        "🎯 Maintain current pace"
      ]);
    }, 2000);
  };

  const pauseExercise = () => {
    setIsActive(false);
    setIsAnalyzing(false);
  };

  const resetExercise = () => {
    setIsActive(false);
    setCurrentRep(0);
    setTimeRemaining(exercises[currentExercise].duration);
    setIsAnalyzing(false);
    setAiAnalysis([]);
  };

  const handleExerciseComplete = () => {
    setIsActive(false);
    setIsAnalyzing(false);
    const newCompleted = [...completedExercises, exercises[currentExercise].id];
    setCompletedExercises(newCompleted);
    
    // Add completion analysis
    setAiAnalysis(prev => [...prev, "🎉 Exercise completed successfully!", "📈 Progress recorded"]);
  };

  const nextExercise = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setCurrentRep(0);
      setTimeRemaining(exercises[currentExercise + 1].duration);
      setIsAnalyzing(false);
      setAiAnalysis([]);
      setIsActive(false);
    }
  };

  const exercise = exercises[currentExercise];
  const progress = ((exercises[0].duration - timeRemaining) / exercises[0].duration) * 100;

  return (
    <div className="min-h-screen bg-medical-light-blue">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-medical-navy">AI Recovery Session</h1>
                <p className="text-muted-foreground">Personalized rehabilitation with real-time feedback</p>
              </div>
            </div>
            <Badge className="bg-medical-green/10 text-medical-green border-medical-green/20">
              Demo Mode - No Login Required
            </Badge>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Exercise Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Exercise Card */}
            <Card className="border-2 border-medical-blue/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl flex items-center">
                      <Activity className="mr-2 h-6 w-6 text-medical-blue" />
                      {exercise.name}
                    </CardTitle>
                    <CardDescription className="text-lg">{exercise.description}</CardDescription>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="mb-2">{exercise.difficulty}</Badge>
                    <div className="text-sm text-muted-foreground">{exercise.bodyPart}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Video/Camera Simulation */}
                <div className="aspect-video bg-gradient-to-br from-medical-blue/10 to-medical-green/10 rounded-xl flex items-center justify-center border-2 border-dashed border-medical-blue/30">
                  <div className="text-center space-y-4">
                    {isAnalyzing ? (
                      <>
                        <div className="h-16 w-16 bg-medical-blue text-white rounded-full flex items-center justify-center mx-auto animate-pulse">
                          <Brain className="h-8 w-8" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-medical-navy">AI Analyzing Movement</h3>
                          <p className="text-muted-foreground">Computer vision tracking your form...</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="h-16 w-16 bg-medical-blue/20 rounded-full flex items-center justify-center mx-auto">
                          <Camera className="h-8 w-8 text-medical-blue" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-medical-navy">Camera Ready</h3>
                          <p className="text-muted-foreground">Position yourself in front of the camera</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Exercise Timer and Controls */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-medical-blue">
                      {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}
                    </div>
                    <div className="text-lg text-muted-foreground">
                      Rep {currentRep} of {exercise.reps}
                    </div>
                  </div>
                  
                  <Progress value={progress} className="h-2" />
                  
                  <div className="flex space-x-3">
                    {!isActive ? (
                      <Button 
                        onClick={startExercise}
                        className="medical-gradient text-white"
                        size="lg"
                      >
                        <Play className="mr-2 h-4 w-4" />
                        Start Exercise
                      </Button>
                    ) : (
                      <Button 
                        onClick={pauseExercise}
                        variant="outline"
                        size="lg"
                      >
                        <Pause className="mr-2 h-4 w-4" />
                        Pause
                      </Button>
                    )}
                    <Button 
                      onClick={resetExercise}
                      variant="outline"
                      size="lg"
                    >
                      <RotateCcw className="mr-2 h-4 w-4" />
                      Reset
                    </Button>
                    {completedExercises.includes(exercise.id) && (
                      <Button 
                        onClick={nextExercise}
                        className="bg-medical-green text-white"
                        size="lg"
                        disabled={currentExercise >= exercises.length - 1}
                      >
                        Next Exercise
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="mr-2 h-5 w-5 text-medical-green" />
                  Exercise Instructions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {exercise.instructions.map((instruction, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="h-6 w-6 bg-medical-blue text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="mr-2 h-5 w-5 text-medical-blue" />
                  AI Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                {aiAnalysis.length > 0 ? (
                  <div className="space-y-2">
                    {aiAnalysis.map((analysis, index) => (
                      <div key={index} className="p-2 bg-medical-light-blue rounded text-sm">
                        {analysis}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-sm">
                    Start an exercise to see real-time AI feedback on your form and movement.
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5 text-medical-green" />
                  Session Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Exercises Completed</span>
                    <span className="font-semibold">{completedExercises.length}/{exercises.length}</span>
                  </div>
                  <Progress value={(completedExercises.length / exercises.length) * 100} className="h-2" />
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-medical-blue">{completedExercises.length}</div>
                      <div className="text-xs text-muted-foreground">Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-medical-green">98%</div>
                      <div className="text-xs text-muted-foreground">Form Score</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Exercise List */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-medical-blue" />
                  Today's Plan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {exercises.map((ex, index) => (
                    <div 
                      key={ex.id}
                      className={`p-3 rounded border cursor-pointer transition-colors ${
                        index === currentExercise 
                          ? 'border-medical-blue bg-medical-blue/5' 
                          : completedExercises.includes(ex.id)
                          ? 'border-medical-green bg-medical-green/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => {
                        setCurrentExercise(index);
                        setTimeRemaining(ex.duration);
                        setIsActive(false);
                        setIsAnalyzing(false);
                        setAiAnalysis([]);
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-sm">{ex.name}</div>
                          <div className="text-xs text-muted-foreground">{ex.reps} reps • {ex.duration}s</div>
                        </div>
                        {completedExercises.includes(ex.id) && (
                          <CheckCircle className="h-5 w-5 text-medical-green" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Demo Features */}
            <Alert>
              <Zap className="h-4 w-4" />
              <AlertDescription>
                <strong>Demo Features Active:</strong> This is a demonstration of our AI-powered rehabilitation platform. 
                Real movement tracking requires camera access and our full platform.
              </AlertDescription>
            </Alert>
          </div>
        </div>

        {/* Session Complete */}
        {completedExercises.length === exercises.length && (
          <Card className="mt-8 border-2 border-medical-green/20 bg-medical-green/5">
            <CardContent className="text-center py-8">
              <div className="space-y-4">
                <div className="h-16 w-16 bg-medical-green text-white rounded-full flex items-center justify-center mx-auto">
                  <Star className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-medical-navy">Session Complete! 🎉</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Great work! You've completed all exercises in today's rehabilitation session. 
                  Your form was excellent throughout.
                </p>
                <div className="flex justify-center space-x-4">
                  <Button className="medical-gradient text-white">
                    <Heart className="mr-2 h-4 w-4" />
                    Save Progress
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/dashboard">View Dashboard</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
