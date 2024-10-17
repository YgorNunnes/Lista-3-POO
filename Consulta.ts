import { Medico } from "./Medico.ts";
import { Paciente } from "./Paciente.ts";

export class Consulta{
    private _codigo: string;
    private _medicoResponsavel: Medico;
    private _paciente: Paciente;
    private _dataDeEmissao: Date;
    private _dataMarcada: Date;

	constructor(codigo: string, medicoResponsavel: Medico, paciente: Paciente, dataDeEmissao: Date) {
		this._codigo = codigo;
		this._medicoResponsavel = medicoResponsavel;
		this._paciente = paciente;
		this._dataDeEmissao = dataDeEmissao;
    }    
	get codigo(): string {
		return this._codigo;
	}
	get medicoResponsavel(): Medico {
		return this._medicoResponsavel;
	}
	get paciente(): Paciente {
		return this._paciente;
	}
	get dataDeEmissao(): Date {
		return this._dataDeEmissao;
	}
    get dataMarcada() : Date {
        return this._dataMarcada;
    }
	set codigo(value: string) {
		this._codigo = value;
	}
	set medicoResponsavel(value: Medico) {
		this._medicoResponsavel = value;
	}
	set paciente(value: Paciente) {
		this._paciente = value;
	}
	set dataDeEmissao(value: Date) {
		this._dataDeEmissao = value;
	}
    set dataMarcada (value: Date){
        this._dataMarcada = value;
    }
}