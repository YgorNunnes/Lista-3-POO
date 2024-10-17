export class Hospital{
    private _nomeHospital: string;

	constructor(nomeHospital: string) {
		this._nomeHospital = nomeHospital;
	}
    
	get nomeHospital(): string {
		return this._nomeHospital;
	}

	set nomeHospital(value: string) {
		this._nomeHospital = value;
	}
}