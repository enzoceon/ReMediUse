
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Shield, EyeOff, UserX, DownloadCloud, Lock, Key, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";

const PrivacySettings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: true,
    locationSharing: false,
    activityStatus: true,
    dataCollection: true,
    twoFactorAuth: false
  });

  const handleToggleChange = (key: keyof typeof privacySettings) => {
    setPrivacySettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSave = () => {
    toast({
      title: "Privacy Settings Updated",
      description: "Your privacy settings have been saved successfully."
    });
  };

  return (
    <MainLayout title="Privacy Settings">
      <div className="max-w-2xl mx-auto">
        <Button 
          variant="ghost" 
          className="mb-4 pl-0"
          onClick={() => navigate("/profile")}
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Profile
        </Button>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield size={18} />
              Privacy & Data Protection
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <EyeOff size={18} className="text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Profile Visibility</h3>
                    <p className="text-sm text-gray-500">Allow others to view your profile information</p>
                  </div>
                </div>
                <Switch 
                  checked={privacySettings.profileVisibility} 
                  onCheckedChange={() => handleToggleChange('profileVisibility')}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <MapPin size={18} className="text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Location Sharing</h3>
                    <p className="text-sm text-gray-500">Share your location with other users</p>
                  </div>
                </div>
                <Switch 
                  checked={privacySettings.locationSharing} 
                  onCheckedChange={() => handleToggleChange('locationSharing')}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <UserX size={18} className="text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Activity Status</h3>
                    <p className="text-sm text-gray-500">Show when you're active on the platform</p>
                  </div>
                </div>
                <Switch 
                  checked={privacySettings.activityStatus} 
                  onCheckedChange={() => handleToggleChange('activityStatus')}
                />
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="font-medium">Data Settings</h3>
              
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <DownloadCloud size={18} className="text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Data Collection</h3>
                    <p className="text-sm text-gray-500">Allow us to collect usage data to improve your experience</p>
                  </div>
                </div>
                <Switch 
                  checked={privacySettings.dataCollection} 
                  onCheckedChange={() => handleToggleChange('dataCollection')}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <Key size={18} className="text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Two-Factor Authentication</h3>
                    <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                  </div>
                </div>
                <Switch 
                  checked={privacySettings.twoFactorAuth} 
                  onCheckedChange={() => handleToggleChange('twoFactorAuth')}
                />
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Your Privacy Rights</h3>
              <p className="text-sm text-gray-600 mb-2">
                At ReMediUse, we take your privacy seriously. You have the right to:
              </p>
              <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
                <li>Access your personal data</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications</li>
                <li>Restrict certain types of processing</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2">
                To exercise any of these rights, please contact our privacy team at privacy@remediuse.com
              </p>
            </div>

            <div className="pt-4">
              <Button className="w-full" onClick={handleSave}>
                Save Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default PrivacySettings;
