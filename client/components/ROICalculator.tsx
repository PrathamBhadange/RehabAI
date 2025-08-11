import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Clock,
  CheckCircle,
  Download,
  Mail,
  X
} from 'lucide-react';

interface ROICalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ROICalculator({ isOpen, onClose }: ROICalculatorProps) {
  const [inputs, setInputs] = useState({
    currentPatients: 500,
    averageTherapistSalary: 75000,
    therapistsCount: 8,
    averageSessionCost: 150,
    sessionsPerPatient: 12,
    readmissionRate: 15, // percentage
    practiceType: 'private'
  });

  const [showResults, setShowResults] = useState(false);

  // ROI Calculations
  const calculateROI = () => {
    const { currentPatients, averageTherapistSalary, therapistsCount, averageSessionCost, sessionsPerPatient, readmissionRate } = inputs;
    
    // Current Annual Costs
    const currentStaffCosts = therapistsCount * averageTherapistSalary;
    const currentRevenue = currentPatients * sessionsPerPatient * averageSessionCost;
    
    // RehabAI Benefits
    const staffEfficiencyGain = 0.6; // 60% efficiency gain
    const patientCapacityIncrease = 3; // 3x more patients
    const readmissionReduction = 0.45; // 45% reduction
    const revenueIncrease = 0.4; // 40% revenue increase
    
    // Calculate Savings
    const staffCostSavings = currentStaffCosts * staffEfficiencyGain;
    const increasedRevenue = currentRevenue * revenueIncrease;
    const reducedReadmissions = (currentPatients * readmissionRate / 100) * averageSessionCost * 3 * readmissionReduction;
    
    // RehabAI Platform Costs (estimated)
    const platformCost = currentPatients * 15 * 12; // $15 per patient per month
    
    // Total Benefits
    const totalAnnualBenefit = staffCostSavings + increasedRevenue + reducedReadmissions;
    const netBenefit = totalAnnualBenefit - platformCost;
    const roiPercentage = ((netBenefit / platformCost) * 100);
    const paybackMonths = (platformCost / (totalAnnualBenefit / 12));
    
    return {
      staffCostSavings: Math.round(staffCostSavings),
      increasedRevenue: Math.round(increasedRevenue),
      reducedReadmissions: Math.round(reducedReadmissions),
      totalAnnualBenefit: Math.round(totalAnnualBenefit),
      platformCost: Math.round(platformCost),
      netBenefit: Math.round(netBenefit),
      roiPercentage: Math.round(roiPercentage),
      paybackMonths: Math.round(paybackMonths),
      newPatientCapacity: Math.round(currentPatients * patientCapacityIncrease)
    };
  };

  const results = calculateROI();

