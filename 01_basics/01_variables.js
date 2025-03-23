const accountId =26336647
let accountEmail ="shivansh@google.com"
var accountPassword = "23456"
accountCity = "gorakhpur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "sh@hs.com"
accountPassword = "2121221"
accountCity = "Bengluru"

console.log(accountId)

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
Prefer not to var because of issue in block and functional scope
*/