/* 
implement function that writes process.stdin data 
into file fileToWrite.txt content using Writable Stream */

import { createWriteStream } from "fs"
import { getFullPathName } from "../utils/getFullPathName.js"
const fileName = getFullPathName(import.meta.url, "/fileToWrite.txt")

const write = async () => {
  const ws = createWriteStream(fileName)
  process.stdin.pipe(ws)
}

await write()
