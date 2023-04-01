export interface lists{
    lists: Array<list>;
}

export interface list{
    name: string;
    id: number;
    cards: Array<card>;
}

export interface card
{ 
    id:number,
    header: string,
    desc: string;
    date: string;
}

export interface ids{
  listid :number ;
  cardid :number ;
}