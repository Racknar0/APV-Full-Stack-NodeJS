import mongoose from "mongoose";

const pacientesSchema = mongoose.Schema({
    nombre: {
        type: String,
        req: true,
    },
    propietario: {
        type: String,
        req: true,
    },
    email: {
        type: String,
        req: true,
    },
    nombre: {
        type: Date,
        req: true,
    },
    nombre: {
        type: String,
        req: true,
    },
    veterinario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Veterinario'
    }
}, {
    timestamps: true
});

const Paciente = mongoose.model('Paciente', pacientesSchema)

export default Paciente