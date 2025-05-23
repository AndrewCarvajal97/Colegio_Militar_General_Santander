// Servicio de envío de correos usando emailjs-com para uso en el navegador
// Requiere que la dependencia 'emailjs-com' esté instalada en el proyecto

/**
 * Envía un correo usando EmailJS.
 * @param {Object} params - Parámetros del correo y variables de plantilla.
 * @param {string} params.templateId - ID de la plantilla de EmailJS.
 * @param {Object} params.templateParams - Variables de la plantilla.
 * @returns {Promise<any>}
 */
export async function sendEmail({ templateId, templateParams }) {
  // Importación dinámica para evitar errores si la dependencia aún no está instalada
  const emailjs = await import('emailjs-com');

  const SERVICE_ID = 'service_colegioPruebas';
  const PUBLIC_KEY = 'nLa_zNSAseWydi_H6';

  // Inicializar EmailJS (opcional, pero recomendado)
  if (emailjs.init) {
    emailjs.init(PUBLIC_KEY);
  }

  // Enviar correo
  return emailjs.send(
    SERVICE_ID,
    templateId,
    templateParams,
    PUBLIC_KEY
  );
}