export function domInjector(seletor: string) {
    return function(target: any, propertKey: string) {
        
        const getter = function () {
            const elemento = document.querySelector(seletor);
            return elemento;
        }

        Object.defineProperty(target, propertKey, {
            get: getter
        });
    }
}
