import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';

export function DemoModeBanner() {
  return (
    <Alert className="border-yellow-200 bg-yellow-50 text-yellow-800 mb-4">
      <Info className="h-4 w-4" />
      <AlertDescription>
        <strong>Demo Mode:</strong> Database connection not available. 
        Authentication features are disabled. The app is running in preview mode.
      </AlertDescription>
    </Alert>
  );
}
