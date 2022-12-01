import { readdir } from "node:fs/promises"
import { getFullPathName } from "../utils/getFullPathName.js"
import { fsOperationField } from "../utils/constants.js"

const dir = getFullPathName(import.meta.url)

/* 
implement function that prints all array of filenames from "files" folder into console 
(if "files" folder doesn't exists Error with message "FS operation failed" must be thrown) 
*/
const list = async () => {
  readdir(dir)
    .then((files) => {
      for (const file of files) {
        console.log(file)
      }
    })
    .catch((err) => {
      err.reason = err.message
      err.message = fsOperationField
      throw err
    })
}

await list()
