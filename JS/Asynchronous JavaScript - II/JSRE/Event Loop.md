# Event Loop

- The Event loop processes tasks and microtasks

- It waits until the call stack is empty and the *GEC is idle*

- Then it dequeues the *Microtask* queue, and pushes the function returned onto
the call stack

- It only moves on to the *Task* queue if the *Microtask* queue is empty
