var crypto = require("crypto");
var rNameg = require("random-name");

var baseApi = "http://localhost:3000/api";

var refreshEndpoint = baseApi + "/refresh";
var registerEndpoint = baseApi + "/register";
var loginEndpoint = baseApi + "/login";
var extendedProfileEndpoint = baseApi + "/extended_profile";
var createGameEndpoint = baseApi + "/games";
var getUsersOfGameEndpoint = baseApi + "/games/getUsers";
var joinGameEndpoint = baseApi + "/games/%s/join?jwt=%s";
var leaveGameEndpoint = baseApi + "/games/%s/leave?jwt=%s";
var adminProfileEndpoint = baseApi + "/profile";
var sendfriendsEndpoint = baseApi + "/friends";
var acceptFriendEndpoint = baseApi + "/friends/accept";
var deleteFriendEndpoint = baseApi + "/friends/delete";
var blockFriendEndpoint = baseApi + "/friends/block";
var listFriendsEndpoint = baseApi + "/friends/listFriends";
var listBlockedUsersEndpoint = baseApi + "/friends/listBlockedUsers";
var listFriendRequestEndpoint = baseApi + "/friends/listFriendRequest";
var searchEndpoint = baseApi + "/search";
var deleteAccountEndpoint = baseApi + "/delete";
var setReviewEndpoint = baseApi + "/reviews/setReview";
var changePasswordEndpoint = baseApi + "/changePassword";

function randomEmail(){
	return crypto.randomBytes(4).toString("hex") + "@mail.com";
}

function randomUsername(){
	return crypto.randomBytes(4).toString("hex");
}

function randomLocation(){
	return {
		"lng": (Math.random() * (180 - (-180)) - 180).toFixed(3) * 1,
		"lat": (Math.random() * (90 - (-90)) - 90).toFixed(3) * 1
	};
}

function randomGtaLocation(){
	return {
		"lng": (Math.random() * (-80 - (-79.5)) - 79.5).toFixed(3) * 1,
		"lat": (Math.random() * (43.65 - (43.5)) + 43.5).toFixed(3) * 1
	};
}

function randomDob(){
	return "03/25/" + (Math.random() * (2000 - 1950) + 1950).toFixed(0) * 1;
}

function randomSkillLevel(){
	return (Math.random() * (10)).toFixed(0) * 1;
}

function randomGameType(){
	return randomInt(0, 1) ? "casual" : "serious";
}

function randomHours(){
	return randomInt(2*60*60, 10*60*60).toFixed(0);
}

function randomDays(){
	return randomInt(24*60*60, 3*24*60*60).toFixed(0);
}

function mockGameStartTime(){
	var x =  (parseInt(Math.floor(Date.now() / 1000).toFixed(0)) + parseInt(randomDays()) + parseInt(randomHours()));
	return x;
}

function randomDuration(){ 
	return parseInt(randomInt(30*60, 2*60*60).toFixed(0));
}

function randomPassword(){
	return crypto.randomBytes(4).toString("hex");
}

function randomInt(low, high){
	return (Math.random() * (high - low) + low);
}


function calculateAge(userDob) {
	var birth = new Date(userDob);
	var curr = new Date();
	var diff = Math.abs(birth.getTime() - curr.getTime());
	return Math.ceil(diff / (1000 * 3600 * 24 * 365));
}

function createGenericUserMale(){
	return {
		username:randomUsername(),
		password:randomPassword(),
		fname:rNameg.first(),
		lname:rNameg.last(),
		gender:"m",
		dob:randomDob(),
		email:randomEmail()
	};
}

function createInvalidAgeUser(){
	return {
		username:randomUsername(),
		password:randomPassword(),
		fname:rNameg.first(),
		lname:rNameg.last(),
		gender:"m",
		dob:"03/25/2017",
		email:randomEmail()
	};
}

function createGenericUserUpdate(jwt){
	return {
		jwt: jwt,
		username:randomUsername(),
		password:"",
		fname:rNameg.first(),
		lname: rNameg.last(),
		gender:"m",
		dob:randomDob(),
		email:randomEmail()
	};
}

function createGenericUserUpdateWithFnameLname(jwt){
	return {
		jwt: jwt,
		fname:rNameg.first(),
		lname: rNameg.last()
	};
}

function createGenericUserUpdateWithUsernameEmail(jwt, password){
	return {
		jwt: jwt,
		username:randomUsername(),
		password:password,
		fname:"",
		lname: "",
		gender:"",
		dob:"",
		email:randomEmail()
	};
}

function createGenericUserUpdateWithGenderDob(jwt){
	return {
		jwt: jwt,
		username:"",
		password:"",
		fname:"",
		lname: "",
		gender:"f",
		dob:randomDob(),
		email:""
	};
}

