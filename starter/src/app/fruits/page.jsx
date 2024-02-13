import React from 'react'
import FruitCat from './FruitCart'
import Image from 'next/image'


export const fruits = [
    { name: "pears", 
    description: ["Pears are sweet and juicy, making them a great choice for fresh snacks.", "They pair wonderfully with cheese and salads.", "Pears offer a delightful combination of sweetness and a touch of grittiness in every bite."], 
    type: "Core",
    price: 2.29, 
    visual: <Image src = {`/imgs/pear2.jpeg`} alt = "pears" 
    width =  {250} height = {0} /> },


    { name: "grapes", 
    description: ["Grapes are small and sweet, making them a delightful snack option.", "They can be enjoyed on their own or added to cheese platters.", "Grapes are a convenient and healthy choice for those looking for a quick and tasty treat."], 
    type: "Berries",
    price: 1.49, 
    visual: <Image src = {`/imgs/grapes.jpeg`} alt = "grapes" 
    width =  {250} height = {0} /> },


    { name: "guavas", 
    description: ["Guavas are sweet and tropical, enjoyed fresh or in smoothies.", "They are a great source of vitamin C and bring a burst of exotic flavor to your palate.", "Guavas are a delightful tropical treat for those seeking a taste of the tropics."], type: "Tropical Fruits",
    price: 3.99, 
    visual: <Image src = {`/imgs/guava.jpeg`} alt = "guavas" 
    width =  {300} height = {0} /> },


    { name: "limes", 
    description: ["Limes are tangy and essential for cocktails and cooking.", "They add a zesty and refreshing flavor to both beverages and dishes.", "Limes are a must-have for anyone looking to elevate their culinary creations."], 
    type: "Citrus Fruits",
    price: 1.49, 
    visual: <Image src = {`/imgs/lime.jpeg`} alt = "limes" 
    width =  {250} height = {0} /> },


    { name: "apricots", 
    description: ["Apricots are sweet and slightly tangy, making them perfect for jams and preserves.", "They can also be enjoyed fresh or dried as a healthy snack.", "Apricots bring a touch of sunshine to your palate."], 
    type: "Pits",
    price: 2.49, 
    visual: <Image src = {`/imgs/apricotes.jpeg`} alt = "apricots" 
    width =  {400} height = {0} /> },


    { name: "cantaloupe", 
    description: ["Cantaloupe is sweet and aromatic, perfect for fruit salads.", "This melon offers a burst of tropical flavor and pairs wonderfully with other fruits.", "Cantaloupe is a refreshing addition to your summertime gatherings."], 
    type: "Melons",
    price: 3.99, 
    visual: <Image src = {`/imgs/cantaloupe.jpeg`} alt = "cantaloupe" 
    width =  {400} height = {300} /> },


    { name: "watermelon", 
    description: ["Watermelon is juicy and hydrating, perfect for picnics.", "It's a classic choice for summer gatherings and can be enjoyed in various forms.", "Watermelon adds a burst of refreshment to your outdoor activities."], 
    type: "Melons",
    price: 1.99, 
    visual: <Image src = {`/imgs/watermelon.jpeg`} alt = "watermelon" 
    width =  {250} height = {300} /> },


    { name: "figs", 
    description: ["Figs are sweet and seedy, great for desserts and preserves.", "They have a unique texture and flavor that pairs wonderfully with cheese and honey.", "Figs are a gourmet choice for those looking to elevate their culinary experiences."], 
    type: "Tropical Fruits",
    price: 3.29, 
    visual: <Image src = {`/imgs/fig.jpeg`} alt = "figs" 
    width =  {400} height = {300} /> },


    { name: "dates", 
    description: ["Dates are sweet and chewy, ideal for snacking or baking.", "They are a natural source of sweetness and can be stuffed with various ingredients.", "Dates are a nutritious and delicious addition to your diet."], 
    type: "Tropical Fruits",
    price: 2.79, 
    visual: <Image src = {`/imgs/dates.jpeg`} alt = "dates fruit" 
    width =  {300} height = {300} /> },


    { name: "mangoes", 
    description: ["Mangoes are sweet and juicy, perfect for salsas and desserts.", "They are a tropical delight with a distinctive flavor and fragrance.", "Mangoes add a touch of the exotic to your culinary adventures."], 
    type: "Tropical Fruits",
    price: 2.99, 
    visual: <Image src = {`/imgs/mango.jpeg`} alt = "mango" 
    width =  {300} height = {300} /> },


    { name: "blueberries", 
    description: ["Blueberries are not only sweet but incredibly versatile.", "They are perfect for snacking and also ideal for baking, whether in muffins, pancakes, or pies.", "These little blue fruits are packed with antioxidants and bring a burst of flavor to your snacks and desserts."], 
    type: "Berries",
    price: 3.49, 
    visual: <Image src = {`/imgs/blueberry.jpeg`} alt = "blueberries" 
    width =  {400} height = {300} /> },


    { name: "oranges", 
    description: ["Oranges are juicy and packed with vitamin C, making them great for juicing.", "They add a burst of citrus flavor to your morning routine.", "Oranges are not only refreshing but also a nutritious choice."], 
    type: "Citrus Fruits",
    price: 1.99, 
    visual: <Image src = {`/imgs/orange.jpeg`} alt = "orange" 
    width =  {300} height = {200} /> },


    { name: "coconut", 
    description: ["Coconut is rich and tropical, used in both sweet and savory dishes.", "It's a staple in many tropical cuisines and adds a unique flavor to your recipes.", "Coconut is a versatile ingredient for those looking to explore exotic tastes."], 
    type: "Tropical Fruits",
    price: 3.49, 
    visual: <Image src = {`/imgs/coconut.jpeg`} alt = "coconut" 
    width =  {300} height = {300} /> },


    { name: "strawberries",
    description: ["Strawberries are juicy and versatile, making them ideal for a wide range of desserts.", "They pair wonderfully with chocolate, cream, and other fruits.", "Whether you're making a strawberry shortcake or adding them to your morning breakfast, they are a crowd-pleaser."], 
    type: "Berries",
    price: 2.79, 
     visual: <Image src = {`/imgs/strawberry.jpeg`} alt = "strawberry" 
     width =  {300} height = {300} /> },


    { name: "red raspberries", 
    description: ["Red raspberries are known for their delicate and sweet taste.", "They are perfect for fresh consumption and can be enjoyed on their own or added to various desserts.", "These vibrant berries add a touch of elegance to your culinary creations."], 
    type: "Berries", 
    price: 4.29, 
    visual: <Image src = {`/imgs/raspberry.jpeg`} alt = "raspberries" 
    width =  {300} height = {300} />},
    

    { name: "bananas", 
    description: ["Bananas are sweet and portable, perfect for snacking.", "They are a convenient source of energy and can be enjoyed on the go"], 
    type: "Tropical Fruits",
    price: 0.99, 
    visual: <Image src = {`/imgs/banana.jpeg`} alt = "banana" 
    width =  {400} height = {200} />}] 


export default function Fruits() {
  return (
    <div>
      <FruitCat fruits = {fruits}/>
    </div>
  )
}
