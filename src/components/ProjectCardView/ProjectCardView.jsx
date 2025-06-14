import React from 'react'
import image from '../../assets/image.png'

export default function ProjectCardView() {
  return (
    <div className="flex flex-col justify-center p-5 rounded-[10%] text-white overflow-hidden border-[1px] border-white/75 w-fit">
        <div className="flex items-center justify-between z-10">
            <div>
                <h2 className="text-3xl font-bold mb-0.5">Project Title</h2>
                <p className="text-xs opcaity-70">A brief description</p>
            </div>
            <div className="bg-[rgba(0,0,0,0.4)] flex items-center pl-1 pr-2 rounded-3xl gap-2">
                <div className="icon h-[25px] w-[25px] rounded-full grid place-content-center bg-white">
                    <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="#51D!F7"
                viewBox="0 0 256 256"
              >
                <path d="M232,64H208V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V64H24A16,16,0,0,0,8,80V96a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,191.61V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.58c31.94-3.23,58.44-25.64,68.08-55.58H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,120A24,24,0,0,1,24,96V80H48v32q0,4,.39,8ZM232,96a24,24,0,0,1-24,24h-.5a81.81,81.81,0,0,0,.5-8.9V80h24Z"></path>
              </svg>
                </div>
                <p className='text-xs'>5.0</p>
            </div>
        </div>
        <img
          src={image}
          alt="hello"
          className="w-52 h-52 object-contain mt-5 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] mx-5 mb-7"
        />
    </div>
  )
}
