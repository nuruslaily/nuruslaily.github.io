import cmms from "../assets/images/cmms.webp";
import pjt from "../assets/images/pjt.webp";
import pjt2 from "../assets/images/pjt2.webp";
import sid from "../assets/images/sid.webp";
import tekno from "../assets/images/tekno.webp";
import tekno2 from "../assets/images/tekno2.webp";
import mockup_pointid from "../assets/images/mockup-pointid.webp";
import mockup_pjt from "../assets/images/mockup-pjt.webp";
import travel from "../assets/images/travel-app.webp";
import wms from "../assets/images/wms.webp";
export const projects = [
  {
    id: 1,
    title: "Point.ID",
    description:
      "Point.ID is a loyalty point agent application for loyal customers of registered merchants.",
    detailDescription:
      "Point.ID is a comprehensive loyalty point agent application designed for loyal customers of registered merchants. The application provides seamless integration with merchant systems, allowing users to track, accumulate, and redeem loyalty points across multiple merchant partners. Built with Flutter for cross-platform mobile support, utilizing Golang backend services and REST API for robust and scalable operations.",
    technologies: ["Flutter", "Dart", "Rest API"],
    images: [mockup_pointid],
    link: "#",
  },
  {
    id: 2,
    title: "CMMS JX Nippon Oil",
    description: "Computerized Maintenance Management System (CMMS)",
    detailDescription:
      "CMMS is a software solution designed to streamline and optimize maintenance operations within industrial settings. It provides a centralized platform for managing maintenance tasks, scheduling preventive maintenance, tracking work orders, and maintaining an inventory of spare parts. The system enhances operational efficiency, reduces downtime, and improves asset management by enabling proactive maintenance strategies and real-time monitoring of equipment performance.",
    technologies: ["Codeigniter", "PHP", "MySQL"],
    images: [cmms],
    link: "#",
  },
  {
    id: 3,
    title: "PJT Telemetry System",
    description: "Smart monitoring dashboard IoT",
    detailDescription:
      "The PJT Telemetry System is a smart monitoring solution designed for real-time data acquisition, visualization, and alerting across water resource infrastructure managed by Perum Jasa Tirta (PJT). This system enables remote monitoring of key environmental parameters including Automatic Water Level Recorder (AWLR), Automatic Rainfall Recorder (ARR), Water Quality Monitoring System (WQMS), climatological data, Ground Water Level (GWL), and seepage measurements.",
    technologies: ["Codeigniter", "PHP", "MySQL", "Flutter", "Dart"],
    images: [pjt, pjt2, mockup_pjt],
    link: "#",
  },
  {
    id: 4,
    title: "SID (Smart Information Display)",
    description: "Smart Information Display",
    detailDescription:
      "SID is a laboratory monitoring and information display system developed for lubricants analysis and quality assurance processes within Pertamina. The platform has been implemented at Quality Assurance Production Pertamina Unit Cilacap (PUC), Pertamina Unit Gresik (PUG), and Pertamina Unit Jakarta (PUJ). Integrated with SiAP (Sistem Administrasi Pertamina), SID provides a centralized dashboard for monitoring laboratory activities, sample testing status, analytical results, and key performance indicators. The system enhances operational efficiency, improves data accessibility, and supports quality control processes by delivering real-time information for laboratory analysts and management teams. Through digitalization of laboratory workflows, SID assists in ensuring lubricant products consistently comply with quality standards and operational requirements.",
    technologies: [
      "React",
      "Typescript",
      "MySQL",
      "REST API",
      "PostgreSQL",
      "Vite.js",
      "Material UI",
    ],
    images: [sid],
    link: "#",
  },
  {
    id: 5,
    title: "WMS (Warehouse Management System)",
    description: "Warehouse Management System",
    detailDescription:
      "WMS (Warehouse Management System) is a digital platform developed to manage warehouse operations and inventory for lubricant production and distribution. The system enables real-time stock monitoring, inventory control, goods receipt and issuance tracking, and multi-location warehouse integration. By centralizing warehouse data, WMS helps improve inventory accuracy, streamline operational workflows, and support efficient supply chain management across Pertamina Lubricants Production Units in Jakarta (PUJ), Gresik (PUG), and Cilacap (PUC).",
    technologies: ["Codeigniter", "PHP", "MySQL"],
    images: [wms],
    link: "#",
  },
  {
    id: 6,
    title: "PT Tekno Klop Indonesia",
    description: "A Company Profile Website",
    detailDescription:
      "A company profile website developed for PT Tekno Klop Indonesia to showcase the company’s profile, services, and products. The website features a modern, responsive design to enhance the company’s online presence and provide clear information for clients and business partners.",
    technologies: [
      "React",
      "Typescript",
      "MySQL",
      "REST API",
      "Vite.js",
      "Tailwind CSS",
    ],
    images: [tekno, tekno2],
    link: "https://profile.teknoklop.com/",
  },
  {
    id: 7,
    title: "Travel APP",
    description: "A Travel Booking Application",
    detailDescription:
      "A travel booking application developed to provide users with a seamless experience for planning and booking their trips. The app features a modern, responsive design to enhance user engagement and provide clear information for travelers.",
    technologies: ["Flutter", "Dart"],
    images: [travel],
    link: "https://travel-app-git-gh-pages-nuruslailys-projects.vercel.app/",
  },
  {
    id: 8,
    title: "Wedding Invitation Website",
    description: "A Wedding Invitation Website",
    detailDescription:
      "A wedding invitation website developed to provide a beautiful and interactive way for couples to share their special day with friends and family. The website features a modern, responsive design to enhance user engagement and provide clear information for guests.",
    technologies: ["Html", "css"],
    images: [],
    link: "https://demo-undangan-six.vercel.app/",
  },
  {
    id: 9,
    title: "Music Player App",
    description: "A Music Player Application",
    detailDescription:
      "A music player application developed to provide users with a seamless experience for listening to their favorite songs. The app features a modern, responsive design to enhance user engagement and provide clear information for music lovers.",
    technologies: ["React", "Vite.js", "Tailwind CSS"],
    images: [],
    link: "https://music-player-pi-rosy-64.vercel.app/",
  },
];
