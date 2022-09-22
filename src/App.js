
import React, { useState } from "react";
import Card from "./components/Card"

const App = () => {

  const [user, setUser] = useState({})
  const [cardOpen, setCardOpen] = useState(false)
  const [userName, setUserName] = useState('')

  const fetchUser = async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${userName}`)
      const data = await res.json()
      setUser(data)
    } catch (err) {
      setCardOpen(false)
    }
  }

  const handleSearch = () => {
    fetchUser()
    setUserName('')
    setCardOpen(true)
  }

  return (
    <div className="bg-slate-200 h-screen pt-2">

      <div className="m-auto flex align-center  justify-center items-center flex-col h-22">
        <label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Search User</label>
        <div className="flex w-3/6">
          <span className="inline-flex items-center px-3 text-sm 
            text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            @
          </span>
          <input value={userName} onChange={e => setUserName(e.target.value)} type="text" id="website-admin" className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300
            text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
            dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Akash Plackal" />

          <button onClick={() => handleSearch()} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
          focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 
            dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
      </div>
      {cardOpen && !user.message ? <Card user={user} /> : user.message ? user.message : null}
    </div >
  )
};

export default App;
