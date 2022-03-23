import React from "react";

export const Tarea = ({ borrar, id, tarea }) => {
	const borrarTarea = () => {
		borrar(id);
	};
	return (
		<div>
			<div className="tarea">
				<span>{tarea.label}</span>
				<span onClick={borrarTarea}>Borrar</span>
			</div>
		</div>
	);
};
