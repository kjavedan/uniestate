import Button from "~/components/button";
import Image from "~/components/Image/";
import img1 from "~/assets/images/2.jpeg";
import img2 from "~/assets/images/1.jpeg";
import img3 from "~/assets/images/3.jpeg";
import img4 from "~/assets/images/4.jpeg";
import img5 from "~/assets/images/5.jpeg";
import img6 from "~/assets/images/6.jpeg";
import img7 from "~/assets/images/7.jpeg";
import img8 from "~/assets/images/8.jpeg";
import img9 from "~/assets/images/9.jpeg";
import img10 from "~/assets/images/10.jpeg";
import img11 from "~/assets/images/11.jpeg";
import img12 from "~/assets/images/12.jpeg";
import img13 from "~/assets/images/13.jpeg";
import img14 from "~/assets/images/14.jpeg";
import img15 from "~/assets/images/15.jpeg";
import img16 from "~/assets/images/16.jpeg";
import img17 from "~/assets/images/17.jpeg";
import img18 from "~/assets/images/18.jpeg";
import img19 from "~/assets/images/19.jpeg";
import img20 from "~/assets/images/20.jpeg";
import img21 from "~/assets/images/21.jpeg";
import img22 from "~/assets/images/22.jpeg";
import img23 from "~/assets/images/23.jpeg";
import img24 from "~/assets/images/24.jpeg";
import img25 from "~/assets/images/25.jpeg";
import img26 from "~/assets/images/buy.jpg";
import img28 from "~/assets/images/rent.jpg";
import img29 from "~/assets/images/projects.jpg";
import img30 from "~/assets/images/grid_1.jpeg";
import img31 from "~/assets/images/grid_2.jpg";
import img32 from "~/assets/images/grid_3.jpg";
import img33 from "~/assets/images/grid_4.jpg";

const imgOptions = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
];

const items = Array.from({ length: 32 }, (_, index) => {
    const buildingNames = ["Royal Residence", "Palm Tower", "Marina Heights", "Golden Sands", "Pearl Tower"];
    const streetNames = ["Al Maktoum Street", "Sheikh Zayed Road", "Al Khan Street", "Al Wasl Road", "Al Rigga Street"];
    const areas = ["Jumeirah", "Downtown Dubai", "Al Barsha", "Al Nahda", "Dubai Marina", "Al Majaz"];

    const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

    const title = `${getRandomItem(buildingNames)} Building`;
    const address = `Street ${getRandomItem(streetNames)}, ${getRandomItem(areas)}, ${getRandomItem(["Dubai", "Ajman", "Sharjah"])}`;
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    const locationLink = `https://www.google.com/maps?q=${Math.random() * 90 - 45},${Math.random() * 180 - 90}`;
    const locationCity = getRandomItem(["dubai", "ajman", "sharjah"]);
    const startingPrice = Math.floor(Math.random() * 5000000) + 100000;
    const propertyCover = imgOptions[index % imgOptions.length];

    // Generate a random number of images for propertyImages
    const numImages = Math.floor(Math.random() * 3) + 5;

    // Create an array to store unique image indices
    const uniqueImageIndices = new Set();

    // Fill the uniqueImageIndices array with random unique indices
    while (uniqueImageIndices.size < numImages) {
        uniqueImageIndices.add(Math.floor(Math.random() * imgOptions.length));
    }

    // Convert the Set to an array of image paths
    const propertyImages = Array.from(uniqueImageIndices).map((i) => imgOptions[i + 1]);

    const flatType = Math.random() < 0.5 ? "apartment" : "villa";
    const roomCount = Math.floor(Math.random() * 6);

    return {
        id: index,
        title,
        address,
        description,
        locationLink,
        locationCity,
        startingPrice,
        propertyCover,
        propertyImages,
        flatType,
        roomCount,
    };
});

export default items;

