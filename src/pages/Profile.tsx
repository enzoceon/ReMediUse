
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, Settings, ChevronRight, ShoppingBag, Heart } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { mockMedicines } from "@/data/mockData";
import MedicineGrid from "@/components/medicine/MedicineGrid";

const Profile = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("account");
  
  // Filter medicines for listings and donations
  const myListings = mockMedicines.filter(med => !med.isDonation).slice(0, 3);
  const myDonations = mockMedicines.filter(med => med.isDonation);
  
  return (
    <MainLayout title="Profile">
      <div className="mb-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="" alt={user?.name} />
                <AvatarFallback className="text-lg bg-remedyblue-100 text-remedyblue-600">
                  {user?.name?.charAt(0)}
                </AvatarFallback>
              </Avatar>
              
              <div>
                <h2 className="text-xl font-bold">{user?.name}</h2>
                <p className="text-sm text-gray-500">{user?.email}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              <Button variant="outline" size="sm" className="gap-1">
                <Settings size={16} />
                <span>Settings</span>
              </Button>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-1 text-red-500 hover:text-red-700"
                onClick={logout}
              >
                <LogOut size={16} />
                <span>Logout</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="listings">My Listings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-500">Name</span>
                <span className="font-medium">{user?.name}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-500">Email</span>
                <span className="font-medium">{user?.email}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-500">Phone</span>
                <span className="font-medium">{user?.phone}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-500">Location</span>
                <span className="font-medium">{user?.location}</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Settings</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                <Button variant="ghost" className="w-full justify-between py-6 h-auto">
                  <span>Notification Preferences</span>
                  <ChevronRight size={18} />
                </Button>
                <Button variant="ghost" className="w-full justify-between py-6 h-auto">
                  <span>Privacy Settings</span>
                  <ChevronRight size={18} />
                </Button>
                <Button variant="ghost" className="w-full justify-between py-6 h-auto">
                  <span>Help & Support</span>
                  <ChevronRight size={18} />
                </Button>
                <Button variant="ghost" className="w-full justify-between py-6 h-auto">
                  <span>About ReMediUse</span>
                  <ChevronRight size={18} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="listings" className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium flex items-center gap-2">
                <ShoppingBag size={18} />
                <span>My Listings</span>
              </h3>
            </div>
            {myListings.length > 0 ? (
              <MedicineGrid medicines={myListings} />
            ) : (
              <Card className="bg-gray-50">
                <CardContent className="py-8 text-center">
                  <p className="text-gray-500">You haven't listed any medicines for sale yet</p>
                  <Button className="mt-4 bg-remedyblue-600" size="sm">
                    List a Medicine
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium flex items-center gap-2">
                <Heart size={18} />
                <span>My Donations</span>
              </h3>
            </div>
            {myDonations.length > 0 ? (
              <MedicineGrid medicines={myDonations} />
            ) : (
              <Card className="bg-gray-50">
                <CardContent className="py-8 text-center">
                  <p className="text-gray-500">You haven't donated any medicines yet</p>
                  <Button className="mt-4 bg-remedygreen-600" size="sm">
                    Donate Medicine
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </MainLayout>
  );
};

export default Profile;
