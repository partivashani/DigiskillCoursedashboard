import React, { useState } from "react";

const AttachmentSection = () => {
  const [files, setFiles] = useState([
    { name: "Lecture_Notes.pdf", size: "2 MB", uploadedAt: "2 days ago" },
    { name: "Assignment_1.docx", size: "1.5 MB", uploadedAt: "5 days ago" },
  ]);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFiles([
        ...files,
        {
          name: file.name,
          size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
          uploadedAt: "Just now",
        },
      ]);
    }
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <div className="border rounded-lg shadow-md bg-white">
        {/* Header */}
        <div className="border-b p-4">
          <h2 className="text-lg font-semibold">Attachments</h2>
        </div>

        {/* Upload Section */}
        <div className="p-4">
          <div className="flex items-center gap-4 mb-6">
            <input
              type="file"
              onChange={handleFileUpload}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600 transition duration-300"
            >
              Upload File
            </label>
            {selectedFile && (
              <span className="text-gray-600">{selectedFile.name}</span>
            )}
          </div>

          {/* File List */}
          <div className="space-y-4">
            {files.map((file, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg bg-gray-50 shadow-sm flex justify-between items-center hover:shadow-md transition duration-300"
              >
                <div>
                  <h3 className="font-medium text-gray-800">{file.name}</h3>
                  <p className="text-sm text-gray-600">
                    {file.size} • Uploaded {file.uploadedAt}
                  </p>
                </div>
                <button
                  className="text-red-500 hover:underline"
                  onClick={() =>
                    setFiles(files.filter((_, fileIndex) => fileIndex !== index))
                  }
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttachmentSection;
