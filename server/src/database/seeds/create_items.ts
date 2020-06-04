import Knex from 'knex';

export async function seed(knex: Knex){
    await knex('items').insert([
        {title:'lâmpadas',image:'lampadas.svg'},
        {title:'Pilhas e Baterias',image:'baterias.svg'},
        {title:'papéis e papelão',image:'papais-papelao.svg'},
        {title:'Residuos  Eletrônicos',image:'eletronicos.svg'},
        {title:'Residuos Orgânicos',image:'organicos.svg'},
        {title:'Óleo de cozinha',image:'oleo.svg'},
    ]);
}