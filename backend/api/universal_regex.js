var nicknameRegex = /^[a-z0-9]{4,10}$/; // Alphanumerical lowercase 4 to 10 characters
var passwordRegex = /^[a-z0-9A-Z]{6,80}$/; // Alphanumerical 6 to 80 characters
var nameRegex = /^[a-zA-Z\'\-]*$/; // Alphabetical
var genderRegex = /^[m|f|o]$/i; // m/M for Male, f/F for Female, o/O for Other
var dateRegex = /^[0-3][0-9]\/[0-1][0-9]\/[0-9]{4}$/; // DD/MM/YYYY
var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var gameNameRegex = /^[a-z0-9A-Z\' ]{6,}$/; // Alphanumerical atleast 6 letters ' allowed and spaces
var gameTypeRegex = /^serious|casual$/i; // Serious or casual 
var gameDurationRegex = /^[0-9]*$/; // Any integer number for now
var gameTotalPlayersRegex = /^[0-9]*$/; // Any integer number for now
var gameGenderRegex = /^[m|f|a]$/i; // m/M for Male, f/F for Female, a/A for Any/No preferance
var gameDescriptionRegex = /^[a-zA-Z0-9\'\-\: ]*$/ // Alphanumerical with : - ' allowed and spaces
var gameLocationNotesRegex = /^[a-zA-Z0-9\'\-\: ]*$/ // Alphanumerical with : - ' allowed and spaces
var gameEnforcedParamRegex = /^age|gender$/i; // Skill, age or gender can be enforced

module.exports = {
	nicknameRegex,
	passwordRegex,
	nameRegex,
	genderRegex,
	dateRegex,
	emailRegex,
	gameNameRegex,
	gameTypeRegex,
	gameDurationRegex,
	gameTotalPlayersRegex,
	gameGenderRegex,
	gameDescriptionRegex,
	gameLocationNotesRegex,
	gameEnforcedParamRegex
}