export interface IQuery {
    limit?: number; 
    skip?: number;
    category?: string;
    subcategory?: string,
    offer?: "" | "true";              //"Offer" del producto se espera un "true"
    shipping?: "1" | "2" | "",      // Se espera un "1" | "2"
    interest?: undefined | "true",           //Se espera un "true"
    until?: string,              //Se espera el numero de cuotas en caso de que INTEREST sea "true"
    condition?: "nuevo" | "usado" | "reacondicionado" | "";     // se espera "nuevo" | "usado" | "reacondicionado"
    price_lte?: string;     // Precio que sean menores o igual que...
    price_gte?: string;     // Precio que sean mayores o igual que...
    tags?: string,
    search?: string;
    sort?: string;    
}