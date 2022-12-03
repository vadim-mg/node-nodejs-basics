/* 
 implement function that decompresses archive.gz back to the fileToCompress.txt 
 with same content as before compression using zlib and Streams API
*/

import { createUnzip } from "node:zlib"
import { createReadStream, createWriteStream } from "node:fs"
import { getFullPathName } from "../utils/getFullPathName.js"
const srcName = getFullPathName(import.meta.url, "/archive.gz")
const destName = getFullPathName(import.meta.url, "/fileToCompress.txt")

const decompress = async () => {
  const unzip = createUnzip()
  const srcStream = createReadStream(srcName)
  const destStream = createWriteStream(destName)
  await srcStream.pipe(unzip).pipe(destStream)
}

await decompress()
