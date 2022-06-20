v
// // function Sum(a) {
// //     this.blank = a
// // }
// // let newobject = new Sum('hk')
// // Sum.prototype.hello = function () {
// //     console.log('Hello world ')
// // }
// // let sum = 0
// // function AddnewOne(arr) {
// //     this.array = arr

// // }
// // const sumofarray = new AddnewOne([10, 20, 40, 40]);
// // AddnewOne.prototype.sumofnumber = function () {

// //     for (i = 0; i <sumofarray.array.length; i++) {
// //         sum += sumofarray.array[i]
// //     }
// //     console.log(sum)
// // }



// // function Userdetails(Name, surname, fatherName, age) {
// //     this.firstname = Name
// //     this.surname = surname
// //     this.age = age
// //     this.fatherName = fatherName

// // }
// // Userdetails.prototype.fullName = function () {
// //     console.log(this.firstname + ' ' + this.surname)
// // }
// // AddnewOne.prototype.__proto__ = Object.create(Sum.prototype)
// // Userdetails.prototype.__proto__ = Object.create(AddnewOne.prototype)

// // const object = new Userdetails('darshit', 'tarapara', 'alpeshbhai', 21)


// // console.log(object.sumofnumber())



// //Using class//
// let store = []
// // const Add_number = []
// // const give_output = (num) => {
// //     let btnvalue = document.getElementsByTagName('button').value
// //     Add_number.push(btnvalue[num])
// //     console.log(Add_number)

// // }


// // let c = document.getElementById('result');
// // class Person {

// //     sum(a, b) {
// //         return a + b
// //     }
// //     multiple(a, b) {
// //         return a * b
// //     }
// //     division(a, b) {
// //         return a / b
// //     }
// //     sub(a, b) {
// //         return a - b
// //     }


// // }

// // function sign(signvalue) {

// //     let operation = document.getElementsByClassName('operation')[signvalue].value
// //     let store = [operation]
// //     localStorage.setItem('SaveSign', store)
// // }
// // function userclick() {
// //     let object = localStorage.getItem('SaveSign')
// //     let a = document.getElementById('num-1').value
// //     let b = document.getElementById('num-2').value
// //     a = Math.floor(a)
// //     b = Math.floor(b)
// //     let firstobject = new Person()
// //     if (object == "+") {
// //         c.value = firstobject.sum(a, b)
// //     }
// //     else if (object == "-") {
// //         c.value = firstobject.sub(a, b)
// //     }
// //     else if (object == "*") {
// //         c.value = firstobject.multiple(a, b)
// //     }
// //     else if (object == "/") {
// //         c.value = firstobject.division(a, b)
// //     }

// // }
// // function storevalue() {
// //     let btn_1 = document.getElementsById('num-1');
// //     let btn_2 = document.getElementsById('num-2');
// //     store.push(btn_1, btn_2)
// //     return store
// // }



// class Userdetails {
//     constructor(Name, age, job, id, join_date) {
//         this.Name = Name
//         this.age = age
//         this.job = job
//         this.id = id
//         this.salary = this.salarys()
//         this.joining_date = join_date
//     }
//     salarys() {
// //         if (this.job == 'sofware development') {
// //             return this.salary = '50000'
// //         }
// //         else if (this.job == 'web development') {
// //             return this.salary = '40000'
// //         }
// //         else if (this.job == 'flutter') {
// //             return this.salary = '30000'
// //         }
// //         else if (this.job == 'React js') {
// //             return this.salary = '70000'
// //         }

// //     }
// // }
// // let stores = []
// // let em_id = 1
// // let em1;
// // function adduserinformation() {
// //     let result = userdata()
// //     result.map((ele) => {
// //         em1 = new Userdetails(ele.name, ele.age, ele.job, em_id, ele.date)

// //     })
// //     em_id++
// //     localStorage.setItem('employer-details', JSON.stringify(em1))


// // }


// // function jobtitle(a) {
// //     let job = document.getElementsByClassName('job')[a].value
// //     localStorage.setItem('jobname', job)

// // }
// // function userdata(a) {
// //     let job = localStorage.getItem('jobname')
// //     let name = document.getElementById('name').value
// //     let age = document.getElementById('age').value
// //     let date = document.getElementById('date').value

// //     if (age.length > 2) {

// //     }
// //     const object = {
// //         name, age, job, date
// //     }
// //     stores.push(object)
// //     return stores
// // }
// // // let days;
// // // class worker {
// // //     constructor(name, salary, present, month, position) {
// // // //         this.name = name
// // // //         this.salary = salary
// // // //         this.present = present
// // // //         this.month = month
// // // //         this.position = position
// // // //         this.obtainsalary = this.countsalary()
// // // //     }

// // // //     countsalary() {
// // // //         if (this.month == 'jan' || this.month == 'mar' || this.month == 'may' || this.month == 'july' || this.month == 'sep' || this.month == 'oct' || this.month == 'nov' || this.month == 'dec') {
// // // //             days = 31

