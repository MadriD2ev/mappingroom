import React from 'react'

const Mapeo = () => {

    const [rooms, setRooms] = React.useState([])
 
    React.useEffect(()=>{
        obtenerRooms()
    },[])

    const obtenerRooms = async() => {
        const data = await fetch("http://localhost:3001/rooms")
        const hab = await data.json()
        setRooms(hab)
    }
    

    React.useEffect(() => {
        tipoRooms(1)
    },[])

    const [habitacion, setHabitacion] = React.useState([])
    
    const tipoRooms = async(id) => {
        //console.log('tipoRooms:' + id)
        const data = await fetch(`http://localhost:3001/rooms/${id}`)
        const tipoHab = await data.json()
        setHabitacion(tipoHab)
    }


    return (
        <form>
            <div id="App">
                <div className='form-group w-50'>
                    <label>Categories</label>
                    <select 
                        className="form-control" 
                        id="exampleFormControlSelect1" 
                        onChange={(e) => tipoRooms(e.target.value)}
                    >
                        {
                            //{item.idtyperoom} - {item.description}
                            rooms.map(item => (
                                <option value ={item.idtyperoom} key={item.idtyperoom}>{item.description}</option>
                            ))

                        }
                    </select>  

                    <br/>
                    <ul className="list-group">
                        {
                            //{item.IDTYPEROOM} - {item.RM_TYPE}
                            habitacion.map(item => (
                                <li className="list-group-item " key={item.RECNUM}>{item.RM_TYPE}</li>
                            ))
                        }
                    </ul>               
                </div>
            </div>       
        </form>  
    )
}


export default Mapeo 


