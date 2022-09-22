
import React from "react"

const Card = ({ user }) => {

  const createdDate = user?.created_at?.substring(0, 10)
  const updatedDate = user?.updated_at?.substring(0, 10)

  return (
    <div className="">
      <div className='w-4/12 m-auto flex align-center flex-col pt-5'>
        <img src={user?.avatar_url ? user?.avatar_url : 'http://via.placeholder.com/460x460'} alt="user dp" className=" m-auto w-11/12 object-cover object-center rounded-lg shadow-md" />

        <div className="relative px-4 -mt-16 w-10/12 m-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-baseline">
              <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                {user?.type}
              </span>
              <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                {user?.public_repos} repos &bull; {user?.public_gists} gists
              </div>
            </div>

            <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">{user?.name}</h4>

            <div className="mt-1">
              <span className="text-gray-600 text-sm">@ </span>
              {user?.login}
            </div>
            <div className="mt-4">
              <span className="text-teal-600 text-md font-semibold">{createdDate}</span>
              <span className="text-sm text-gray-600"> ({updatedDate} last updated)</span>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Card;





