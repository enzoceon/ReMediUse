
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { LogOut, Settings, ChevronRight, ShoppingBag, Heart, Phone, Mail, User as UserIcon, MapPin, Plus, Edit, Check, X } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { mockMedicines } from "@/data/mockData";
import MedicineGrid from "@/components/medicine/MedicineGrid";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("account");
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });
  const { toast } = useToast();
  
  // Filter medicines for listings and donations
  const myListings = mockMedicines.filter(med => !med.isDonation).slice(0, 3);
  const myDonations = mockMedicines.filter(med => med.isDonation);
  
  const handleSavePersonalInfo = () => {
    // In a real app, this would update the user in the database
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your personal information has been updated successfully.",
    });
  };

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
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
          <TabsTrigger value="listings">My Listings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between py-4">
              <CardTitle className="text-lg">Personal Information</CardTitle>
              {!isEditing ? (
                <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                  <Edit size={16} className="mr-1" /> Edit
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => setIsEditing(false)}>
                    <X size={16} className="mr-1" /> Cancel
                  </Button>
                  <Button variant="default" size="sm" onClick={handleSavePersonalInfo}>
                    <Check size={16} className="mr-1" /> Save
                  </Button>
                </div>
              )}
            </CardHeader>
            <CardContent className="space-y-3">
              {!isEditing ? (
                <>
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
                </>
              ) : (
                <>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-500">Name</label>
                    <Input 
                      value={editedUser.name} 
                      onChange={(e) => setEditedUser({...editedUser, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-500">Email</label>
                    <Input 
                      value={editedUser.email} 
                      onChange={(e) => setEditedUser({...editedUser, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-500">Phone</label>
                    <Input 
                      value={editedUser.phone} 
                      onChange={(e) => setEditedUser({...editedUser, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-500">Location</label>
                    <Input 
                      value={editedUser.location} 
                      onChange={(e) => setEditedUser({...editedUser, location: e.target.value})}
                    />
                  </div>
                </>
              )}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between py-4">
              <CardTitle className="text-lg">Addresses</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                <div className="p-4">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium">Home Address</h3>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                  <p className="text-sm text-gray-500">123 Main St, Building 4, Apt 201, Mumbai, Maharashtra, 400001</p>
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium">Pickup Address</h3>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                  <p className="text-sm text-gray-500">456 Market Road, Shop 12, Mumbai, Maharashtra, 400002</p>
                </div>
                
                <Button variant="ghost" className="w-full justify-center py-4 h-auto text-remedyblue-600">
                  + Add New Address
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Settings</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                <Button 
                  variant="ghost" 
                  className="w-full justify-between py-6 h-auto"
                  onClick={() => navigate("/notifications")}
                >
                  <span>Notification Preferences</span>
                  <ChevronRight size={18} />
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-between py-6 h-auto"
                  onClick={() => navigate("/privacy")}
                >
                  <span>Privacy Settings</span>
                  <ChevronRight size={18} />
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-between py-6 h-auto"
                  onClick={() => navigate("/support")}
                >
                  <span>Help & Support</span>
                  <ChevronRight size={18} />
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-between py-6 h-auto"
                  onClick={() => navigate("/about")}
                >
                  <span>About ReMediUse</span>
                  <ChevronRight size={18} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="payment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Payment Methods</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-6 bg-blue-500 rounded-md flex items-center justify-center text-white text-xs font-bold">UPI</div>
                      <h3 className="font-medium">UPI ID</h3>
                    </div>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                  <p className="text-sm text-gray-500">username@upi</p>
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-6 bg-gray-200 rounded-md flex items-center justify-center text-gray-800 text-xs font-bold">Bank</div>
                      <h3 className="font-medium">Bank Account</h3>
                    </div>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                  <p className="text-sm text-gray-500">ICICI Bank •••• 4567</p>
                </div>
                
                <Button variant="ghost" className="w-full justify-center py-4 h-auto text-remedyblue-600">
                  + Add Payment Method
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Account Verification</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start gap-2 mb-4">
                <svg className="w-5 h-5 text-amber-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-amber-800">Verification Required</p>
                  <p className="text-xs text-amber-700">Complete verification to unlock all features</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                      <UserIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">ID Verification</p>
                      <p className="text-xs text-gray-500">Upload your Aadhar or PAN card</p>
                    </div>
                  </div>
                  <Button size="sm">Upload</Button>
                </div>
                
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Phone Verification</p>
                      <p className="text-xs text-gray-500">Verify your phone number</p>
                    </div>
                  </div>
                  <div className="bg-green-50 text-green-700 border border-green-200 text-xs px-2 py-1 rounded-full">Verified</div>
                </div>
                
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Email Verification</p>
                      <p className="text-xs text-gray-500">Verify your email address</p>
                    </div>
                  </div>
                  <div className="bg-green-50 text-green-700 border border-green-200 text-xs px-2 py-1 rounded-full">Verified</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="listings" className="space-y-6">
          <Tabs defaultValue="forSale" className="w-full">
            <TabsList className="w-full mb-4">
              <TabsTrigger value="forSale" className="flex-1">My Listings</TabsTrigger>
              <TabsTrigger value="donations" className="flex-1">My Donations</TabsTrigger>
            </TabsList>
            
            <TabsContent value="forSale">
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
            </TabsContent>
            
            <TabsContent value="donations">
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
            </TabsContent>
          </Tabs>
        </TabsContent>
      </Tabs>
    </MainLayout>
  );
};

export default Profile;
