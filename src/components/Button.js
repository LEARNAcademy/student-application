import React from "react"

const Button = (props) => {
  const { text, onClick, path } = props
  return (
    <div
      onClick={onClick}
      className="
            flex h-auto
            w-auto
            cursor-pointer select-none
            items-center
            justify-center
            border-2
            border-[#A670AF]
            bg-[#95649d]
            py-2
            px-4
            font-medium
            text-white
            hover:bg-white
            hover:text-[#A670AF]
            "
    >
      <a href={path} >{text}</a>
    </div>
  )
}

export { Button }