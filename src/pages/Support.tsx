
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, HelpCircle, MessageSquare, Phone, Mail } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const Support = () => {
  const navigate = useNavigate();

  // Common FAQs
  const faqs = [
    {
      question: "How do I list a medicine for sale?",
      answer: "To list a medicine for sale, navigate to the 'Sell' tab from the bottom navigation bar. Fill in all the required details about your medicine, including name, manufacturing date, expiry date, and condition. Upload clear photos of the medicine and packaging. Our AI will suggest an appropriate price based on the details you provide."
    },
    {
      question: "How do I donate a medicine?",
      answer: "The process for donating a medicine is similar to selling. Go to the 'Donate' tab, fill in the medicine details and upload photos. Instead of setting a price, mark it as a donation. The medicine will be listed in the donations section for those in need."
    },
    {
      question: "Is my personal information secure?",
      answer: "Yes, we take data security very seriously. Your personal information is encrypted and stored securely. We never share your data with third parties without your consent. You can manage your privacy settings in your profile section."
    },
    {
      question: "How do I contact a seller?",
      answer: "When viewing a medicine listing, you can click on the 'Contact Seller' button to initiate a conversation with the seller. This will open a secure messaging interface where you can discuss details and arrange pickup or delivery."
    },
    {
      question: "What happens if I receive expired medicine?",
      answer: "We don't allow the listing of expired medicines on our platform. However, if you receive a medicine that is expired or not as described, please report it immediately through the app. We have a dispute resolution process to handle such cases."
    }
  ];

  return (
    <MainLayout title="Help & Support">
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
              <HelpCircle size={18} />
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare size={18} />
              Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input placeholder="Your name" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input placeholder="Your email" type="email" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="How can we help you?" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea placeholder="Describe your issue in detail..." className="min-h-[120px]" />
              </div>
              <Button>Submit Request</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Phone size={18} />
              Contact Options
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="flex-col h-auto py-4">
                <Phone className="h-5 w-5 mb-2" />
                <span className="font-medium">Call Us</span>
                <span className="text-xs text-gray-500 mt-1">+91 1234567890</span>
              </Button>
              <Button variant="outline" className="flex-col h-auto py-4">
                <Mail className="h-5 w-5 mb-2" />
                <span className="font-medium">Email</span>
                <span className="text-xs text-gray-500 mt-1">support@remediuse.com</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Support;
