/**
 * Component about the academic projects
 */
export const AcademicProjects = () => {
    return (
        <div className="my-5 card p-3">
            <h1>
                <strong> Proyectos Académicos </strong>
            </h1>
            <hr />
            <strong>
                Sitio Web para Constructora
            </strong>
            <p>
                Change and Code (outsourcing para Tenco) — Remoto
                Feb 2024 - Nov 2024
            </p>
            <ul>
                <li>Desarrollé un prototipo de aplicación web fullstack para una empresa constructora. </li>
                <li>Diseñé e implementé tanto el frontend como el backend, incluyendo diseño de base de datos y despliegue. </li>
                <li>Aprendí aplicando los principios clave de desarrollo moderno y buenas prácticas. </li>
            </ul>
            <hr />
            <strong>
                Sistema de Gestión de Oficios Oficiales
            </strong>
            <p>
                Instituto Tecnológico de Durango — Proyecto de Residencia
            </p>
            <ul>
                <li> Construí una herramienta personalizada para agilizar la creación y edición de documentos oficiales. </li>
                <li> Diseñé un sistema de formularios dinámicos que lee y modifica archivos Word mediante detección de palabras clave. </li>
                <li> Gestioné la lógica del frontend y backend, estructura de base de datos y sistema de carga de archivos. </li>
            </ul>
        </div>
    )
}
