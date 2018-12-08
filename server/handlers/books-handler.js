'use strict'

const ItemsService = require('../services/items-service')
/**
 * @swagger
 * resourcePath: /api/books
 * description: Services about Title By Query
 */
module.exports = {
    /**
     * @swagger
     * path: /api/books
     * operations:
     *   -  httpMethod: GET
     *      summary: Get the books List by query parameter
     *      notes: Returns an object with match with title
     *      consumes:
     *        - application/json
     *      parameters:
     *        - name: q
     *          description: Books Title
     *          paramType: query
     *          required: true
     *          type: string
     */
    titleByQuery: (req, res, next) => {
      ItemsService.getSearchItemsByQuery(req.params.q).then(response => {
        res.json(200, response)
      }).catch(err => {
        res.json(err.statusCode, err)
      })
      return next()
    }
}    