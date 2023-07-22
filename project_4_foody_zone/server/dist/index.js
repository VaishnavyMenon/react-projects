"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "../public/images")));
app.get("/", (req, res) => {
    console.log(path_1.default.join(__dirname, "../public"));
    const foodData = [
        {
            name: "Boiled Egg",
            price: 10,
            text: " Hard-boiled eggs are cooked so that the egg white and egg yolk both solidify, while soft-boiled eggs may leave the yolk, and sometimes the white, at least partially liquid and raw.",
            image: "/images/egg.png",
            type: "breakfast",
        },
        {
            name: "RAMEN",
            price: 25,
            text: "Ramen consists of Chinese-style wheat noodles served in a broth.",
            image: "/images/ramen.png",
            type: "lunch",
        },
        {
            name: "GRILLED CHICKEN",
            price: 45,
            text: "Infuses the chicken with a smoky flavor from the meat juices that drip during the grilling process.",
            image: "/images/chicken.png",
            type: "dinner",
        },
        {
            name: "STRAWBERRY CAKE",
            price: 18,
            text: "Packed with strawberry flavors and a gorgeous shade of pink, this cake is perfect for any occasion. No box mix or Jell-O in this cake!",
            image: "/images/cake.png",
            type: "breakfast",
        },
        {
            name: "BURGER",
            price: 23,
            text: "burger with sinfully oozing cheesy patty and Flame Grilled Chicken patty, loaded with Roasted Chipotle sauce, shredded Onions, Jalapenos & lettuce, layered between freshly toasted Buns.",
            image: "/images/burger.png",
            type: "lunch",
        },
        {
            name: "PANCAKE",
            price: 25,
            text: "flat cake prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter.",
            image: "/images/pancake.png",
            type: "dinner",
        },
        
    ];
    res.json(foodData);
});
app.listen(9000, () => {
    console.log("Server is running on port 9000");
});
//# sourceMappingURL=index.js.map