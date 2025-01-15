import { appReducer, InitialState, RequestStatus, setAppErrorAC, setAppStatusAC, ThemeMode } from "./app-reducer"

let startState: InitialState

beforeEach(() => {
  startState = {
    status: "idle",
    error: null,
    themeMode: "light",
  }
})

test("correct error should be set", () => {
  let newError = "new error"
  let endState = appReducer(startState, setAppErrorAC(newError))

  expect(endState.error).toEqual(newError)
})

test("correct status should be set", () => {
  let endState = appReducer(startState, setAppStatusAC("loading"))

  expect(endState.status).toEqual("loading")
})
