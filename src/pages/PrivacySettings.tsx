
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Lock, Shield, Eye, Database } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const PrivacySettings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("datasharing");
  
  const [dataSharing, setDataSharing] = useState({
    shareUsageData: true,
    shareLocationData: false,
    allowPersonalization: true,
    sharePurchaseHistory: false
  });
  
  const [visibility, setVisibility] = useState({
    profilePublic: true,
    showRealName: true,
    showLocation: false,
    listingsVisible: true
  });
  
  const [security, setSecurity] = useState({
    twoFactorAuth: false,
    loginNotifications: true,
    deviceTracking: true,
    autoLogout: false
  });
  
  const handleDataSharingChange = (key: keyof typeof dataSharing) => {
    setDataSharing(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  const handleVisibilityChange = (key: keyof typeof visibility) => {
    setVisibility(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  const handleSecurityChange = (key: keyof typeof security) => {
    setSecurity(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  const handleSave = () => {
    toast({
      title: "Privacy Settings Updated",
      description: "Your privacy preferences have been saved successfully."
    });
    navigate("/profile");
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

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock size={18} />
              Privacy & Security
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full mb-4 grid grid-cols-3">
                <TabsTrigger value="datasharing">
                  <Database size={14} className="mr-1" /> Data Sharing
                </TabsTrigger>
                <TabsTrigger value="visibility">
                  <Eye size={14} className="mr-1" /> Account Visibility
                </TabsTrigger>
                <TabsTrigger value="security">
                  <Shield size={14} className="mr-1" /> Security
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="datasharing" className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Usage Data</h3>
                    <p className="text-sm text-gray-500">Share app usage data to improve our services</p>
                  </div>
                  <Switch 
                    checked={dataSharing.shareUsageData} 
                    onCheckedChange={() => handleDataSharingChange('shareUsageData')}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Location Data</h3>
                    <p className="text-sm text-gray-500">Share location data to find nearby medicines</p>
                  </div>
                  <Switch 
                    checked={dataSharing.shareLocationData} 
                    onCheckedChange={() => handleDataSharingChange('shareLocationData')}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Personalization</h3>
                    <p className="text-sm text-gray-500">Allow personalized recommendations</p>
                  </div>
                  <Switch 
                    checked={dataSharing.allowPersonalization} 
                    onCheckedChange={() => handleDataSharingChange('allowPersonalization')}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Purchase History</h3>
                    <p className="text-sm text-gray-500">Share purchase history with partners</p>
                  </div>
                  <Switch 
                    checked={dataSharing.sharePurchaseHistory} 
                    onCheckedChange={() => handleDataSharingChange('sharePurchaseHistory')}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="visibility" className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Public Profile</h3>
                    <p className="text-sm text-gray-500">Make your profile visible to other users</p>
                  </div>
                  <Switch 
                    checked={visibility.profilePublic} 
                    onCheckedChange={() => handleVisibilityChange('profilePublic')}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Show Real Name</h3>
                    <p className="text-sm text-gray-500">Display your real name instead of username</p>
                  </div>
                  <Switch 
                    checked={visibility.showRealName} 
                    onCheckedChange={() => handleVisibilityChange('showRealName')}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Location Visibility</h3>
                    <p className="text-sm text-gray-500">Show your location on your profile</p>
                  </div>
                  <Switch 
                    checked={visibility.showLocation} 
                    onCheckedChange={() => handleVisibilityChange('showLocation')}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Listings Visibility</h3>
                    <p className="text-sm text-gray-500">Make your listings public</p>
                  </div>
                  <Switch 
                    checked={visibility.listingsVisible} 
                    onCheckedChange={() => handleVisibilityChange('listingsVisible')}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="security" className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Two-Factor Authentication</h3>
                    <p className="text-sm text-gray-500">Add an extra layer of security</p>
                  </div>
                  <Switch 
                    checked={security.twoFactorAuth} 
                    onCheckedChange={() => handleSecurityChange('twoFactorAuth')}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Login Notifications</h3>
                    <p className="text-sm text-gray-500">Get alerted about new sign-ins</p>
                  </div>
                  <Switch 
                    checked={security.loginNotifications} 
                    onCheckedChange={() => handleSecurityChange('loginNotifications')}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Device Tracking</h3>
                    <p className="text-sm text-gray-500">Track which devices access your account</p>
                  </div>
                  <Switch 
                    checked={security.deviceTracking} 
                    onCheckedChange={() => handleSecurityChange('deviceTracking')}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Auto Logout</h3>
                    <p className="text-sm text-gray-500">Automatically log out after 30 minutes of inactivity</p>
                  </div>
                  <Switch 
                    checked={security.autoLogout} 
                    onCheckedChange={() => handleSecurityChange('autoLogout')}
                  />
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="pt-6 mt-6 border-t">
              <Button className="w-full" onClick={handleSave}>
                Save Privacy Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default PrivacySettings;
