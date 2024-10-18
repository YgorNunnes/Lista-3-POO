export class Medico{
    private _nome: string;
    private _crm: string;
    private _email: string;

	constructor(nome: string, crm: string, email: string) {
		this._nome = nome;
		this._crm = crm;
		this._email = email;
	}

	public get nome(): string {
		return this._nome;
	}

	public get crm(): string {
		return this._crm;
	}

	public get email(): string {
		return this._email;
	}

	public set nome(value: string) {
		this._nome = value;
	}

	public set crm(value: string) {
		if (this.crm === null || this.crm === undefined || this.crm.length > 6 ) {
			throw new console.error("Crm inválido!");
		} else this._crm = value;
	}

	public set email(value: string) {
		this._email = value;
	}

}
