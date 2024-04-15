let userName= prompt("Enter your username")
let lastName= prompt()
const age= "31 años"
const email="sariass077@gmail.com"
let adress="calle 54B #78-128"
let phoneNumber="3116112981"

console.log("Nombre: " + userName + " " +lastName+ " - Edad: " +age+ " - Email: " +email+ " - Dirección: " +adress+ " -Número de telefono: " +phoneNumber)
console.warn("Nombre:" , userName , lastName , "- Edad: " , age , "- Correo: " , email , "-Dirección: " , adress , "-Número de telefono: " , phoneNumber)
console.error(`Nombre: ${userName} ${lastName} - Edad: ${age} - Correo: ${email} -Dirección: ${adress} -Número de teléfono: ${phoneNumber}`) 

//console.log(`%c${phone}`, "background-color: #D9CEFF; border-radius: 50px; font-weight: bold; padding-top: 5px; padding-right: 8px; padding-bottom: 5px; padding-left: 8px;");

console.group("Data basic information")

console.info("User Name:" + userName)
console.warn("Last Name:" + lastName)
console.error("Age:" + age) 

console.groupEnd()


console.group("Data basic contact information")

console.info("email:" + email)
console.warn("adress:" + adress)
console.error("phone:" + phoneNumber)

console.groupEnd()


listCodersGates=["lupe ortìz", "mario zapata", "pedro cano"]

console.table(listCodersGates)