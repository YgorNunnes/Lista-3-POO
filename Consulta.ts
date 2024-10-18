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
	public get codigo(): string {
		return this._codigo;
	}
	public get medicoResponsavel(): Medico {
		return this._medicoResponsavel;
	}
	public get paciente(): Paciente {
		return this._paciente;
	}
	public get dataDeEmissao(): Date {
		return this._dataDeEmissao;
	}
   	 public get dataMarcada() : Date {
       		 return this._dataMarcada;
   	}
	public set codigo(value: string) {
		this._codigo = value;
	}
	public set medicoResponsavel(value: Medico) {
		this._medicoResponsavel = value;
	}
	public set paciente(value: Paciente) {
		this._paciente = value;
	}
	public set dataDeEmissao(value: Date) {
		let hoje = new Date();

		if (this.dataDeEmissao > hoje) {
			throw new console.error("A data de emissão não pode ser no futuro!");
		} else {
			this.dataDeEmissao = value;
		}
	}
    	public set dataMarcada (value: Date){
		let hoje = new Date();

		if (this.dataMarcada < hoje) {
			throw new console.error("A data deve ser marcada no futuro!");
		} else {
			this.dataMarcada = value;
		}
	}
}
