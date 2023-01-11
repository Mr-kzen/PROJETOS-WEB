export default class Countdown{
    constructor(futureDate){
        this.futureDate = futureDate
    }

    //puxando o dia de hoje para subtrai-lo da data de lançamento
    get _hoje(){
        return new Date();
    }

    //puxando a data de lançamento
    get _dataLancamento(){
        return new Date(this.futureDate);
    }

    //subtraindo o dia do lançamento com o dia de hoje
    get _subDate(){
        return this._dataLancamento - this._hoje
    }


    //convertendo a subtração em dias, horas, minutos e segundos
    get days(){
        return Math.floor(this._subDate / (24 * 60 * 60 * 1000))
    }

    get hours(){
        return Math.floor(this._subDate / (60 * 60 * 1000))
    }

    get minutes(){
        return Math.floor(this._subDate / (60 * 1000))
    }

    get seconts(){
        return Math.floor(this._subDate / 1000)
    }

    //puxando e retornando as datas e horas
    get _total(){
        const days = this.days < 10 ? "0" + (this.days): this.days;
        const hours = this.hours % 24 < 10 ? "0" + (this.hours % 24) : this.hours % 24;
        const minutes = this.minutes % 60 < 10 ? "0" + (this.minutes % 60) : this.minutes % 60;
        const seconts = this.seconts % 60 < 10 ? "0" + (this.seconts % 60) : this.seconts % 60;

        return [days, hours, minutes, seconts]
    }
}