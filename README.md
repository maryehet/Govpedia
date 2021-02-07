# Govpedia

This project was submmited to the RTC BlackWings Hackathon 2021 by Team Gladiators

Contributors:
Adeola-Adesoba
maryehet
shettyd1
Mia Tran


### Quick Start
```bash
# Install dependencies
npm i
# Install dev-dependencies
npm i -D
# Serve on localhost:5004 (development)
npm run dev
# Serve on localhost:5004 (production)
npm start
```

#### Get a profile on govpedia
* Method - GET
* URL - https://govpedia.glitch.me/api/v1/govpedias/601f49282c6b4048a46011af
* Sample Response
```
{
    "success": true,
    "data": {
        "_id": "601f49282c6b4048a46011af",
        "title": "",
        "name": "Adriano Espaillat",
        "age": 66,
        "gender": "male",
        "districtRepresented": "",
        "yearInService": null,
        "email": "",
        "contact": "",
        "twitter": "RepEspaillat",
        "instagram": "repadrianoespaillat",
        "website": "",
        "partyAffiliation": "Democratic Party",
        "portfolio": "",
        "createdAt": "2021-02-07T02:48:38.609Z"
    }
}
```

#### Get all profiles on govpedia
* Method - GET
* URL - https://govpedia.glitch.me/api/v1/govpedias
* Sample Response
```
{
    {
            "_id": "601f49282c6b4048a46011a7",
            "title": "",
            "name": "Adam Kinzinger",
            "age": 42,
            "gender": "male",
            "districtRepresented": "",
            "yearInService": null,
            "email": "",
            "contact": "",
            "twitter": "repkinzinger",
            "instagram": "",
            "website": "",
            "partyAffiliation": "Republican Party",
            "portfolio": "",
            "createdAt": "2021-02-07T02:47:08.114Z"
        },
        {
            "_id": "601f49282c6b4048a46011ad",
            "title": "",
            "name": "Adrian Fenty",
            "age": 49,
            "gender": "male",
            "districtRepresented": "",
            "yearInService": null,
            "email": "",
            "contact": "",
            "twitter": "adrianfenty",
            "instagram": "",
            "website": "",
            "partyAffiliation": "Democratic Party",
            "portfolio": "",
            "createdAt": "2021-02-07T02:47:08.114Z"
        }
```

