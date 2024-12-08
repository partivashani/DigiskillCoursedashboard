import React, { useState } from "react";

const DoubtsSection = () => {
  const [doubt, setDoubt] = useState("");
  const [doubts, setDoubts] = useState([
    {
      id: 1,
      time: "09:58",
      name: "Mohd Shahwaz",
      content: "Last date kya hai course ko access krne ki?",
      likes: 0,
      replies: 2,
    },
    {
      id: 2,
      time: "10:05",
      name: "Abhishek",
      content: "Course material download nahi ho raha hai.",
      likes: 0,
      replies: 0,
    },
  ]);

  const addDoubt = () => {
    if (doubt.trim()) {
      setDoubts([
        ...doubts,
        {
          id: doubts.length + 1,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          name: "New User",
          content: doubt,
          likes: 0,
          replies: 0,
        },
      ]);
      setDoubt("");
    }
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      {/* Ask Doubt Input */}
      <div className="mt-6 flex items-center gap-4">
        <span className="px-2 py-1 bg-gray-200 text-gray-700 text-sm font-semibold rounded">09:00</span>
        <input
          type="text"
          placeholder="Ask your doubt"
          value={doubt}
          onChange={(e) => setDoubt(e.target.value)}
          className="border flex-1 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          onClick={addDoubt}
          className="bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition duration-300"
        >
          Post
        </button>
      </div>

      {/* Doubts Section */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Doubts</h3>
        <div className="space-y-4">
          {doubts.map((d) => (
            <div
              key={d.id}
              className="p-4 border rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-200 text-blue-600 font-bold rounded-full">
                  {d.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-medium">{d.name}</h4>
                  <p className="text-sm text-gray-500">{d.time}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-2">{d.content}</p>
              <div className="flex items-center text-sm text-gray-500 gap-4">
                <button className="flex items-center gap-1 hover:text-blue-500">
                  👍 {d.likes} Likes
                </button>
                <button className="flex items-center gap-1 hover:text-blue-500">
                  💬 {d.replies} Replies
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoubtsSection;
