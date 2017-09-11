var uniqueEmailError = "Register failed: Email is not unique";
var registerFailError = "Failed to register user into the database";
var userIdFail = "Failed to retrieve user id";
var invalidNickname = "Invalid Nickname. Nicknames are Alphanumerical, lowercase and 4 to 10 characters";
var invalidPassword = "Invalid password. Passwords are Alphanumerical and must be between 6 to 80 characters";
var wrongEmailPassword = "Username or password is not valid";
var invalidName = "Invalid name. Names must be Alphabetical.";
var invalidGender = "Invalid gender parameter. Gender can be specified as M/m, F/f, O/o.";
var invalidDob = "Invalid date of birth. Dates must be entered in as DD/MM/YYYY";
var invalidEmail = "Invalid email. Email must be in valid format.";
var emailNotRegistered = "Invalid email. Email not registered.";
var noRefreshToken = "No refresh token has been found for you, please attempt to login to acquire a new token";
var createRefreshFail = "Unable to create refresh token";
var invalidJwt = "The JWT token you have provided is invalid";
var invalidGameName = "The game name you have entered is invalid";
var invalidGameType = "The game type you have entered is invalid";
var invalidGameDuration = "The game duration has to be specified as time in seconds";
var invalidGameTotalPlayers = "The total players required for a game must be specified as an integer";
var invalidGameGenderPreference = "The gender preference you specified is not valid";
var invalidGameStartTime = "The game start time you specified is not valid";
var invalidGameAgeRange = "The age range you specified is not valid";
var invalidGameLocation = "The game location you specified is not valid";
var invalidLocationNotes = "The location notes description you specified is not valid";
var invalidGameDescription = "The game description you specified is not valid";
var invalidEnforcedParamList = "The enforced parameters list you have specified is not valid";
var invalidGameCreation = "Error creating the game";
var invalidGameSkillOffset = "The game skill offset you have entered is invalid";
var invalidGameScheduleConflict = "The game you are trying to create can not be created because the time conflicts with another game you have created";

module.exports = {
	uniqueEmailError,
	registerFailError,
	userIdFail,
	invalidNickname,
	invalidPassword,
    wrongEmailPassword,
	invalidName,
	invalidGender,
	invalidDob,
	invalidEmail,
    emailNotRegistered,
	noRefreshToken,
	createRefreshFail,
	invalidJwt,
	invalidGameName,
	invalidGameType,
	invalidGameDuration,
	invalidGameTotalPlayers,
	invalidGameGenderPreference,
	invalidGameStartTime,
	invalidGameAgeRange,
	invalidGameLocation,
	invalidLocationNotes,
	invalidGameDescription,
	invalidEnforcedParamList,
	invalidGameCreation,
	invalidGameSkillOffset,
	invalidGameScheduleConflict
}