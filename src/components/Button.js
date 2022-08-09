import React from "react"

const Button = (props) => {
  const { text, onClick } = props
  return (
    <div
        onClick={onClick}
        className="
            h-auto w-auto
            cursor-pointer
            select-none border-2
            border-[#A670AF]
            bg-[#A670AF]
            py-2
            px-4
            font-medium
            text-white
            hover:bg-white
            hover:text-[#A670AF]"
    >
        {text}
    </div>
  )
}

export { Button }