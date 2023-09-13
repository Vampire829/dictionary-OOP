// class plane{
//     constructor(type, numberOfpasanger){
//         this.type =type;
//         this.numberOfpasanger =numberOfpasanger;
//     }
//     flight(){
//          console.log('Полетели!')
//       }
// }
// const planePeople = new plane('Пассажирский',180)
// planePeople.flight()

// class MilitariPlane extends plane{ //extends - указывает на родителя и берёт от-туда данные 
//     constructor(type){
//         super(type, 0) // super -берет данные у конструктора Родителя и уже с ними работает !
//         this.Gang=0
//     }
//     numberGang(Gang){
//         this.Gang = Gang
//     }
//     shoot(){
//         console.log('Стреляем!')
//     }
// }

// const mili = new MilitariPlane('militariPlane');
// mili.numberGang(4);
// mili.shoot()
// console.log(mili)

// class Developer{
//   #salaru//иницеализиция 
//     constructor(name, programinLengh){
//         this.name = name;
//         this.programinLengh= programinLengh;
//         this.#salaru = 3000;
//     }
//     get getSail(){
//       return this.#salaru;//Тут нам становиться доступен 
//     }
//     set SetSalari(salaru){
//        this.#salaru = salaru //меня параметры у salaru
//     }

//   DevelopeStartCoding(){
//      console.log(`${this.name} начинает писать код`)
//   }
//   printPrograminLength(){
//     console.log(this.#salaru)
//     console.log(`Язык програмирования ${this.programinLengh}`)
//   }
// }

// class  JuniorDeveloper extends Developer{
//     constructor(name,programinLengh){
//         super(name, programinLengh)
//     }
// }

// const developer =new Developer('Alim', 'javaScript')
// const Junior =new JuniorDeveloper('Alim', 'React.Js')
// developer.DevelopeStartCoding()
// console.log(Developer.getSail)
// console.log(Developer.SetSalari=6000)
// console.log(developer)


// class Person {
//   constructor(name, age){
//     this.name =name;
//     this.age =age;
//   }

//   compareAge(persomInit){
//     if(this.age >= persomInit.age){
//       console.log(`${this.name} Старше чем ${persomInit.name}`)
//     }else{
//       console.log(`${this.name} младще чем ${persomInit.name}`)
//     }
//   }

// }

// const person = new Person('Alim', 20);
// const person1= new Person('Daud', 22);
// const person2 = new Person('Mansur', 23);

// person.compareAge(person1)
// person2.compareAge(person)

class Dictionary{
  constructor(name){
    this.name =name;
    this.words={}
  }

  add(word,description){
    if(!this.words[word]){
      this.words[word]={
        word,
        description,
      }
    }
  }
    remove(word){
       delete this.words[word];
    }
    get(word){
      return this.words[word]
    }

    showAllWords(){
      Object.values(this.words).forEach((element)=>{
        console.log(`${element.word} - ${element.description}`);
      })
    }

  }


const dictionary = new Dictionary('Alim');
dictionary.add('js','Язык програмирования');
// dictionary.remove()
dictionary.showAllWords()
// console.log(dictionary)