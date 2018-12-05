'use strict'

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
     *      summary: Get the Items List by query parameter
     *      notes: Returns an object with Items List
     *      consumes:
     *        - application/json
     *      parameters:
     *        - name: q
     *          description: Items name
     *          paramType: query
     *          required: true
     *          type: string
     */
    titleByQuery: (req, res, next) => {
      ItemsService.getSearchItemsByQuery(req.params.q).then(response => {
        //res.json(200, response)
        ProcessRequestStrategy.version('v1')
        ProcessRequestStrategy.channel('test')
        ProcessRequestStrategy.strategy('items-by-query-strategy')
        res.json(ProcessRequestStrategy.process(response))
  
      }).catch(err => {
        res.json(err.statusCode, err)
      })
      return next()
    }
}    