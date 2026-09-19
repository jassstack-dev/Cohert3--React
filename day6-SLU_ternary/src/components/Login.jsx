import React from 'react'

const Login = ({setToggle}) => {
  return (
    <div className="bg-slate-950 flex items-center justify-center p-4 text-slate-100 font-sans">
      <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800 p-8 shadow-2xl space-y-6">
        {/* Header */}
        <div className="text-center space-y-1">
          <div className="text-2xl font-bold tracking-tight text-white">
            Login champs
          </div>
          <p className="text-sm text-slate-400">
            Welcome back! Please enter your details.
          </p>
        </div>

        {/* Form UI */}
        <form className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
              Email
            </label>
            <input
              type="email"
              placeholder="you@domain.com"
              className="w-full px-4 py-2.5 rounded-lg bg-slate-800/60 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                Password
              </label>
              <a 
                href="#forgot" 
                className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-lg bg-slate-800/60 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>

          <div className="flex items-center">
            <label className="flex items-center gap-2 text-sm text-slate-400 cursor-pointer select-none">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-slate-700 bg-slate-800 text-indigo-600 focus:ring-indigo-500"
              />
              Remember me
            </label>
          </div>

          <button
            type="button"
            className="w-full py-2.5 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm shadow-lg shadow-indigo-600/30 transition-all"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <div className="pt-2 text-center text-sm text-slate-400 border-t border-slate-800">
          Didn't have an account?{' '}
          <a
            onClick={()=> setToggle((prev) => !prev)}
            className="font-semibold text-indigo-400 hover:text-indigo-300 hover:underline transition-colors ml-1"
          >
            Register now
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login