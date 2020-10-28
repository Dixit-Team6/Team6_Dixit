

exports.shuffle = function (a) {​​

    for (let i = a.length - 1; i > 0; i--) {​​

        const j = Math.floor(Math.random() * (i + 1));

        [a[i], a[j]] = [a[j], a[i]];

    }​​

    return a;

}​​

// reference : https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm