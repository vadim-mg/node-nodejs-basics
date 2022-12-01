/* 
implement function that parses environment variables with prefix RSS_ 
and prints them to the console in the format RSS_name1=value1; RSS_name2=value2
*/

const parseEnv = () => {
  const params = []
  for (const param in process.env) {
    if (param.startsWith("RSS_")) {
      params.push(`${param}=${process.env[param]}`)
    }
  }
  console.log(params.join('; '))
}

parseEnv()
