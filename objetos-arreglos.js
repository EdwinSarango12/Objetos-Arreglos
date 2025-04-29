
// Taller 4 

// Objetos
// Variable de tipo compuesto que permite almacenar varios datos (clave-valor).
let user = {
    name: "Elkin",
    lastName: "Diaz",
    age:21,
    email: "elkin04diaz@gmail.com",
    address: {
        city: "Sangolquí",
        telephone: "0967767162",
        seguidores: 860,
        seguidos:8

    },

    password: "Ejdc0902",
}

user.image = "fotoElkin.png"
delete user.password
console.log(user);



//ES6 - desetructuración
console.log(user.name);
console.log(user.seguidores);
console.log(address.city)

let {name,lastName:apellido, age, email, address, image} = user

console.log(name);
console.log(seguidores);
console.log(seguido);
console.log(image);

const friends = {
    activity: true,
    friendslist: ['Nikol Tipan','Henry Espinosa'],
    sendMail(){
        return `Send mail to ${this.friendslist[0]}`
    }
}
console.log(friends.sendMail());
const allInformation = {...user, message: "/n Sus amigos son:", ...friends}
console.log(allInformation);
console.log(Object.values(user).includes(""));





//Funciones
//Conjunto de pasos para realizar una tarea específica.

//Función declarada
function validaterUser (){
    console.log("Si es amigo de Elkin");
    
}

//Función expresada
 const validateConexion = function (){
    console.log("Usuario Conectado");
    
}
//ES6 - Función flecha
const validateMetaSeguidores = () =>{
    console.log("Haz alcanzado los 1000 seguidores");
    
}

// Rest operator vs Spread operator
//Parametros pro defecto
const finalPrice = function({a=21,b},...rest){
    console.log(a,b,rest);
    
}

finalPrice({b:20},19)

//Return 

function typeOfReturn (){
    //return 1727660902
    //return true
    //return 'Elkin'
    //return ['Nikol Tipan','Henry Espinosa']
    //return {
    //    city: "Sangolquí",
    //    country: "Ecuador"
    //}
    return function(){
        console.log("Elkin, 860 seguidores, 8 seguidos");
    }
}
let result = typeOfReturn()
result();

