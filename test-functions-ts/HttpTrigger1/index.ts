import { HttpRequest, AzureFunction, Context, HttpResponseApi } from "@azure/functions"
import { registerHook } from '@azure/functions-worker'

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    //context.res = context.res as HttpResponseApi;
    registerHook("dinner", () => {
        console.log("hello");
    });

    context.res = {
        status: 400
    }
}; 

export default httpTrigger;