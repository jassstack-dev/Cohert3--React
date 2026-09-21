import React, { use } from 'react';

const User = ({user, setToggle, setEditUser}) => {
  console.log(user)
  return (
    user.map((elem)=>{
     return <div className="m-5 max-w-[260px] bg-white border  border-gray-200 rounded-xl p-3.5 shadow-sm">
      {/* Avatar + Info */}
      <div className="flex items-center gap-2.5">
        <img
          src={elem.image}
          alt="Sarah Connor"
          className="w-10 h-10 rounded-full object-cover shrink-0"
        />
        <div className="min-w-0">
          <h4 className="text-xs font-semibold text-gray-900 truncate">
            {elem.name}
          </h4>
          <p className="text-[11px] text-gray-500 truncate">
            {elem.email}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-2 text-xs text-gray-600 line-clamp-2 leading-relaxed">
        {elem.description}
      </p>

      {/* Action Buttons */}
      <div className="mt-3 pt-2.5 border-t border-gray-100 flex gap-2">
        <button
        onClick={()=> setToggle(prev => !prev)}
          type="button"
          className="flex-1 py-1 text-[11px] font-medium rounded-md text-indigo-600 bg-indigo-50 hover:bg-indigo-100"
        >
          Update
        </button>
        <button
          type="button"
          className="flex-1 py-1 text-[11px] font-medium rounded-md text-red-600 bg-red-50 hover:bg-red-100"
        >
          Delete
        </button>
      </div>
    </div>
    })
  );
};

export default User;