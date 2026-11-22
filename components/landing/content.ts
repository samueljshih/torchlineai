import {
  Building2,
  Camera,
  CheckCircle2,
  ClipboardList,
  MapPin,
  ShieldCheck,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const LOGO_URL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/torchline_logo_transparent-beKRLoQoS2NVALqh9y3cZruq4BEO0c.png";

export const COMMAND_CENTER_URL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-13%20at%2010.06.57%20PM-oZm3C0EK3qGau9X8GvLZdDyCS6YBxx.png";

export const VIDEO_URL =
  "https://pub-e824d08276a445f3a03a35b7112dff8e.r2.dev/torchline_updated.mp4";

export const VIDEO_POSTER_URL =
  "https://dkx9dfh6k5q2jmwm.public.blob.vercel-storage.com/torchline_placeholder.jpg";

export const FORMSPREE_URL = "https://formspree.io/f/xnnezzqb";

export const NAV_LINKS = [
  { label: "Platform", href: "#platform" },
  { label: "Monitoring", href: "#monitoring" },
  { label: "Search", href: "#search" },
  { label: "Industries", href: "#industries" },
  { label: "FAQ", href: "#faq" },
];

export const PILLARS = [
  "Increase Cash Flow",
  "Strengthen Accountability",
  "Improve Execution",
];

export const CAMERA_FEATURES: { icon: LucideIcon; label: string }[] = [
  { icon: Camera, label: "Existing Camera Compatible" },
  { icon: Zap, label: "Fast Deployment" },
  { icon: MapPin, label: "Multi-Location Ready" },
  { icon: CheckCircle2, label: "Minimal IT Requirements" },
];

export const INDUSTRIES = [
  {
    title: "Restaurants",
    subtypes: "QSR • Fast Casual • Coffee & Beverage • Full Service • Food Courts",
    description:
      "Balance labor, service, and execution across every shift and every location.",
    image: "/restaurant_image.webp",
  },
  {
    title: "Retail",
    subtypes: "Convenience Stores • Specialty Retail • Multi-Location Retail",
    description:
      "Reduce shrinkage, strengthen accountability, and monitor high-risk operational activity.",
    image: "/retail.webp",
  },
  {
    title: "Hospitality",
    subtypes: "Hotels • Entertainment Venues • Recreation Facilities",
    description:
      "Deliver consistent guest experiences while maintaining operational standards across teams and locations.",
    image: "/hospitality.webp",
  },
];

export const MONITOR_GROUPS = [
  {
    label: "Labor & Attendance",
    items: [
      "Employee arrivals",
      "Clock-in verification",
      "Punctuality",
      "Shift execution",
    ],
  },
  {
    label: "Compliance & Service",
    items: [
      "Uniform compliance",
      "PPE compliance",
      "SOP adherence",
      "Queue conditions",
      "Drive-thru speed",
    ],
  },
  {
    label: "Loss Prevention",
    items: [
      "Register activity",
      "Refund events",
      "Delivery verification",
      "Restricted area access",
      "Unauthorized entry",
    ],
  },
  {
    label: "Safety & Security",
    items: [
      "Safety hazards",
      "Slip and fall incidents",
      "Loitering",
      "Perimeter activity",
    ],
  },
];

export const EXAMPLE_SEARCHES = [
  "Employee wearing red shirt",
  "Person entered back door",
  "Customer slipped near counter",
  "Cash drawer opened after close",
  "Employee arrived late",
  "Unauthorized access to office",
];

export const BENEFITS: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: ShieldCheck,
    title: "Increase Cash Flow",
    description:
      "Identify labor inefficiencies, operational waste, shrinkage, and preventable losses.",
  },
  {
    icon: ClipboardList,
    title: "Strengthen Accountability",
    description:
      "Create greater consistency across teams, shifts, and locations through objective operational oversight.",
  },
  {
    icon: CheckCircle2,
    title: "Improve Execution",
    description:
      "Maintain standards, reinforce training, and identify opportunities for continuous improvement.",
  },
  {
    icon: MapPin,
    title: "Scale With Confidence",
    description:
      "Stay connected to every location without needing to be everywhere at once.",
  },
];

export const USE_CASES = [
  {
    scenario: "Employee Arrived Late",
    resolution: "Verify attendance issues and identify recurring labor trends.",
  },
  {
    scenario: "Guest Slip & Fall",
    resolution: "Locate relevant footage immediately and accelerate investigations.",
  },
  {
    scenario: "Refund Investigation",
    resolution: "Review suspicious transactions and operational exceptions in seconds.",
  },
  {
    scenario: "SOP Violation",
    resolution: "Identify missed procedures and reinforce operational standards.",
  },
  {
    scenario: "Unauthorized Entry",
    resolution: "Detect access to restricted areas and unauthorized activity.",
  },
  {
    scenario: "Opening Procedures Not Completed",
    resolution:
      "Verify critical opening standards are completed consistently across locations.",
  },
  {
    scenario: "Which Teams Need Coaching?",
    resolution: "Identify recurring operational patterns and coaching opportunities.",
  },
  {
    scenario: "Why Is Store #12 Underperforming?",
    resolution:
      "Compare operational trends, accountability, and execution across locations.",
  },
];

export const ROLES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Building2,
    title: "Owners & Franchisees",
    description: "Gain operational intelligence across every location.",
  },
  {
    icon: Zap,
    title: "Operations Leaders",
    description: "Identify inefficiencies and improve execution at scale.",
  },
  {
    icon: MapPin,
    title: "District Managers",
    description: "Stay connected to every store from a single platform.",
  },
  {
    icon: ClipboardList,
    title: "General Managers",
    description: "Improve accountability, coaching, and daily execution.",
  },
  {
    icon: ShieldCheck,
    title: "Loss Prevention Teams",
    description: "Investigate incidents and reduce operational risk.",
  },
  {
    icon: CheckCircle2,
    title: "HR & Compliance Teams",
    description: "Support policy enforcement and workplace accountability.",
  },
];

export const FAQ_ITEMS = [
  {
    question: "Do I need new cameras?",
    answer:
      "No. Torchline is designed to work with most existing camera systems, helping organizations unlock more value from their current infrastructure.",
  },
  {
    question: "How long does deployment take?",
    answer:
      "Most deployments can be completed quickly with minimal disruption to daily operations.",
  },
  {
    question: "Can Torchline work across multiple locations?",
    answer:
      "Yes. Torchline is built for multi-location organizations and provides centralized oversight across every location from a single platform.",
  },
  {
    question: "Does Torchline replace my security system?",
    answer:
      "No. Torchline complements your existing camera and security systems by adding operational intelligence and automated monitoring capabilities.",
  },
  {
    question: "What camera systems are supported?",
    answer:
      "Torchline is compatible with many leading camera and video management systems. Contact us to discuss your specific environment.",
  },
  {
    question: "How is Torchline different from traditional camera systems?",
    answer:
      "Traditional camera systems record footage. Torchline helps organizations surface the operational moments that matter most, making it easier to improve accountability, execution, and performance.",
  },
  {
    question: "Who uses Torchline?",
    answer:
      "Torchline is used by owners, operators, district managers, general managers, loss prevention teams, and compliance leaders looking to improve operational performance.",
  },
  {
    question: "How is data stored and protected?",
    answer:
      "Torchline follows industry-standard security practices designed to protect customer data, video, and operational information.",
  },
];
