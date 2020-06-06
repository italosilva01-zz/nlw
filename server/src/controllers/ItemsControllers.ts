import {Request,Response} from 'express';
import knex from '../database/connection';

class ItemsControllers{
    async index (request:Request,response:Response){
        // console.log("conosle aQUI");
    
        const items = await knex('items').select('*')
    
        const serializedItems = items.map(item =>{
            return {
                id: item.id,
                title : item.title,
                image_url:`http://192.168.1.7:3333/uploads/${item.image}`,
            }
        })
    
        return response.json(serializedItems);
    
    }
}
export default ItemsControllers;