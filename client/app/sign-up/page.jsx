"use client"
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

function page() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data)
    try {
      const response = await fetch('http://localhost:3000/api/v1/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-green-600 sm:text-3xl">Revued</h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Create your account today!
        </p>

        <form 
          onSubmit={handleSubmit(onSubmit)}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">Sign up for an account</p>

          {/* Username Field */}
          <div>
            <label htmlFor="username" className="sr-only">Username</label>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter username"
                {...register('username')}
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
                {...register('email')}
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
                {...register('password')}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="block w-full rounded-lg bg-green-600 px-5 py-3 text-sm font-medium text-white"
          >
            Sign up
          </button>

          {/* Redirect to Sign In */}
          <p className="text-center text-sm text-gray-500">
            Already have an account?
            <Link className="underline" href="/sign-in">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default page;
