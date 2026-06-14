import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactStats from './components/ImpactStats';
import Services from './components/Services';
import Analytics from './components/Analytics';
import SuccessStories from './components/SuccessStories';
import Timeline from './components/Timeline';
import CampaignShowcase from './components/CampaignShowcase';
import CTA from './components/CTA';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gov-cream-bg antialiased selection:bg-gov-green-600 selection:text-white">
      {/* Navigation */}
      <Navbar onOpenModal={handleOpenModal} />
      
      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <Hero onOpenModal={handleOpenModal} />
        
        {/* Impact Statistics */}
        <ImpactStats />
        
        {/* Development Services */}
        <Services onOpenModal={handleOpenModal} />
        
        {/* Analytics (Recharts) */}
        <Analytics />
        
        {/* Success Stories */}
        <SuccessStories />
        
        {/* Digital Timeline */}
        <Timeline />
        
        {/* Campaigns (Social media posts) */}
        <CampaignShowcase />
        
        {/* Call to Action */}
        <CTA onOpenModal={handleOpenModal} />
        
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Registration Modal / ID Generator */}
      <RegistrationModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
