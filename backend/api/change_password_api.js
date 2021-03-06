var express = require("express");
var router = express.Router();
var tokenHelper = require("../helpers/tokenHelper");
var requestHelper = require("../helpers/requestHelper");
var databaseHelper = require("../helpers/databaseHelper");
var strings = require("./universal_strings");
var md5 = require("md5");


/**
* @api {put} /changePassword changing password for a user
* @apiName Change Password
* @apiGroup Authorization
*
* @apiDescription API used to change current password for a user.
*
* @apiParam {String} jwt The jwt of the user
* @apiParam {String} old_password The current password of the user
* @apiParam {String} new_password The new password of the user
*
* @apiError error The error field has a string with an exact error
*
* @apiSuccessExample Success-Response:
*      HTTP/1.1 200 OK
* 	{
*		refresh: RefreshToken
*	}
*
* @apiExample Example call::
* 	{
*    "token": "b43a545f90ec60bf5ed2a4bd45d81a711de7ba658faa6899d8240343b857664fc967a76cd622235313db8e2ec053fe34c26c",
*    "old_password": "test1234",
*	 "new_password": "test2876"
*	}
*
* @apiSampleRequest /api/changePassword
*/
router.put("/", function (req, res) {
	try {
		var tok = tokenHelper.verifyToken(req.body.jwt);

		var user_id = tok.user_id;
		var password_object = requestHelper.validateAndCleanChangePasswordRequest(req.body);

		databaseHelper.checkPassword(user_id, password_object.old_password, (success) => {
			if (success) {
				var user_salt = requestHelper.generateSalt();
				var user_new_hashed_Password = md5(user_salt + password_object.new_password);

				databaseHelper.updatePassword(user_id, user_salt, user_new_hashed_Password, (refresh) => {
					if (refresh) {
						res.status(200).json({"refresh": refresh}); return;
					} else {
						res.status(400).json({"error": strings.updatePassword}); return;
					}
				});
			} else {
				res.status(400).json({"error": strings.invalidOldPassword}); return;
			}
		});

	} catch(err){
		res.status(400).json(requestHelper.jsonError(err)); return;
	}
});


module.exports = router;