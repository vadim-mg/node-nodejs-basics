import { rm } from "node:fs/promises"

import { getFullPathName } from "../utils/getFullPathName.js"
import { fsOperationField } from "../utils/constants.js"

const fileName = getFullPathName(import.meta.url, "/fileToRemove.txt")

/* 
- implement function that deletes file "fileToRemove.txt" 
(if there's no file "fileToRemove.txt" Error with message "FS operation failed" must be thrown) 
*/

const remove = async () => {
  rm(fileName)
    .then((val) => {
      console.log("File was deleted successfully")
    })
    .catch((err) => {
      err.reason = err.message
      err.message = fsOperationField
      throw err
    })
}

await remove()
