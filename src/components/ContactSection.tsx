import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Globe, User } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4 lowercase">
            contact me
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto lowercase">
            feel free to reach out — i'd love to connect!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border border-slate-100 shadow-sm bg-slate-50 hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-6 flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-slate-400 text-sm lowercase">name</h3>
                <p className="text-slate-800 font-medium lowercase">happy patel</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-slate-100 shadow-sm bg-slate-50 hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-6 flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-slate-400 text-sm lowercase">email</h3>
                <a 
                  href="mailto:h342pate@uwaterloo.ca" 
                  className="text-slate-800 font-medium hover:text-blue-600 transition-colors lowercase"
                >
                  h342pate@uwaterloo.ca
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-slate-100 shadow-sm bg-slate-50 hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-6 flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-slate-400 text-sm lowercase">phone</h3>
                <a 
                  href="tel:6478660590" 
                  className="text-slate-800 font-medium hover:text-blue-600 transition-colors"
                >
                  647-866-0590
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-slate-100 shadow-sm bg-slate-50 hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-6 flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-slate-400 text-sm lowercase">website</h3>
                <a 
                  href="https://happy-patel-portfolio.lovable.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-800 font-medium hover:text-blue-600 transition-colors lowercase"
                >
                  happy-patel-portfolio.lovable.app
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
