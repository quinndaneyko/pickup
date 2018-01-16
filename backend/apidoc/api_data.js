define({ "api": [
  {
    "type": "delete",
    "url": "/delete",
    "title": "Delete account from pickup",
    "name": "delete_account",
    "group": "Account",
    "description": "<p>API used to delete your pickup account</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jwt",
            "description": "<p>User's jwt</p>"
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
            "description": "<p>Password of the user</p>"
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
          "content": "     HTTP/1.1 200 OK\n\t{\n\t}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example call::",
        "content": "{\n  \"jwt\": \"b43a545f90ec60bf5ed2a4bd45d81a711de7ba658faa6899d8240343b857664fc967a76cd622235313db8e2ec053fe34c26c\",\n  \"password\": \"coolcars23\"\n}",
        "type": "json"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "api/delete_account_api.js",
    "groupTitle": "Account"
  },
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
          "content": "     HTTP/1.1 200 OK\n\t{\n   \"token\": \"b43a545f90ec60bf5ed2a4bd45d81a711de7ba658faa6899d8240343b857664fc967a76cd622235313db8e2ec053fe34c26c\",\n   \"user_id\": \"240\"\n\t \"refresh\": \"bhiy123h1yu3k1jb3i1y3231321jkh312hakbnsdasd7fa6sd76xczz8a8sd9zcxasd\"\n\t}",
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
          "content": "     HTTP/1.1 200 OK\n\t{\n\t}",
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
            "description": "<p>The date of birth of the user (MM/DD/YYYY)</p>"
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
        "content": "{\n  \"username\": \"abode_5\",\n  \"fname\": \"Abode\",\n  \"lname\": \"Saafan\",\n  \"gender\": \"M\",\n  \"dob\": \"03/25/1996\",\n  \"email\": \"abodesaafan@hotmail.com\",\n  \"password\": \"password123\"\n}",
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
    "type": "put",
    "url": "/friends",
    "title": "Accept a friend request",
    "name": "AcceptFriend",
    "group": "Friends",
    "description": "<p>API used for accepting friend requests.</p>",
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
            "type": "int",
            "optional": false,
            "field": "user_Id",
            "description": "<p>The user whome you want to block.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>The status of the request should be 'accepted'</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"accepted\"\n}",
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
        "content": "{\n  \"jwt\": Encrypted_JWT_Token,\n  \"user_id\": 3,\n}",
        "type": "json"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/friends"
      }
    ],
    "version": "0.0.0",
    "filename": "api/friends_api.js",
    "groupTitle": "Friends"
  },
  {
    "type": "put",
    "url": "/friends",
    "title": "Block a user",
    "name": "BlockFriend",
    "group": "Friends",
    "description": "<p>API used for blocking users</p>",
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
            "type": "int",
            "optional": false,
            "field": "user_ID",
            "description": "<p>The user whome you want to block.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>The status of the request should be 'blocked'</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"blocked\"\n}",
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
        "content": "{\n  \"jwt\": Encrypted_JWT_Token,\n  \"user_id\": 3,\n}",
        "type": "json"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/friends"
      }
    ],
    "version": "0.0.0",
    "filename": "api/friends_api.js",
    "groupTitle": "Friends"
  },
  {
    "type": "delete",
    "url": "/friends",
    "title": "Decline a friend request, cancel a friend request, or delete a friend",
    "name": "DeclineFriend",
    "group": "Friends",
    "description": "<p>API used for declining friend requests, cancelling them, or removing existing friends.</p>",
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
            "type": "int",
            "optional": false,
            "field": "user_Id",
            "description": "<p>The user whome you want to remove/decline.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>The status of the request should be 'declined', 'cancelled', or 'removed'</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"removed\"\n}",
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
        "content": "{\n  \"jwt\": Encrypted_JWT_Token,\n  \"user_id\": 3,\n}",
        "type": "json"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/friends"
      }
    ],
    "version": "0.0.0",
    "filename": "api/friends_api.js",
    "groupTitle": "Friends"
  },
  {
    "type": "get",
    "url": "/friends",
    "title": "Lists all friends for a user",
    "name": "ListFriends",
    "group": "Friends",
    "description": "<p>API used for listing friends of a user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "jwt",
            "description": "<p>Valid JWT</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "JSON",
            "description": "<p>The list of users with userId, firstName, lastName</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\t\t\t{\n\t\t\t\t\"user_id\": 34,\n\t\t\t\t\"fname\": 'Kattie',\n\t\t\t\t\"lname\": 'Katya'\n\t\t\t}",
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
        "content": "{\n  \"jwt\": Encrypted_JWT_Token,\n}",
        "type": "json"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/friends"
      }
    ],
    "version": "0.0.0",
    "filename": "api/friends_api.js",
    "groupTitle": "Friends"
  },
  {
    "type": "post",
    "url": "/friends",
    "title": "Send a friend request",
    "name": "SendFriendRequest",
    "group": "Friends",
    "description": "<p>API used for sending friend requests.</p>",
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
            "type": "int",
            "optional": false,
            "field": "user_Id",
            "description": "<p>The user, youre sending a friend request to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>The status of the request should be 'invite' or 'friends'</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"invite\"\n}",
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
        "content": "{\n  \"jwt\": Encrypted_JWT_Token,\n  \"user_id\": 3,\n}",
        "type": "json"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/friends"
      }
    ],
    "version": "0.0.0",
    "filename": "api/friends_api.js",
    "groupTitle": "Friends"
  },
  {
    "type": "get",
    "url": "/friends",
    "title": "Lists all blocked users for a user",
    "name": "listBlockedUsers",
    "group": "Friends",
    "description": "<p>API used for listing blocked users  of a user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "jwt",
            "description": "<p>Valid JWT</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "JSON",
            "description": "<p>The list of users with userId, firstName, lastName</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\t\t\t{\n\t\t\t\t\"user_id\": 34,\n\t\t\t\t\"fname\": 'Kattie',\n\t\t\t\t\"lname\": 'Katya'\n\t\t\t}",
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
        "content": "{\n  \"jwt\": Encrypted_JWT_Token,\n}",
        "type": "json"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/friends"
      }
    ],
    "version": "0.0.0",
    "filename": "api/friends_api.js",
    "groupTitle": "Friends"
  },
  {
    "type": "get",
    "url": "/friends",
    "title": "Lists all friend requests for a user",
    "name": "listFriendRequest",
    "group": "Friends",
    "description": "<p>API used for listing friend requests for a user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "jwt",
            "description": "<p>Valid JWT</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "JSON",
            "description": "<p>The list of users with userId, firstName, lastName</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\t\t\t{\n\t\t\t\t\"user_id\": 34,\n\t\t\t\t\"fname\": 'Kattie',\n\t\t\t\t\"lname\": 'Katya'\n\t\t\t}",
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
        "content": "{\n  \"jwt\": Encrypted_JWT_Token,\n}",
        "type": "json"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/friends"
      }
    ],
    "version": "0.0.0",
    "filename": "api/friends_api.js",
    "groupTitle": "Friends"
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
            "description": "<p>The total required players for the game (between 2 and 100)</p>"
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
        "content": "{\n  \"jwt\": Encrypted_JWT_Token,\n  \"name\": \"abode's game\",\n  \"type\": \"casual\",\n  \"skill\": 5,\n  \"total_players_required\": 6,\n  \"start_time\": 1504272395,\n  \"duration\": 5400,\n  \"location\": {lat: 500.50, lng:500.50},\n  \"location_notes\": \"Come around the back and knock on the blue door\",\n  \"description\": \"Casual basketball game\",\n  \"gender\": \"A\",\n  \"age_range\": \"[20, 30]\",\n  \"enforced_params\": [\"gender\", \"age\"]\n}",
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
    "url": "/games/getUsers",
    "title": "Get users of a game",
    "name": "Get_game",
    "group": "Games",
    "description": "<p>API used for getting the user of a game and if you have a reviewed them before. Game id has to correspond to a game actually created.</p>",
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
          "content": "     HTTP/1.1 200 OK\n    {\n\t\t[{ user_id : 23, reviewed: false}, {user_id : 100, reviewed: true}]\n     }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example call::",
        "content": "  {\n    \"game_id\": \"1\",\n    \"jwt\": Encrypted_JWT_Token\n\t}",
        "type": "json"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/games/getUsers"
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
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "jwt",
            "description": "<p>Valid JWT</p>"
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
          "content": "     HTTP/1.1 200 OK\n  {\n   \"game_id\": \"1\"\n\t}",
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
    "type": "delete",
    "url": "games/:GAMEID/leave/",
    "title": "Leave a game",
    "name": "LeaveGame",
    "group": "Games",
    "description": "<p>API used to leave a game.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "game_id",
            "description": "<p>The id of the game.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jwt",
            "description": "<p>The jwt of the current user.</p>"
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
          "content": "     HTTP/1.1 200 OK\n  {\n\t}",
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
        "url": "/api/games/:GAMEID/leave/"
      }
    ],
    "version": "0.0.0",
    "filename": "api/games_api.js",
    "groupTitle": "Games"
  },
  {
    "type": "get",
    "url": "profile/",
    "title": "Get private profile",
    "name": "GetAdminProfile",
    "group": "Profiles",
    "description": "<p>API used to get your own administrative profile</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jwt",
            "description": "<p>The jwt of the current user.</p>"
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
          "content": "     HTTP/1.1 200 OK\n  {\n    \"user_id\" : 1\n\t  \"username\" : \"abode1\"\n\t  \"fname\" : \"abode\"\n\t  \"lname\" : \"saafan\"\n\t  \"dob\" : 01/01/1996\n\t  \"gender\" : \"M\"\n\t  \"email\" : \"abode@mail.com\"\n\t}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example call::",
        "content": "{\n  \"jwt\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMjQwIiwiZW1haWwiOiJhZHNzYWRhQG1haWwuY29tIiwiaWF0IjoxNTA1MTU3NTA3LCJleHAiOjE1MDUxNTg0MDd9.r7h31S_wQTypjiSLh7TgeRZYnRNqJpCJCqUFoSUvxqI\"\n}",
        "type": "json"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/profile"
      }
    ],
    "version": "0.0.0",
    "filename": "api/profile_api.js",
    "groupTitle": "Profiles"
  },
  {
    "type": "get",
    "url": "/extendedProfile",
    "title": "Get User's extendedProfile",
    "name": "getExtendedProfile",
    "group": "Profiles",
    "description": "<p>API used for getting a user's extended Profile.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jwt",
            "description": "<p>The JWT you have currently</p>"
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
            "field": "User",
            "description": "<p>'s extended profile entry (user_id, skilllevel, age, gender, location, average_review, top_tag)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     HTTP/1.1 200 OK\n\t\t{\n\t\t\"user_id\": 164\n\t\t\"skilllevel\": 7\n\t\t\"age\": 24\n\t\t\"gender\": M\n\t\t\"location\": {lat: 124.32 lng: -96.23}\n\t\t\"average_review\": 3.76\n\t\t\"top_tag\": 4\n\t\t}",
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
            "description": "<p>An error is given for invalid user_ID</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example call:",
        "content": "{\n  \"jwt\": Encrypted_JWT_Token,\n}",
        "type": "json"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/extendedProfile"
      }
    ],
    "version": "0.0.0",
    "filename": "api/extended_profile.js",
    "groupTitle": "Profiles"
  },
  {
    "type": "put",
    "url": "/extendedProfile",
    "title": "Update User's Extended Profile",
    "name": "updateExtendedProfile",
    "group": "Profiles",
    "description": "<p>API used for updating user's extended profile.</p>",
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
            "field": "skill_level",
            "description": "<p>The skill level of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>The location of the user</p>"
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
          "content": "     HTTP/1.1 200 OK\n\t\t{\n\t\t}",
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
        "content": "    {\n      \"jwt\": Encrypted_JWT_Token,\n\t\t\"skill_level\": 3,\n\t\t\"location\": Mississauga\n    }",
        "type": "json"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/extendedProfile"
      }
    ],
    "version": "0.0.0",
    "filename": "api/extended_profile.js",
    "groupTitle": "Profiles"
  },
  {
    "type": "get",
    "url": "/reviews/setReview",
    "title": "Set the review of a player for a particular game.",
    "name": "Set_Review",
    "group": "Reviews",
    "description": "<p>API used for setting the review of a user of a game.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>of the game</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "rating",
            "description": "<p>of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tags",
            "description": "<p>describing the user</p>"
          },
          {
            "group": "Parameter",
            "type": "bool",
            "optional": false,
            "field": "reviewed",
            "description": "<p>already or not</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "jwt",
            "description": "<p>Valid JWT</p>"
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
          "content": " HTTP/1.1 200 OK\n{\n  \"Review added succesfully.\"\"\n }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example call::",
        "content": "{\n  \"gameId\": \"1\",\n  \"userId\": \"1\",\n  \"rating\": \"1\",\n  \"tags\": [\"1\", \"2\"],\n  \"reviewed\": \"true\",\n  \"jwt\": Encrypted_JWT_Token\n}",
        "type": "json"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/reviews/setReview"
      }
    ],
    "version": "0.0.0",
    "filename": "api/reviews_api.js",
    "groupTitle": "Reviews"
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
            "field": "search_object",
            "description": "<p>The object you are searching for (game, user)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "results_max",
            "description": "<p>The maximum number of results you want back (default is 20) // Game params</p>"
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
            "field": "game_skill_min",
            "description": "<p>The minimum skill of the game</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "game_skill_max",
            "description": "<p>The maximum skill of the game</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n  [\n      {\n      \"search_object\" : \"game\",\n      \"name\": \"abode's game\",\n      \"type\": \"casual\",\n      \"skill_min\": 5,\n      \"skill_max\": 7,\n      \"total_players_required\": 6,\n      \"start_time\": 1504272395,\n      \"duration\": 5400,\n      \"location\": {lat: 500.50, lng:500.50},\n      \"location_notes\": \"Come around the back and knock on the blue door\",\n      \"description\": \"Casual basketball game\",\n      \"gender\": \"A\",\n      \"age_range\": \"[20, 30]\",\n      \"enforced_params\": [\"gender\", \"age\"]\n      },\n      {\n      \"search_object\" : \"game\",\n      \"name\": \"abode's game pt II\",\n      \"type\": \"serious\",\n      \"skill_min\": 5,\n      \"skill_max\": 10,\n      \"total_players_required\": 10,\n      \"start_time\": 1504276395,\n      \"duration\": 5410,\n      \"location\": {lat: 520.50, lng:509.50},\n      \"location_notes\": \"Come around the back and knock on the red door\",\n      \"description\": \"Casual basketball game pt II\",\n      \"gender\": \"A\",\n      \"age_range\": \"[20, 35]\",\n      \"enforced_params\": [\"age\"]\n      }\n  ]\n}",
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
        "content": "{\n  \"jwt\": Encrypted_JWT_Token,\n  \"search_object\": \"user\",\n  \"username\": \"abode25\"\n}",
        "type": "json"
      },
      {
        "title": "Example call:",
        "content": "{\n  \"jwt\": Encrypted_JWT_Token,\n  \"search_object\": \"game\",\n  \"game_start_time\": 1506996322\n  \"game_type\" : \"serious\"\n}",
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
