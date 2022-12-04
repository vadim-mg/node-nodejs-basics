import { cp } from "node:fs/promises"
import { getFullPathName } from "../utils/getFullPathName.js"
import { fsOperationField } from "../utils/constants.js"

const dir = getFullPathName(import.meta.url)

const sourceDirName = dir
const destDirName = dir + "_copy"

/* 
copy.js - implement function that copies folder "files" with all its content 
into folder "files_copy" at the same level 
if files folder doesn't exists or "files_copy" has already been created 
Error with message 'FS operation failed' must be thrown 
*/

const copy = async () => {
  cp(sourceDirName, destDirName, {
    errorOnExist: true,
    force: false,
    recursive: true,
  })
    .then((val) => {
      console.log("Files copied successful!")
    })
    .catch((err) => {
      err.reason = err.message
      err.message = fsOperationField
      throw err
    })
}

await copy()
