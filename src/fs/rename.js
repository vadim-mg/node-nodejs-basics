import fs from "node:fs/promises"
import { existsSync } from "node:fs"

import { getFullPathName } from "../utils/getFullPathName.js"
import { fsOperationField } from "../utils/constants.js"

const dir = getFullPathName(import.meta.url)
const sourcefileName = dir + "/wrongFilename.txt"
const destFileName = dir + "/properFilename.md"

/**
//  rename.js - implement function that renames file "wrongFilename.txt" to "properFilename.md" 
//    (if there's no file "wrongFilename.txt" or "properFilename.md" already exists 
//    Error with message "FS operation failed" must be thrown)
 */
const rename = async () => {
  if (existsSync(destFileName)) {
    const error = new Error(fsOperationField)
    error.reason = "Destination file is already exist"
    throw error
  }

  fs.rename(sourcefileName, destFileName)
    .then((val) => {
      console.log("File was renamed successfuly!")
    })
    .catch((err) => {
      err.reason = err.message
      err.message = fsOperationField
      throw err
    })
}

await rename()
