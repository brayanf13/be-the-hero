const express = require('express');
const cors = require('cors')
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)

app.listen(3333);

/**
 * Rota /Recurso
*/

/**
 * Métodos HTTP
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma infromação no back-end
 * PUT: Alterer uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query params: Parâmetros nomeados enviados na rota após o "?" de (Filtors, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select(*).where()
   */