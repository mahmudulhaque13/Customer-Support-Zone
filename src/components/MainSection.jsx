import React, { useState } from "react";
import ticketsData from "../data/tickets.json";
import TicketCard from "./TicketCard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainSection = () => {
  const [tickets, setTickets] = useState(ticketsData);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  const handleAddToTask = (ticket) => {
    if (inProgress.find((t) => t.id === ticket.id)) return;

    const updatedTicket = {
      ...ticket,
      status: "In-Progress",
    };

    setInProgress([...inProgress, updatedTicket]);

    // optional (customer tickets list update)
    setTickets(tickets.map((t) => (t.id === ticket.id ? updatedTicket : t)));

    toast.info(`"${ticket.title}" added to task status`);
  };

  const handleComplete = (ticket) => {
    setInProgress(inProgress.filter((t) => t.id !== ticket.id));

    setResolved([...resolved, ticket]);

    setTickets(tickets.filter((t) => t.id !== ticket.id));

    toast.success(`"${ticket.title}" marked as resolved`);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-20 py-8">
      {/* Banner */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg p-10 text-white text-center">
          <h3 className="text-lg">In-Progress</h3>
          <p className="text-4xl font-bold mt-2">{inProgress.length}</p>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-700 rounded-lg p-10 text-white text-center">
          <h3 className="text-lg">Resolved</h3>
          <p className="text-4xl font-bold mt-2">{resolved.length}</p>
        </div>
      </div>

      {/* Main Section */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Customer Tickets */}
        <div className="md:col-span-2">
          <h2 className="font-semibold mb-4 text-gray-700">Customer Tickets</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                onClick={() => handleAddToTask(ticket)}
                className="cursor-pointer"
              >
                <TicketCard ticket={ticket} />
              </div>
            ))}
          </div>
        </div>

        {/* Task Status */}
        <div>
          <h2 className="font-semibold mb-4 text-gray-700">Task Status</h2>

          {inProgress.length === 0 ? (
            <p className="text-sm text-gray-500">
              Select a ticket to add to Task Status
            </p>
          ) : (
            inProgress.map((ticket) => (
              <div
                key={ticket.id}
                className="bg-white border rounded-lg p-3 mb-3 shadow-sm"
              >
                <p className="font-semibold text-sm mb-2">{ticket.title}</p>

                <button
                  className="btn text-white bg-green-600 btn-sm w-full"
                  onClick={() => handleComplete(ticket)}
                >
                  Complete
                </button>
              </div>
            ))
          )}

          {/* Resolved */}
          <div className="mt-6">
            <h3 className="font-semibold mb-3 text-gray-700">Resolved Task</h3>

            {resolved.length === 0 ? (
              <p className="text-sm text-gray-500">No resolved tasks yet.</p>
            ) : (
              resolved.map((ticket) => (
                <div
                  key={ticket.id}
                  className="bg-gray-200 text-gray-700 p-2 rounded mb-2 text-sm"
                >
                  {ticket.title}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default MainSection;
