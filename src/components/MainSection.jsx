import React, { useState } from "react";
import ticketsData from "../data/tickets.json";
import TicketCard from "./TicketCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import vector from "../assets/images/vector1.png";

const StatusBanner = ({ title, count, gradient }) => {
  return (
    <div
      className={`relative flex-1 text-white rounded-xl py-8 flex flex-col items-center justify-center overflow-hidden ${gradient}`}
    >
      {/* background pattern */}
      <img
        src={vector}
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        alt=""
      />

      {/* content */}
      <div className="relative text-center">
        <h2 className="text-sm opacity-90">{title}</h2>
        <p className="text-4xl font-bold">{count}</p>
      </div>
    </div>
  );
};

const MainSection = () => {
  const [tickets, setTickets] = useState(ticketsData);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  const [showAllTickets, setShowAllTickets] = useState(false);
  const MAX_VISIBLE_TICKETS = 10;

  const [showAllInProgress, setShowAllInProgress] = useState(false);
  const MAX_VISIBLE_IN_PROGRESS = 5;

  const [showAllResolved, setShowAllResolved] = useState(false);
  const MAX_VISIBLE_RESOLVED = 5;

  const handleAddToTask = (ticket) => {
    if (!inProgress.find((t) => t.id === ticket.id)) {
      const updatedTicket = { ...ticket, status: "In-Progress" };

      setInProgress([...inProgress, updatedTicket]);

      const updatedTicketsList = tickets.map((t) =>
        t.id === ticket.id ? { ...t, status: "In-Progress" } : t,
      );

      setTickets(updatedTicketsList);

      toast.info(`Ticket "${ticket.title}" moved to In-Progress`);
    }
  };

  const handleComplete = (ticket) => {
    setInProgress(inProgress.filter((t) => t.id !== ticket.id));
    setTickets(tickets.filter((t) => t.id !== ticket.id));

    const resolvedTicket = { ...ticket, status: "Resolved" };

    setResolved([...resolved, resolvedTicket]);

    toast.success(`Ticket "${ticket.title}" resolved`);
  };

  const displayedTickets = showAllTickets
    ? tickets
    : tickets.slice(0, MAX_VISIBLE_TICKETS);

  const displayedInProgress = showAllInProgress
    ? inProgress
    : inProgress.slice(0, MAX_VISIBLE_IN_PROGRESS);

  const displayedResolved = showAllResolved
    ? resolved
    : resolved.slice(0, MAX_VISIBLE_RESOLVED);

  return (
    <main className="px-10 py-8 mt-16 space-y-8">
      {/* Banner Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <StatusBanner
          title="In-Progress"
          count={inProgress.length}
          gradient="bg-gradient-to-r from-purple-600 to-purple-400"
        />

        <StatusBanner
          title="Resolved"
          count={resolved.length}
          gradient="bg-gradient-to-r from-green-500 to-teal-600"
        />
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-[2fr_1fr] gap-6">
        {/* Tickets */}
        <div className="bg-white border rounded-xl p-4">
          <h3 className="font-semibold mb-4 text-sm">Customer Tickets</h3>

          {tickets.length === 0 ? (
            <p className="text-center text-gray-500 border border-dashed rounded p-6">
              Smooth sailing. No outstanding customer issues.
            </p>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-4">
                {displayedTickets.map((ticket) => (
                  <div key={ticket.id} onClick={() => handleAddToTask(ticket)}>
                    <TicketCard ticket={ticket} />
                  </div>
                ))}
              </div>

              {tickets.length > MAX_VISIBLE_TICKETS && (
                <button
                  className="btn btn-sm btn-primary w-full mt-4"
                  onClick={() => setShowAllTickets(!showAllTickets)}
                >
                  {showAllTickets ? "Hide" : "View All"}
                </button>
              )}
            </>
          )}
        </div>

        {/* Task Status */}
        <div className="bg-white border rounded-xl p-5">
          <h3 className="font-semibold text-center text-sm mb-4 text-purple-700">
            Task Status
          </h3>

          {inProgress.length === 0 ? (
            <p className="text-center text-gray-500 border border-dashed rounded p-4">
              Select a ticket to add to Task Status
            </p>
          ) : (
            <>
              {displayedInProgress.map((ticket) => (
                <div
                  key={ticket.id}
                  className="bg-gray-100 p-3 rounded mb-3 flex flex-col gap-2"
                >
                  <p className="font-semibold">{ticket.title}</p>

                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => handleComplete(ticket)}
                  >
                    Complete
                  </button>
                </div>
              ))}

              {inProgress.length > MAX_VISIBLE_IN_PROGRESS && (
                <button
                  className="btn btn-sm btn-primary w-full"
                  onClick={() => setShowAllInProgress(!showAllInProgress)}
                >
                  {showAllInProgress ? "Hide" : "View All"}
                </button>
              )}
            </>
          )}

          {/* Resolved Section */}
          <div className="mt-6 border-t pt-4">
            <h3 className="font-semibold text-center text-sm mb-3 text-green-600">
              Resolved Task
            </h3>

            {resolved.length === 0 ? (
              <p className="text-center text-gray-500 border border-dashed rounded p-3">
                No resolved tasks yet.
              </p>
            ) : (
              <>
                {displayedResolved.map((ticket) => (
                  <p
                    key={ticket.id}
                    className="bg-blue-50 text-blue-600 p-2 rounded mb-2 text-sm"
                  >
                    {ticket.title}
                  </p>
                ))}

                {resolved.length > MAX_VISIBLE_RESOLVED && (
                  <button
                    className="btn btn-sm btn-primary w-full"
                    onClick={() => setShowAllResolved(!showAllResolved)}
                  >
                    {showAllResolved ? "Hide" : "View All"}
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <ToastContainer position="bottom-center" autoClose={2000} />
    </main>
  );
};

export default MainSection;
