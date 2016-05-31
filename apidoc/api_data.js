define({ "api": [
  {
    "type": "get",
    "url": "/appointments/:id",
    "title": "Get appointment by ID",
    "name": "GetSpecialistAppointments",
    "group": "Appointments",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Appointment ID</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n returns List of Appointment Object",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Appointments"
  },
  {
    "type": "get",
    "url": "/appointments/specialist/:id",
    "title": "Get all appointments of Specialist",
    "name": "GetSpecialistAppointments",
    "group": "Appointments",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Specialist ID</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n returns List of Appointment Object",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Appointments"
  },
  {
    "type": "get",
    "url": "/appointments/user/:id",
    "title": "Get all appointments of User",
    "name": "GetUserAppointments",
    "group": "Appointments",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User ID</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n returns List of Appointment Object",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Appointments"
  },
  {
    "type": "post",
    "url": "/appointments",
    "title": "Post a new appointment request",
    "name": "RequestAppointment",
    "group": "Appointments",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>User ID</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>MiniUser</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sid",
            "description": "<p>Specialist ID</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "specialist",
            "description": "<p>MiniUser</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subservicetype",
            "description": "<p>Sub-Service type (full string not ID)</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "wdid",
            "description": "<p>Work day ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "[String]",
            "optional": false,
            "field": "timeslots",
            "description": "<p>Contain only the starting slot (the specialist will fill the duration).</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Appointments"
  },
  {
    "type": "put",
    "url": "/appointments",
    "title": "Update appointment status",
    "name": "UpdateAppointment",
    "group": "Appointments",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Appointment",
            "optional": false,
            "field": "ApppointmentObject",
            "description": "<p>The Appointment Object to be updated</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Appointments"
  },
  {
    "type": "post",
    "url": "api/appointments/tokenUpdate/",
    "title": "Update Token in the user appointments",
    "name": "UpdateToken",
    "group": "Appointments",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User ID</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User Token</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n returns List of Appointment Object",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Appointments"
  },
  {
    "type": "delete",
    "url": "/specialists/workdate/:id",
    "title": "Delete a WorkDate from the specialist's schedule",
    "name": "DeleteWorkDate",
    "group": "Calendar",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The workdate _id</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "returns Specialist Object",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Calendar"
  },
  {
    "type": "get",
    "url": "api/calendar/schedule/owner/:id",
    "title": "Get specialist's schedule",
    "name": "GetSchedule",
    "group": "Calendar",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The specialist&#39;s id.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "returns A specialist working schedule",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Calendar"
  },
  {
    "type": "get",
    "url": "/calendar/:id",
    "title": "Get specialist's schedule",
    "name": "GetWorkDates",
    "group": "Calendar",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The specialist&#39;s id.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "returns List of WorkDate Objects",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Calendar"
  },
  {
    "type": "post",
    "url": "api/calendar/schedule",
    "title": "Post specialist's schedule",
    "name": "PostSchedule",
    "group": "Calendar",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>String ID of the Specialist</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "days",
            "description": "<p>String array of days</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timeblocks",
            "description": "<p>String array of timeblocks</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "returns A specialist working schedule",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Calendar"
  },
  {
    "type": "post",
    "url": "/calendar/workdate/:id",
    "title": "Post a WorkDate in the specialist's schedule",
    "name": "PostWorkDate",
    "group": "Calendar",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The specialist&#39;s id.</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "workday",
            "description": "<p>The Date of the workdate</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "wdid",
            "description": "<p>string representation of the Date</p> "
          },
          {
            "group": "Parameter",
            "type": "[String]",
            "optional": false,
            "field": "timeslots",
            "description": "<p>An Array of time slots in the day</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "returns Specialist Object",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Calendar"
  },
  {
    "type": "put",
    "url": "/specialists/workdate/:id",
    "title": "Update a WorkDate on the specialist's schedule",
    "name": "UpdateWorkDate",
    "group": "Calendar",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The workdate _id</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "returns Specialist Object",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Calendar"
  },
  {
    "type": "post",
    "url": "api/tests/push/:token",
    "title": "Send  push to Token",
    "name": "SendPush",
    "group": "Pushes",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token of the device to push the message</p> "
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "Messages",
            "description": "<p>{&quot;language&quot;:&quot;message&quot;}</p> "
          }
        ]
      }
    },
    "filename": "./server.js",
    "groupTitle": "Pushes"
  },
  {
    "type": "post",
    "url": "/review",
    "title": "Post a new review",
    "name": "PostReview",
    "group": "Reviews",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sname",
            "description": "<p>The specialist&#39;s name</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pic",
            "description": "<p>The specialist&#39;s profile pic</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sid",
            "description": "<p>The specialist&#39;s ID</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stoken",
            "description": "<p>The specialist&#39;s push token</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uname",
            "description": "<p>The name of the user submitting the review</p> "
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rating",
            "description": "<p>The rating given by the user</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "review",
            "description": "<p>The review is available given by the user</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Reviews"
  },
  {
    "type": "get",
    "url": "/search/all",
    "title": "Search All",
    "name": "SearchAll",
    "group": "Search",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "returns List of Specialist Objects",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "/search/location",
    "title": "Search Specialists by Geolocation",
    "name": "SearchLocation",
    "group": "Search",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "returns List of Specialist Objects",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "/api/search/location/current/:long/:lat/:max",
    "title": "Search Specialists by current Geolocation. Used for \"Book now\" function",
    "name": "SearchLocationCurrent",
    "group": "Search",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "returns List of Specialist Objects",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "/api/search/location/current/:long/:lat/:max",
    "title": "Search Specialists by current Geolocation. Used for \"Book now\" function",
    "name": "SearchLocationCurrent",
    "group": "Search",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "returns List of Specialist Objects",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "/api/search/location/current/:long/:lat/:max",
    "title": "Search Specialists by current Geolocation. Used for \"Book now\" function",
    "name": "SearchLocationCurrent",
    "group": "Search",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "returns List of Specialist Objects",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "/search",
    "title": "Search Specialists",
    "name": "SearchSpecialists",
    "group": "Search",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "returns List of Specialist Objects",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "/specialists/active",
    "title": "Get all the Specialists",
    "name": "GetActive",
    "group": "Specialists",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "returns List of Specialist Objects",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Specialists"
  },
  {
    "type": "get",
    "url": "/specialists",
    "title": "Get all the Specialists",
    "name": "GetSpecialists",
    "group": "Specialists",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "returns List of Specialist Objects",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Specialists"
  },
  {
    "type": "get",
    "url": "/specialists/:id",
    "title": "Get Specialist by ID",
    "name": "GetSpecialistsById",
    "group": "Specialists",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The specialist&#39;s id</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "returns Specialist Object",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Specialists"
  },
  {
    "type": "post",
    "url": "api/specialists",
    "title": "Post a new specialist user",
    "name": "PostSpecialist",
    "group": "Specialists",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The username.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fistname",
            "description": "<p>The user&#39;s first name.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>The user&#39;s last name.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The user&#39;s registartion email.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>The user&#39;s registration phone.</p> "
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "verified",
            "defaultValue": "false",
            "description": "<p>The status of the verification process.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "returns Active Specialist object",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Specialists"
  },
  {
    "type": "put",
    "url": "/specialists",
    "title": "Update the Specialist object",
    "name": "UpdateSpecialist",
    "group": "Specialists",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Specialist&#39;s ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The username.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fistname",
            "description": "<p>The user&#39;s first name.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>The user&#39;s last name.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The user&#39;s registartion email.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>The user&#39;s registration phone.</p> "
          },
          {
            "group": "Parameter",
            "type": "[Number]",
            "optional": false,
            "field": "loc",
            "description": "<p>Geolocation of Specialist</p> "
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "verified",
            "defaultValue": "false",
            "description": "<p>The status of the verification process.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "returns Modified Specialist object",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Specialists"
  },
  {
    "type": "post",
    "url": "api/specialists/availability",
    "title": "Set the Availability Status of the Specialist",
    "name": "availableSpecialist",
    "group": "Specialists",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Specialist&#39;s ID</p> "
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "double",
            "description": "<p>loc Specialist&#39;s current geolocation. Should be set to base Geolocation if status is off.</p> "
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Availability status</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "returns 200 Success",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "returns 401 Error",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Specialists"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Get User by ID [deprecated]",
    "name": "GetUSerById",
    "group": "Users",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The user&#39;s id</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "returns User Object",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Get all the Users",
    "name": "GetUsers",
    "group": "Users",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "returns List of User Objects",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Post a new User",
    "name": "PostUser",
    "group": "Users",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The username.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fistname",
            "description": "<p>The user&#39;s first name.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>The user&#39;s last name.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The user&#39;s registartion email.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>The user&#39;s registration phone.</p> "
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "verified",
            "defaultValue": "false",
            "description": "<p>The status of the verification process.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "returns Active User object",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "returns Active User object",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/users",
    "title": "Update the User object",
    "name": "UpdateUser",
    "group": "Users",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The User&#39;s ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The username.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fistname",
            "description": "<p>The user&#39;s first name.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>The user&#39;s last name.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The user&#39;s registartion email.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>The user&#39;s registration phone.</p> "
          },
          {
            "group": "Parameter",
            "type": "[Number]",
            "optional": false,
            "field": "loc",
            "description": "<p>Geolocation of User</p> "
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "verified",
            "defaultValue": "false",
            "description": "<p>The status of the verification process.</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "returns Modified Specialist object",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/authenticate/id/:id",
    "title": "Authenticate User by their ID",
    "name": "AuthenticateByID",
    "group": "authenticate",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The user&#39;s id</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "returns Specialist Object",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"_id\":\"55af89f973bb03fa931a3e90\",\n     \"password\":\"1234\",\n     \"firstname\":\"Testin\",\n     \"lastname\":\"Test\",\n     \"usertype\":\"specialist\",\n     \"servicesnum\":0,\n     \"rating\":0,\n     \"address\":\"test new address\",\n     \"mood\":\"\",\n     \"calltype\":\"out\",\n     \"profilepic\":\"\",\n     \"background\":\"\",\n     \"email\":\"test@test.com\",\n     \"phone\":null,\n     \"loc\":[38.1000480651855,23.8095989227295],\n     \"currentloc\":[38.1000480651855,23.8095989227295],\n     \"verified\":false,\n     \"pushtoken\":\"APA91bG7Zn5qSsLOYBq8qTjkkdLWeACAsFe0sUi3l-3o_hcLr12iFJC4kVy74Id3NRnQPxaEi4oyFRXxGXU-NKjHyec6qjglFKR0CFF912q6lM0TZEBZoiLzetChWgseyjT2c1cEzk-7\",\n     \"availablenow\":false,\n     \"subscriptionstatus\":\"inactive\",\n     \"subscriptionends\":\"2001-01-03T02:00:00.000Z\",\n     \"profilethumb\":null,\n     \"taxid\":\"123456789\",\n     \"workschedule\":{\"MON\":[\"2\",\"3\",\"4\",\"5\"]},\n     \"favorites\":[{\"pic\":\"https://s3-eu-west-1.amazonaws.com/cityfab/ImageUploads/specialist/55af89f973bb03fa931a3e90/profile.jpg\",\"id\":\"55af89f973bb03fa931a3e90\"}],\n     \"created\":\"2015-07-22T12:18:01.977Z\",\n     \"torate\":null,\n     \"gallery\":[],\n     \"reviews\":[],\n     \"subservices\":[],\n     \"products\":[],\n     \"languages\":[],\n     \"schedule\":[{\"_id\":null,\"timeblocks\":[],\"days\":[]}],\n     \"services\":[],\n     \"addresses\":[{\"alias\":\"\",\"location\":\"test new address\",\"_id\":\"55ba0b3e0cb577ee397c6135\",\"geolocation\":[]},{\"alias\":null,\"location\":\"a\",\"_id\":\"55ba0b3e0cb577ee397c6134\",\"geolocation\":null}]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "authenticate"
  },
  {
    "type": "post",
    "url": "api/authenticate/",
    "title": "Authenticate User by username & password",
    "name": "AuthenticateByUsername",
    "group": "authenticate",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The user&#39;s email</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The user&#39;s password</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "returns User Object",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"_id\":\"55af89f973bb03fa931a3e90\",\n     \"password\":\"1234\",\n     \"firstname\":\"Testin\",\n     \"lastname\":\"Test\",\n     \"usertype\":\"specialist\",\n     \"servicesnum\":0,\n     \"rating\":0,\n     \"address\":\"test new address\",\n     \"mood\":\"\",\n     \"calltype\":\"out\",\n     \"profilepic\":\"\",\n     \"background\":\"\",\n     \"email\":\"test@test.com\",\n     \"phone\":null,\n     \"loc\":[38.1000480651855,23.8095989227295],\n     \"currentloc\":[38.1000480651855,23.8095989227295],\n     \"verified\":false,\n     \"pushtoken\":\"APA91bG7Zn5qSsLOYBq8qTjkkdLWeACAsFe0sUi3l-3o_hcLr12iFJC4kVy74Id3NRnQPxaEi4oyFRXxGXU-NKjHyec6qjglFKR0CFF912q6lM0TZEBZoiLzetChWgseyjT2c1cEzk-7\",\n     \"availablenow\":false,\n     \"subscriptionstatus\":\"inactive\",\n     \"subscriptionends\":\"2001-01-03T02:00:00.000Z\",\n     \"profilethumb\":null,\n     \"taxid\":\"123456789\",\n     \"workschedule\":{\"MON\":[\"2\",\"3\",\"4\",\"5\"]},\n     \"favorites\":[{\"pic\":\"https://s3-eu-west-1.amazonaws.com/cityfab/ImageUploads/specialist/55af89f973bb03fa931a3e90/profile.jpg\",\"id\":\"55af89f973bb03fa931a3e90\"}],\n     \"created\":\"2015-07-22T12:18:01.977Z\",\n     \"torate\":null,\n     \"gallery\":[],\n     \"reviews\":[],\n     \"subservices\":[],\n     \"products\":[],\n     \"languages\":[],\n     \"schedule\":[{\"_id\":null,\"timeblocks\":[],\"days\":[]}],\n     \"services\":[],\n     \"addresses\":[{\"alias\":\"\",\"location\":\"test new address\",\"_id\":\"55ba0b3e0cb577ee397c6135\",\"geolocation\":[]},{\"alias\":null,\"location\":\"a\",\"_id\":\"55ba0b3e0cb577ee397c6134\",\"geolocation\":null}]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "authenticate"
  },
  {
    "type": "get",
    "url": "/authenticate/email/:email",
    "title": "Authenticate User by their email",
    "name": "ValidateEmail",
    "group": "authenticate",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The user&#39;s email</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "returns 200 Success",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "returns 401 Already Exists",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "authenticate"
  },
  {
    "type": "get",
    "url": "/api/notifications/:id",
    "title": "Get Messages by user ID",
    "name": "GetMessages",
    "group": "notifications",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>The user&#39;s id</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "returns List of Notification objects",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "notifications"
  },
  {
    "type": "post",
    "url": "api/subscription/",
    "title": "Set the status of the subscription",
    "name": "setSubscription",
    "group": "subscription",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Specialist&#39;s ID</p> "
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "String",
            "description": "<p>status The status of the subscription (active/inactive)</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "optional",
            "description": "<p>if active, set the end date of teh subscription</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "returns 200 Success",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "returns 401 Error",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "subscription"
  }
] });