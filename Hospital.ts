import { Consulta } from "./Consulta";

export class Hospital{
    private _nomeHospital: string;
	private _codHospital:string;
	private _consultas: Consulta[];

	constructor(nomeHospital: string, codHospital: string, consultas: Consulta[]) {
		this._nomeHospital = nomeHospital;
		this._codHospital = codHospital;
		this._consultas = consultas;
	}

	get nomeHospital(): string {
		return this._nomeHospital;
	}

	set nomeHospital(value: string) {
		this._nomeHospital = value;
	}

	get codHospital(): string {
		return this._codHospital;
	}

	set codHospital(value: string) {
		this._codHospital = value;
	}

	get consultas(): Consulta[] {
		return this._consultas
	}

    adicionarConsulta(consulta: Consulta): void {
        this._consultas.push(consulta);
    }

    removerConsulta(consulta: Consulta): void {
        const index = this._consultas.indexOf(consulta);
        if (index !== -1) {
            this._consultas.splice(index, 1);
        }
    }
}