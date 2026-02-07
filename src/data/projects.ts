import cmms from "../assets/images/cmms.jpeg";
import pjt from "../assets/images/pjt.png";
import pjt2 from "../assets/images/pjt2.png";
import sid from "../assets/images/sid.jpeg";
import tekno from "../assets/images/tekno.png";
import tekno2 from "../assets/images/tekno2.png";
export const projects = [
  {
    id: 1,
    title: "Point.ID",
    description:
      "Point.ID is a loyalty point agent application for loyal customers of registered merchants.",
    detailDescription:
      "Point.ID is a comprehensive loyalty point agent application designed for loyal customers of registered merchants. The application provides seamless integration with merchant systems, allowing users to track, accumulate, and redeem loyalty points across multiple merchant partners. Built with Flutter for cross-platform mobile support, utilizing Golang backend services and REST API for robust and scalable operations.",
    technologies: ["Flutter", "Dart", "Rest API"],
    images: [],
    link: "#",
  },
  {
    id: 2,
    title: "CMMS JX Nippon Oil",
    description: "Computerized Maintenance Management System (CMMS)",
    detailDescription:
      "Developing Computerized Maintenance Management System (CMMS) at Production PT. JX Nippon Oil (JX Group).",
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
    technologies: ["Codeigniter", "PHP", "MySQL"],
    images: [pjt, pjt2],
    link: "#",
  },
  {
    id: 4,
    title: "SID Integrated",
    description: "Smart Information Display",
    detailDescription: `• Redevelop Smart Information Display (SID) at Quality Assurance Production Pertamina Unit Cilacap (PUC), Pertamina Unit Gresik (PUG) & Pertamina Unit Jakarta (PUJ).
• Integrate SID with SiAP (Sistem Administrasi Pertamina).`,
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
      "Developed a scalable Warehouse Management System (WMS) to optimize inventory control, streamline stock movement, and integrate multi-location data in real-time. Designed for high-demand environments such as industrial and logistics sectors, including enterprise-level clients such as Pertamina Lubricants Production Unit Jakarta (PUJ), Gresik (PUG), and Cilacap (PUC).",
    technologies: ["Codeigniter", "PHP", "MySQL"],
    images: [],
    link: "#",
  },
  {
    id: 6,
    title: "PT Tekno Klop Indonesia",
    description: "A Company Profile Website",
    detailDescription:
      "A company profile website developed for PT Tekno Klop Indonesia to showcase the company’s profile, services, and products. The website features a modern, responsive design to enhance the company’s online presence and provide clear information for clients and business partners.",
    technologies: ["React", "Typescript", "MySQL", "REST API", "Vite.js", "Tailwind CSS"],
    images: [tekno, tekno2],
    link: "https://teknoklop.com/",
  },
];
