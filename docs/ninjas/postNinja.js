module.exports = {
  post:{
    tags:['Ninjas'],
    summary: 'Create a ninja',
    description: 'Create a ninja',
    requestBody:{
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: "#/components/schemas/CreateNinja"
          }
        }
      }
    },
    responses: {
      '201': {
        description: 'A JSON information of the created ninja',
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
  }
}