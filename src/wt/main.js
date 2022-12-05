/* 
    main.js - implement function that creates number of worker threads 
(equal to the number of host machine logical CPU cores) from file worker.js 
and able to send data to those threads and to receive result 
of the computation from them. 
    You should send incremental number starting from 10 to each worker. 
For example: on host machine with 4 cores you should create 4 workers 
and send 10 to first worker, 11 to second worker, 12 to third worker, 
13 to fourth worker. After all workers will finish, function should 
log array of results into console. The results are array of objects with 2 properties:
    status - 'resolved' in case of successfully received value 
            from worker or 'error' in case of error in worker
    data - value from worker in case of success or null in case of error in worker
    The results in the array must be in the same order that the workers were created
*/
import { cpus } from "os"
import { Worker } from "worker_threads"
import { getFullPathName } from "../utils/getFullPathName.js"
const workerFileName = getFullPathName(import.meta.url, "/worker.js", "")

const startNumber = 10
const cpuCount = cpus().length

const performCalculations = async () => {
  const allWorkers = []

  for (let i = startNumber; i < startNumber + cpuCount; i++) {
    allWorkers.push(
      new Promise((resolve, reject) => {
        const worker = new Worker(workerFileName, { workerData: i })
        worker.on("message", resolve)
        worker.on("error", reject)
      })
    )
  }

  Promise.allSettled(allWorkers).then((results) => {
    results = results.map(
      (obj) =>
        new Object({
          status: obj.status === "fulfilled" ? "resolved" : "error",
          data: obj.value ?? null,
        })
    )
    console.log(results)
  })
}

await performCalculations()
