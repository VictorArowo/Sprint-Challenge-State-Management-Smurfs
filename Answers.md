1. What problem does the context API help solve?

- The context API majorly solves the problem of prop drilling where intermediate components have to receive props they do not need . With context api, we simply have a provider at the top level holding all the props we want to pass down, and at any point where props are needed down the tree, it is simply gotten through the useContext hook.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- A **STORE** in \***\*redux is what holds the entire current state tree of the application at any point in time. To change the state you need to dispatch an **ACTION** which goes into a **REDUCER.\*\* Depending on the type of action the reducer receives it returns a new state object without overriding the previous state.
  The store is known as the singular source of truth because at any points it holds the current source of the application and no other part of the application has access to the state without getting it from the store.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Application state is a global state which the entire application has access to much like the store in redux. Component state is local to a component, and only children on that component hace access to it through props.
  Application state should be the default and component state should be used only when you're sure that no other sibling component would require access to that state.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

- Thunk in Javascript is a function which returns a function. Redux-thunk leverages on this idea in helping deal with asynchronous actions. Redux thunk is a piece of middleware which intercepts all thunk actions. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

- Thunk in Javascript is a function which returns a function. Redux-thunk leverages on this idea in helping deal with asynchronous actions. Redux thunk is a piece of middleware which intercepts all thunk actions. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.
