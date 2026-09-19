import React from 'react'

const UserCard = ({user}) => {
  return (
    <div className="w-full max-w-sm bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800 p-5 shadow-xl flex items-center justify-between gap-4 font-sans">
      {/* User Info with Avatar */}
      <div className="flex items-center gap-3.5 min-w-0">
        <img
          src={user.image}
          alt="User avatar"
          className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500/30 flex-shrink-0"
        />
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-white truncate">
            {user.name}
          </h3>
          <p className="text-xs text-slate-400 truncate">
            {user.email}
          </p>
        </div>
      </div>

      {/* Delete Button */}
      <button
        type="button"
        title="Delete user"
        className="p-2 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 active:bg-red-500/20 border border-transparent hover:border-red-500/20 transition-all flex-shrink-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.75}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  )
}

export default UserCard