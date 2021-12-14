import THREE from "three.js"
import * as core from "@theatre/core"
import studio from "@theatre/studio"

// initialize the studio so the editing tools will show up on the screen
studio.initialize()

const proj = core.getProject(
    "First project"
)

const sheet = proj.sheet(
    "Scene"
)

const obj = sheet.object(
    "First object",
    {
        foo: 0,
        bar: true,
        baz: "A string",
    }
)

console.log(obj.value.foo) // prints a number
console.log(obj.value.bar) // prints a boolean
console.log(obj.value.baz) // prints a string

const unsubscribe = obj.onValuesChange(function callback(newValue) {
    console.log(newValue.foo) // prints a number
    console.log(newValue.bar) // prints a boolean
    console.log(newValue.baz) // prints a string
})
setTimeout(unsubscribe, 5000)


const div = document.getElementById("box")
obj.onValuesChange((newValue) => {
  // obj.foo will now set the horizontal position of the div
  div.style.left = newValue.foo + "px"
})