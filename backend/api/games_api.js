var express = require('express');
var router = express.Router();
var body = require('body-parser');
var tokenHelper = require('../helpers/tokenHelper');
var requestHelper = require('../helpers/requestHelper');
var databaseHelper = require('../helpers/databaseHelper');
var crypto = require('crypto');
var strings = require('./universal_strings');

/**
* @api {post} /games Create a new game
* @apiName CreateGame
* @apiGroup Games
*
* @apiParam {String} name The name of the game you are creating
* @apiParam {String} type The type of the game you are creating (Serious, casual, ..)
* @apiParam {int} skill_offset The intended skill offset range for this game (0-10)
* @apiParam {int} total_players The total required players for the game
* @apiParam {int} start_time The time the game starts (in unix epoch time)
* @apiParam {int} duration The duration of the game (in seconds as an int)
* @apiParam {location} location The location of the game represented in location point object (lat/lng)
* @apiParam {location_notes} string how to get into the court
* @apiParam {String} description Short description for the game (less than 250 characters)
* @apiParam {String} gender The preferred for the game (if any)
* @apiParam {list} age_range The preferred age range for the game (if any)
* @apiParam {list} enforced_params List of parmeters that the creator wants to enforce
* valid options for enforced_params are: gender, age
* 	
* @apiSuccess {int} gameId The id of the game that has been created
*
* @apiError error The error field has a string with an exact error
* 
* @apiSuccessExample Success-Response:
*      HTTP/1.1 200 OK
*     {
*       "name": "abode's game",
*       "type": "casual",
*       "skill": 5,
*       "total_players_required": 6,
*       "start_time": "1504272395",
*       "duration": "5400",
*       "location": {lat: 500.50, lng:500.50},
*		    "location_notes": "Come around the back and knock on the blue door",
*       "description": "Casual basketball game",
*       "gender": "A",
*       "age_range": "[20, 30]",
*       "enforced_params": ["gender", "age"]
*     }
*
* @apiSampleRequest /api/games
*/
router.post('/', function(req, res){
	try{
		var game = requestHelper.validateAndCleanCreateGameRequest(req.body);
    var tok = tokenHelper.verifyToken(req.body.jwt);

    ensureGameIsValid(game, tok.user_id);

    databaseHelper.createGame(tok.user_id, game.name, game.type, game.skill, 
                              game.total_players_required, game.start_time, 
                              game.duration, game.location, game.location_notes,
                              game.description, game.gender, game.age_range, game.enforced_params, 
    (game_id) => {
      if(game_id){
        res.status(200).json({'game_id': game_id});
      } else {
        res.status(400).json({'error': strings.invalidGameCreation});
      }
    });
	}
	catch (err){
		res.status(400).json(requestHelper.jsonError(err)); return;
	}
});

/**
 * @api {get} /games/:gameid Get users of a game
 * @apiName Get game
 * @apiGroup Games
 *
 * @apiParam {int} id of the game
 *
 * @apiError error The error field has a string with an exact error
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *     {
*       "user_id":[ "1", "2", "3" ]
*      }
 *
 * @apiSampleRequest /api/games/:123
 */
 router.get('/:game_id', function(req, res){
 	var gameid = req.params.game_id;
 	try {

      //	tokenHelper.verifyToken(req.headers.token);
      databaseHelper.getUsers(gameid , (user_id) => {
      	if(user_id) {
      		console.log(user_id);
      		res.status(200).json(user_id);
      		return;
      	}else{
      		res.status(400).json({'error': strings.userIdFail});
      		return;
      	}
      })
  }
  catch(err){

  	res.status(400).json({'error': strings.invalidJwt});
  	return;
  }



});

 function ensureGameIsValid(game, userId){
    // Make sure that the creator does not have another game during this time
    var startTime = game.start_time;
    var endTime = game.start_time + game.duration;

    

 }

 module.exports = router;