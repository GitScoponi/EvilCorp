import { FormConfig } from "./FormConfig";

export class FormBase extends FormConfig {
    constructor() {
      super({
        Num__Registro: {
          required: 'Campo obrigatório!',
          rangeLength: 'Obrigatório 6 caracteres!',
        },
        CPF: { required: 'Campo obrigatório!', cpf: 'CPF inválido' },
        NomeSistema: { required: 'Campo obrigatório!'},
        Dt_Nascimento: { required: 'Campo obrigatório!' },
        E_Mail: { required: 'Campo obrigatório!', email: 'E-mail inválido' },
        ConselhoRegistro: { required: ' ' },
        TipoRegistro: { required: ' ' },
        Abreviatura:{ required: 'Campo obrigatório!'},
        Nome:{ required: 'Campo obrigatório!'},
        Programador:{ required: 'Campo obrigatório!'},
        Conselho:{ required: 'Campo obrigatório!'},
        Banco:{ required: 'Campo obrigatório!'},
        Tabela:{ required: 'Campo obrigatório!'},
        Link:{ required: 'Campo obrigatório!',pattern:'O Link deve conter http:// ou https:// ! '}
      });
    }
  }
  