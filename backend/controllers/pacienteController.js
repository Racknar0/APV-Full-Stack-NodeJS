import Paciente from "../models/Paciente.js"

const agregarPaciente = async (req, res) => {
    const paciente = new Paciente(req.body)
    paciente.veterinario = req.veterinario._id

    try {
        const pacienteAlmacenado = await paciente.save()
        res.json(pacienteAlmacenado)

    } catch (error) {
        console.log(error);
    }
}
const obtenerPacientes = async (req, res) => {
    const pacientes = await Paciente.find().where('veterinario').equals(req.veterinario);

    res.json(pacientes)
}

const obtenerPaciente = async (req, res) => {
    const {id} = req.params
    const paciente = await Paciente.findById(id)

    if(paciente.veterinario._id.toString() !== req.veterinario._id.toString()) {
        return res.json({msg: 'Acción no valida'})
    }

    if(paciente) {
        res.json(paciente)
    }
}

const actualizarPaciente = async (req, res) => {

    if(!paciente) {
        return res.status(404).json({msg: 'No encontrado'})
    }

    const {id} = req.params
    const paciente = await Paciente.findById(id)
    
    if (paciente.veterinario._id !== req.veterinario._id.toString()) {
        return res.json({msg: 'Acción no valida'})
    }

    // Actualizar Paciente
    paciente.nombre = req.body.nombre
    
    try {
        const pacienteActualizado = await paciente.save();
        res.json(pacienteActualizado)
    } catch (error) {
        console.log(error);
    }
}

const eliminarPaciente = async (req, res) => {}

export { 
    agregarPaciente , 
    obtenerPacientes, 
    obtenerPaciente,  
    actualizarPaciente , 
    eliminarPaciente 
}