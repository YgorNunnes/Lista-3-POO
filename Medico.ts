export class Medico{
    private nome: string;
    private crm: string;
    private email: string;

	constructor($nome: string, $crm: string, $email: string) {
		this.nome = $nome;
		this.crm = $crm;
		this.email = $email;
	}

	public get $nome(): string {
		return this.nome;
	}

	public get $crm(): string {
		return this.crm;
	}

	public get $email(): string {
		return this.email;
	}

	public set $nome(value: string) {
		this.nome = value;
	}

	public set $crm(value: string) {
		if (this.crm === null || this.crm === undefined || this.crm.length > 6 ) {
			throw new console.error("Crm inválido!");
		} else this.crm = value;
	}

	public set $email(value: string) {
		this.email = value;
	}

}
