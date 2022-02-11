module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.\n" +
        "The value of user is \n" + JSON.stringify(context.req.user);

    // context.res = {
    //     status: 400, /* Defaults to 200 */
    //     body: responseMessage
    // };
    context.res.status(400).json({"hello": "world"});
}