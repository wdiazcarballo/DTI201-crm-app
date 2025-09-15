const routes = (app) => {
    // Collection routes
    app.route('/contact')
        .get((req, res) => {
            res.send({
                message: 'GET request successful - retrieving all contacts'
            });
        })
        .post((req, res) => {
            res.send({
                message: 'POST request successful - new contact created'
            });
        });

    // Single item routes 
    app.route('/contact/:contactId')
        .get((req, res) => {
            res.send({
                message: `GET request successful - retrieving contact ${req.params.contactId}`
            });
        })
        .put((req, res) => {
            res.send({
                message: `PUT request successful - updating contact ${req.params.contactId}`
            });
        })
        .delete((req, res) => {
            res.send({
                message: `DELETE request successful - removing contact ${req.params.contactId}`
            });
        });
}

export default routes;
