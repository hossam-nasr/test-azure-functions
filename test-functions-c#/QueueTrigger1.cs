using System;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Logging;

namespace Company.Function
{
    public class QueueTrigger1
    {
        [FunctionName("QueueTrigger1")]
        public void Run([QueueTrigger("test-queue", Connection = "hossamteststorageacc_STORAGE")]string myQueueItem, ILogger log)
        {
            log.LogInformation($"C# Queue trigger function processed: {myQueueItem}");
        }
    }
}
