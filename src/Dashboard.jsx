import React from "react"
import Navbar from "./Navbar"
import { BsPersonFill, BsPlusLg, BsFillMicMuteFill, BsHeadset, BsGearFill } from "react-icons/bs"
import { SiD3Dotjs, SiDash, SiNodedotjs, SiShieldsdotio, SiStackoverflow, SiTurbosquid } from "react-icons/si"
import Channel from "./Channel"
import friendList from "./friendsList"
import Icon from './Icon.jsx'
import { BiMessageAdd } from "react-icons/bi"





import logo from "./Assets/discord.png"
import { MdMessage, MdStackedBarChart } from "react-icons/md"

const Dashboard = () => {
	return (
		<div className='w-auto grow h-full bg-gray-600 text-white'>
			<Navbar />
			<div>
  <div class='flex m-4'>
    <form>
       <input 
        type="email" 
        placeholder="Search" 
        name="search" 
        class="top-3 left-5 indent-3 text-white bg-gray-900 rounded-lg w-[820px] h-8 border-slate-800">
       </input>
    </form>
  </div>
 
</div>
				<p className="p-2 m-2 text-zinc-500">ONLINE-2</p>
      

        <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      
    
        <table class="min-w-full  ">
         
            
            <tr class="border-t  border-slate-700">
              <td class="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
               
					BeardedBro
          <br></br>
          <p class='text-gray-500'>Idle</p>
			
              </td>
				
              <td class=" flex flex-row justify-end ">
				

					{<MdMessage size='25' />}
      
				&nbsp;
				&nbsp;
				&nbsp;
				&nbsp; 
          {<SiStackoverflow size='25' />}
    
        
              </td>
            </tr>
            <tr class="border-t border-slate-700">
              <td class="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
                Lilithty
                <br></br>
          <p class='text-gray-500'>Idle</p>
                
              </td>
              
              <td class=" flex flex-row justify-end">
              
              {<MdMessage size='25' />}
				&nbsp;
				&nbsp;
				&nbsp;
				&nbsp;
          
            
              {<SiStackoverflow size='25' />}
        
            
                  </td>

            </tr>
        </table>
      </div>
    </div>
  </div>
</div>


      
 


						
					
				
				
			
		
	)
}

export default Dashboard
