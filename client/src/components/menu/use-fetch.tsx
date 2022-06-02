const kerdez  = (() => {

    return {
        question: async () => {
            const res = await fetch('http://localhost:8080/cars');
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