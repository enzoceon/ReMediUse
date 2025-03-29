
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Info, Medal, Users, HeartHandshake, MapPin, Mail, Phone, Globe } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const About = () => {
  const navigate = useNavigate();

  const mission = [
    {
      title: "Reducing Medical Waste",
      description: "We aim to reduce the 5.9 million tons of medical waste produced annually by creating a platform for reusing unexpired medicines.",
      icon: <HeartHandshake className="h-6 w-6 text-remedygreen-600" />
    },
    {
      title: "Affordable Healthcare",
      description: "By connecting those with surplus medications to those in need, we help make healthcare more accessible and affordable for everyone.",
      icon: <Medal className="h-6 w-6 text-remedyblue-600" />
    },
    {
      title: "Community Building",
      description: "We're creating a community of conscious consumers who prioritize sustainability in healthcare and want to help others.",
      icon: <Users className="h-6 w-6 text-amber-500" />
    }
  ];

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

        <Card className="mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-remedyblue-500 to-remedyblue-700 p-8 text-white text-center">
            <h1 className="text-3xl font-bold mb-2">ReMediUse</h1>
            <p className="text-remedyblue-100 max-w-md mx-auto">
              Reimagining medication reuse for a sustainable healthcare future
            </p>
          </div>
          <CardContent className="p-6">
            <p className="text-gray-600 mb-6">
              ReMediUse was founded in 2023 with a simple but powerful mission: to reduce medical waste and make healthcare more accessible by creating a platform where people can buy, sell, and donate unexpired medications that would otherwise go to waste.
            </p>
            
            <div className="grid gap-6 mb-6">
              {mission.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h3 className="font-medium text-lg">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info size={18} />
              Our Journey
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-remedyblue-100 text-remedyblue-600 flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-medium">The Problem We Saw</h3>
                  <p className="text-sm text-gray-600">
                    Every year, millions of unexpired medications are thrown away, contributing to environmental waste and representing a loss of resources that could help others. At the same time, many people struggle to afford the medications they need.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-remedyblue-100 text-remedyblue-600 flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-medium">Our Solution</h3>
                  <p className="text-sm text-gray-600">
                    We built ReMediUse as a secure, trustworthy platform where individuals can list their unused, unopened medications for sale at reduced prices or donate them to those in need, following all legal and safety guidelines.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-remedyblue-100 text-remedyblue-600 flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-medium">Where We Are Today</h3>
                  <p className="text-sm text-gray-600">
                    Since our launch, we've facilitated the reuse of over 50,000 medication units, helping thousands of people save money on prescriptions and reducing pharmaceutical waste. Our community continues to grow every day.
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-medium mb-2">Our Team</h3>
              <p className="text-sm text-gray-600">
                ReMediUse is led by a team of healthcare professionals, technology experts, and sustainability advocates who are passionate about creating positive change in how we approach medication use and disposal.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-2">Contact Us</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin size={16} className="text-gray-400" />
                  <span>123 Innovation Drive, Mumbai, Maharashtra, 400001</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail size={16} className="text-gray-400" />
                  <span>info@remediuse.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone size={16} className="text-gray-400" />
                  <span>+91 1234567890</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Globe size={16} className="text-gray-400" />
                  <span>www.remediuse.com</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default About;
