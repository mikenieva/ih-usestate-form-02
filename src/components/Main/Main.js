// ¿QUÉ ES UN HOOK?
// ES UNA FUNCIÓN QUE SE ENCUENTRA NATIVA EN REACT LA CUAL PUEDE AYUDARNOS A RESOLVER UN PROBLEMA DE DATOS ESPECÍFICO.

import { useState } from 'react'

export default function Main() {

	const [newComment, setNewComment] = useState({
		subject: "",
		content: "",
		author: ""
	})

	const [list, setList] = useState([])

	const [error, setError] = useState("")


	const handleChange = (event) => {
		console.log(event.target.value)
		console.log("hola")
		console.log("El campo de texto en el que estás escribiendo es:", event.target.name)

		setNewComment({
			...newComment, // spread operator ES6+ - Object Assign
		 	[event.target.name]: event.target.value
		})
	}

	const handleSubmit = (event) => {
		
		event.preventDefault() // DETENER LA RECARGA DE PÁGINA

		if(!newComment.subject || !newComment.content || !newComment.author) {

			setError("Existe un campo vacío. Por favor, verifica nuevamente.")

			return

		}


		setList([
			...list,
			newComment
		])

		setNewComment({
			subject: "",
			content: "",
			author: ""
		})

		setError("")

	}

	return (
		<>
			<h1>Sección de comentarios</h1>

			<form onSubmit={ (evt) => { handleSubmit(evt) } } >

				<label>Asunto</label>
				<input 
					name="subject"
					value={newComment.subject}
					onChange={ evt => { handleChange(evt) }}
				/>

				<label>Comentario</label>
				<input 
					name="content"
					value={newComment.content}
					onChange={ evt => { handleChange(evt) }} 
				/>
				
				<label>Autor</label>
				<input 
					name="author"
					value={newComment.author}
					onChange={ evt => { handleChange(evt) } }
				/>

				<button type="submit">Crear comentario</button>

				<p>{ error }</p>


			</form>


			<h2>Listado de comentarios</h2>


			{
				list.length === 0 ? 
					<p>No hay publicaciones</p> 
				:
					list.map((elt, index) => {
						return (
							<div key={index}>
								<h3>{elt.subject}</h3>
								<span>Escrito por: {elt.author}</span>
								<p>{elt.content}</p>
							</div>
						)
					})
			}


		</>
	)
}
