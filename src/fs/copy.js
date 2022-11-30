import { dirname } from "node:path"
import { fileURLToPath } from "node:url"
import { cp } from "node:fs/promises"

const fileName = fileURLToPath(import.meta.url)
const dir = dirname(fileName)
const sourceDirName = dir + "/files"
const destDirName = dir + "/files_copy"

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
      err.message = "FS operation failed"
      throw err
    })
}

copy()
