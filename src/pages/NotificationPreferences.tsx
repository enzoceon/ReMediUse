
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Bell } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const NotificationPreferences = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [preferences, setPreferences] = useState({
    orderUpdates: true,
    promotions: false,
    recommendations: true,
    securityAlerts: true,
    productUpdates: false
  });

  const handleToggleChange = (key: keyof typeof preferences) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSave = () => {
    toast({
      title: "Preferences Updated",
      description: "Your notification preferences have been saved successfully."
    });
    navigate("/profile");
  };

  return (
    <MainLayout title="Notification Preferences">
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
              <Bell size={18} />
              Notification Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Order Updates</h3>
                  <p className="text-sm text-gray-500">Get notified about your order status and delivery updates</p>
                </div>
                <Switch 
                  checked={preferences.orderUpdates} 
                  onCheckedChange={() => handleToggleChange('orderUpdates')}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Promotions & Offers</h3>
                  <p className="text-sm text-gray-500">Receive alerts about discounts and special offers</p>
                </div>
                <Switch 
                  checked={preferences.promotions} 
                  onCheckedChange={() => handleToggleChange('promotions')}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Personalized Recommendations</h3>
                  <p className="text-sm text-gray-500">Get suggestions based on your browsing and purchase history</p>
                </div>
                <Switch 
                  checked={preferences.recommendations} 
                  onCheckedChange={() => handleToggleChange('recommendations')}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Security Alerts</h3>
                  <p className="text-sm text-gray-500">Be informed about account security and verification</p>
                </div>
                <Switch 
                  checked={preferences.securityAlerts} 
                  onCheckedChange={() => handleToggleChange('securityAlerts')}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Product Updates</h3>
                  <p className="text-sm text-gray-500">Get notified when products you're interested in become available</p>
                </div>
                <Switch 
                  checked={preferences.productUpdates} 
                  onCheckedChange={() => handleToggleChange('productUpdates')}
                />
              </div>
            </div>

            <div className="pt-4 border-t">
              <Button className="w-full" onClick={handleSave}>
                Save Preferences
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default NotificationPreferences;
