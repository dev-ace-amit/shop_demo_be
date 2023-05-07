## Getting Started

### Use Node v18

First, install all the dependancies:

```bash
npm install
```

Add mongoDB url in app.js file at line no. 28 and seeder.js at line no. 6
eg: 
"mongodb+srv://<username>:<password>@cluster0.merc8gn.mongodb.net/?retryWrites=true"
```bash
you can get a free mongo cluster from "https://cloud.mongodb.com/"
```

Run the command to get dummy data of products and users:

```bash
npm run seed

```

Run the development server:

```bash
npm start

wait for a moment to see the console "Connected to MongoDB"

```

Now, your backend will be serving on
```bash
http://localhost:3001
```


Available Apis are:
```bash
http://localhost:3001/api/login
http://localhost:3001/api/products
http://localhost:3001/api/cart
http://localhost:3001/api/cart/:id
```

Test Users for FE:
```bash
user1@test.com/123456
user2@test.com/123456
user3@test.com/123456
```