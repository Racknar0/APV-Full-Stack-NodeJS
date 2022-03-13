import { useState } from 'react'
import { Link } from 'react-router-dom'

const Registrar = () => {

    const [ nombre, setNombre ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ repetirPassword, setRepetirPassword ] = useState('')

    const handleSubmit = e => {
        e.preventDefault();

        if([nombre, email, password ,repetirPassword].includes('')) {
            console.log('Hay campos vacíos');
            return;
        }

        if( password !== repetirPassword ) {
            console.log('Los password no son iguales');
            return;
        }

        if( password.length < 6) {
            console.log('el password es muy corto, agrega mínimo 6 caracteres');
        }
        
        
    }

    return (
        <>
            <div>
                <h1 className="text-indigo-600 font-black text-6xl">
                    Crea tu cuenta y administra tus{' '}
                    <span className="text-black">Pacientes</span>
                </h1>
            </div>

            <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>
                <form 
                onSubmit={handleSubmit}
                >

                    <div className='my-5'>
                        <label htmlFor="" className='uppercase text-gray-600 block text-xl font-bold'>Nombre</label>
                        <input type="text" placeholder='Tu Nombre' className='border w-full p-3 mt-3 bg-gray-50 rounded-xl' value={nombre} onChange={ e => setNombre (e.target.value)} />
                    </div>
                    <div className='my-5'>
                        <label htmlFor="" className='uppercase text-gray-600 block text-xl font-bold'>Email</label>
                        <input type="email" placeholder='Email de registro' className='border w-full p-3 mt-3 bg-gray-50 rounded-xl' value={email} onChange={ e => setEmail (e.target.value)} />
                    </div>
                    <div className='my-5'>
                        <label htmlFor="" className='uppercase text-gray-600 block text-xl font-bold'>Password</label>
                        <input type="password" placeholder='Tu password' className='border w-full p-3 mt-3 bg-gray-50 rounded-xl' value={password} onChange={ e => setPassword (e.target.value)} />
                    </div>
                    <div className='my-5'>
                        <label htmlFor="" className='uppercase text-gray-600 block text-xl font-bold'>Repetir Password</label>
                        <input type="password" placeholder='Repite tu password' className='border w-full p-3 mt-3 bg-gray-50 rounded-xl' value={repetirPassword} onChange={ e => setRepetirPassword (e.target.value)} />
                    </div>


                    <input type="submit" value="Crear Cuenta" className='bg-indigo-700 w-full py-3 px-10 rounded-lg text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto '/>
                    
                </form>

                <nav className='mt-10 lg:flex lg:justify-between'>
                    <Link className='block text-center my-5 text-gray-500' to="/">¿Ya tienes una cuenta? Inicia Sesión</Link>
                    <Link className='block text-center my-5 text-gray-500' to="/olvide-password">Olvide mi Password</Link>
                </nav>

            </div>

            
        </>
    );
};

export default Registrar;
