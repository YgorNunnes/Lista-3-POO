import { Consulta } from "../Consulta";
import { Hospital } from "../Hospital";
import { Medico } from "../Medico";
import { Paciente } from "../Paciente";

describe("Hospital", () => {
    test("Deve criar um hospital", () => {
        const hospital = new Hospital("HCAM","01",[]);
        expect(hospital.nomeHospital).toBe("HCAM");
        expect(hospital.codHospital).toBe("01");    
    });

    test("Deve adicionar uma consulta", () => {
        const hospital = new Hospital("HCAM","01",[]);
        const consulta = new Consulta(new Medico("dr1","crm1","email1"),new Paciente("paciente1","email1","crm1"),new Date());
        hospital.adicionarConsulta(consulta);
        expect(hospital.consultas[0]).toBe(consulta);
    });

    test("Deve remover uma consulta", () => {
        const hospital = new Hospital("HCAM","01",[]);
        const consulta = new Consulta(new Medico("dr1","crm1","email1"),new Paciente("paciente1","email1","crm1"),new Date());
        hospital.adicionarConsulta(consulta);
        hospital.removerConsulta(consulta);
        expect(hospital.consultas.length).toBe(0);
    });

})