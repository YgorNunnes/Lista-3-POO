import { Medicamento } from "./Medicamento";
import { Medico } from "./Medico";
import { Paciente } from "./Paciente";

export class Receita{
	private _medicoResponsavel: Medico;
	private _paciente: Paciente;
    private _dataDeEmissao: Date;
    private _medicamentos: Medicamento[];

	constructor(medicoResponsavel: Medico, paciente: Paciente, dataMarcada: Date, medicamentos: Medicamento[]) {
		this._medicoResponsavel = medicoResponsavel;
		this._paciente = paciente;
		const hoje = new Date();
		if(!(dataMarcada.getFullYear() === hoje.getFullYear() && dataMarcada.getMonth() === hoje.getMonth() && dataMarcada.getDate() === hoje.getDate())) {
			throw new Error('Data de emissão não diferente da marcada.');
		}
		this._dataDeEmissao = new Date();
		this._medicamentos = medicamentos;
	}
	
	public get medicoResponsavel(): Medico {
        return this._medicoResponsavel;
    }

    public set medicoResponsavel(value: Medico) {
        this._medicoResponsavel = value;
    }

    public get paciente(): Paciente {
        return this._paciente;
    }

    public set paciente(value: Paciente) {
        this._paciente = value;
    }

	get dataDeEmissao(): Date {
		return this._dataDeEmissao;
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

