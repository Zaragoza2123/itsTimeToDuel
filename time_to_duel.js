

class Card {
    constructor(name,cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    Effect(el) {
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
        console.log(el)
        console.log(this.name +" was played on " + el.name)
        el.resilience += this.magnitude; 
        console.log(el)
    }
}

class Unit extends Card {
    constructor(name,cost, power, resilience) {
    super(name, cost);
    this.power = power;
    this.resilience = resilience;
    }

}
//Turn 1
const red_ninja = new Unit("Red Belt Ninja", 3, 3, 4);
const effect1 = new Effect("Hard Algorithm", 2, "increase target's resilience by 2", 'resilience', +3);
effect1.Effect(red_ninja);

//Turn 2
const black_ninja = new Unit("Black Belt Ninja", 4, 5, 4);
const effect2 = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", 'resilience', -2);
effect2.Effect(red_ninja);

//Turn 3
const effect3 = new Effect('Pair Programing', 3, "increase target's power by 2", 'power', +2);
effect3.Effect(red_ninja);


