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

    setTickets(tickets.map((t) => (t.id === ticket.id ? updatedTicket : t)));

    toast.info(`"${ticket.title}" added to task`);
  };

  const handleComplete = (ticket) => {
    setInProgress(inProgress.filter((t) => t.id !== ticket.id));
    setResolved([...resolved, ticket]);
    setTickets(tickets.filter((t) => t.id !== ticket.id));

    toast.success(`"${ticket.title}" resolved`);
  };

  return (
    <div className="max-w-[1440px] mx-auto px-6 pt-24 pb-10">
      {/* Banner */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="relative w-full max-w-[708px] h-[250px] rounded-lg overflow-hidden bg-gradient-to-r from-purple-600 to-purple-400 flex flex-col justify-center items-center text-white text-center">
          {/* Left Vector */}
          <img
            src="/vector1.png"
            alt="vector"
            className="absolute left-0 top-0 h-full opacity-40"
          />

          {/* Right Vector (Flipped) */}
          <img
            src="/vector1.png"
            alt="vector"
            className="absolute right-0 top-0 h-full opacity-40 scale-x-[-1]"
          />

          {/* Content */}
          <h3 className="text-lg relative z-10">In-Progress</h3>
          <p className="text-4xl font-bold mt-2 relative z-10">
            {inProgress.length}
          </p>
        </div>

        <div className="relative w-full max-w-[708px] h-[250px] rounded-lg overflow-hidden bg-gradient-to-r from-green-500 to-green-700 flex flex-col justify-center items-center text-white text-center">
          {/* Left Vector */}
          <img
            src="/vector1.png"
            alt="vector"
            className="absolute left-0 top-0 h-full opacity-40"
          />

          {/* Right Vector (Flipped) */}
          <img
            src="/vector1.png"
            alt="vector"
            className="absolute right-0 top-0 h-full opacity-40 scale-x-[-1]"
          />

          {/* Content */}
          <h3 className="text-lg relative z-10">Resolved</h3>

          <p className="text-4xl font-bold mt-2 relative z-10">
            {resolved.length}
          </p>
        </div>
      </div>

      {/* Main Layout */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Customer Tickets */}
        <div className="lg:col-span-2">
          <h2 className="font-semibold mb-4 text-gray-700">Customer Tickets</h2>

          <div className="grid sm:grid-cols-2 gap-4">
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
              Select a ticket to start task
            </p>
          ) : (
            inProgress.map((ticket) => (
              <div
                key={ticket.id}
                className="bg-white border rounded-lg p-3 mb-3 shadow-sm"
              >
                <p className="font-semibold text-sm mb-2">{ticket.title}</p>

                <button
                  className="btn bg-green-600 text-white btn-sm w-full"
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
