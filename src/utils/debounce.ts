// debounce.ts

export type DebounceOptions = {
    leading?: boolean;
    trailing?: boolean;
    maxWait?: number;
  };

  export function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait = 300,
    options: DebounceOptions = {}
  ) {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let lastCallTime: number | null = null;
    let result: ReturnType<T>;
  
    const { leading = false, trailing = true, maxWait } = options;
  
    const invokeFunc = (context: any, args: any[]) => {
      result = func.apply(context, args);
      lastCallTime = Date.now();
      return result;
    };
  
    const startTimer = (context: any, args: any[]) => {
      timeoutId = setTimeout(() => timerExpired(context, args), wait);
    };
  
    const leadingEdge = (context: any, args: any[]) => {
      if (leading) invokeFunc(context, args);
      startTimer(context, args);
    };
  
    const timerExpired = (context: any, args: any[]) => {
      const timeSinceLastCall = lastCallTime ? Date.now() - lastCallTime : 0;
  
      if (trailing && (!leading || timeSinceLastCall >= wait)) {
        invokeFunc(context, args);
      }
      timeoutId = null;
    };
  
    const debounced = function (this: any, ...args: any[]) {
      const context = this;
      const shouldInvoke = !timeoutId;
  
      // Force execution if maxWait reached
      if (maxWait && (!lastCallTime || Date.now() - lastCallTime >= maxWait)) {
        if (timeoutId) clearTimeout(timeoutId);
        return invokeFunc(context, args);
      }
  
      if (shouldInvoke) {
        leadingEdge(context, args);
      } else if (timeoutId) {
        clearTimeout(timeoutId);
        startTimer(context, args);
      }
  
      return result;
    } as T & {
      cancel: () => void;
      flush: () => void;
    };
  
    // Cancel any pending debounce call
    debounced.cancel = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = null;
    };
  
    // Immediately execute pending debounce call
    debounced.flush = () => {
      if (timeoutId) {
        invokeFunc(null, []);
        clearTimeout(timeoutId);
        timeoutId = null;
      }
    };
  
    return debounced;
  }
  