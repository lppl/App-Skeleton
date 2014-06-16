describe "Spec bootstrap", ->

  it "finds testing app", ->
    expect(window.App).toBeDefined()

  it "will always fail, but only when we gonna expect something from true", ->
    expect(true).toBe(false)