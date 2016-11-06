class Food {
  Fruit (name, weight) {
    console.log("new " + name + " fruit created with weight " + weight + "kg");
  }

  Vegetables (name, weight) {
    console.log("new " + name + " vegitables created with weight " + weight + "kg");
  }

  Meat (name, weight) {
    console.log("new " + name + " meat created with weight " + weight + "kg");
  }

}

class FactoryFood {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }

  makeFruit () {
    return new Food.Fruit(this.name, this.weight);
  }

  makeVegitables () {
    return new Food.Fruit(this.name, `${this.weight} specSize`);
  }

  makeMeat () {
    return new Food.Fruit(this.name, this.weight);
  }
}