// // // //         }
// // // //         else if (this.month == 'april' || this.month == 'jun') {
// // // //             days = 30

// // // //         }

// // // //         else {
// // // //             days = 28;

// // // //         }

// // // //         let perdaycut = 400;
// // // //         let cutsalary = (days - this.present) * perdaycut;

// // // //         let obtainsalary = this.salary - cutsalary
// // // //         return Math.round(obtainsalary)
// // // //     }

// // // // }
// // // // const supervisor = new worker('Mukesh', 20000, 25, "jan", "supervisor");
// // // // const manager = new worker('Manoj', 40000, 24, "jan", "Manager");
// // // // console.log(manager)
// // // // //Count user salary so we can need to factore that first it take total salary 
// // // // //then we divide into day than substitude from total amount
// // // // //public and private
// // // // const obj = {
// // // //     a: 23,
// // // //     b: 11,
// // // //     getsum(a, b) {
// // // //         return a + b
// // // //     },
// // // //     getmultiple(a, b) {
// // // //         return a * b
// // // //     }
// // // // }

// // // // class publices {

// // // //     constructor(a) {
// // // //         this.name = a
// // // //     }
// // // //     getName() {
// // // //         console.log(this.name)
// // // //     }
// // // // }

// // // // class subchlid extends publices {

// // // // }

// // // // class subcomponets extends subchlid {
// // // //     sayhello() {
// // // //         console.log('Hello js')
// // // //     }
// // // // }
// // // // Object.assign(publices.prototype, obj)
// // // // const publicobj = new publices('darshit');

// // // // const childobj = new subchlid()
// // // // const subchildibj = new subcomponets()
// // // // console.log(subchildibj)








// // // //i make object for honda car
// // // //honda manufacturing two wheel and four wheel

// // // function Crete_object(model, brand, color, ram, Storage) {
// // //     return {
// // //         model,
// // //         brand,
// // //         color,
// // //         ram, Storage
// // //     }

// // // }
// // // const obj_1 = Crete_object('One Plus node ce', "oneplus", 'grey', 6, 128);
// // // console.log(obj_1)



// // // //circule//array sum//triangle

// // // class MathClass {
// // //     constructor(radius, length, width) {
// // //         this.radius = radius
// // //         this.length = length
// // //         this.width = width
// // //         this.array = [12, 4, 12, 43, 44, 23]
// // //     }
// // //     triangle() {

// // //         return this.length * this.width
// // //     }
// // //     circule() {
// // //         return Math.PI * this.radius
// // //     }
// // //     eligibleage() {
// // //         for (let sum of this.array) {
// // //             this.array[0] += sum
// // //         }
// // //         return this.array[0]
// // //     }
// // // }

// // // const area_1 = new MathClass(23, 22, 111);
// // // console.log(area_1.eligibleage())


// // let clear;


// // function CreateObj(name, age, fathername, surname) {
// //     this.name = name
// //     this.age = age
// //     this.surname = surname
// //     this.fathername = fathername


// // }
// // const newobj = new CreateObj('darshit', 22, 'alpeshbhai', 'tarapara');
// // const newobj_2 = new CreateObj('yesha', 18, 'alpeshbhai', 'tarapara');
// // const newobj_3 = new CreateObj('raj', 23, 'jigneshbhai', 'tarapara');
// // CreateObj.prototype.getfullname = function () {
// //     return (this.name + ' ' + this.fathername + ' ' + this.surname)
// // }

// // console.log(newobj)

// // console.log(newobj_2)
// // console.log(newobj_3.getfullname())

// // // const circle1 = new Function('Name', `
// // // this.Name = Name

// // // `);

// class Userdetails {
//     constructor(name, age, native, fathername, surname) {

//         this.name = name
//         this.age = age
//         this.native = native
//         this.fathername = fathername
//         this.surname = surname
//     }
//     getfullname() {
//         return (this.name + ' ' + this.fathername + ' ' + this.surname)
//     }


//     Userdetailss() {
//         const details = {
//             name: this.name,
//             age: this.age,
//             native: this.native,
//             fathername: this.fathername,
//             surname: this.surname
//         }
//         return (
//             details
//         )
//     }

// }

// class Maruti extends Userdetails {

//     constructor(model, color, engine, Navigation, name, age, native, fathername, surname) {

//         super(name, age, native, fathername, surname);

//         this.model = model;
//         this.color = color;
//         this.engine = engine;
//         this.Navigation = Navigation;
//         this.price = this.Priceofcar();
//         this.count = 0
//     }


//     Priceofcar() {
//         if (this.engine > 500 && this.engine < 1000) {
//             return 300000
//         }
//         else if (this.engine > 1000 && this.engine < 1400) {
//             return 8000000
//         }

//     }
//     Thankyou() {
//         return (
//             'Congraulation  ' + this.getfullname()
//         )
//     }
//     checkcount() {

