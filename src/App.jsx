
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovingPanelSection from './components/MovingPanelSection';
import MiddleComponent from './components/MiddleComponent';

// Dynamically import components for code-splitting
const ContentSection = lazy(() => import('./components/ContentSection'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <div className="min-h-screen bg-contentBg">
      <Navbar />
      <Hero />
      <MovingPanelSection />
      <Suspense fallback={<div className="text-white text-center py-10">Loading...</div>}>
        <ContentSection
          title="Advanced Monitoring"
          subtitle="CentralAxis provides cutting-edge monitoring solutions for your data center, offering real-time insights and comprehensive analytics to optimize performance, reduce costs, and enhance reliability."
          features={[
            "Real-time performance metrics and predictive analytics",
            "Automated alerts and intelligent incident response",
            "Comprehensive reporting and trend analysis",
          ]}
          image="https://www.centralaxis.com/hb-monitoring.mp4"
          imageAlt="Advanced Monitoring Dashboard"
          
        />
        <ContentSection
          title="Network Management and Monitoring"
          subtitle="Comprehensive network monitoring and management that ensures optimal performance, security, and reliability across your entire data center infrastructure."
          features={[
            "Real-time network performance monitoring and bandwidth optimization",
            "Automated network security and threat detection",
            "Advanced network diagnostics and troubleshooting tools",
          ]}
          image="https://www.centralaxis.com/landing/networking-b.mp4"
          imageAlt="Network Management Dashboard"
          reverse={true}
        />
        <ContentSection
          title="Asset Management"
          subtitle="Streamline your data center operations with our comprehensive asset management system. Track, maintain, and optimize your infrastructure."
          features={[
            "Automated inventory tracking and lifecycle management",
            "Intelligent ticketing based on asset health and performance",
            "Efficient resource allocation and optimization",
          ]}
          image="https://www.centralaxis.com/landing/asset-management-b.mp4"
          imageAlt="Asset Management Dashboard"
        />
        <ContentSection
          title="A Single Pane of Glass"
          subtitle="A unified view across all of your BMS and EPMS systems, tailored to your needs."
          features={[
            "Comprehensive visibility across all of your colocation infrastructure",
            "Customizable interface tailored to your specific operational requirements and priorities",
            "Unified dashboard integrating all BMS and EPMS systems for seamless monitoring and management",
          ]}
          image="https://www.centralaxis.com/landing/SinglePane-b.mp4"
          imageAlt="Single Pane of Glass Dashboard"
          reverse={true}
        />
        <ContentSection
          title="Built-In Compliance"
          subtitle="CentralAxis provides compliance as a service for data centers."
          features={[
            "Track data for EU, US, and global regulatory standards",
            "We guarantee compliance and handle every step between monitoring and reporting",
          ]}
          image="https://www.centralaxis.com/landing/__compliance.mp4"
          imageAlt="Compliance Dashboard"
        />
        <ContentSection
          title="Data Center Planning"
          subtitle="Want to support the latest and greatest architectures on the market? Modern GPUs and even CPUs are more water and energy intensive than ever."
          features={[
            "Model new architectures and see detailed implications on power and cooling needs",
            "Design unique specifications for your data center",
            "   Our continuous monitoring is the most advanced on the market, lowering costs while increasing reliability",
          ]}
          image="https://www.centralaxis.com/landing/dc-planning.mp4"
          imageAlt="Data Center Planning Dashboard"
          reverse={true}
        />
        <MiddleComponent/>
        <Footer />
      </Suspense>
    </div>
  );
}
