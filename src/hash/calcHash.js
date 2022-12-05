/* 
You should implement several functions in dedicated files
calcHash.js - implement function that calculates SHA256 hash 
for file fileToCalculateHashFor.txt and logs it into console as hex
*/
const fileName = "/fileToCalculateHashFor.txt"

import { readFile } from "node:fs/promises"
import { getFullPathName } from "../utils/getFullPathName.js"
const { createHash } = await import("node:crypto")

const calculateHash = async () => {
  const hash = createHash("sha256")
  const hashedFile = await readFile(getFullPathName(import.meta.url, fileName))
    .then((result) => hash.update(result).digest("hex"))
    .catch((err) => {
      throw err
    })
  console.log(hashedFile)
}

await calculateHash()
