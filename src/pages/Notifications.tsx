
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Gift, Truck, BadgeCheck, Bell, MessageSquare, User, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotificationCategory = ({ 
  icon, 
  title, 
  description, 
  enabled, 
  onChange 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  enabled: boolean; 
  onChange: (checked: boolean) => void;
}) => (
  <Card className="mb-4 overflow-hidden animate-fade-in">
    <CardContent className="p-0">
      <div className="flex items-center p-4">
        <div className="bg-gray-100 p-3 rounded-full mr-4">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>
        <Switch checked={enabled} onCheckedChange={onChange} />
      </div>
    </CardContent>
  </Card>
);

const Notifications = () => {
  const navigate = useNavigate();
  const [buyNotifications, setBuyNotifications] = useState(true);
  const [sellNotifications, setSellNotifications] = useState(true);
  const [donationNotifications, setDonationNotifications] = useState(true);
  const [deliveryNotifications, setDeliveryNotifications] = useState(true);
  const [verificationNotifications, setVerificationNotifications] = useState(true);
  const [accountNotifications, setAccountNotifications] = useState(true);
  const [queryNotifications, setQueryNotifications] = useState(true);
  
  return (
    <MainLayout title="Notifications">
      <div className="max-w-2xl mx-auto pb-20">
        <Button 
          variant="ghost" 
          className="mb-4 pl-0 flex items-center"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={16} className="mr-2" />
          Back
        </Button>
        
        <h1 className="text-2xl font-bold mb-6">Notification Preferences</h1>
        
        <Tabs defaultValue="preferences">
          <TabsList className="w-full mb-6">
            <TabsTrigger value="preferences" className="flex-1">Preferences</TabsTrigger>
            <TabsTrigger value="history" className="flex-1">Notification History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="preferences" className="space-y-6">
            <div className="mb-6">
              <Label className="text-lg font-semibold mb-4 block">Transaction Notifications</Label>
              
              <NotificationCategory
                icon={<ShoppingBag size={20} className="text-remedyblue-600" />}
                title="Purchase Updates"
                description="Receive notifications about your purchases, orders, and payment confirmations"
                enabled={buyNotifications}
                onChange={setBuyNotifications}
              />
              
              <NotificationCategory
                icon={<ShoppingBag size={20} className="text-remedyblue-600" />}
                title="Selling Updates"
                description="Get notified when someone buys your listed medicines or makes an inquiry"
                enabled={sellNotifications}
                onChange={setSellNotifications}
              />
              
              <NotificationCategory
                icon={<Gift size={20} className="text-remedygreen-600" />}
                title="Donation Updates"
                description="Notifications about donation requests, approvals, and thank you messages"
                enabled={donationNotifications}
                onChange={setDonationNotifications}
              />
            </div>
            
            <div className="mb-6">
              <Label className="text-lg font-semibold mb-4 block">Delivery Notifications</Label>
              
              <NotificationCategory
                icon={<Truck size={20} className="text-remedyblue-600" />}
                title="Shipping & Delivery"
                description="Get updates about shipping confirmations, delivery status, and package arrivals"
                enabled={deliveryNotifications}
                onChange={setDeliveryNotifications}
              />
            </div>
            
            <div className="mb-6">
              <Label className="text-lg font-semibold mb-4 block">Account Notifications</Label>
              
              <NotificationCategory
                icon={<BadgeCheck size={20} className="text-remedyblue-600" />}
                title="Verification Updates"
                description="Get notified about medicine verification, account verification, and security alerts"
                enabled={verificationNotifications}
                onChange={setVerificationNotifications}
              />
              
              <NotificationCategory
                icon={<User size={20} className="text-remedyblue-600" />}
                title="Account Updates"
                description="Notifications about profile changes, password resets, and security alerts"
                enabled={accountNotifications}
                onChange={setAccountNotifications}
              />
            </div>
            
            <div>
              <Label className="text-lg font-semibold mb-4 block">Other Notifications</Label>
              
              <NotificationCategory
                icon={<MessageSquare size={20} className="text-remedyblue-600" />}
                title="Queries & Support"
                description="Updates about your support tickets, queries, and responses from our team"
                enabled={queryNotifications}
                onChange={setQueryNotifications}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="history">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <Bell size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium mb-2">No new notifications</h3>
              <p className="text-gray-500">You're all caught up! New notifications will appear here.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Notifications;
