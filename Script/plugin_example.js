let appName = $persistentStore.read("appName")
let author = $persistentStore.read("author")
let appType = $persistentStore.read("appType")
let price = $persistentStore.read("price")
console.log(appName + " " + author +  " " + appType +  " " + price)
$done()