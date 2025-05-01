import { useState, useEffect } from "react";
import { 
  Play, 
  X, 
  Menu, 
  ChevronRight, 
  ArrowRight, 
  MessageSquare, 
  Users, 
  Shield, 
  Database, 
  Clock, 
  CheckCircle,
  Info
} from "lucide-react";

export default function StasisFinancePlatform() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [currentPopup, setCurrentPopup] = useState("");
  
  // For animation effect when page loads
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  const openPopup = (popupType) => {
    setCurrentPopup(popupType);
    setShowPopup(true);
  };
  
  const closePopup = () => {
    setShowPopup(false);
  };
  
  const partners = [
    { name: "BDO", logo: "B" },
    { name: "Wirex", logo: "W" },
    { name: "Curve", logo: "C" },
    { name: "Nexday", logo: "N" },
    { name: "Klarpay", logo: "K" }
  ];
  
  return (
    <div className="font-sans text-gray-900 overflow-x-hidden">
      {/* Header */}
      <header className={`bg-blue-600 fixed w-full z-50 transition-all duration-500 ${isLoaded ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-white text-2xl font-bold">STASIS</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-blue-200 transition">Product</a>
            <a href="#" className="text-white hover:text-blue-200 transition">Service</a>
            <a href="#" className="text-white hover:text-blue-200 transition">About</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button 
              className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hidden md:block hover:bg-blue-50 transition"
              onClick={() => openPopup("getEurs")}
            >
              Get EURS
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="text-white md:hidden" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div 
          className={`md:hidden bg-blue-700 transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-60" : "max-h-0"
          }`}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#" className="text-white hover:text-blue-200 transition">Product</a>
            <a href="#" className="text-white hover:text-blue-200 transition">Service</a>
            <a href="#" className="text-white hover:text-blue-200 transition">About</a>
            <button 
              className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium w-full hover:bg-blue-50 transition"
              onClick={() => {
                openPopup("getEurs");
                setIsMenuOpen(false);
              }}
            >
              Get EURS
            </button>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className={`bg-blue-600 pt-24 pb-16 md:pt-32 md:pb-24 transition-all duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Bridging The Gap Between Decentralized Finance And The Off Chain Market
              </h2>
              <p className="text-blue-100 mb-8">
                Stasis is a tokenization company that provides a bridge from web 2.0 to web 3.0 financial services and pioneers in the commercialization of stablecoin
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button 
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium flex items-center justify-center group hover:bg-blue-50 transition"
                  onClick={() => openPopup("appStore")}
                >
                  <span className="mr-2">App Store</span>
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center group hover:bg-blue-800 transition"
                  onClick={() => openPopup("playStore")}
                >
                  <Play size={18} className="mr-2" />
                  <span>Play Store</span>
                </button>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="relative z-10 transform transition-all duration-700 hover:scale-105">
                <img src="/api/placeholder/280/550" alt="Mobile app screenshot" className="mx-auto" />
                
                <div className="absolute -bottom-6 -left-16 bg-blue-500 text-white p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold mr-1">4.6M</span>
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                      <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                      <div className="w-8 h-8 rounded-full bg-gray-500"></div>
                    </div>
                  </div>
                  <p className="text-sm text-blue-100 mt-1">
                    around the world, we already have over 4.6 happy users.
                  </p>
                </div>
                
                <button 
                  className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 bg-opacity-70 rounded-full p-3 hover:bg-opacity-100 transition"
                  onClick={() => openPopup("demoVideo")}
                >
                  <Play size={24} className="text-white" />
                </button>
              </div>
              
              <div className="absolute top-1/4 right-0 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute bottom-1/4 left-0 w-12 h-12 bg-blue-400 rounded-full opacity-30 animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
        
        {/* Partners */}
        <div className="container mx-auto px-4 mt-16">
          <div className="bg-white rounded-lg p-6 flex flex-wrap justify-around items-center">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="p-4 flex items-center justify-center transform transition hover:scale-110"
              >
                <div className="text-gray-400 font-medium text-lg">{partner.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-3">Quick Transaction</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stasis provides a full-service transaction platform, including smart contract creation, third-parties, custodial services, and deep expertise in current regulatory environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm transform transition hover:shadow-md">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium">Daily statements based on statements from the counterparty</h3>
                  <p className="text-gray-600 text-sm mt-1">Get daily reports of all your transactions with complete transparency</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm transform transition hover:shadow-md">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium">Quarterly verification by a Big four company</h3>
                  <p className="text-gray-600 text-sm mt-1">Regular verification ensures compliance and security</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm transform transition hover:shadow-md">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium">Verification by big four company on-demand of an onboarded entity</h3>
                  <p className="text-gray-600 text-sm mt-1">Request verification anytime for additional security</p>
                </div>
              </div>
              
              <button 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium mt-6 hover:bg-blue-700 transition flex items-center group"
                onClick={() => openPopup("learnMore")}
              >
                Learn More
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-lg transform transition hover:scale-105">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg">Transaction Dashboard</h3>
                  <div className="bg-blue-100 text-blue-600 rounded-full h-8 w-8 flex items-center justify-center">
                    <Info size={18} />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded flex justify-between items-center">
                    <div>
                      <div className="text-gray-500 text-sm">Wallet Balance</div>
                      <div className="font-bold text-2xl">44,629.51 EURS</div>
                    </div>
                    <Database className="text-blue-500" />
                  </div>
                  
                  <div className="flex justify-between items-center p-2">
                    <div className="flex items-center">
                      <div className="bg-blue-600 h-8 w-8 rounded-full flex items-center justify-center text-white mr-2">€</div>
                      <div>
                        <div className="font-medium">629 EURS</div>
                        <div className="text-gray-400 text-xs">€ 2.0179 EURS</div>
                      </div>
                    </div>
                    <ChevronRight size={16} className="text-gray-400" />
                  </div>
                  
                  <div className="flex justify-between items-center p-2">
                    <div className="flex items-center">
                      <div className="bg-blue-400 h-8 w-8 rounded-full flex items-center justify-center text-white mr-2">
                        <span className="text-sm">ETH</span>
                      </div>
                      <div>
                        <div className="font-medium">1.14 ETH</div>
                        <div className="text-gray-400 text-xs">€ 2.0179 EURS</div>
                      </div>
                    </div>
                    <ChevronRight size={16} className="text-gray-400" />
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-10 -right-10">
                <div className="relative">
                  <img src="/api/placeholder/200/160" alt="3D visualization" className="rounded-lg shadow-lg" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/50 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Working With Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Who We Are Working With</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((num) => (
              <div 
                key={num}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 bg-blue-600 text-white h-12 w-12 flex items-center justify-center rounded-bl-lg font-bold">
                  {`0${num}`}
                </div>
                
                <div className="mb-6 mt-6">
                  <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
                    {num === 1 && <Users className="text-blue-600" size={24} />}
                    {num === 2 && <Shield className="text-blue-600" size={24} />}
                    {num === 3 && <Clock className="text-blue-600" size={24} />}
                  </div>
                </div>
                
                <h3 className="font-bold text-xl mb-3">
                  {num === 1 && "Financial Institutions"}
                  {num === 2 && "Security Partners"}
                  {num === 3 && "Crypto Exchanges"}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {num === 1 && "We work with banks and financial services companies to bridge traditional finance with DeFi solutions."}
                  {num === 2 && "Our security partners ensure all transactions and storage methods meet the highest standards."}
                  {num === 3 && "Integration with major crypto exchanges for seamless trading and liquidity."}
                </p>
                
                <button 
                  className="text-blue-600 font-medium flex items-center group-hover:underline"
                  onClick={() => openPopup(`partner${num}`)}
                >
                  Learn more
                  <ChevronRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Popup/Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 animate-in slide-in-from-bottom duration-300">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">
                {currentPopup === "getEurs" && "Get EURS Tokens"}
                {currentPopup === "appStore" && "Download from App Store"}
                {currentPopup === "playStore" && "Download from Play Store"}
                {currentPopup === "demoVideo" && "Watch Demo Video"}
                {currentPopup === "learnMore" && "Learn More About Our Platform"}
                {currentPopup.startsWith("partner") && "Partnership Details"}
              </h3>
              <button 
                onClick={closePopup} 
                className="text-gray-500 hover:text-gray-700 transition"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="mb-6">
              {currentPopup === "getEurs" && (
                <div>
                  <p className="text-gray-600 mb-4">Start using EURS tokens on our platform with these simple steps:</p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="bg-blue-100 h-8 w-8 rounded-full flex items-center justify-center text-blue-600 mr-3">1</div>
                      <p>Create an account and complete verification</p>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-blue-100 h-8 w-8 rounded-full flex items-center justify-center text-blue-600 mr-3">2</div>
                      <p>Deposit funds via bank transfer or crypto</p>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-blue-100 h-8 w-8 rounded-full flex items-center justify-center text-blue-600 mr-3">3</div>
                      <p>Convert to EURS at market-leading rates</p>
                    </div>
                  </div>
                </div>
              )}
              
              {currentPopup === "appStore" && (
                <div className="text-center">
                  <img src="/api/placeholder/120/120" alt="App Store QR Code" className="mx-auto mb-4" />
                  <p className="text-gray-600">Scan the QR code or click the button below to download our app from the App Store.</p>
                </div>
              )}
              
              {currentPopup === "playStore" && (
                <div className="text-center">
                  <img src="/api/placeholder/120/120" alt="Play Store QR Code" className="mx-auto mb-4" />
                  <p className="text-gray-600">Scan the QR code or click the button below to download our app from the Play Store.</p>
                </div>
              )}
              
              {currentPopup === "demoVideo" && (
                <div className="relative pb-9/16 h-48">
                  <div className="absolute inset-0 bg-gray-200 rounded flex items-center justify-center">
                    <Play size={40} className="text-blue-600" />
                    <p className="text-gray-500 absolute bottom-4">Demo video would play here</p>
                  </div>
                </div>
              )}
              
              {currentPopup === "learnMore" && (
                <div>
                  <p className="text-gray-600 mb-4">STASIS provides a secure and efficient platform for handling digital assets:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Daily verification and transparent reporting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Industry-leading security measures</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Seamless integration with traditional finance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Competitive fees and exchange rates</span>
                    </li>
                  </ul>
                </div>
              )}
              
              {currentPopup.startsWith("partner") && (
                <div>
                  <p className="text-gray-600 mb-4">
                    {currentPopup === "partner1" && "We collaborate with leading financial institutions to provide secure and regulated access to digital assets."}
                    {currentPopup === "partner2" && "Our security partners include industry leaders in blockchain security, ensuring your assets are always protected."}
                    {currentPopup === "partner3" && "We work with major crypto exchanges to provide liquidity and seamless trading options for our users."}
                  </p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-blue-600">Become a partner and join our growing ecosystem of financial innovation.</p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex justify-end">
              <button 
                onClick={closePopup}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg mr-3 hover:bg-gray-300 transition"
              >
                Close
              </button>
              <button 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                onClick={closePopup}
              >
                {currentPopup === "getEurs" && "Get Started"}
                {(currentPopup === "appStore" || currentPopup === "playStore") && "Download"}
                {currentPopup === "demoVideo" && "Watch Full Video"}
                {currentPopup === "learnMore" && "Explore Platform"}
                {currentPopup.startsWith("partner") && "Contact Us"}
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Chat Button */}
      <button 
        className="fixed bottom-6 right-6 bg-blue-600 text-white h-14 w-14 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition z-40 group"
        onClick={() => openPopup("chat")}
      >
        <MessageSquare size={24} className="group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
}