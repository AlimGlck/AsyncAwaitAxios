import getData from "./module.js";

(async() => {
    const sonuc = await getData(1);
    console.log(sonuc);
}) ();