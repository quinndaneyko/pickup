define({ "api": [
  {
    "type": "post",
    "url": "/login",
    "title": "Log into the app",
    "name": "Login",
    "group": "Authorization",
    "description": "<p>API used to login and obtain a refresh token.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password of the user</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The error field has a string with an exact error</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     HTTP/1.1 200 OK\n\t{\n   \"token\": \"b43a545f90ec60bf5ed2a4bd45d81a711de7ba658faa6899d8240343b857664fc967a76cd622235313db8e2ec053fe34c26c\",\n   \"user_id\": \"240\"\n\t}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example call::",
        "content": "{\n  \"email\": \"6209be52@mail.com\",\n  \"password\": \"fa2568a8dd82c24a6ee22df3f19d642d\"\n}",
        "type": "json"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/login"
      }
    ],
    "version": "0.0.0",
    "filename": "api/login_api.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "get",
    "url": "/refresh",
    "title": "Refresh your JWT token",
    "name": "RefreshToken",
    "group": "Authorization",
    "description": "<p>API used for getting a new JWT token using your refresh token.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jwt",
            "description": "<p>The JWT you have currently</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "refresh",
            "description": "<p>The refresh token you were given at signup</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>A JWT token that can be used to authenticate futher API calls</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     HTTP/1.1 200 OK\n\t\t{\n\t\t  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkc3NhZGFAbWFpbC5jb20iLCJpYXQiOjE1MDUxNTc2NjQsImV4cCI6MTUwNTE1ODU2NH0.HmhW4y-AZ1D5rMHbQ8RY0eBIGfo-8Lb_sFL1FrruFoc\"\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The error field has a string with an exact error</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example call:",
        "content": "{\n  \"jwt\": Encrypted_JWT_Token,\n  \"refresh\": RefreshToken\n}",
        "type": "json"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/refresh"
      }
    ],
    "version": "0.0.0",
    "filename": "api/refresh_api.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "delete",
    "url": "/refresh",
    "title": "Delete (revoke) a refresh token",
    "name": "RefreshToken_Delete",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jwt",
            "description": "<p>The JWT you have currently</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "refresh",
            "description": "<p>The refresh token you want revoked</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The error field has a string with an exact error</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example call:",
        "content": "{\n  \"jwt\": Encrypted_JWT_Token,\n  \"refresh\": RefreshToken\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     HTTP/1.1 200 OK\n\t{\n\t    \"status\": \"Successful refresh token delete\"\t\n\t}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/refresh"
      }
    ],
    "version": "0.0.0",
    "filename": "api/refresh_api.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "post",
    "url": "/register",
    "title": "Register a user account",
    "name": "RegisterUser",
    "group": "Authorization",
    "description": "<p>API used to register for a new account.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The unique username of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fname",
            "description": "<p>The first name of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lname",
            "description": "<p>The last name of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>The gender of the user (F/M/O)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dob",
            "description": "<p>The date of birth of the user (DD/MM/YYYY)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password of the user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>A JWT token that can be used to authenticate futher API calls</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>The id assigned to the user for unique identification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refresh",
            "description": "<p>A refresh token that can be used to generate JWTs throught the API</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n  \t\"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMjQwIiwiZW1haWwiOiJhZHNzYWRhQG1haWwuY29tIiwiaWF0IjoxNTA1MTU3NTA3LCJleHAiOjE1MDUxNTg0MDd9.r7h31S_wQTypjiSLh7TgeRZYnRNqJpCJCqUFoSUvxqI\",\n   \t\"refresh\": \"21251e5cc6e6a667f109ccc6f295c1595bc98ecc7cf8733e788fe1aab0ea14eeaf81990bbceb97874a6c4e8a7f5851e1ee89\",\n   \t\"user_id\": \"240\"\n\t }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The error field has a string with an exact error</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example call:",
        "content": "{\n  \"username\": \"abode_5\",\n  \"fname\": \"Abode\",\n  \"lname\": \"Saafan\",\n  \"gender\": \"M\",\n  \"dob\": \"25/03/1996\",\n  \"email\": \"abodesaafan@hotmail.com\",\n  \"password\": \"password123\"\n}",
        "type": "json"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/register"
      }
    ],
    "version": "0.0.0",
    "filename": "api/register_api.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "post",
    "url": "/games",
    "title": "Create a new game",
    "name": "CreateGame",
    "group": "Games",
    "description": "<p>API used for creating games. Games must not conflict with previous games the user has already created. Valid options for enforced_params are: gender, age</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "jwt",
            "description": "<p>Valid JWT</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the game you are creating</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>The type of the game you are creating (Serious, casual, ..)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "skill_offset",
            "description": "<p>The intended skill offset range for this game (0-10)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "total_players",
            "description": "<p>The total required players for the game</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "start_time",
            "description": "<p>The time the game starts (in unix epoch time)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "duration",
            "description": "<p>The duration of the game (in seconds as an int)</p>"
          },
          {
            "group": "Parameter",
            "type": "point",
            "optional": false,
            "field": "location",
            "description": "<p>The location of the game represented in location point object (lat/lng)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "location_notes",
            "description": "<p>how to get into the court</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Short description for the game (less than 250 characters)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gender",
            "description": "<p>The preferred for the game (if any)</p>"
          },
          {
            "group": "Parameter",
            "type": "int[]",
            "optional": false,
            "field": "age_range",
            "description": "<p>The preferred age range for the game (if any)</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]]",
            "optional": false,
            "field": "enforced_params",
            "description": "<p>List of parmeters that the creator wants to enforce</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "gameId",
            "description": "<p>The id of the game that has been created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"game_id\": 12\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The error field has a string with an exact error</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example call:",
        "content": "    {\n      \"jwt\": Encrypted_JWT_Token,\n      \"name\": \"abode's game\",\n      \"type\": \"casual\",\n      \"skill\": 5,\n      \"total_players_required\": 6,\n      \"start_time\": 1504272395,\n      \"duration\": 5400,\n      \"location\": {lat: 500.50, lng:500.50},\n\t\t    \"location_notes\": \"Come around the back and knock on the blue door\",\n      \"description\": \"Casual basketball game\",\n      \"gender\": \"A\",\n      \"age_range\": \"[20, 30]\",\n      \"enforced_params\": [\"gender\", \"age\"]\n    }",
        "type": "json"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/games"
      }
    ],
    "version": "0.0.0",
    "filename": "api/games_api.js",
    "groupTitle": "Games"
  },
  {
    "type": "get",
    "url": "/games/:gameid",
    "title": "Get users of a game",
    "name": "Get_game",
    "group": "Games",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>of the game</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The error field has a string with an exact error</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"user_id\":[ \"1\", \"2\", \"3\" ]\n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/games/:123"
      }
    ],
    "version": "0.0.0",
    "filename": "api/games_api.js",
    "groupTitle": "Games"
  },
  {
    "type": "put",
    "url": "games/:GAMEID/join/",
    "title": "Join a game",
    "name": "JoinGame",
    "group": "Games",
    "description": "<p>API used to join a game.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "game_id",
            "description": "<p>The id of the game.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The error field has a string with an exact error</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     HTTP/1.1 200 OK\n  {\n   \"token\": \"b43a545f90ec60bf5ed2a4bd45d81a711de7ba658faa6899d8240343b857664fc967a76cd622235313db8e2ec053fe34c26c\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example call::",
        "content": "{\n  \"game_id\": \"1\",\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMjQwIiwiZW1haWwiOiJhZHNzYWRhQG1haWwuY29tIiwiaWF0IjoxNTA1MTU3NTA3LCJleHAiOjE1MDUxNTg0MDd9.r7h31S_wQTypjiSLh7TgeRZYnRNqJpCJCqUFoSUvxqI\"\n}",
        "type": "json"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/games/:GAMEID/join/"
      }
    ],
    "version": "0.0.0",
    "filename": "api/games_api.js",
    "groupTitle": "Games"
  },
  {
    "type": "get",
    "url": "/search",
    "title": "Search API",
    "name": "Search",
    "group": "Search",
    "description": "<p>API used searching such as searching for games</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "jwt",
            "description": "<p>Valid JWT</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "object",
            "description": "<p>The object you are searching for (game, user)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "results_max",
            "description": "<p>The maximum number of results you want back // Game params</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "game_id",
            "description": "<p>The id of the game</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "game_name",
            "description": "<p>The name of the game</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "game_type",
            "description": "<p>The type of the game</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "game_skill",
            "description": "<p>The skill of the game</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "game_total_players",
            "description": "<p>The total players of the game</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "game_start_time",
            "description": "<p>The time the game starts</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "game_end_time",
            "description": "<p>The time the game ends</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "game_duration",
            "description": "<p>The duration of the game</p>"
          },
          {
            "group": "Parameter",
            "type": "point",
            "optional": false,
            "field": "game_location",
            "description": "<p>The location of the game represented in location point object (lat/lng)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "game_location_range",
            "description": "<p>The range of location in KM // User params</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>The username of the user you are looking for</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "list",
            "optional": false,
            "field": "results",
            "description": "<p>List of results as json objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  [\n      {\n      \"object\" : \"game\",\n      \"name\": \"abode's game\",\n      \"type\": \"casual\",\n      \"skill\": 5,\n      \"total_players_required\": 6,\n      \"start_time\": 1504272395,\n      \"duration\": 5400,\n      \"location\": {lat: 500.50, lng:500.50},\n      \"location_notes\": \"Come around the back and knock on the blue door\",\n      \"description\": \"Casual basketball game\",\n      \"gender\": \"A\",\n      \"age_range\": \"[20, 30]\",\n      \"enforced_params\": [\"gender\", \"age\"]\n      },\n      {\n      \"object\" : \"game\",\n      \"name\": \"abode's game pt II\",\n      \"type\": \"serious\",\n      \"skill\": 5,\n      \"total_players_required\": 10,\n      \"start_time\": 1504276395,\n      \"duration\": 5410,\n      \"location\": {lat: 520.50, lng:509.50},\n      \"location_notes\": \"Come around the back and knock on the red door\",\n      \"description\": \"Casual basketball game pt II\",\n      \"gender\": \"A\",\n      \"age_range\": \"[20, 35]\",\n      \"enforced_params\": [\"age\"]\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The error field has a string with an exact error</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example call:",
        "content": "{\n  \"jwt\": Encrypted_JWT_Token,\n  \"object\": \"user\",\n  \"username\": \"abode25\"\n}",
        "type": "json"
      },
      {
        "title": "Example call:",
        "content": "{\n  \"jwt\": Encrypted_JWT_Token,\n  \"object\": \"game\",\n  \"game_start_time\": 1506996322\n  \"game_type\" : \"serious\"\n}",
        "type": "json"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/search"
      }
    ],
    "version": "0.0.0",
    "filename": "api/search_api.js",
    "groupTitle": "Search"
  }
] });