function createGenericUserUpdateWithInvalidDob(jwt){
	return {
		jwt: jwt,
		username:"",
		password:"",
		fname:"",
		lname: "",
		gender:"",
		dob:"03/25/2017",
		email:""
	};
}

function createGenericUserFemale(){
	return {
		username:randomUsername(),
		password:randomPassword(),
		fname:rNameg.first(),
		lname:rNameg.last(),
		gender:"f",
		dob:randomDob(),
		email:randomEmail()
	};
}


function createGenericUserFixedBirth(){
	return {
		username:randomUsername(),
		password:randomPassword(),
		fname:rNameg.first(),
		lname:rNameg.last(),
		gender:"m",
		dob:"03/25/1992",
		email:randomEmail()
	};
}

function createGenericGame(jwt, start, duration){
	return {
		name: rNameg.place() + " game",
		type: "casual",
		skill_offset: randomSkillLevel(),
		total_players_required: 3 + randomSkillLevel(),
		start_time: start,
		duration: duration,
		location: randomLocation(),
		location_notes: "Come around the back and knock on the blue door",
		description: "Casual basketball game",
		enforced_params: ["gender", "age"],
		jwt: jwt
	};
}

function createUnrestrictedGame(jwt, start, duration){
	var game = createGenericGame(jwt, start, duration);
	game.enforced_params = null;
	return game;
}

function createMockGtaGame(jwt){
	return {
		name: rNameg.place() + " game",
		type: randomGameType(),
		skill_offset: randomSkillLevel(),
		total_players_required: 3 + randomSkillLevel(),
		start_time: mockGameStartTime(),
		duration: randomDuration(),
		location: randomGtaLocation(),
		location_notes: "Come around the back and knock on the blue door",
		description: "Casual basketball game",
		enforced_params: randomInt(1, 5) == 5 ? ["gender"] : [],
		jwt: jwt
	};
}

function createGenericExtendedProfile (jwt) {
	return {
		jwt: jwt,
		skill_level: randomSkillLevel(),
		location: randomLocation(),
	};
}

function createGenericExtendedProfileWithSkilllevel (jwt) {
	return {
		jwt: jwt,
		skill_level: randomSkillLevel()
	};
}

function createGenericExtendedProfileWithLocation (jwt) {
	return {
		jwt: jwt,
		location: randomLocation()
	};
}

function createInvalidSkillLevelForExtendedProfile (jwt) {
	return {
		jwt: jwt,
		skill_level: "*",
		location: randomLocation()
	};
}

function createInvalidLocationForExtendedProfile (jwt) {
	return {
		jwt: jwt,
		skill_level: randomSkillLevel(),
		location: "*",
	};
}

function createGenericFriendRequest (jwt, userID) {
	return {
		jwt: jwt,
		userId: userID
	};
}

function createGenericUsersRequest (jwt, gameId){
	return{
		game_id: gameId,
		jwt: jwt
	};
}

function createGenericReviewRequest(jwt, gameId, userId){
	return{
		gameId: gameId,
		userId: userId,
		rating: 1,
		tags: [1,1],
		jwt: jwt
	};

}

module.exports = {
	refreshEndpoint,
	registerEndpoint,
	loginEndpoint,
	randomEmail,
	extendedProfileEndpoint,
	createGenericUserMale,
	createGenericUserFemale,
	createGameEndpoint,
	createGenericGame,
	joinGameEndpoint,
	leaveGameEndpoint,
	adminProfileEndpoint,
	createGenericExtendedProfile,
	createGenericUserFixedBirth,
	sendfriendsEndpoint,
	createGenericFriendRequest,
	acceptFriendEndpoint,
	deleteFriendEndpoint,
	createInvalidSkillLevelForExtendedProfile,
	createInvalidLocationForExtendedProfile,
	blockFriendEndpoint,
	listFriendsEndpoint,
	listBlockedUsersEndpoint,
	searchEndpoint,
	createUnrestrictedGame,
	listFriendRequestEndpoint,
	deleteAccountEndpoint,
	getUsersOfGameEndpoint,
	createGenericUsersRequest,
	setReviewEndpoint,
	createGenericReviewRequest,
	createGenericUserUpdate,
	createGenericUserUpdateWithFnameLname,
	createGenericUserUpdateWithUsernameEmail,
	createGenericUserUpdateWithGenderDob,
	changePasswordEndpoint,
	randomPassword,
	createGenericExtendedProfileWithSkilllevel,
	createGenericExtendedProfileWithLocation,
	createInvalidAgeUser,
	createGenericUserUpdateWithInvalidDob,
	calculateAge,
	createMockGtaGame
};
