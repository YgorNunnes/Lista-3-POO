import { Medicamento } from "./Medicamento.ts";
import { Medico } from "./Medico.ts";
import { Paciente } from "./Paciente.ts";
import { Receita } from "./Receita.ts";

export class Consulta{
	private _receita: Receita;
    private _medicoResponsavel: Medico;
    private _paciente: Paciente;
    private _dataMarcada: Date;
	private _status: string = "Agendada";

    constructor(receita: Receita, medicoResponsavel: Medico, paciente: Paciente, dataMarcada: Date){
        this._receita = receita;
        this._medicoResponsavel = medicoResponsavel;
        this._paciente = paciente;
        this._dataMarcada = dataMarcada;
    }

    public get receita(): Receita {
        return this._receita;
    }

    public GerarReceita(value: Medicamento[]) {
		this._receita = new Receita(new Date(),value);
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

    public get dataMarcada(): Date {
        return this._dataMarcada;
    }

    public set dataMarcada(value: Date) {
        this._dataMarcada = value;
    }
	public get status(): string {
		return this._status;
	}

	public set status(value: string) {
		if (value == "Agendada" || value == "Realizada" || value == "Cancelada"){
			this._status = value;
		}else{
			throw new Error("Status inválido");
		}
	}
}