const journalPrompts = [
  "What moment from today felt small at the time but might matter later?",
  "Write about a recent decision and what value it reveals about you.",
  "If today had a title, what would it be and why?",
  "Describe one thing you avoided today. What was underneath that avoidance?",
  "What conversation do you wish you could replay, and what would you add?",
  "What is one belief you are quietly outgrowing?",
  "What are you currently pretending not to know?",
  "Where did you feel most like yourself today?",
  "What is one tiny win that deserves more credit?",
  "What would your future self thank you for doing this week?"
];

const drawingPrompts = [
  "Draw a city skyline where every building represents an emotion.",
  "Illustrate a pocket-sized world hidden inside a matchbox.",
  "Create a creature made from three unrelated objects near you.",
  "Sketch your current mood as weather over a landscape.",
  "Design a poster for a made-up festival on the moon.",
  "Draw a self-portrait using only geometric shapes.",
  "Illustrate a room that bends the laws of gravity.",
  "Draw what your morning routine would look like as a fantasy map.",
  "Create a character whose outfit is inspired by your favorite snack.",
  "Sketch two everyday objects fused into a single invention."
];

const journalPrompt = document.getElementById("journal-prompt");
const drawingPrompt = document.getElementById("drawing-prompt");
const refreshJournalBtn = document.getElementById("refresh-journal");
const refreshDrawingBtn = document.getElementById("refresh-drawing");
const refreshAllBtn = document.getElementById("refresh-all");

let lastJournalIndex = -1;
let lastDrawingIndex = -1;

function pickRandomIndex(items, lastIndex) {
  if (items.length <= 1) {
    return 0;
  }

  let index;
  do {
    index = Math.floor(Math.random() * items.length);
  } while (index === lastIndex);

  return index;
}

function updateJournalPrompt() {
  lastJournalIndex = pickRandomIndex(journalPrompts, lastJournalIndex);
  journalPrompt.textContent = journalPrompts[lastJournalIndex];
}

function updateDrawingPrompt() {
  lastDrawingIndex = pickRandomIndex(drawingPrompts, lastDrawingIndex);
  drawingPrompt.textContent = drawingPrompts[lastDrawingIndex];
}

function updateBothPrompts() {
  updateJournalPrompt();
  updateDrawingPrompt();
}

refreshJournalBtn.addEventListener("click", updateJournalPrompt);
refreshDrawingBtn.addEventListener("click", updateDrawingPrompt);
refreshAllBtn.addEventListener("click", updateBothPrompts);

updateBothPrompts();
