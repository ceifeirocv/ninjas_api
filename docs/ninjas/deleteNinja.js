module.exports = {
  delete: {
    tags:['Ninjas'],
    summary: 'Delete a ninja',
    description: 'Delete and return the deleted ninja',
    parameters: [
      {
        in: 'path',
        name: 'id',
        required: true,
        schema: {
          type: 'string',
          format: 'uuid'
        }
      }
    ],
    responses: {
      '200': {
        description: 'A JSON ninja',
        content: {
          'application/json': {
            schema:{
                  $ref: "#/components/schemas/Ninjas"
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