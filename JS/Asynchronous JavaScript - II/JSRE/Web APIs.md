# Web API Environment

- The Web API is an external toolbox that provides features for JS to call

- The Web API provides both synchronous and asynchronous functions

- Synchronous calls are added directly to the call stack

- Whereas asynchronous calls are run in the web API environment

## Asynchronous Web API Calls

- Once the function completes in the API environment, its callback (if given)
is added to a queue

- Higher priority callbacks are added to the *Microtask* queue and lower ones
to the *Task queue*

- Callbacks from *Promises* are considered higher priority

- While those from APIs like `setInterval()`, `setTimeout()`, *DOM events* and
*I/O tasks* have lower priority
