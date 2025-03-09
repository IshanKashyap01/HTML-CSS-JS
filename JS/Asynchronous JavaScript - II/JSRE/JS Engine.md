# JavaScript Engine

- The JavaScript engine sequentially runs JavaScript in the browser

- It contains and handles the call stack and the heap

- It is also responsible for memory management and garbage collection

## Call Stack

- The call stack contains all the *execution contexts*

- The *Global Execution Context* (GEC) sits at the bottom and is only popped
when the program exits

  - In other words, it is a permanent resident of the call stack

- If a function is called in the GEC, its EC is added onto the call stack

- The JS Engine always runs the EC at the top of the call stack and pops it off
when finished

- If all ECs are popped, and GEC is done, but the program has not exited, then
GEC *sits idly* in the call stack
