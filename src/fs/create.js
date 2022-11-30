import { existsSync } from "node:fs"
import { writeFile } from "node:fs/promises"
import { fileURLToPath } from "node:url"

const fileName = fileURLToPath(import.meta.url)

// create.js - implement function that creates new file fresh.txt with content I am fresh and young inside of the files folder
const create = async () => {
  if (existsSync(fileName)) {
    // if file already exists Error with message "FS operation failed" must be thrown
    throw new Error("FS operation failed")
  }
  writeFile(fileName, "I am fresh and young")
}

await create()
