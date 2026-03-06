import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const TicketCard = ({ ticket }) => {
  const statusStyle = {
    Open: "bg-green-100 text-green-700",
    "In-Progress": "bg-yellow-100 text-yellow-700",
    Resolved: "bg-blue-100 text-blue-700",
  };

  const priorityStyle = {
    HIGH: "text-red-500",
    MEDIUM: "text-yellow-500",
    LOW: "text-green-500",
  };

  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm cursor-pointer">
      {/* Header */}
      <div className="flex justify-between items-start gap-2 mb-2">
        <h4 className="text-sm font-semibold text-gray-800">{ticket.title}</h4>

        <span
          className={`text-xs px-2 py-1 rounded-md font-medium whitespace-nowrap ${statusStyle[ticket.status]}`}
        >
          {ticket.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-3">{ticket.description}</p>

      {/* Footer */}
      <div className="flex justify-between text-xs text-gray-500 flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <span className="font-semibold">#{ticket.id}</span>

          <span className={`font-semibold ${priorityStyle[ticket.priority]}`}>
            {ticket.priority} PRIORITY
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span>{ticket.customer}</span>

          <span className="flex items-center gap-1">
            <FaCalendarAlt className="text-gray-400 text-xs" />
            {ticket.createdAt}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
