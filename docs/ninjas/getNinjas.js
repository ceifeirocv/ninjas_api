module.exports = {
  get: {
    tags:['Ninjas'],
    summary: 'Return a list of Ninjas',
    description: 'Return a list of all Ninjas in the system',
    responses: {
      '200': {
        description: 'A JSON array of ninjas',
        content: {
          'application/json': {
            schema:{
                  type: 'array',
                  items: {
                    $ref: "#/components/schemas/Ninjas"
              }
            }
          }
        }
      },
      '422':{
        description: 'Unprocessable Entity',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Error'
            }
          }
        }
      }
    }
  },
}