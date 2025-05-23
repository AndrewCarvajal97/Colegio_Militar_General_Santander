/**
 * EmailService - Servicio para enviar correos usando EmailJS vía REST API.
 * Configuración centralizada para facilitar la integración en cualquier componente.
 */

const SERVICE_ID = 'service_colegioPruebas';
const PUBLIC_KEY = 'nLa_zNSAseWydi_H6';
const API_URL = 'https://api.emailjs.com/api/v1.0/email/send';

export interface EmailParams {
  templateId: string;
  toEmail: string;
  fromName: string;
  subject: string;
  message: string;
  [key: string]: any;
}

/**
 * Envía un correo usando EmailJS REST API.
 * @param params Parámetros del correo y variables de plantilla.
 * @returns Promise con el resultado del envío.
 */
export async function sendEmail(params: EmailParams): Promise<Response> {
  const payload = {
    service_id: SERVICE_ID,
    template_id: params.templateId,
    user_id: PUBLIC_KEY,
    template_params: {
      to_email: params.toEmail,
      from_name: params.fromName,
      ...params
    }
  };

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error('Error al enviar el correo: ' + response.statusText);
  }

  return response;
}