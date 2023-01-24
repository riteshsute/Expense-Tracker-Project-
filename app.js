const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const sequelize = require('./util/database');

const Product = require('./models/product')

const User = require('./models/user')

const Expense = require('./models/expense');
const exp = require('constants');
const { error } = require('console');

var cors = require('cors');
// database

const app = express();

app.use(cors())

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const userController = require('./routes/user')
const expenseController = require('./routes/expense')

const { userInfo } = require('os');
const { use } = require('./routes/admin');

app.use(bodyParser.json({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin', adminRoutes);

// app.use(shopRoutes);

app.use(userController);
app.use(expenseController);


// { force: true }
sequelize
.sync()
.then(result => {
    // console.log(result);
    app.listen(3000);
})
.catch(err => {
    console.log(err);
});





