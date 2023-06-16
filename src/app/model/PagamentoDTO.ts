export class PagamentoDTO {
    Nome!: string;
    CNPJ!: string;
    Instituicao!: string;
    Vencimento!: string;
    Valor!: number;
    Codigo!: string;
    constructor(obj: Partial<PagamentoDTO> = {}) {
        Object.assign(this, obj);
    }
}