export class Paciente {
    private nome: string;
    private cpf: string;
    private email: string;
    

	constructor($nome: string, $cpf: string, $email: string) {
		this.nome = $nome;
		this.cpf = $cpf;
		this.email = $email;
	}

	public get $nome(): string {
		return this.nome;
	}

	public get $cpf(): string {
		return this.cpf;
	}

	public get $email(): string {
		return this.email;
	}

	public set $nome(value: string) {
		this.nome = value;
	}

	if (value.length !== 11) {
            throw new Error('CPF inválido. Deve ter exatamente 11 dígitos numéricos.');
	} else {
		this.cpf = value;
	}

	public set $email(value: string) {
		this.email = value;
	}
}
