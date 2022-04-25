
export class  Model {

    user;
    items;

    constructor () {
        this.user = "Pablo";
        this.items = [
        { action: "Comprar Flores" , done: false},   
        { action: "Buscar Los Zapatos" , done: false},    
        { action: "Coleccionar Tickets " , done: false},
        { action: "Llamar Israel" , done: false},

        ]
    }


}

export class TodoItem {
action;
done;

constructor(action: any,done: any){

    this.action = action;
    this.done = done;

}

}





