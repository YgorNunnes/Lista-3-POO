export class Paciente {
    private _nome: string;
    private _cpf: string;
    private _email: string;
    

	constructor(nome: string, cpf: string, email: string) {
		this._nome = nome;
		this._cpf = cpf;
		this._email = email;
	}

	get nome(): string {
		return this._nome;
	}

	get cpf(): string {
		return this._cpf;
	}

	get email(): string {
		return this._email;
	}

	set nome(value: string) {
		this._nome = value;
	}

	public set cpf(value: string) {
		if (value.length !== 11) {
            throw new Error('CPF inválido. Deve ter exatamente 11 dígitos numéricos.');
		} else {
			this._cpf = value;
		}	
	}

	set email(value: string) {
		this._email = value;
	}
}
