const eventModel = require("../models/eventModel");

function getEvents(req, res) {
  const events = eventModel.getAllEvents();
  res.json(events);
}

module.exports = {
  getEvents
};