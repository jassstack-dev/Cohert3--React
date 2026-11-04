

import { useAuth } from '../../hooks/useAuth'

const LoginPage = () => {

    const {
        navigate,
        register,
        loginForm,
        handleSubmit,
        errors,
    } = useAuth()

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
                

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Welcome Back
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Login to your account
                    </p>
                </div>

                <form onSubmit={handleSubmit(loginForm)} className="space-y-5">

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Username
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your username"
                            {...register('username', {
                                required: 'username is required',
                            })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />

                        {errors.username && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.username.message}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message: 'Minimum 6 characters required'
                                }
                            })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />

                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Remember & Forgot */}
                    <div className="flex items-center justify-between text-sm">

                        <label className="flex items-center gap-2 text-gray-600">
                            <input
                                type="checkbox"
                                className="accent-blue-600"
                            />
                            Remember me
                        </label>

                        <button
                            type="button"
                            onClick={() => navigate('/forgot-password')}
                            className="text-blue-600 hover:underline"
                        >
                            Forgot password?
                        </button>

                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
                    >
                        Login
                    </button>

                </form>

                <p className="text-center text-sm text-gray-500 mt-6">
                    Don't have an account?

                    <button
                        onClick={() => navigate('/register')}
                        className="text-blue-600 font-semibold ml-1"
                    >
                        Sign Up
                    </button>
                </p>

            </div>

        </div>
    )
}

export default LoginPage
