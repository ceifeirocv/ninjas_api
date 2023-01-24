module.exports = {
  put: {
    tags:['Ninjas'],
    summary: 'Update a ninja',
    description: 'Update and return the a ninja',
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
    requestBody:{
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: "#/components/schemas/UpdateNinja"
          }
        }
      }
    },
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