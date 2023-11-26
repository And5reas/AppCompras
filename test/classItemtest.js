class User {
    static currentNUM = 0;
    constructor(sla) {
        this.num = sla
        this.increment()
    }
    increment(){
        User.currentNUM += this.num
    }

    static getCurrentUser() {
        return User.currentNUM;   
    }
}

const oi = new User(10)
const rt = new User(10)
const we = new User(10)
const qw = new User(10)
const oii = new User(10)

console.log(oi.num)

console.log(User.getCurrentUser());