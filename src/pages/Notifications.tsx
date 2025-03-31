
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bell, 
  Check, 
  ShoppingCart, 
  Heart, 
  Clock, 
  Truck, 
  AlertCircle, 
  Pill,
  Settings, 
  Calendar,
  CheckCircle2,
  XCircle,
  BadgeAlert,
  DollarSign
} from "lucide-react";

const Notifications = () => {
  // Sample notification data
  const recentNotifications = [
    {
      id: 1,
      title: "Your order has been confirmed",
      description: "Order #1234 has been confirmed and is being processed.",
      time: "2 hours ago",
      read: false,
      icon: <ShoppingCart className="text-remedyblue-500" size={18} />,
      type: "order"
    },
    {
      id: 2,
      title: "Donation request accepted",
      description: "Your request for Paracetamol donation has been accepted.",
      time: "Yesterday",
      read: false,
      icon: <Heart className="text-remedygreen-500" size={18} />,
      type: "donation"
    },
    {
      id: 3,
      title: "Payment successful",
      description: "Your payment of ₹450 for order #1234 was successful.",
      time: "2 days ago",
      read: true,
      icon: <DollarSign className="text-green-500" size={18} />,
      type: "payment"
    },
    {
      id: 4,
      title: "Medicine expiring soon",
      description: "Your Metformin 500mg will expire in 30 days.",
      time: "3 days ago",
      read: true,
      icon: <BadgeAlert className="text-amber-500" size={18} />,
      type: "alert"
    },
    {
      id: 5,
      title: "Order delivered",
      description: "Your order #9876 has been delivered successfully.",
      time: "1 week ago",
      read: true,
      icon: <Truck className="text-green-500" size={18} />,
      type: "order"
    },
  ];

  const olderNotifications = [
    {
      id: 6,
      title: "Prescription verification",
      description: "Your prescription has been verified successfully.",
      time: "2 weeks ago",
      read: true,
      icon: <CheckCircle2 className="text-green-500" size={18} />,
      type: "alert"
    },
    {
      id: 7,
      title: "Medicine listed for sale",
      description: "Your Dolo 650 has been listed for sale successfully.",
      time: "3 weeks ago",
      read: true,
      icon: <Pill className="text-remedyblue-500" size={18} />,
      type: "alert"
    },
    {
      id: 8,
      title: "Donation request rejected",
      description: "Your donation request for Amoxicillin has been rejected.",
      time: "1 month ago",
      read: true,
      icon: <XCircle className="text-red-500" size={18} />,
      type: "donation"
    },
    {
      id: 9,
      title: "Order cancelled",
      description: "Your order #5678 has been cancelled as requested.",
      time: "1 month ago",
      read: true,
      icon: <XCircle className="text-gray-500" size={18} />,
      type: "order"
    },
    {
      id: 10,
      title: "Account created",
      description: "Welcome to ReMediUse! Your account has been created successfully.",
      time: "2 months ago",
      read: true,
      icon: <Check className="text-green-500" size={18} />,
      type: "alert"
    },
  ];

  const renderNotificationItem = (notification: any) => (
    <div 
      key={notification.id} 
      className={`p-4 border-b border-gray-100 flex items-start gap-3 ${!notification.read ? 'bg-blue-50' : ''}`}
    >
      <div className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center">
        {notification.icon}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h3 className={`text-sm font-medium ${!notification.read ? 'text-black' : 'text-gray-800'}`}>
            {notification.title}
          </h3>
          <span className="text-xs text-gray-500">{notification.time}</span>
        </div>
        <p className="text-xs text-gray-600 mt-1">{notification.description}</p>
      </div>
      {!notification.read && (
        <div className="h-2 w-2 rounded-full bg-remedyblue-500 mt-2"></div>
      )}
    </div>
  );

  return (
    <MainLayout title="Notifications">
      <div className="max-w-lg mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Notifications</h1>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => console.log("Mark all as read")}
              className="text-xs"
            >
              <Check size={14} className="mr-1" />
              Mark all read
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => window.location.href = '/notification-preferences'}
              className="text-xs"
            >
              <Settings size={14} className="mr-1" />
              Settings
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full grid grid-cols-4 mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="donations">Donations</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {recentNotifications.length === 0 && olderNotifications.length === 0 ? (
                <div className="py-12 text-center">
                  <Bell size={40} className="mx-auto text-gray-300 mb-3" />
                  <p className="text-gray-500">No notifications yet</p>
                </div>
              ) : (
                <>
                  <div className="px-4 py-2 bg-gray-50 border-b border-gray-100">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock size={14} className="mr-1" />
                      <span>Recent</span>
                    </div>
                  </div>
                  {recentNotifications.map(renderNotificationItem)}
                  
                  <div className="px-4 py-2 bg-gray-50 border-b border-gray-100 mt-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar size={14} className="mr-1" />
                      <span>Older</span>
                    </div>
                  </div>
                  {olderNotifications.map(renderNotificationItem)}
                </>
              )}
            </div>
          </TabsContent>

          <TabsContent value="orders">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {recentNotifications.filter(n => n.type === 'order').concat(
                olderNotifications.filter(n => n.type === 'order')
              ).map(renderNotificationItem)}
              
              {recentNotifications.filter(n => n.type === 'order').length === 0 && 
               olderNotifications.filter(n => n.type === 'order').length === 0 && (
                <div className="py-12 text-center">
                  <ShoppingCart size={40} className="mx-auto text-gray-300 mb-3" />
                  <p className="text-gray-500">No order notifications</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="donations">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {recentNotifications.filter(n => n.type === 'donation').concat(
                olderNotifications.filter(n => n.type === 'donation')
              ).map(renderNotificationItem)}
              
              {recentNotifications.filter(n => n.type === 'donation').length === 0 && 
               olderNotifications.filter(n => n.type === 'donation').length === 0 && (
                <div className="py-12 text-center">
                  <Heart size={40} className="mx-auto text-gray-300 mb-3" />
                  <p className="text-gray-500">No donation notifications</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="alerts">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {recentNotifications.filter(n => n.type === 'alert').concat(
                olderNotifications.filter(n => n.type === 'alert')
              ).map(renderNotificationItem)}
              
              {recentNotifications.filter(n => n.type === 'alert').length === 0 && 
               olderNotifications.filter(n => n.type === 'alert').length === 0 && (
                <div className="py-12 text-center">
                  <AlertCircle size={40} className="mx-auto text-gray-300 mb-3" />
                  <p className="text-gray-500">No alerts</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Notifications;
