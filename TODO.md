# What's missing

Classes 
    * Vanila JS
    * TypeScript (Including private, protected member visibility)

TypeScript:
    * interfaces/types
        * Generics
        * Optional parameters 
        * Generic Helpers Pick, Omit, Required
    * tsconfig.json
        * defaults
        * target: esnext, es2018, node
    * webpack: what it is?

Async:
    Start from beginning of JS, how callbacks were. 
    Talk about callback hell... deeply nested and hard to mantain
    Error handling (err, result): can't use try/catch
    
    * how async works
    * await
        * here we can use try/catch
    * comparison with callbacks
    * for (await )
    * Promises
        Talk about .then, .catch, .finally and how to chain them
        Problems with chaining: loops, if for optional steps

        const results = await Promise.all(list.map(item => {
            return getSomething(item.id); // this is a promise
        }))

        // it will not work
        const result = list.map(async item => {
            return getSomething(item.id); // this is a promise
        })

        // and this will not await for every item
        list.forEach(async item => {
            await getSomething(item.id); // this is a promise
        });

    * How to promisify callbacks

    