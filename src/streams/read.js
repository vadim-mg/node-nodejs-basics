/* 
implement function that reads file fileToRead.txt content 
using Readable Stream and prints it's content into process.stdout 
*/

import { open } from "fs/promises"
import { getFullPathName } from "../utils/getFullPathName.js"
const fileName = getFullPathName(import.meta.url, "/fileToRead.txt")

const read = async () => {
  open(fileName)
    .then((fd) => fd.createReadStream())
    .then((content) => {
      content.pipe(process.stdout)
    })
    .catch((err) => console.error(err))
}

await read()
