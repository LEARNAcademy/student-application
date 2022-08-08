import React from "react"
import { Assessment } from "./Assessment"
import { render, queryAllByAttribute } from "@testing-library/react"

const getAllById = queryAllByAttribute.bind(null, "id")
const dom = render(<Assessment assessments={[]}/>)

describe("<Assessment />", () => {
  test("render 6 divs with the text Week", () => {
    const week = getAllById(dom.container, "week")
    expect(week).toHaveLength(6)
  })
})
