import React from "react";
import { BsPersonFill, BsFillChatDotsFill, BsInboxFill } from "react-icons/bs"
import { MdOutlineHelp } from "react-icons/md"

const Navbar = () => {
  return <div className='h-14 flex justify-between items-center shadow-sm shadow-black text-500'>
				<div className='flex items-center w-1/2 justify-around'>
					<div className='ml-2 border-r border-gray-500 pr-2 flex items-center justify-between space-x-2'>
						<BsPersonFill size={25} /> <span>Friends</span>
					</div>
					<div className='nav-item'>Online</div>
					<div className='nav-item text-gray-500'>All</div>
					<div className='nav-item text-gray-500'>Pending</div>
					<div className='nav-item text-gray-500'>Blocked</div>
					<div className='nav-item  bg-green-500'>AddFriend</div>
				
					</div>
				</div>
			
};

export default Navbar;
