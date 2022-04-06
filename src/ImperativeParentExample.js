import React, { useRef, useImperativeHandle, forwardRef } from "react"

function sendEvent() {
  // send event on focus
  console.log("Textfield Focused!")
}

export function ImperativeChildExampleComponent(props, ref) {
  // we need to create a new ref for the input to be able to focus on the element
  const inputRef = useRef(null)

  useImperativeHandle(ref, () => ({
    focus: () => {
      // send event
      sendEvent()

      // focus on the input after we send the event
      inputRef.current.focus()
    },
  }))

  return <input {...props} ref={inputRef} />
}

const ImperativeChildExample = forwardRef(ImperativeChildExampleComponent)

export default function ImperativeParentExample() {
  const ref = useRef(null)
  return (
    <div className="align">
      <ImperativeChildExample ref={ref} />
      <button onClick={() => ref?.current?.focus()}>Focus!</button>
    </div>
  )
}