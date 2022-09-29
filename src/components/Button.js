import React from "react"

const Button = (props) => {
  const { text, onClick, path } = props
  return (
    <div
      onClick={onClick}
      className="
            justify-center
            items-center
            py-2
            px-4
            w-auto
            font-medium
            text-white
            hover:text-[#A670AF]
            bg-[#95649d]
            hover:bg-white
            border-2
            border-[#A670AF]
            flex h-auto
            cursor-pointer select-none
            "
    >
      <a href={path} >{text}</a>
    </div>
  )
}

export { Button }