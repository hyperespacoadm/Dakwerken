
import { Project, Service } from './types';

export const PHONE_NUMBER = "03 667 72 77";
export const INTERNATIONAL_PHONE = "+32 3 667 72 77";
export const EMAIL = "Info@ullidonckers.be";
export const ADDRESS = "Korte Scholiersstraat, 31, 2060 Antwerpen";
export const VAT_NUMBER = "BE0885.283.663";
export const GOOGLE_MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.0714856338563!2d4.418461177028169!3d51.21783303195244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f7036399c595%3A0x6b5e0c5f4b5f5b5b!2sKorte%20Scholiersstraat%2031%2C%202060%20Antwerpen%2C%20Belgium!5e0!3m2!1sen!2sbe!4v1710123456789!5m2!1sen!2sbe";

export const SERVICES: Service[] = [
  {
    id: 'roofing',
    title: 'Roofing Solutions',
    description: 'We specialize in durable roofing for the Antwerp climate. Our experts handle pitched and flat roofs, prioritizing structural integrity and high-quality materials that secure your home for decades.',
    image: 'https://images.unsplash.com/photo-1635424710928-0544e8512eea?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'renovation',
    title: 'Interior & Exterior Renovation',
    description: 'From structural modifications to modern finishes, we manage full-scale renovations. Our team ensures that both your home’s exterior prestige and interior comfort are enhanced to increase property value.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'insulation',
    title: 'Energy-Smart Insulation',
    description: 'Optimize your energy consumption and comfort. We install premium insulation systems that meet the latest Flemish energy standards, helping you maximize available government premiums.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'multidisciplinary',
    title: 'Specialized Trades',
    description: 'Our multidisciplinary team handles electrical work, professional painting, and maintenance tasks. By keeping expertise in-house, we eliminate the need for multiple subcontractors and speed up your project.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800'
  }
];

export const PROCESS_STEPS = [
  {
    title: "1. Professional Consultation",
    description: "We listen to your requirements and provide expert advice based on your current situation and long-term goals."
  },
  {
    title: "2. Technical Inspection",
    description: "Our team performs a thorough onsite check of the structure and insulation to identify the most efficient way to execute the work."
  },
  {
    title: "3. Clear Detailed Quote",
    description: "You receive a transparent proposal with a full breakdown of works and materials, ensuring you avoid unexpected costs later."
  },
  {
    title: "4. Planning & Execution",
    description: "We schedule the work at your convenience. Our experts work cleanly and efficiently to deliver high-performance results."
  },
  {
    title: "5. Delivery & Support",
    description: "We conclude with a joint walkthrough. We don't consider the work finished and won't leave the project until you are completely satisfied."
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    category: 'Roofing',
    title: 'Antwerp City Roof Restoration',
    description: 'Complete replacement with high-performance insulation, significantly reducing the energy bill for this town residence.',
    images: ['https://images.unsplash.com/photo-1628744276520-67336bc5b06a?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: '2',
    category: 'Renovation',
    title: 'Full Apartment Remodel',
    description: 'Integrated project featuring structural wall removal, new electrical wiring, and high-end painting finishes.',
    images: ['https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: '3',
    category: 'Facade',
    title: 'Modern Facade Protection',
    description: 'Exterior cleaning and weather-proofing combined with detail-oriented repair work to restore original charm.',
    images: ['https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1545022339-1912013327b8?auto=format&fit=crop&q=80&w=800']
  }
];
