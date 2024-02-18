import { Navbar, TextInput,Button } from 'flowbite-react'
import React from 'react'
import {Link } from 'react-router-dom'
import {AiOutlineSearch}  from   'react-icons/ai' 
import { LuSunMoon } from "react-icons/lu";  


export default function Header() {
  return (
   <Navbar className='border-b-2'>

      <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl   dark:text-white'>

        <span className='px-2 py-1 bg-gradient-to-r  from-blue-500 via-purple-600 to-blue-500 rounded-lg text'> Suyash Blog</span>

       

      </Link>


      <form> 
        <TextInput  type='text'
                    placeholder='Discover..'
                    rightIcon={AiOutlineSearch}
                    className='hidden lg:inline'

        
        />
     </form>

     <Button className='w-10 h-10 lg:hidden' color='gray'  pill>
             <AiOutlineSearch />


     </Button>

     <div className="flex gap-2 ,d:order-2">
        <Button className='w-12 h-10 hidden sm:inline'  color='gray' pill>
            <LuSunMoon />
        </Button>

    <Link to ="/Sign-in">
    <Button gradientDuoTone="tealToLime">
            Sign In


        </Button>
    
    
    </Link>


    <Link to ="/dashboard">
    
    
    
    <Button gradientDuoTone="tealToLime">

            Dashboard

          </Button>


    </Link>
    <Link to ="/About">
          <Button gradientDuoTone="tealToLime">
           About

          </Button>


    </Link>

     </div>

    


    

   </Navbar>
  )
}
