class Toy {
    constructor(name, price, age, rating, image){
        this.name = name;
        this.price = price;
        this.age = age;
        this.rating = rating;
        this.image = image;
    }

    getDetails() {
        return `${this.name} ${this.price} ${this.age} ${this.rating}`;
    }

    getToyItem() {
        const sectionOne = document.createElement("section");
        sectionOne.classList.add("toy-box");

        const img = document.createElement("img");
        sectionOne.append(img);
        img.src = this.image;

        const information = document.createElement("section");
        const h3 = document.createElement("h3");
        const price = document.createElement("p");
        const age = document.createElement("p");
        const rating = document.createElement("p");
        h3.innerHTML = this.name;
        price.innerHTML = this.price;
        age.innerHTML = this.age;
        rating.innerHTML = this.rating;
        information.append(h3);
        information.append(price);
        information.append(age);
        information.append(rating);
        information.classList.add("hidden");
        information.classList.add("positioning");
        
        sectionOne.append(information);

        sectionOne.onmouseover = () => {
            img.classList.add("changeOpacity");
            information.classList.remove("hidden");
        }
        sectionOne.onmouseout = () => {
           img.classList.remove("changeOpacity");
           information.classList.add("hidden");
        }
        return sectionOne;
    }
}

const showToys = () => {
    
    const toys = [];
    toys.push(new Toy("Little Tikes", "Price: $53.99", "Age Range: 3+", "Rating: 4.3 stars", "images/littletikes.webp"));
    toys.push(new Toy("Lightsaber", "Price: $34.99", "Age Range: 5+", "Rating: 2.4 stars", "images/lightsaber.jpg"));
    toys.push(new Toy("UCL Ball", "Price: $84.99", "Age Range: 3+", "Rating: 4.8 stars", "images/ball.avif"));
    toys.push(new Toy("Buzz Lightyear", "Price: $28.99", "Age Range: 5+", "Rating: 3.7 stars", "images/lightyear.jpg"));
    toys.push(new Toy("Yoda Plush", "Price: $37.99", "Age Range: 1+", "Rating: 4.3 stars", "images/yoda.jpg"));
    toys.push(new Toy("Wall-E RC Robot", "Price: $45.99", "Age Range: 7+", "Rating: 3.8 stars", "images/wall-e.jpg"));

    const mainSection = document.getElementById("main");
    toys.forEach(toy => {
        mainSection.append(toy.getToyItem());
    });
}

window.onload = () => {
    showToys();
}