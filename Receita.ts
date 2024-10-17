import { Hospital } from "./Hospital.ts";
import { Medicamento } from "./Medicamento.ts";

export class Receita{
    private _dataDeEmissao: Date;
    private _medicamentos: Medicamento[];

	constructor(dataDeEmissao: Date, medicamentos: Medicamento[]) {
		this._dataDeEmissao = dataDeEmissao;
		this._medicamentos = medicamentos;
	}
	
	get dataDeEmissao(): Date {
		return this._dataDeEmissao;
	}

	set dataDeEmissao(value: Date) {
		this._dataDeEmissao = value;
	}

	get medicamentos(): Medicamento[] {
		return this._medicamentos;
	}

	set medicamentos(value: Medicamento[]) {
		this._medicamentos = value;
	}
	
	public adicionarMedicamento(value: Medicamento) {
		this._medicamentos.push(value);
	}
	
	public removerMedicamento(value: Medicamento) {
		const index = this._medicamentos.indexOf(value);
		if (index !== -1) {
			this._medicamentos.splice(index, 1);
    	}	
	}
	
}

