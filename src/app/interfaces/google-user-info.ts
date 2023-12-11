export interface GoogleUserInfo {
  info: {
    sub: string,
    email: string,
    name: string,
    picture: string,
  }
}

// {"info":{
//   "iss":"https://accounts.google.com",
//   "azp":"529904203616-rpd70g5dqapdh57aptbk01k6tkmgsppk.apps.googleusercontent.com",
//   "aud":"529904203616-rpd70g5dqapdh57aptbk01k6tkmgsppk.apps.googleusercontent.com",
//   "sub":"113546026294785602990",
//   "email":"sliferhunter8@gmail.com",
//   "email_verified":true,
//   "at_hash":"G4b0jgkGWr1S3em0mGxrgw",
//   "nonce":"QVZfeXQxcWtKYllqcTd2Rm4ta2FCcDZtNWxwQTNPbE9BbmltNjUzaW5nYUNv",
//   "nbf":1702247911,
//   "name":"Slifer Hunter",
//   "picture":"https://lh3.googleusercontent.com/a/ACg8ocJ8UMD14x9AJF5_NuSJgZx_JxQnqIsUFev9x-VBrSop=s96-c",
//   "given_name":"Slifer",
//   "family_name":"Hunter",
//   "locale":"es-419",
//   "iat":1702248211,
//   "exp":1702251811,
//   "jti":"06ff592725287c9c1b0ba4fc27217723057ac375"
// }}