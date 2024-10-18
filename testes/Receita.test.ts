import { Consulta } from "../Consulta";
import { Medicamento } from "../Medicamento";
import { Medico } from "../Medico";
import { Paciente } from "../Paciente";
import { Receita } from "../Receita";

describe("Receita",()=>{

    
    test("Deve criar uma receita", () => {
        const consulta = new Consulta(new Medico("dr1","crm1","email1"),new Paciente("Ricardio","email1@gmail","crm1"),new Date());
        const medicamento = new Medicamento("losartan", 100);
        consulta.GerarReceita([medicamento]);
        expect(consulta.receita).toBeInstanceOf(Receita);
        expect(consulta.receita.medicamentos[0]).toBeInstanceOf(Medicamento);
    })

    
    test("Deve criar receita, adicionar e remover um medicamento", () => {
        const consulta = new Consulta(new Medico("dr1","crm1","email1"),new Paciente("paciente1","email1","crm1"),new Date());
        const medicamento = new Medicamento("losartan", 100);
        const medicamento2 = new Medicamento("urubuprofeno", 75);

        consulta.GerarReceita([medicamento]);

        consulta.receita.adicionarMedicamento(medicamento2);

        expect(consulta.receita.medicamentos.length).toBe(2);
        expect(consulta.receita.medicamentos[0]).toBeInstanceOf(Medicamento);

        consulta.receita.removerMedicamento(medicamento);
        
        expect(consulta.receita.medicamentos.length).toBe(1);
    })

    
    test("Deve falhar ao criar uma receita para uma data anterior a atual", () => {
        let dataAnterior = new Date();
        dataAnterior.setDate(dataAnterior.getDate() - 1);
        
        expect(() => {
            let receita = new Receita(new Medico("dr1","crm1","email1"),new Paciente("paciente1","email1","crm1"),dataAnterior,[new Medicamento("loratidina", 10)]);
        }).toThrow();
    })
    
    test("Deve falhar ao criar uma receita para uma data posterior a atual", () => {
        let dataPosterior = new Date();
        dataPosterior.setDate(dataPosterior.getDate() + 1);
        
        expect(() => {
            let receita = new Receita(new Medico("dr1","crm1","email1"),new Paciente("paciente1","email1","crm1"),dataPosterior,[new Medicamento("loratidina", 10)]);
        }).toThrow();
    })

})