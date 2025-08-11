import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Construction, ArrowLeft, MessageCircle } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
}

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-medical-light-blue flex items-center justify-center p-4">
      <Card className="max-w-md w-full text-center">
        <CardHeader className="pb-6">
          <div className="h-16 w-16 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Construction className="h-8 w-8 text-medical-blue" />
          </div>
          <CardTitle className="text-2xl text-medical-navy">{title}</CardTitle>
          <CardDescription className="text-base">
            This page is coming soon! We're working hard to bring you the best healthcare experience.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Our AI-powered rehabilitation platform is constantly evolving. 
            Check back soon for updates on this section.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild className="flex-1">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" className="flex-1">
              <MessageCircle className="mr-2 h-4 w-4" />
              Contact Us
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Want to help us build this feature? 
            <Link to="/careers" className="text-medical-blue hover:underline ml-1">
              Join our team
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
