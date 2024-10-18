import { Consulta } from "./Consulta";
import { Hospital } from "./Hospital";
import { Medicamento } from "./Medicamento";
import { Medico } from "./Medico";
import { Paciente } from "./Paciente";

let HCAM=new Hospital("HCAM","01",[]);
let losartan=new Medicamento("losartan",100);
let dr=new Medico("dr1","crm1","email1");
let paciente1=new Paciente("paciente1","email1","crm1");

let consulta1=new Consulta(dr,paciente1,new Date("2024-10-17"));
consulta1.GerarReceita( [losartan]);

console.log(consulta1.receita);
