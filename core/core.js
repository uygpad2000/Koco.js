/**
 * Create a root task container to hold all the widgets and renderers in a Koco block.
 * 
 * @param {Object} options - An object with optional properties that will be attached to the task.
 * @param {Function} returns - A constructor function that specifies what Core should return.
 * 
 * @returns {Object} - A task object for subsequent functions and events.
 */

export function createTask(options, returns) {
    const task = {};

    task.tracker = true; // enable task tracker
    
    if (options) {
      Object.keys(options).forEach(key => {
        // attach all provided options to the task
        task[key] = options[key];
      });
    }
    
    return task;
  }
  