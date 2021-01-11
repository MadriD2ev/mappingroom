const { db } = require('../config/database')

exports.room = async (req, res) => {
    try {
      const response = await db.query('SELECT * FROM clacctrm', {
        type: db.QueryTypes.SELECT
      })
  
      res.json(response)
      //console.log(response)
    } catch (error) {
      console.log('error en iMGH' + error)
    }
  }

  exports.rmType = async (req, res) => {
    try {
      const { params } = req
  
      if(params.id === 'code'){

        const responseCode = await db.query('SELECT * FROM rmrmtype', {
          type: db.QueryTypes.SELECT
        })
        res.json(responseCode)
        console.log('esto es responseCode...')
        console.log(responseCode)

      }else{

        const responseID = await db.query('SELECT * FROM CLACCRRM WHERE IDTYPEROOM = :id', {
          type: db.QueryTypes.SELECT,
          replacements: {
            id: params.id
          }
        })

        res.json(responseID)
        //console.log('este es el del id' + response)
      }
    
    } catch (error) {
      console.log('error en rmMGH' + error)
    }
  }
