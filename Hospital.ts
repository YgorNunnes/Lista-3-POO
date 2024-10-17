export class Hospital{
    private _nomeHospital: string;
	private _codHospital:string;

	constructor(nomeHospital: string) {
		this._nomeHospital = nomeHospital;
	}
    
	get nomeHospital(): string {
		return this._nomeHospital;
	}

	set nomeHospital(value: string) {
		this._nomeHospital = value;
	}

	get codHospital(): string {
		return this._codHospital;
	}

	set codHospital(value: string) {
		this._codHospital = value;
	}
}