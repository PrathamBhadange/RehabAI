import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle, 
  Clock, 
  Target, 
  TrendingUp, 
  ChevronDown, 
  ChevronUp,
  Timer,
  Zap,
  Award,
  Heart,
  Activity
} from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Exercise {
  id: string;
  name: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: number; // in seconds
  reps?: number;
  description: string;
  instructions: string[];
  tips?: string[];
  targetMuscles?: string[];
  equipment?: string[];
  completed?: boolean;
  progress?: number;
  lastCompleted?: string;
  streak?: number;
}

interface ExerciseCardProps {
  exercise: Exercise;
  onComplete?: (exerciseId: string) => void;
  onStart?: (exerciseId: string) => void;
  variant?: 'default' | 'compact' | 'detailed';
  showTimer?: boolean;
  autoStart?: boolean;
}

export function ExerciseCard({ 
  exercise, 
  onComplete, 
  onStart,
  variant = 'default',
  showTimer = true,
  autoStart = false 
}: ExerciseCardProps) {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(exercise.duration);
  const [currentRep, setCurrentRep] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [sessionCompleted, setSessionCompleted] = useState(false);
  const [showEncouragement, setShowEncouragement] = useState(false);

  useEffect(() => {
    if (autoStart && !exercise.completed) {
      handleStart();
    }
  }, [autoStart]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && !isPaused && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(time => {
          if (time <= 1) {
            handleComplete();
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, isPaused, timeRemaining]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
    onStart?.(exercise.id);
    
    // Show encouragement periodically
    const encouragementInterval = setInterval(() => {
      if (isActive && !isPaused) {
        setShowEncouragement(true);
        setTimeout(() => setShowEncouragement(false), 2000);
      }
    }, 15000);

    return () => clearInterval(encouragementInterval);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setIsPaused(false);
    setTimeRemaining(exercise.duration);
    setCurrentRep(0);
    setSessionCompleted(false);
  };

  const handleComplete = () => {
    setIsActive(false);
    setSessionCompleted(true);
    onComplete?.(exercise.id);
    
    // Show completion celebration
    setShowEncouragement(true);
    setTimeout(() => setShowEncouragement(false), 3000);
  };

  const handleRepComplete = () => {
    if (exercise.reps && currentRep < exercise.reps - 1) {
      setCurrentRep(prev => prev + 1);
    } else {
      handleComplete();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = ((exercise.duration - timeRemaining) / exercise.duration) * 100;
  const difficultyColor = {
    'Beginner': 'bg-green-100 text-green-700 border-green-200',
    'Intermediate': 'bg-yellow-100 text-yellow-700 border-yellow-200',
    'Advanced': 'bg-red-100 text-red-700 border-red-200'
  };

  const encouragementMessages = [
    "Keep going! You're doing great! 💪",
    "Perfect form! Stay focused! 🎯",
    "You've got this! Almost there! ⭐",
    "Excellent progress! Keep it up! 🔥",
    "Strong work! Stay consistent! 💯"
  ];

  if (variant === 'compact') {
    return (
      <Card className={cn(
        "transition-all duration-200",
        exercise.completed ? "border-green-200 bg-green-50" : "hover:shadow-md",
        isActive ? "border-blue-200 bg-blue-50" : ""
      )}>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={cn(
                "h-8 w-8 rounded-full flex items-center justify-center transition-colors",
                exercise.completed ? "bg-green-500 text-white" : 
                isActive ? "bg-blue-500 text-white" : "bg-gray-200"
              )}>
                {exercise.completed ? <CheckCircle className="h-4 w-4" /> : 
                 isActive ? <Timer className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
              </div>
              <div>
                <div className="font-medium text-sm">{exercise.name}</div>
                <div className="text-xs text-muted-foreground">
                  {exercise.reps ? `${exercise.reps} reps` : formatTime(exercise.duration)}
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              {isActive && showTimer && (
                <div className="text-sm font-mono font-bold text-blue-600">
                  {formatTime(timeRemaining)}
                </div>
              )}
              
              {!exercise.completed && (
                <Button
                  size="sm"
                  variant={isActive ? "outline" : "default"}
                  onClick={isActive ? (isPaused ? handleResume : handlePause) : handleStart}
                  className={!isActive ? "medical-gradient text-white" : ""}
                >
                  {isActive ? (isPaused ? <Play className="h-3 w-3" /> : <Pause className="h-3 w-3" />) : 
                   <Play className="h-3 w-3" />}
                </Button>
              )}
              
              {exercise.completed && (
                <Badge className="bg-green-100 text-green-700">Completed</Badge>
              )}
            </div>
          </div>
          
          {isActive && (
            <div className="mt-3">
              <Progress value={progress} className="h-1" />
            </div>
          )}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn(
      "transition-all duration-200",
      exercise.completed ? "border-green-200 bg-green-50" : "",
      isActive ? "border-blue-200 bg-blue-50 shadow-lg" : "hover:shadow-md",
      sessionCompleted ? "border-green-300 bg-green-100" : ""
    )}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <CardTitle className="text-lg">{exercise.name}</CardTitle>
              <Badge className={difficultyColor[exercise.difficulty]}>
                {exercise.difficulty}
              </Badge>
            </div>
            <CardDescription>{exercise.description}</CardDescription>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{formatTime(exercise.duration)}</span>
              </div>
              {exercise.reps && (
                <div className="flex items-center space-x-1">
                  <Target className="h-3 w-3" />
                  <span>{exercise.reps} reps</span>
                </div>
              )}
              <div className="flex items-center space-x-1">
                <Activity className="h-3 w-3" />
                <span>{exercise.category}</span>
              </div>
            </div>
          </div>
          
          {exercise.streak && exercise.streak > 0 && (
            <div className="flex items-center space-x-1 text-orange-600">
              <Zap className="h-4 w-4" />
              <span className="text-sm font-medium">{exercise.streak} day streak</span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Timer and Progress */}
        {showTimer && (isActive || sessionCompleted) && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold font-mono text-medical-blue">
                {formatTime(timeRemaining)}
              </div>
              {exercise.reps && (
                <div className="text-lg text-muted-foreground">
                  Rep {currentRep + 1} of {exercise.reps}
                </div>
              )}
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}

        {/* Encouragement Message */}
        {showEncouragement && (
          <Alert className="border-green-200 bg-green-50">
            <Heart className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-700">
              {sessionCompleted ? 
                "🎉 Exercise completed! Great job!" : 
                encouragementMessages[Math.floor(Math.random() * encouragementMessages.length)]
              }
            </AlertDescription>
          </Alert>
        )}

        {/* Exercise Instructions */}
        {isExpanded && (
          <div className="space-y-3 pt-2 border-t">
            <h4 className="font-semibold text-medical-navy">Instructions:</h4>
            <ol className="space-y-1 text-sm text-muted-foreground">
              {exercise.instructions.map((instruction, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="font-medium text-medical-blue">{index + 1}.</span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
            
            {exercise.tips && exercise.tips.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-semibold text-medical-navy">Tips:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {exercise.tips.map((tip, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-green-500">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Controls */}
        <div className="flex items-center justify-between pt-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-medical-blue"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="mr-1 h-3 w-3" />
                Less Details
              </>
            ) : (
              <>
                <ChevronDown className="mr-1 h-3 w-3" />
                View Instructions
              </>
            )}
          </Button>

          <div className="flex space-x-2">
            {isActive && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleReset}
              >
                <RotateCcw className="mr-1 h-3 w-3" />
                Reset
              </Button>
            )}
            
            {exercise.reps && isActive && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleRepComplete}
                className="border-green-200 text-green-700 hover:bg-green-50"
              >
                <CheckCircle className="mr-1 h-3 w-3" />
                Complete Rep
              </Button>
            )}

            {!sessionCompleted && !exercise.completed && (
              <Button
                size="sm"
                onClick={isActive ? (isPaused ? handleResume : handlePause) : handleStart}
                className={isActive ? "" : "medical-gradient text-white"}
                variant={isActive ? "outline" : "default"}
              >
                {isActive ? (
                  isPaused ? (
                    <>
                      <Play className="mr-1 h-3 w-3" />
                      Resume
                    </>
                  ) : (
                    <>
                      <Pause className="mr-1 h-3 w-3" />
                      Pause
                    </>
                  )
                ) : (
                  <>
                    <Play className="mr-1 h-3 w-3" />
                    Start Exercise
                  </>
                )}
              </Button>
            )}

            {(sessionCompleted || exercise.completed) && (
              <div className="flex items-center space-x-2">
                <Badge className="bg-green-100 text-green-700">
                  <Award className="mr-1 h-3 w-3" />
                  Completed
                </Badge>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleReset}
                >
                  <RotateCcw className="mr-1 h-3 w-3" />
                  Restart
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Exercise Library Card for browsing
interface ExerciseLibraryCardProps {
  exercise: Exercise;
  onSelect?: (exercise: Exercise) => void;
  onPreview?: (exercise: Exercise) => void;
}

export function ExerciseLibraryCard({ exercise, onSelect, onPreview }: ExerciseLibraryCardProps) {
  return (
    <Card className="hover:shadow-md transition-all duration-200 cursor-pointer group">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h4 className="font-medium group-hover:text-medical-blue transition-colors">
                {exercise.name}
              </h4>
              <Badge variant="outline" className={difficultyColor[exercise.difficulty]}>
                {exercise.difficulty}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-2">{exercise.description}</p>
            <div className="flex items-center space-x-3 text-xs text-muted-foreground">
              <span>{exercise.category}</span>
              <span>•</span>
              <span>{formatTime(exercise.duration)}</span>
              {exercise.reps && (
                <>
                  <span>•</span>
                  <span>{exercise.reps} reps</span>
                </>
              )}
            </div>
          </div>
          
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onPreview?.(exercise)}
            >
              <Play className="h-3 w-3" />
            </Button>
            <Button
              size="sm"
              onClick={() => onSelect?.(exercise)}
              className="medical-gradient text-white"
            >
              Add to Plan
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  function formatTime(seconds: number) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }
}
