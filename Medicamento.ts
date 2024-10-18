export class Medicamento{
    private _nome:string;
    private _miligramas:number;

	constructor(nome: string, miligramas: number) {
		if (miligramas < 0) {   throw new Error("Miligramas inválidos");    }
        
        this._nome = nome;
		this._miligramas = miligramas;
	}

	public get nome(): string {
		return this._nome;
	}

	public set nome(value: string) {
		this._nome = value;
	}

	public get miligramas(): number {
		return this._miligramas;
	}

	public set miligramas(value: number) {
        if (value < 0) {
            throw new Error("Miligramas inválidos");
        }
		this._miligramas = value;
	}
    

}