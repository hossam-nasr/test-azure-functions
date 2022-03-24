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
import * as moment from "moment"

const orchestrator = df.orchestrator(function* (context) {
    const outputs = [];

    // Replace "Hello" with the name of your Durable Activity Function.
    outputs.push(yield context.df.callActivity("Hello", "Tokyo"));
    outputs.push(yield context.df.callActivity("Hello", "Seattle"));

    const currentTime = context.df.currentUtcDateTime;
    const myTimer = context.df.createTimer(moment.utc(currentTime).add(5, 'm').toDate());
    yield myTimer;

    outputs.push(yield context.df.callActivity("Hello", "London"));
    return outputs;
});

export default orchestrator;
