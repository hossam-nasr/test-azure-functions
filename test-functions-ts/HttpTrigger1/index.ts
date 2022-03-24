import { AzureFunction, Context, HttpRequest, HttpResponseApi } from "@azure/functions"

export type ActualContext = Context & { res: HttpResponseApi }

const httpTrigger: AzureFunction = async function (context: Context & { res: HttpResponseApi}, req: HttpRequest): Promise<void> {
    context.res.status(200);
}; 

export default httpTrigger;