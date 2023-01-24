module.exports = {
  components : {
    schemas: {
      Geo: {
        type: "object",
        properties: {
          type: {
            type:"string",
            example: "Point"
          },
          coordinate:{
            type: "array",
            example: "[125.6, 10.1]"
          },
        }
      },
      Ninjas: {
        type: "object",
        properties: {
          _id: {
            type: "string",
            example: "63cbb4e199eb8b5dc4c02ac4",
          },
          name: {
            type: "string",
            example: "ceifeiro"            
          },
          rank: {
            type: "string",
            example: "Junior"
          },
          available:{
            type: "boolean",
            example: false
          }
        }
      },
      CreateNinja: {
        type: "object",
        properties: {
          name: {
            type: "string",
            example: "ceifeiro"            
          },
          rank: {
            type: "string",
            example: "Junior"
          },
          available:{
            type: "boolean",
            example: false
          }
        },
        required: ['name', 'rank']
      },
      UpdateNinja: {
        type: "object",
        properties: {
          name: {
            type: "string",
            example: "ceifeiro"            
          },
          rank: {
            type: "string",
            example: "Junior"
          },
          available:{
            type: "boolean",
            example: false
          }
        },
      },
      Error: {
        type: 'object',
        properties: {
          error: {
            type: 'string',
            description: 'Error Message',
            example: 'Not Found'
          }
        }
      }
    }
  }
}