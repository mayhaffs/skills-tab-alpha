# Mock Outline

### SkillsTab MVP Components

(includes scope-creep)

- CharacterFrame
  - CharacterProfile
      - CharacterName
      - CharacterAvatar

- SkillsTab
  - SkillsIndex
    - SkillCategory
    - SkillProgressBar
  - SkillDetails
    - SkillProgressBar-Mini
    - SkillDescription

    <!-- - SkillResources -->
      <!-- - EditTextArea -->

    - New_SkillLvlUp-TextArea
      - Edit_TextArea
      - SkillLvlUp-SubmitButton
    - LevelsIndex
      - LevelDetails

### Non-MVP data considerations

- CharacterProfile
  - (id)
  - (username/password)

### Thinking in React (notes)

https://reactjs.org/docs/thinking-in-react.html#start-with-a-mock

##### Step 0: Start with a mockup
##### Step 1: Break the UI into a component hierarchy
##### Step 2: Build a static version in react

- build components that reuse other components and pass data using props.
- don’t use state at all to build this static version.
- In simpler examples, it’s usually easier to go top-down, and on larger projects, it’s easier to go bottom-up and write tests as you build.
- The components will only have render() methods since this is a static version of your app.
- The component at the top of the hierarchy (FilterableProductTable) will take your data model as a prop. 
- If you make a change to your underlying data model and call ReactDOM.render() again, the UI will be updated.

###### A Brief Interlude: Props vs State

- There are two types of “model” data in React: props and state. It’s important to understand the distinction between the two:
- https://reactjs.org/docs/faq-state.html#what-is-the-difference-between-state-and-props
- props (short for “properties”) and state are both plain JavaScript objects. While both hold information that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).

##### Step 3: Identify the minimal (but complete) representation of the UI state

- To make your UI interactive, you need to be able to trigger changes to your underlying data model. React achieves this with state.
- https://en.wikipedia.org/wiki/Don%27t_repeat_yourself
- Figure out the absolute minimal representation of the state your application needs and compute everything else you need on-demand.
  - For example, if you’re building a TODO list, keep an array of the TODO items around; don’t keep a separate state variable for the count. Instead, when you want to render the TODO count, take the length of the TODO items array.
- Think of all of the pieces of data in our example application. We have:
  - The original list of products
  - The search text the user has entered
  - The value of the checkbox
  - The filtered list of products
- Let’s go through each one and figure out which one is state. Ask three questions about each piece of data:
  1. Is it passed in from a parent via props? If so, it probably isn’t state.
  2. Does it remain unchanged over time? Is so, it probably isn't state.
  3. Chan you compute it based on any other state or props in your component? If so, it isn't state.
- The original list of products is passed in as props, so that’s not state. The search text and the checkbox seem to be state since they change over time and can’t be computed from anything. And finally, the filtered list of products isn’t state because it can be computed by combining the original list of products with the search text and value of the checkbox.
- So finally, our state is:
  - The search text the user has entered
  - The value of the checkbox

