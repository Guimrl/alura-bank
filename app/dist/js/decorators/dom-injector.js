export function domInjector(seletor) {
    return function (target, propertKey) {
        const getter = function () {
            const elemento = document.querySelector(seletor);
            return elemento;
        };
    };
}
