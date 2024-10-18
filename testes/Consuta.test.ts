import { Medicamento } from "../Medicamento"
import { Consulta } from "../Consulta"
import { Paciente } from "../Paciente"
import { Receita } from "../Receita"
import { Medico } from "../Medico"

describe("Consulta", () => {
    
    test("Deve criar uma consulta", () => {
        const consulta = new Consulta(new Medico("dr1","crm1","email1"),new Paciente("paciente1","email1","crm1"),new Date("2024-10-17"));
        expect(consulta.receita).toBeInstanceOf(Receita);
        expect(consulta.medicoResponsavel).toBeInstanceOf(Medico);
        expect(consulta.paciente).toBeInstanceOf(Paciente);
        expect(consulta.dataMarcada).toBeInstanceOf(Date);
    });

    test("Deve criar uma receita", () => {

        const consulta = new Consulta(new Medico("dr1","crm1","email1"),new Paciente("Ricardio","email1@gmail","crm1"),new Date("2024-10-17"));
        const medicamento = new Medicamento("losartan", 100);
        consulta.GerarReceita([medicamento]);
        expect(consulta.receita).toBeInstanceOf(Receita);
        expect(consulta.receita.medicamentos[0]).toBeInstanceOf(Medicamento);
    })

    
    test("Deve adicionar e remover um medicamento", () => {
        const consulta = new Consulta(new Medico("dr1","crm1","email1"),new Paciente("paciente1","email1","crm1"),new Date("2024-10-17"));
        const medicamento = new Medicamento("losartan", 100);
        consulta.receita.adicionarMedicamento(medicamento);
        expect(consulta.receita.medicamentos.length).toBe(1);
        expect(consulta.receita.medicamentos[0]).toBeInstanceOf(Medicamento);
        expect(consulta.receita.medicamentos[0].nome).toBe("losartan");
        expect(consulta.receita.medicamentos[0].miligramas).toBe(100);
        consulta.receita.removerMedicamento(medicamento);
        expect(consulta.receita.medicamentos.length).toBe(0);
    })

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
    const consulta = new Consulta(new Medico("dr1","crm1","email1"),new Paciente("paciente1","email1","crm1"),amanha);
    expect(consulta.dataMarcada.getDate()).toBe(amanha.getDate());
    expect(consulta.dataMarcada.getMonth()).toBe(amanha.getMonth());
    expect(consulta.dataMarcada.getFullYear()).toBe(amanha.getFullYear());
});
})