  const handleInputChange = (field: string, value: string | number) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const resetCalculator = () => {
    setShowResults(false);
    setInputs({
      currentPatients: 500,
      averageTherapistSalary: 75000,
      therapistsCount: 8,
      averageSessionCost: 150,
      sessionsPerPatient: 12,
      readmissionRate: 15,
      practiceType: 'private'
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 bg-medical-blue/10 rounded-lg flex items-center justify-center">
              <Calculator className="h-5 w-5 text-medical-blue" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-medical-navy">ROI Calculator</h2>
              <p className="text-muted-foreground">Calculate your practice's potential savings with RehabAI</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-6">
          {!showResults ? (
            <div className="space-y-6">
              {/* Input Form */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-medical-navy">Practice Information</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="practice-type">Practice Type</Label>
                    <Select value={inputs.practiceType} onValueChange={(value) => handleInputChange('practiceType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select practice type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="private">Private Practice</SelectItem>
                        <SelectItem value="hospital">Hospital System</SelectItem>
                        <SelectItem value="clinic">Outpatient Clinic</SelectItem>
                        <SelectItem value="rehab">Rehabilitation Center</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="current-patients">Current Annual Patients</Label>
                    <Input
                      id="current-patients"
                      type="number"
                      value={inputs.currentPatients}
                      onChange={(e) => handleInputChange('currentPatients', parseInt(e.target.value) || 0)}
                      placeholder="500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="therapists-count">Number of Therapists</Label>
                    <Input
                      id="therapists-count"
                      type="number"
                      value={inputs.therapistsCount}
                      onChange={(e) => handleInputChange('therapistsCount', parseInt(e.target.value) || 0)}
                      placeholder="8"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-medical-navy">Financial Details</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="therapist-salary">Average Therapist Salary</Label>
                    <Input
                      id="therapist-salary"
                      type="number"
                      value={inputs.averageTherapistSalary}
                      onChange={(e) => handleInputChange('averageTherapistSalary', parseInt(e.target.value) || 0)}
                      placeholder="75000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="session-cost">Average Session Cost</Label>
                    <Input
                      id="session-cost"
                      type="number"
                      value={inputs.averageSessionCost}
                      onChange={(e) => handleInputChange('averageSessionCost', parseInt(e.target.value) || 0)}
                      placeholder="150"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sessions-per-patient">Sessions per Patient</Label>
                    <Input
                      id="sessions-per-patient"
                      type="number"
                      value={inputs.sessionsPerPatient}
                      onChange={(e) => handleInputChange('sessionsPerPatient', parseInt(e.target.value) || 0)}
                      placeholder="12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="readmission-rate">Readmission Rate (%)</Label>
                    <Input
                      id="readmission-rate"
                      type="number"
                      value={inputs.readmissionRate}
                      onChange={(e) => handleInputChange('readmissionRate', parseInt(e.target.value) || 0)}
                      placeholder="15"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t">
                <Button 
                  onClick={handleCalculate}
                  size="lg" 
                  className="w-full medical-gradient text-white"
                >
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Calculate ROI
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Results */}
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-medical-navy">Your ROI Analysis</h3>
                <p className="text-muted-foreground">Based on your practice information</p>
              </div>

              {/* Key Metrics */}
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="text-center p-4 border-2 border-medical-green/20 bg-medical-green/5">
                  <div className="text-3xl font-bold text-medical-green">
                    {results.roiPercentage}%
                  </div>
                  <div className="text-sm text-muted-foreground">Annual ROI</div>
                </Card>
                <Card className="text-center p-4 border-2 border-medical-blue/20 bg-medical-blue/5">
                  <div className="text-3xl font-bold text-medical-blue">
                    {results.paybackMonths}
                  </div>
                  <div className="text-sm text-muted-foreground">Months to Payback</div>
                </Card>
                <Card className="text-center p-4 border-2 border-medical-green/20 bg-medical-green/5">
                  <div className="text-3xl font-bold text-medical-green">
                    ${results.netBenefit.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">Net Annual Benefit</div>
                </Card>
              </div>

              {/* Detailed Breakdown */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="mr-2 h-5 w-5 text-medical-green" />
                      Annual Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span>Staff Cost Savings</span>
                      <span className="font-semibold text-medical-green">
                        ${results.staffCostSavings.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Increased Revenue</span>
                      <span className="font-semibold text-medical-green">
                        ${results.increasedRevenue.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Reduced Readmissions</span>
                      <span className="font-semibold text-medical-green">
                        ${results.reducedReadmissions.toLocaleString()}
                      </span>
                    </div>
                    <div className="border-t pt-3 flex justify-between font-bold">
                      <span>Total Benefits</span>
                      <span className="text-medical-green">
                        ${results.totalAnnualBenefit.toLocaleString()}
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="mr-2 h-5 w-5 text-medical-blue" />
                      Capacity Improvements
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span>Current Patients</span>
                      <span className="font-semibold">{inputs.currentPatients.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>New Capacity</span>
                      <span className="font-semibold text-medical-blue">
                        {results.newPatientCapacity.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Capacity Increase</span>
                      <span className="font-semibold text-medical-green">
                        +{(results.newPatientCapacity - inputs.currentPatients).toLocaleString()}
                      </span>
                    </div>
                    <div className="border-t pt-3">
                      <Badge className="bg-medical-blue/10 text-medical-blue">
                        300% increase in patient capacity
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Investment */}
              <Card className="border-2 border-medical-blue/20">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="mr-2 h-5 w-5 text-medical-blue" />
                    Investment & Returns
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-xl font-bold text-medical-blue">
                        ${results.platformCost.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">Annual Platform Cost</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-medical-green">
                        ${results.totalAnnualBenefit.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">Total Annual Benefits</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-medical-green">
                        ${results.netBenefit.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">Net Profit</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
                <Button onClick={resetCalculator} variant="outline" className="flex-1">
                  <Calculator className="mr-2 h-4 w-4" />
                  Recalculate
                </Button>
                <Button className="flex-1 bg-medical-green text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Download Report
                </Button>
                <Button className="flex-1 medical-gradient text-white">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Results
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
