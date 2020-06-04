import {Request, Response} from 'express';

import knex from '../database/connection';

class PointsControllers{
    async index(request:Request, response:Response){
        const {city,uf,items} = request.query

       const parsedItems = String(items)
       .split(',')
       .map(item=> Number(item.trim()));

        const points = await knex('points')
        .join('point_items','points.id','=','point_items.point_id')
        .whereIn('point_items.item_id',parsedItems)
        .where('city',String(city))
        .where('uf',String(uf))
        .distinct()
        .select('points.*');

        return response.json(points);


    }

    async show(request:Request,response:Response){
        const {id} = request.params;
        console.log('id : ',id)

        const point = await knex('points').where('id',id).first();
        console.log('point : ',point)
        if(!point){
            return response.status(400).json({
                message:'Point not found.'
            });
        }

        const items = await knex('items')
        .join('points_items','items.id','=','points_items.item_id')
        .where('points_items.point_id',id)
        .select('items.title');
        
        return response.json({
            point,
            items
        })


    }

    async create (request:Request,response:Response){
        const {
           
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items
        } = request.body;

        const trx = await knex.transaction();
    
        const insertIds = await trx('points').insert({
            image : 'imagem_fake',
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf
        });
        const pointId = insertIds[0]; 
    
        const pointsItems = items.map((item_id: Number)=>{
           return {
               item_id,
               point_id : pointId, 
           }
        })      
    
        await trx('points_items').insert(pointsItems)
        trx.commit();
        return response.json({sucess:true});
    
    }
};

export default  PointsControllers;