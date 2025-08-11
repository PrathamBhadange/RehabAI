import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Activity, 
  User, 
  Calendar, 
  TrendingUp, 
  Video, 
  Settings,
  LogOut
} from 'lucide-react';

export default function Dashboard() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = '/';
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
              Here's your rehabilitation progress overview
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="capitalize">
              {user.role}
            </Badge>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>

        {/* User Info Card */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 bg-medical-blue text-white rounded-full flex items-center justify-center">
                <User className="h-6 w-6" />
              </div>
              <div>
                <CardTitle>{user.firstName} {user.lastName}</CardTitle>
                <CardDescription>{user.email}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-medical-light-blue rounded-lg">
                <Activity className="h-8 w-8 text-medical-blue mx-auto mb-2" />
                <h3 className="font-semibold">Account Active</h3>
                <p className="text-sm text-muted-foreground">Ready for rehabilitation</p>
              </div>
              <div className="text-center p-4 bg-medical-light-blue rounded-lg">
                <Calendar className="h-8 w-8 text-medical-green mx-auto mb-2" />
                <h3 className="font-semibold">Next Session</h3>
                <p className="text-sm text-muted-foreground">Schedule your first session</p>
              </div>
              <div className="text-center p-4 bg-medical-light-blue rounded-lg">
                <TrendingUp className="h-8 w-8 text-medical-blue mx-auto mb-2" />
                <h3 className="font-semibold">Progress</h3>
                <p className="text-sm text-muted-foreground">0% Complete</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {user.role === 'patient' ? (
            <>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="h-12 w-12 bg-medical-blue/10 rounded-lg flex items-center justify-center mb-4">
                    <Activity className="h-6 w-6 text-medical-blue" />
                  </div>
                  <CardTitle>Start Exercise</CardTitle>
                  <CardDescription>
                    Begin your personalized rehabilitation session
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="h-12 w-12 bg-medical-green/10 rounded-lg flex items-center justify-center mb-4">
                    <Video className="h-6 w-6 text-medical-green" />
                  </div>
                  <CardTitle>Video Call</CardTitle>
                  <CardDescription>
                    Connect with your physiotherapist
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="h-12 w-12 bg-medical-blue/10 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-medical-blue" />
                  </div>
                  <CardTitle>View Progress</CardTitle>
                  <CardDescription>
                    Check your recovery metrics and achievements
                  </CardDescription>
                </CardHeader>
              </Card>
            </>
          ) : (
            <>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="h-12 w-12 bg-medical-blue/10 rounded-lg flex items-center justify-center mb-4">
                    <User className="h-6 w-6 text-medical-blue" />
                  </div>
                  <CardTitle>Patient Management</CardTitle>
                  <CardDescription>
                    View and manage your patient cases
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="h-12 w-12 bg-medical-green/10 rounded-lg flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-medical-green" />
                  </div>
                  <CardTitle>Schedule</CardTitle>
                  <CardDescription>
                    Manage appointments and consultations
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="h-12 w-12 bg-medical-blue/10 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-medical-blue" />
                  </div>
                  <CardTitle>Analytics</CardTitle>
                  <CardDescription>
                    View patient outcomes and progress data
                  </CardDescription>
                </CardHeader>
              </Card>
            </>
          )}
        </div>

        {/* Settings */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="mr-2 h-5 w-5" />
              Account Settings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="justify-start">
                <User className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
              <Button variant="outline" className="justify-start">
                <Settings className="mr-2 h-4 w-4" />
                Preferences
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
