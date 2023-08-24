class User{
    name: string
    birth: string
    cpf: string
    gender: string

    constructor(name: string, birth: string, cpf: string, gender: string){
        this.name = name
        this.birth = birth
        this.cpf = cpf
        this.gender = gender
    }

    equals(suspect: object){
        return suspect instanceof User
    }

    speak_name(){
        return this.name
    }
}

    const rafao = new User ('rafao', '14/10/2004', '123.234.345-56', 'undefined')
    const joao = new Number ()

    console.log(rafao.speak_name())
    console.log(rafao.equals(rafao))