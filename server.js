const router = require('express').Router();
const session = require('express-session');
const routes = require('./Develop/controllers');


const sequelize = require('./Develop/config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = router();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'ifBooksCouldKill secret session key',
  cookie: {
    httpOnly: true,
    secure: false,
    sameSite: 'strict'
  },
  resave: false,
  saveUninitialized: true,
 store: new SequelizeStore({
  db: sequelize
 })
};

app.use(session(sess));

const hbs = handlebars.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(router.json());
app.use(router.urlencoded({ extended: true }));
app.use(router.static('public'));
app.use(router.static(path.resolve(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


module.exports = router;