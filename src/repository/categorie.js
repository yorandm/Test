const uuid = require('uuid');
const {
    tables,
    getKnex
} = require('../data');
const {
    getChildLogger
} = require('../core/logging');
const {
    x
} = require('joi');

const SELECT_COLUMNS = [
    `${tables.categorie}.id`, `${tables.categorie}.naam as categorieNaam`, `${tables.categorie}.icoon`,
    // `${tables.sdg}.sdgNummer`, `${tables.sdg}.naam as sdgNaam`, `${tables.sdg}.inGebruik`, `${tables.sdg}.categorieID`,
];

const formatCategorie = ({
    id,
    categorieNaam,
    icoon,
}) => ({
    catId: id,
    catNaam: categorieNaam,
    icoon,
});


const findAll = async(rol) => {
    const subquery = getKnex()(tables.rolcat).select('catId').join(tables.roles, `${tables.roles}.id`, `${tables.rolcat}.rolId`).where(`${tables.roles}.role`, rol);
    const data = await getKnex()(tables.categorie)
        .where('id', 'in', subquery)
        .select(SELECT_COLUMNS)
        .orderBy(`${tables.categorie}.naam`, 'ASC');
    return data.map(formatCategorie);
};





module.exports = {
    findAll,

};