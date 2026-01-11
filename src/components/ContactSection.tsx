import { Mail, Phone, Globe } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-serif text-slate-800 mb-12">contact</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans">
          <a 
            href="mailto:h342pate@uwaterloo.ca"
            className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <Mail className="h-5 w-5 text-slate-400" />
            <span className="text-sm">h342pate@uwaterloo.ca</span>
          </a>

          <a 
            href="tel:6478660590"
            className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <Phone className="h-5 w-5 text-slate-400" />
            <span className="text-sm">647-866-0590</span>
          </a>

          <a 
            href="https://happy-patel-portfolio.lovable.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <Globe className="h-5 w-5 text-slate-400" />
            <span className="text-sm">happy-patel-portfolio.lovable.app</span>
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200 text-center">
          <p className="text-sm text-slate-400 font-sans">
            happy patel © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
