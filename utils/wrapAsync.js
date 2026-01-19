module.exports = (fn) => {
     return (req, res, next) => {
          // Ensure we handle both sync and async functions and guard next
          try {
               const p = Promise.resolve(fn(req, res, next));
               p.catch((err) => {
                    if (typeof next === "function") {
                         return next(err);
                    }
                    console.error("wrapAsync: 'next' is not a function", { next });
                    console.error(err);
                    try {
                         res.status(500).send("Server error");
                    } catch (e) {
                         // final fallback
                         console.error("Failed sending error response", e);
                    }
               });
          } catch (err) {
               if (typeof next === "function") return next(err);
               console.error("wrapAsync outer catch: 'next' is not a function", { next });
               console.error(err);
               try {
                    res.status(500).send("Server error");
               } catch (e) {
                    console.error("Failed sending error response", e);
               }
          }
     };
};