import { Medicamento } from "./Medicamento";
import { Medico } from "./Medico";
import { Paciente } from "./Paciente";
import { Receita } from "./Receita";

export class Consulta{
	private _receita: Receita;
    private _medicoResponsavel: Medico;
    private _paciente: Paciente;
    private _dataMarcada: Date;
	private _status: string = "Agendada";

    constructor(medicoResponsavel: Medico, paciente: Paciente, dataMarcada: Date){
        this._medicoResponsavel = medicoResponsavel;
        this._paciente = paciente;
		this.validarData(dataMarcada);
        this._dataMarcada = dataMarcada;
    }

    public get receita(): Receita {
		if(this._receita === undefined){
			throw new Error("Receita não criada")
		} else {
			return this._receita;
		}
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
		this.validarTransicaoStatus(value); 
   		 this._status = value;
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

	private validarTransicaoStatus(novoStatus: string) {
    		if (!["Agendada", "Realizada", "Cancelada"].includes(novoStatus)) {
     	   throw new Error("Status inválido");
  	  }

    
   	 if (this._status === "Agendada" && novoStatus === "Realizada") {
      		  return; // Permite transição de Agendada para Realizada
    	} else if (this._status === "Agendada" && novoStatus === "Cancelada") {
     		   return; // Permite transição de Agendada para Cancelada
    	} else if (this._status === "Realizada" && novoStatus === "Cancelada") {
      		  throw new Error("Não é possível cancelar uma consulta já realizada.");
  	} else if (this._status === novoStatus) {
        	  throw new Error("O status já está definido como este.");
   	 } else {
        	  throw new Error("Transição de status inválida.");
    	}
    }
	
}
