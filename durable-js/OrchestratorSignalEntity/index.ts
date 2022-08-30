/*
 * This function is not intended to be invoked directly. Instead it will be
 * triggered by an HTTP starter function.
 * 
 * Before running this sample, please:
 * - create a Durable activity function (default name is "Hello")
 * - create a Durable HTTP starter function
 * - run 'npm install durable-functions' from the wwwroot folder of your 
 *    function app in Kudu
 */

import * as df from "durable-functions"

const orchestrator = df.orchestrator(function* (context) {
    const id:string = context.df.getInput()
    // const entityId = new df.EntityId("Counter", null);
    throw new Error("test")

    //yield context.df.signalEntity(entityId, "add", 1)
    //const outputs = ['signalled'];
    //outputs.push(yield context.df.callActivity("Hello", "Seattle"))
    return 'Success!'
});

export default orchestrator;
