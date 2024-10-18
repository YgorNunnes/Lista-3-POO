import { Medicamento } from "../Medicamento"

describe("Medicamento", () => {
    test("Deve criar um medicamento", () => {
        const medicamento = new Medicamento("losartan", 100);
        expect(medicamento.nome).toBe("losartan");
        expect(medicamento.miligramas).toBe(100);
    });

    test("Deve falhar ao criar um medicamento com miligramas negativos", () => {
        expect(()=>{
            const medicamento = new Medicamento("losartan", -100);
        }).toThrow();
    });

})