//         clear = setInterval(() => {
//             this.count += 1
//             console.log(this.count)
//             //  For ClearINTERVAL
//             this.stopcount()
//         }, 300)


//     }
//     stopcount() {
//         if (this.count > 600) {
//             clearInterval(clear)
//         }
//     }
// }
// const BMW_1 = new Maruti('i4', 'black', 1200, 'Availble', 'Darshit', 22, 'Rajula', 'Alpeshbhai', 'Tarapara');
// const BMW_2 = new Maruti('M2', 'Grey', 900, 'Availble', 'himani', 30, 'Mahuva', 'manojbhai', 'shah');
// Maruti.prototype.welcome = function () {
//     return ("Weclome to Bmw showroom")
// }

// console.log(BMW_2.welcome());

// const Carprice = function () {
//     console.log(
//         `you pay : INR ${this.price}`
//     )
// }
// Carprice.call(BMW_1)
// console.log(BMW_1)
// // const first_onj = {
// //     name: 'darshit',
// //     surname: 'Tarapara',

// // }
// let fullname = function (hometown) {
//     return (this.name + ' ' + this.surname + ' ' + "from " + hometown)
// }



// const second_obj = {
//     name: 'yesha',
//     surname: 'Tarapara',
// }

// function Alone() {
//     let life = null

//     let feel = 100000 + 'lonely'
//     let friend = 'no one'
//     let life_partner = 'No one care me just talk somedays and after they will be gone without any reason'
//     let god = 'nothing do '
//     alert(`my life ${life} and i ${feel} like ${friend} my friend and life partneer ${life_partner} and king of world ${god}`)

// }
// Alone()

// // const second = fullname.bind(second_obj, 'rajula');

// // console.log(second())



// // Function.prototype.mybind = function (hometown, ...arr) {
// //     // let obj = this
// //     return () => {
// //         console.log(this.call(arr[0]) + hometown);

// //     }
// // }
// // let printname = fullname.mybind('rajula', second_obj)
// // console.log(printname())


// // function Oneplus(model, price, Ram, An_version, Camera) {
// //     this.model = 'One Plus ' + model
// //     this.price = 'INR ' + price
// //     this.Ram = Ram
// //     this.version = An_version
// //     this.Camera = Camera + "Mp"
// //     this.Rom = ''

// // }

// // const Node1 = new Oneplus('Node ce5g', 25000, 6, 11, 16);
// // const Node2 = new Oneplus('9', 37899, 8, 11, 18);
// // const Node3 = new Oneplus('Node CE2', 20000, 6, 10, 12);
// // const Node4 = new Oneplus('9R 5G', 32599, 12, 11, 18);






// const fulldes = function () {

//     console.log(`Your phone price is ${this.price}`);
// }
// const one = fulldes.bind(Node4)
// console.log(one())
// console.log(Node1)
// fulldes.call(Node2, 120)
// fulldes.call(Node3, 100)

const savecolor = ['red', 'blue', 'pink', 'YellowGreen', 'black', 'orange', 'green', 'aqua', 'dimgrey', 'wheat', 'AliceBlue', 'CadetBlue', 'Chocolate', 'DarkSalmon', 'GhostWhite', 'MintCream', 'MidnightBlue', "Sienna", 'PowderBlue', 'Violet', 'yellow', 'gold', 'palevioletred', 'beige', "mediumspringgreen", "lawngreen", "lightpink", "tomato", "thistle", "coral", "rebeccapurple", "darkkhaki", "antiquewhite", "crimson", "moccasin", "fuchsia", "deepskyblue", "darkorange", "lightblue", "mediumspringgreen", "lawngreen"]



let a = 0;
let clear;
let reverse;
const body = document.getElementById('body');
const display = document.getElementById('get')
document.getElementById('start_btn').addEventListener('click', () => {
    clearInterval(reverse)
    clear = setInterval(() => {
        if (a > savecolor.length) {
            a = 0
        }

        body.style.background = savecolor[a];
        let color = body.style.background
        if (color == 'mintcream' || color == 'ghostwhite' || color == 'aliceblue') {

            display.style.color = 'black'
            display.innerHTML = body.style.background
        }
        else {
            display.style.color = 'white'
            display.innerHTML = body.style.background
        }


        a++
    }, 1000);
})
//reverse
document.getElementById('reverse_btn').addEventListener('click', () => {
    clearInterval(clear)
    reverse = setInterval(() => {
        if (a < 0) {
            a = savecolor.length - 1
        }
        if (a > savecolor.length) {
            a = 0
        }
        body.style.background = savecolor[a];
        let color = body.style.background
        if (color == 'mintcream' || color == 'ghostwhite' || color == 'aliceblue') {

            display.style.color = 'black'
            display.innerHTML = body.style.background
        }
        else {
            display.style.color = 'white'
            display.innerHTML = body.style.background
        }


        a--
    }, 1000);
})

document.getElementById('stop_btn').addEventListener('click', () => {

    clearInterval(clear);
    clearInterval(reverse)
})

