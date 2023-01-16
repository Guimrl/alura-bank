export function inspect() {
    return function (target, propertKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const retorno = metodoOriginal.apply(this, args);
            return retorno;
        };
        return descriptor;
    };
}
//# sourceMappingURL=inspect.js.map