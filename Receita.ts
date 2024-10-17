import { Hospital } from "./Hospital.ts";

export class Receita{
    private _dataDeEmissao: Date;
    private _medicamentos: string[];
    private _codConsulta: string;
    private _codHospital: Hospital;

	constructor(dataDeEmissao: Date, medicamentos: string[], codConsulta: string, codHospital: Hospital) {
		this._dataDeEmissao = dataDeEmissao;
		this._medicamentos = medicamentos;
		this._codConsulta = codConsulta;
		this._codHospital = codHospital;
	}
	get dataDeEmissao(): Date {
		return this._dataDeEmissao;
	}
	get medicamentos(): string[] {
		return this._medicamentos;
	}
	get codConsulta(): string {
		return this._codConsulta;
	}
	get codHospital(): Hospital {
		return this._codHospital;
	}
	set dataDeEmissao(value: Date) {
		this._dataDeEmissao = value;
	}
	set medicamentos(value: string[]) {
		this._medicamentos = value;
	}
	set codConsulta(value: string) {
		this._codConsulta = value;
	}
	set codHospital(value: Hospital) {
		this._codHospital = value;
	}

}

