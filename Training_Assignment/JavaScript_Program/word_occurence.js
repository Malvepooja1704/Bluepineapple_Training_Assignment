str = "The word pollution was derived from the Latin word pollution, which means to make dirty. Pollution is the process of making the environment pollute the water and the air by adding harmful substances. Pollution causes an imbalance in the environment. This imbalance threatened the very survival of all forms of life. It's a threat to the whole world. India ranks at the bottom of the 125 of the 132 countries in the 2012 Environmental Performance Index. This report is produced by researchers at Yale and Columbia University in association with the World Economic Forum.";
var data = str.toLowerCase().split(" ");
console.log(data);
var key = "pollution";
var count = 0;

function countOccurence(data, key) {
    for (let i = 0; i < data.length; i++) {
        if (key == data[i]) {
            count++;
        }
    }
    return count;
}
console.log("Occurence: ", countOccurence(data, key));