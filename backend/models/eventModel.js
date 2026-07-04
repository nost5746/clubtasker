const events = [
  {
    id: 1,
    title: "Summer Festival",
    date: "2026-07-15",
    location: "Club House"
  },
  {
    id: 2,
    title: "Board Meeting",
    date: "2026-08-02",
    location: "Meeting Room"
  }
];

function getAllEvents() {
  return events;
}

module.exports = {
  getAllEvents
};