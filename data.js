const CATEGORIES = [
  { name: "Admissions", color: "#FFA07A" },
  { name: "Anesthesiology", color: "#7B68EE" },
  { name: "Cardiology", color: "#ef4444" },
  { name: "Emergency", color: "#8B0000" },
  { name: "Gastroenterology", color: "#F0E68C" },
  { name: "General Services", color: "#2E8B57" },
  { name: "ICU", color: "#F5DEB3" },
  { name: "Information Technology", color: "#9400D3" },
  { name: "Neurology", color: "#16a34a" },
  { name: "Obstetrics", color: "#89CFF0" },
  { name: "Oncology", color: "#14b8a6" },
  { name: "Orthopedics", color: "#fca5a5" },
  { name: "Pathology", color: "#a4c4e2" },
  { name: "Pharmacology", color: "#42a69A" },
  { name: "Psychiatry", color: "#16d78d" },
  { name: "Radiology", color: "#80c7e9" },
  { name: "Surgery", color: "#eab308" },
];

const initialComments = [
  {
    id: 1,
    text: "Dr. Gracie is the most compassionate mental health provider!",
    source: "patient",
    category: "psychiatry",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 0,
    createdIn: 2023,
  },

  {
    id: 2,
    text: "Dr. Sandeep. I wanted to express my deepest gratitude for the excellent care you provided during my recent treatment for my heart condition. Your expertise and professionalism were apparent from the very beginning, and I knew I was in good hands.",
    source: "patient",
    category: "cardiology",
    votesInteresting: 40,
    votesMindblowing: 4,
    votesFalse: 0,
    createdIn: 2023,
  },

  {
    id: 3,
    text: "A special thanks to John in IT for helping me navigate the EPIC software.",
    source: "employee",
    category: "information technology",
    votesInteresting: 9,
    votesMindblowing: 21,
    votesFalse: 0,
    createdIn: 2023,
  },
];
