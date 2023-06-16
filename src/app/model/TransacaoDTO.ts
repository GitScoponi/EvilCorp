export class TransacaoDTO {
    Valor!: number;
    Agencia!: string;
    Conta!: number;
    CPF!: string;
    Nome!: string;
    constructor(obj: Partial<TransacaoDTO> = {}) {
        Object.assign(this, obj);
    }
}