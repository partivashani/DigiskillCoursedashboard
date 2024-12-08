import React, { useState } from "react";

const NotesSection = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([
    { time: "09:00", title: "Course Induction", content: " " },
  ]);

  const addNote = () => {
    if (note.trim()) {
      setNotes([...notes, { time: "09:00", title: "New Note", content: note }]);
      setNote("");
    }
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <div className="border rounded-lg shadow-md bg-white">
        <div className="border-b p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Notes</h2>
          <button className="text-red-500 hover:underline">Support</button>
        </div>
        <div className="p-4">
          <div className="flex gap-2 items-center mb-4">
            <input
              type="text"
              placeholder="Make a note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="border rounded-lg px-4 py-2 flex-1 focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button
              onClick={addNote}
              className="bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition duration-300"
            >
              Save
            </button>
          </div>
          <div className="space-y-4">
            {notes.map((item, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">{item.time}</span>
                  <span className="font-medium">{item.title}</span>
                </div>
                <p className="text-gray-700">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesSection;
