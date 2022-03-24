using System;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Azure.Storage.Queues.Models;
using Microsoft.Azure.Storage.Queue;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;

namespace Company.Function
{
    public class QueueTrigger1
    {
        [FunctionName("QueueTrigger1")]
        public async Task Run([QueueTrigger("test-queue", Connection = "hossamteststorageacc_STORAGE")]QueueMessage myQueueItem, ILogger log)
        {
            for (var i = 0; i < 20; i++) {
                log.LogInformation($"Minute {i}: nextVisibleOn: {myQueueItem.NextVisibleOn}, popReceipt: {myQueueItem.PopReceipt}");
                await Task.Delay(60000);
            }
        }
    }
}