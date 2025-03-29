
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Info, Heart, Globe, Shield, Users } from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  return (
    <MainLayout title="About ReMediUse">
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
              <Info size={18} />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                ReMediUse is built on a simple but powerful idea: to reduce medicine waste while making healthcare more accessible and affordable for everyone.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                We created this platform to address the growing problem of unused medicines that often expire in people's homes, while many others struggle to afford the medicines they need.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg flex flex-col items-center text-center">
                  <Heart className="h-8 w-8 text-remedyblue-500 mb-2" />
                  <h3 className="font-medium mb-1">Reducing Waste</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Helping unused medicines find a new home instead of going to waste</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg flex flex-col items-center text-center">
                  <Globe className="h-8 w-8 text-remedygreen-500 mb-2" />
                  <h3 className="font-medium mb-1">Eco-Friendly</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Reducing the environmental impact of medicine disposal</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg flex flex-col items-center text-center">
                  <Users className="h-8 w-8 text-purple-500 mb-2" />
                  <h3 className="font-medium mb-1">Community</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Building a community of people helping each other with healthcare needs</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield size={18} />
              How It Works
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <span className="font-medium">1</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">List Your Unused Medicines</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Take photos of your unused, unexpired medicines and list them on our platform. You can choose to sell them at a reduced price or donate them for free.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <span className="font-medium">2</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">AI Price Recommendation</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Our AI system analyzes your medicine's details (manufacturing date, expiry date, condition) and suggests an appropriate price, typically 25-30% less than the market price.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <span className="font-medium">3</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Connect with Buyers/Recipients</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Interested buyers or donation recipients can contact you through our secure messaging system to arrange pickup or delivery.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <span className="font-medium">4</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Complete the Transaction</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Meet safely to exchange the medicine, or use our secure payment system if shipping. For donations, we handle connecting you with verified recipients.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Our Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <p className="text-2xl font-bold text-remedyblue-600 dark:text-remedyblue-400">50,000+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Medicines Exchanged</p>
              </div>
              <div className="p-4">
                <p className="text-2xl font-bold text-remedyblue-600 dark:text-remedyblue-400">₹15M+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Money Saved</p>
              </div>
              <div className="p-4">
                <p className="text-2xl font-bold text-remedygreen-600 dark:text-remedygreen-400">10,000+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Donations Made</p>
              </div>
              <div className="p-4">
                <p className="text-2xl font-bold text-remedygreen-600 dark:text-remedygreen-400">25+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Cities Covered</p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Button>Join Our Community</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default About;
