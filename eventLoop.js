// node index.js

myFile.runContents();

const pendingTimers = [];
const pendingOsTasks = [];
const pendingOperations = [];

function shouldContinue() {
  // Check one: Any pending setTimeout, setInterval, setImmediate?

  // Check two: Any pending OS tasks? (server listening to a port)

  // Check three: Any pending long running operations? (like fs module) - files

  return (
    pendingTimers.length || pendingOsTasks.length || pendingOperations.length
  );
}

// entire body executes in one tick
while (shouldContinue()) {
  // 1) node looks at pending timers and sees if any function is ready to be called. setTimeot, setInterval
  // 2) Node looks at pendingOsTasks and executes the relevant callbacks
  // 3) pause execution. Continue whenever
  //    -  a new pendingOsTask is done
  //    -  a new pendingOperation is done
  //    -  a timer is about to complete
  // 4) look at pendingTimers. call any setImmediate
  // 5) handle any 'close events'
}

// exit back to Terminal
