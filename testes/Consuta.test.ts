import { Medicamento } from "../Medicamento"
import { Consulta } from "../Consulta"
import { Paciente } from "../Paciente"
import { Receita } from "../Receita"
import { Medico } from "../Medico"

describe("Consulta", () => {
    
    test("Deve criar uma consulta", () => {
        const consulta = new Consulta(new Medico("dr1","crm1","email1"),new Paciente("paciente1","email1","crm1"),new Date());
        expect(()=>{consulta.receita}).toThrow();
        expect(consulta.medicoResponsavel).toBeInstanceOf(Medico);
        expect(consulta.paciente).toBeInstanceOf(Paciente);
        expect(consulta.dataMarcada).toBeInstanceOf(Date);
    });

    test("Deve criar uma consulta para o mesmo dia", () => {
        const hoje = new Date();
        const consulta = new Consulta(new Medico("dr1","crm1","email1"),new Paciente("paciente1","email1","crm1"),hoje);

        expect(consulta.dataMarcada.getDate()).toBe(hoje.getDate());
        expect(consulta.dataMarcada.getMonth()).toBe(hoje.getMonth());
        expect(consulta.dataMarcada.getFullYear()).toBe(hoje.getFullYear());
    });

    test("Deve criar uma consulta para o dia anterior", () => {
        expect(()=>{
            const ontem = new Date();
            ontem.setDate(ontem.getDate() - 1);
            const consulta = new Consulta(new Medico("dr1","crm1","email1"),new Paciente("paciente1","email1","crm1"),ontem);
        }).toThrow();
    });

    test("Deve criar uma consulta para o dia no futuro", () => {
        const amanha = new Date();
        amanha.setDate(amanha.getDate() + 1);
        
        expect(()=>{
            const consulta = new Consulta(new Medico("dr1","crm1","email1"),new Paciente("paciente1","email1","crm1"),amanha);
        }).toThrow
    });
})