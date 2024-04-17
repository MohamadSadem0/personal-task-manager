  import React from "react";

  const TaskNote = ({ task }) => {
    if (!task) {
      return null; 
    }

    const { title, description, attachments, tags } = task;

    return (
      <div className="bg-white shadow-md rounded-md p-4 mb-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="mt-2 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xs text-gray-500">Attachments:</span>
            {attachments.map((attachment, index) => (
              <span key={index} className="text-xs text-blue-500 ml-1">
                {attachment}
              </span>
            ))}
          </div>
          <div className="flex items-center">
            <span className="text-xs text-gray-500">Tags:</span>
            {tags.map((tag, index) => (
              <span key={index} className="text-xs text-green-500 ml-1">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default TaskNote;
