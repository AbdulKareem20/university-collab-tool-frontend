import React from 'react'
import { useState } from 'react'
import { createdepartment } from '../../components/services/authService';
import { useDispatch } from 'react-redux';
import Navbar from '../common/navbar';
import { Link } from 'react-router-dom';



  const Department = () => {
    const [name, setName] = useState('')
    const[departmentId, setdepartmentId] = useState('');
    const[headOfDepartment, setheadOfDepartment] = useState('');
    const [ description, setdescription] = useState('');
    const [ activeCourses, setactiveCourses] = useState('');
    const [  resources, setresources] = useState('');
    const [facultyMembers, setfacultyMembers] = useState('');

    const dispatch = useDispatch()

  const handleInputChange = (e) => {
    e.preventDefault();
    const userData = {
        name: '',
        departmentId: '',
        headOfDepartment: '',
        description: '',
        activeCourses: [],
        resources: '',
        facultyMembers: [],
      }
      dispatch(createdepartment(userData))
    }
  return (
   <>
    <Navbar />
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleInputChange}>
          <div> 
              <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="role"
                  name="text"
                  type="text"
                  autoComplete="role"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               onChange={(e)=> setName(e.target.value)}
               />
              </div>
            </div>
            <div> 
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                departmentId 
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               onChange={(e)=> setdepartmentId(e.target.value)}
               />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Description
                </label>
               
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e)=> setdescription(e.target.value)}
               />
              </div>
            </div>
            <div> 
              <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
              Head of Department
              </label>
              <div className="mt-2">
                <input
                  id="role"
                  name="text"
                  type="text"
                  autoComplete="role"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               onChange={(e)=> setheadOfDepartment(e.target.value)}
               />
              </div>
            </div>
            <div> 
              <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
              Active Courses (comma-separated)
              </label>
              <div className="mt-2">
                <input
                  id="role"
                  name="text"
                  type="text"
                  autoComplete="role"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               onChange={(e)=> setactiveCourses(e.target.value)}
               />
              </div>
            </div>
            <div> 
              <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
              Resources
              </label>
              <div className="mt-2">
                <input
                  id="role"
                  name="text"
                  type="text"
                  autoComplete="role"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               onChange={(e)=> setresources(e.target.value)}
               />
              </div>
            </div>
            <div> 
              <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
              Faculty Members (comma-separated)
              </label>
              <div className="mt-2">
                <input
                  id="role"
                  name="text"
                  type="text"
                  autoComplete="role"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               onChange={(e)=> setfacultyMembers(e.target.value)}
               />
              </div>
            </div>

            

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
            <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>  <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    if already account than <Link to='/login'>Login</Link>
                  </a>
                </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
   
   
   </>
  );
};

export default Department;
