import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import jsPDF from 'jspdf';
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
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [emailData, setEmailData] = useState({
    email: '',
    name: '',
    organization: '',
    message: ''
  });
  const [emailSent, setEmailSent] = useState(false);

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
    setShowEmailForm(false);
    setEmailSent(false);
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

  const downloadPDFReport = () => {
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = 20;
    let yPosition = margin;

    // Helper function to add text with automatic line breaks
    const addText = (text: string, x: number, y: number, fontSize = 12, isBold = false) => {
      pdf.setFontSize(fontSize);
      if (isBold) {
        pdf.setFont(undefined, 'bold');
      } else {
        pdf.setFont(undefined, 'normal');
      }
      pdf.text(text, x, y);
      return y + fontSize * 0.4; // Return next Y position
    };

    // Header
    pdf.setFillColor(41, 128, 185); // Medical blue
    pdf.rect(0, 0, pageWidth, 40, 'F');
    pdf.setTextColor(255, 255, 255);
    yPosition = addText('RehabAI ROI Calculator Report', margin, 25, 20, true);

    pdf.setTextColor(0, 0, 0);
    yPosition = 60;

    // Practice Information
    yPosition = addText('Practice Information', margin, yPosition, 16, true);
    yPosition += 10;
    yPosition = addText(`Practice Type: ${inputs.practiceType.charAt(0).toUpperCase() + inputs.practiceType.slice(1)}`, margin, yPosition);
    yPosition = addText(`Current Patients: ${inputs.currentPatients.toLocaleString()}`, margin, yPosition);
    yPosition = addText(`Number of Therapists: ${inputs.therapistsCount}`, margin, yPosition);
    yPosition = addText(`Average Session Cost: $${inputs.averageSessionCost}`, margin, yPosition);
    yPosition += 15;

    // Key Results
    yPosition = addText('Key Results', margin, yPosition, 16, true);
    yPosition += 10;
    yPosition = addText(`Annual ROI: ${results.roiPercentage}%`, margin, yPosition, 14, true);
    yPosition = addText(`Payback Period: ${results.paybackMonths} months`, margin, yPosition, 14, true);
    yPosition = addText(`Net Annual Benefit: $${results.netBenefit.toLocaleString()}`, margin, yPosition, 14, true);
    yPosition += 15;

    // Financial Breakdown
    yPosition = addText('Annual Benefits Breakdown', margin, yPosition, 16, true);
    yPosition += 10;
    yPosition = addText(`Staff Cost Savings: $${results.staffCostSavings.toLocaleString()}`, margin, yPosition);
    yPosition = addText(`Increased Revenue: $${results.increasedRevenue.toLocaleString()}`, margin, yPosition);
    yPosition = addText(`Reduced Readmissions: $${results.reducedReadmissions.toLocaleString()}`, margin, yPosition);
    yPosition = addText(`Total Annual Benefits: $${results.totalAnnualBenefit.toLocaleString()}`, margin, yPosition, 12, true);
    yPosition += 15;

    // Investment
    yPosition = addText('Investment Details', margin, yPosition, 16, true);
    yPosition += 10;
    yPosition = addText(`Annual Platform Cost: $${results.platformCost.toLocaleString()}`, margin, yPosition);
    yPosition = addText(`Net Profit: $${results.netBenefit.toLocaleString()}`, margin, yPosition);
    yPosition += 15;

    // Capacity Analysis
    yPosition = addText('Capacity Analysis', margin, yPosition, 16, true);
    yPosition += 10;
    yPosition = addText(`Current Patient Capacity: ${inputs.currentPatients.toLocaleString()}`, margin, yPosition);
    yPosition = addText(`New Patient Capacity: ${results.newPatientCapacity.toLocaleString()}`, margin, yPosition);
    yPosition = addText(`Capacity Increase: +${(results.newPatientCapacity - inputs.currentPatients).toLocaleString()} patients (300%)`, margin, yPosition);
    yPosition += 20;

    // Assumptions and Disclaimers
    yPosition = addText('Assumptions', margin, yPosition, 14, true);
    yPosition += 10;
    pdf.setFontSize(10);
    const assumptions = [
      '• 60% staff efficiency improvement with AI assistance',
      '• 40% revenue increase through improved patient capacity',
      '• 45% reduction in readmissions due to better outcomes',
      '• Platform cost calculated at $15 per patient per month',
      '• Results based on industry averages and pilot study data'
    ];

    assumptions.forEach(assumption => {
      yPosition = addText(assumption, margin, yPosition, 10);
    });

    yPosition += 15;
    yPosition = addText('Generated by RehabAI ROI Calculator', margin, yPosition, 10);
    yPosition = addText(`Report Date: ${new Date().toLocaleDateString()}`, margin, yPosition, 10);

    // Footer
    pdf.setFillColor(41, 128, 185);
    pdf.rect(0, pdf.internal.pageSize.getHeight() - 30, pageWidth, 30, 'F');
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(10);
    pdf.text('RehabAI - Transforming Rehabilitation with AI', margin, pdf.internal.pageSize.getHeight() - 15);
    pdf.text('Contact: sales@rehabai.com | 1-800-REHAB-AI', margin, pdf.internal.pageSize.getHeight() - 5);

    // Save the PDF
    const fileName = `RehabAI_ROI_Report_${inputs.practiceType}_${new Date().toISOString().slice(0, 10)}.pdf`;
    pdf.save(fileName);
  };

  const handleEmailSend = async () => {
    try {
      // Create email content
      const emailContent = `
Hello ${emailData.name},

Thank you for using the RehabAI ROI Calculator. Here are your personalized results:

PRACTICE INFORMATION:
- Practice Type: ${inputs.practiceType.charAt(0).toUpperCase() + inputs.practiceType.slice(1)}
- Current Patients: ${inputs.currentPatients.toLocaleString()}
- Number of Therapists: ${inputs.therapistsCount}

KEY RESULTS:
- Annual ROI: ${results.roiPercentage}%
- Payback Period: ${results.paybackMonths} months
- Net Annual Benefit: $${results.netBenefit.toLocaleString()}

ANNUAL BENEFITS:
- Staff Cost Savings: $${results.staffCostSavings.toLocaleString()}
- Increased Revenue: $${results.increasedRevenue.toLocaleString()}
- Reduced Readmissions: $${results.reducedReadmissions.toLocaleString()}
- Total Benefits: $${results.totalAnnualBenefit.toLocaleString()}

CAPACITY ANALYSIS:
- Current Capacity: ${inputs.currentPatients.toLocaleString()} patients
- New Capacity: ${results.newPatientCapacity.toLocaleString()} patients
- Increase: +${(results.newPatientCapacity - inputs.currentPatients).toLocaleString()} patients (300%)

${emailData.message ? `\nYour Message: ${emailData.message}` : ''}

Ready to transform your practice? Let's schedule a demo to show you RehabAI in action.

Best regards,
The RehabAI Team

Contact us:
- Email: sales@rehabai.com
- Phone: 1-800-REHAB-AI
- Website: www.rehabai.com
      `;

      // Create mailto link
      const subject = encodeURIComponent(`RehabAI ROI Analysis Results - ${emailData.organization || emailData.name}`);
      const body = encodeURIComponent(emailContent);
      const mailtoLink = `mailto:${emailData.email}?subject=${subject}&body=${body}`;

      // Open default email client
      window.open(mailtoLink);

      setEmailSent(true);
      setTimeout(() => {
        setShowEmailForm(false);
        setEmailSent(false);
      }, 3000);

    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error preparing the email. Please try again.');
    }
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
                <Button
                  onClick={downloadPDFReport}
                  className="flex-1 bg-medical-green text-white hover:bg-medical-green/90"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Report
                </Button>
                <Button
                  onClick={() => setShowEmailForm(true)}
                  className="flex-1 medical-gradient text-white"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email Results
                </Button>
              </div>
            </div>
          )}

          {/* Email Form Modal */}
          {showEmailForm && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <Card className="w-full max-w-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center">
                        <Mail className="mr-2 h-5 w-5 text-medical-blue" />
                        Email ROI Results
                      </CardTitle>
                      <CardDescription>
                        Send the detailed ROI analysis to your email
                      </CardDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowEmailForm(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {emailSent ? (
                    <Alert className="border-medical-green/20 bg-medical-green/5">
                      <CheckCircle className="h-4 w-4 text-medical-green" />
                      <AlertDescription className="text-medical-green">
                        Email prepared successfully! Your default email client should open with the ROI report.
                      </AlertDescription>
                    </Alert>
                  ) : (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@company.com"
                          value={emailData.email}
                          onChange={(e) => setEmailData(prev => ({ ...prev, email: e.target.value }))}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Smith"
                          value={emailData.name}
                          onChange={(e) => setEmailData(prev => ({ ...prev, name: e.target.value }))}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="organization">Organization</Label>
                        <Input
                          id="organization"
                          placeholder="Healthcare Practice Name"
                          value={emailData.organization}
                          onChange={(e) => setEmailData(prev => ({ ...prev, organization: e.target.value }))}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Additional Message (Optional)</Label>
                        <Input
                          id="message"
                          placeholder="Any specific questions or requirements..."
                          value={emailData.message}
                          onChange={(e) => setEmailData(prev => ({ ...prev, message: e.target.value }))}
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <Button
                          variant="outline"
                          onClick={() => setShowEmailForm(false)}
                          className="flex-1"
                        >
                          Cancel
                        </Button>
                        <Button
                          onClick={handleEmailSend}
                          disabled={!emailData.email || !emailData.name}
                          className="flex-1 medical-gradient text-white"
                        >
                          <Mail className="mr-2 h-4 w-4" />
                          Send Email
                        </Button>
                      </div>

                      <div className="text-xs text-muted-foreground text-center">
                        * Required fields. Your email will open with pre-filled ROI analysis results.
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
