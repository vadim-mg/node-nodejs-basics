// create.js - implement function that creates new file fresh.txt with content I am fresh and young inside of the files folder
// if file already exists Error with message "FS operation failed" must be thrown

import { existsSync } from "node:fs"
import { writeFile } from "node:fs/promises"

import { getFullPathName } from "../utils/getFullPathName.js"
import { fsOperationField } from "../utils/constants.js"

const fileName = getFullPathName(import.meta.url, "/fresh.txt")

const create = async () => {
  if (existsSync(fileName)) {
    throw new Error(fsOperationField)
  }
  writeFile(fileName, "I am fresh and young")
}

await create()
