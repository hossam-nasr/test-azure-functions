using System;
using System.Text;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace Company.Function
{
    public class ServiceBusQueueTrigger1
    {
        [FunctionName("ServiceBusQueueTrigger1")]
        public void Run([ServiceBusTrigger("test-sb-queue", Connection = "hossamtestsb")]string myQueueItem, ILogger log)
        {
            log.LogInformation($"String: {myQueueItem}");
            var bytes = Encoding.UTF8.GetBytes(myQueueItem);
            log.LogInformation($"Bytes: {Convert.ToHexString(bytes)}");
            // attempting to deserialize here will throw an error
            var deserialized = JsonConvert.DeserializeObject<string>(myQueueItem);
        }
    }
}
