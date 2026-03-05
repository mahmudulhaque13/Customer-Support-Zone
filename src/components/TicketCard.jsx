import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const TicketCard = ({ ticket }) => {
  const statusColor = {
    Open: "badge-success",
    "In-Progress": "badge-warning",
    Resolved: "badge-info",
  };

  const priorityColor = {
    HIGH: "text-red-500",
    MEDIUM: "text-yellow-500",
    LOW: "text-green-500",
  };

  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition cursor-pointer">
      {/* Header */}
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold text-sm text-gray-800">{ticket.title}</h4>

        <span className={`badge badge-sm ${statusColor[ticket.status]}`}>
          {ticket.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
        {ticket.description}
      </p>

      {/* Footer */}
      <div className="flex justify-between text-xs text-gray-500">
        <div className="flex gap-3 items-center">
          <span className="font-semibold text-gray-600">#{ticket.id}</span>

          <span className={`font-semibold ${priorityColor[ticket.priority]}`}>
            {ticket.priority} PRIORITY
          </span>
        </div>

        <div className="flex gap-3 items-center">
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
