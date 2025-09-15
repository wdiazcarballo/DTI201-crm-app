import { 
    getAllCrms, 
    getCrmById, 
    createCrm, 
    updateCrm, 
    deleteCrm 
} from '../controllers/crmController.js';

const routes = (app) => {
    // Collection routes
    app.route('/contact')
        .get(getAllCrms)
        .post(createCrm);

    // Single item routes 
    app.route('/contact/:id')
        .get(getCrmById)
        .put(updateCrm)
        .delete(deleteCrm);
}

export default routes;
