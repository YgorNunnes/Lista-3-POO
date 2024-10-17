export class Sistema{
    private nomeSistema: string;

	constructor($nomeSistema: string) {
		this.nomeSistema = $nomeSistema;
	}
    
	public get $nomeSistema(): string {
		return this.nomeSistema;
	}

	public set $nomeSistema(value: string) {
		this.nomeSistema = value;
	}
}