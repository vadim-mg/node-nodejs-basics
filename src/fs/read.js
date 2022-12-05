/* 
implement function that prints content of the "fileToRead.txt" into console 
(if there's no file "fileToRead.txt" Error with message "FS operation failed" must be thrown)
*/

import { readFile } from "node:fs/promises"

import { getFullPathName } from "../utils/getFullPathName.js"
import { fsOperationField } from "../utils/constants.js"

const fileName = getFullPathName(import.meta.url, "/fileToRead.txt")

const read = async () => {
  readFile(fileName, { encoding: "utf8" })
    .then((result) => {
      console.log(result)
    })
    .catch((err) => {
      err.reason = err.message
      err.message = fsOperationField
      throw err
    })
}

await read()
