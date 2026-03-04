import Operacao from "./Operacao";

export default class Radiacao extends Operacao {
    public calcular(x: number): number {
        return x ** 0.5;
    }
}