import { Sistema } from "./Sistema.ts";

export class Receita{
    private dataDeEmissao: Date;
    private medicamentos: string[];
    private codConsulta: string;
    private codSistema: Sistema;

	constructor($dataDeEmissao: Date, $medicamentos: string[], $codConsulta: string, $codSistema: Sistema) {
		this.dataDeEmissao = $dataDeEmissao;
		this.medicamentos = $medicamentos;
		this.codConsulta = $codConsulta;
		this.codSistema = $codSistema;
	}
	public get $dataDeEmissao(): Date {
		return this.dataDeEmissao;
	}
	public get $medicamentos(): string[] {
		return this.medicamentos;
	}
	public get $codConsulta(): string {
		return this.codConsulta;
	}
	public get $codSistema(): Sistema {
		return this.codSistema;
	}
	public set $dataDeEmissao(value: Date) {
		this.dataDeEmissao = value;
	}
	public set $medicamentos(value: string[]) {
		this.medicamentos = value;
	}
	public set $codConsulta(value: string) {
		this.codConsulta = value;
	}
	public set $codSistema(value: Sistema) {
		this.codSistema = value;
	}

}