var express = require('express');
var router = express.Router();
var requestHelper = require('../helpers/requestHelper');
var databaseHelper = require('../helpers/databaseHelper');

/////// Messages ///////
var loginError = "Username or password is not valid";
var loginSuccess = "Log in successful";

/**
 * @api {post} /login Log into the app
 * @apiName Login
 * @apiGroup Authorization
 *
 * @apiParam {String} email The email of the user
 * @apiParam {String} password The password of the user
 *
 * @apiError error The error field has a string with an exact error
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *     {
*       "email": "6209be52@mail.com",
*       "password": "fa2568a8dd82c24a6ee22df3f19d642d"
*     }
 *
 * @apiSampleRequest /api/login
 */
router.post('/', function(req, res){
	// Access to parameters is done through req.query (GET and PUT)
	// Access to parameters is done through req.body (POST and DELETE
    try{
        var user = requestHelper.validateAndCleanLoginRequest(req.body);
    }
    catch (err){
        res.status(400).json(requestHelper.jsonError(err)); return;
    }

	databaseHelper.checkPassword(user.email, user.password, (accessGranted) => {
		if (accessGranted) {
			console.log(loginSuccess);
			res.status(200).json();
			return;
		} else {
            console.log(loginError);
			res.status(400).json({'error': loginError});
			return;
		}
	})
});


module.exports = router;
