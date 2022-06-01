
import * as React from "react";
 

const kerdez  = (() => {

    return {
        question: async () => {
            const res = await fetch("https://www.boredapi.com/api/activity");
            console.log(res);
            return res.json();

        }
    };
})();

const kattint = () => {
    kerdez.question().then((data) => {
        console.log(data);     
    });
};

export default kattint;