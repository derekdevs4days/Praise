const CATEGORIES = [
  { name: "Emergency", color: "#8B0000" },
  { name: "ICU", color: "#F5DEB3" },
  { name: "Neurology", color: "#16a34a" },
  { name: "Obstetrics", color: "#89CFF0" },
  { name: "Cardiology", color: "#ef4444" },
  { name: "General Surgery", color: "#eab308" },
  { name: "Anesthesiology", color: "#7B68EE" },
  { name: "Oncology", color: "#14b8a6" },
  { name: "Psychiatry", color: "#16d78d" },
  { name: "Pharmacology", color: "#42a69A" },
  { name: "Admissions", color: "#FFA07A" },
  { name: "General Services", color: "#2E8B57" },
  { name: "Information Technology", color: "#9400D3 " },
];

const initialComments = [
  {
    id: 1,
    text: "Dr. Gracie is the most compassionate mental health provider!",
    source: "patient",
    category: "Psychiatry",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 0,
    createdIn: 2023,
  },

  {
    id: 2,
    text: "Dr. Sandeep. I wanted to express my deepest gratitude for the excellent care you provided during my recent treatment for my heart condition. Your expertise and professionalism were apparent from the very beginning, and I knew I was in good hands.",
    source: "patient",
    category: "Cardiology",
    votesInteresting: 40,
    votesMindblowing: 4,
    votesFalse: 0,
    createdIn: 2023,
  },

  {
    id: 3,
    text: "A special thanks to John in IT for helping me navigate the EPIC software.",
    source: "employee",
    category: "Information Technology",
    votesInteresting: 9,
    votesMindblowing: 21,
    votesFalse: 0,
    createdIn: 2023,
  },
];
