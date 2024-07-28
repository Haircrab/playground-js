// in v8, event loop has two queues
// macrotask and microtask queues

// Execution order is
// 1. sync code
// 2. microtask (.then/ catch/ finally/ queueMicrotask)
// 3. macrotask (DOM handlers, script downloading, webApi, ajax callback function)

// Promise.then => microtask, so 1 tick after
Promise.resolve().then(() => console.log(1)); // microtask => log(4)

// queueMicrotask => microtask, so 1 tick after
// setTimeout => microtask, so 1 more tick after
queueMicrotask(() => setTimeout(() => console.log(2), 0));

// setTimeout => microtask, so 1 tick after
setTimeout(() => console.log(3), 0);

console.log(4); // sync code, execute first

new Promise(() => console.log(5)); // code in constructor is sync code, execute second

(async () => console.log(6))(); // sync code , execute third
