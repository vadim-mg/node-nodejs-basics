/* 
implement function that compresses file fileToCompress.txt 
to archive.gz using zlib and Streams API
*/

import { createGzip } from "node:zlib"
import { createReadStream, createWriteStream } from "node:fs"
import { getFullPathName } from "../utils/getFullPathName.js"
const srcName = getFullPathName(import.meta.url, "/fileToCompress.txt")
const destName = getFullPathName(import.meta.url, "/archive.gz")

const compress = async () => {
  const gzip = createGzip()
  const srcStream = createReadStream(srcName)
  const destStream = createWriteStream(destName)
  await srcStream.pipe(gzip).pipe(destStream)
}

await compress()
