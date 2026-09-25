import React from 'react';
import { set } from 'react-hook-form';

const Users = ({user,deleteUser,setToggle, setUpdated}) => {

  
  return (
    <div className="w-full min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      {/* Cards Container with Flex & Flex Wrap */}
      <div className="max-w-7xl mx-auto flex flex-wrap gap-6 justify-start items-stretch">
        
        {/* Card 1 */}
       {
        user.map((val,index)=>{
            return  <div key={index} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] flex flex-col bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
          <div className="relative w-full h-52 bg-slate-100 overflow-hidden">
            <img
              src={val.image}
              alt="Wireless Headphones"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-emerald-700 font-bold px-3 py-1 rounded-full text-xs shadow-sm border border-slate-100">
              ₹{val.price}
            </span>
          </div>

          <div className="p-5 flex flex-col flex-1 justify-between">
            <div>
              <h3 className="text-base font-semibold text-slate-900 line-clamp-1">
                {val.title}
              </h3>
              <p className="mt-2 text-sm text-slate-500 line-clamp-3 leading-relaxed">
                {val.description}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-3">
              <button
              onClick={()=> {
                setUpdated(val)
                setToggle((prev) => !prev)
              }}
                type="button"
                className="flex-1 py-2 px-3 text-xs font-semibold rounded-lg text-indigo-700 bg-indigo-50 hover:bg-indigo-100 active:scale-95 transition-all text-center"
              >
                Update
              </button>
              <button
              onClick={()=>deleteUser(index)}
                type="button"
                className="flex-1 py-2 px-3 text-xs font-semibold rounded-lg text-rose-700 bg-rose-50 hover:bg-rose-100 active:scale-95 transition-all text-center"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        })
       }

       

      </div>
    </div>
  );
};

export default Users;