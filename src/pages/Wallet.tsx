
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUpRight, ArrowDownLeft, Plus, CreditCard, AlertCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Wallet = () => {
  const navigate = useNavigate();
  const [balance] = useState(1250);
  
  const transactions = [
    { id: 1, type: "credit", amount: 500, description: "Payment received for Paracetamol", date: "12 Jun 2025" },
    { id: 2, type: "debit", amount: 150, description: "Purchase: Amoxicillin 500mg", date: "10 Jun 2025" },
    { id: 3, type: "credit", amount: 300, description: "Payment received for Aspirin", date: "05 Jun 2025" },
    { id: 4, type: "debit", amount: 450, description: "Purchase: Vitamin C tablets", date: "28 May 2025" },
    { id: 5, type: "credit", amount: 1050, description: "Added money via UPI", date: "20 May 2025" },
  ];

  return (
    <MainLayout title="My Wallet">
      <div className="max-w-2xl mx-auto">
        <Button 
          variant="ghost" 
          className="mb-4 pl-0"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={16} className="mr-2" />
          Back
        </Button>

        <Card className="mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-remedyblue-500 to-remedyblue-600 p-6 text-white">
            <h2 className="text-sm font-medium opacity-90">Total Balance</h2>
            <div className="flex items-baseline mt-1">
              <span className="text-3xl font-bold">₹{balance.toLocaleString()}</span>
              <span className="ml-2 text-xs bg-white/20 rounded-full px-2 py-0.5">Available</span>
            </div>
            
            <div className="flex gap-2 mt-4">
              <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-0">
                <Plus size={16} className="mr-1" /> Add Money
              </Button>
              <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-0">
                <CreditCard size={16} className="mr-1" /> Withdraw
              </Button>
            </div>
          </div>
        </Card>

        <Tabs defaultValue="all" className="space-y-4">
          <TabsList className="grid grid-cols-3">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="credit">Money In</TabsTrigger>
            <TabsTrigger value="debit">Money Out</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-4">
            <div className="space-y-3">
              {transactions.map((tx) => (
                <Card key={tx.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex items-center p-4">
                      <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                        tx.type === "credit" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                      }`}>
                        {tx.type === "credit" ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
                      </div>
                      <div className="ml-4 flex-1">
                        <p className="font-medium text-sm">{tx.description}</p>
                        <p className="text-xs text-gray-500">{tx.date}</p>
                      </div>
                      <div className={`font-medium ${
                        tx.type === "credit" ? "text-green-600" : "text-red-600"
                      }`}>
                        {tx.type === "credit" ? "+" : "-"}₹{tx.amount}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="credit" className="space-y-4">
            <div className="space-y-3">
              {transactions.filter(tx => tx.type === "credit").map((tx) => (
                <Card key={tx.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex items-center p-4">
                      <div className="h-10 w-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                        <ArrowDownLeft size={20} />
                      </div>
                      <div className="ml-4 flex-1">
                        <p className="font-medium text-sm">{tx.description}</p>
                        <p className="text-xs text-gray-500">{tx.date}</p>
                      </div>
                      <div className="font-medium text-green-600">
                        +₹{tx.amount}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="debit" className="space-y-4">
            <div className="space-y-3">
              {transactions.filter(tx => tx.type === "debit").map((tx) => (
                <Card key={tx.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex items-center p-4">
                      <div className="h-10 w-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                        <ArrowUpRight size={20} />
                      </div>
                      <div className="ml-4 flex-1">
                        <p className="font-medium text-sm">{tx.description}</p>
                        <p className="text-xs text-gray-500">{tx.date}</p>
                      </div>
                      <div className="font-medium text-red-600">
                        -₹{tx.amount}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Wallet;
