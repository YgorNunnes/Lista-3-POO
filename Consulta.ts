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

    constructor(medicoResponsavel: Medico, paciente: Paciente, dataMarcada: Date){
        this._medicoResponsavel = medicoResponsavel;
        this._paciente = paciente;
        this._dataMarcada = dataMarcada;
    }

    public get receita(): Receita {
        return this._receita;
    }

    public GerarReceita(medicamento: Medicamento[]) {
		this._receita = new Receita(this._medicoResponsavel,this._paciente,new Date(),medicamento);
		this.status = "Realizada";
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
		this.validarData(value);
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

	private validarData(data: Date){
		const hoje = new Date();

	if (
		data.getFullYear() < hoje.getFullYear() ||
		(data.getFullYear() === hoje.getFullYear() && data.getMonth() < hoje.getMonth()) ||
		(data.getFullYear() === hoje.getFullYear() && data.getMonth() === hoje.getMonth() && data.getDate() < hoje.getDate())
	) {
		throw new Error("A data não pode ser anterior ao dia atual.");
	}
	return;
	}
	
}