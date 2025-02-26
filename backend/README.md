# MERN-E-commerce Backend
*By [Muchael123]('https://github.com/Muchael123)*
## Table of Contents  
- [Installation](#Installation) 
- [Api References](#api-refences)

## Installation
To run and install the backend of the project:
 - Clone the repo
    ```bash
    git clone https://github.com/kinglui2/MERN-E-commerce.git
    ```
    - Move to the backend directory and install the packages. For this, ensure you have [nodejs](https://nodejs.org/en) installed
    ```bash
    cd backend
    npm install
    ```

## Api refences
The api has a hosted URI. Contact the admin of the repo for the url.
Or use the local one for your local development e.g `http://localhost:3000`
base_url = `url/api/v1`

### Api urls
 1. [authentication](#authentication-urls)

 ### Authentication Urls
 a. **Login**
  - Method : `POST`
 
  - STATUS_CODES : `200 - success`,
                    `400 - wrong password or email`,`400 - client errors`
  
   - Url: `{BASE_URL/auth/login}`                   
  - Body
  ```json
        {
        "email": "Your email",
        "password": "Yourpassword"
        }
```

  - Response

  ```json
    {
        "message": "Login successful",
        "token": "<access token here>",
        "user": {
            "id": "<mongo_id>",
            "email": "<email_address>",
            "role": "<role>"
        }
    }
 ```

 

    

