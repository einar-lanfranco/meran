/*
 * Meran - MERAN UNLP is a ILS (Integrated Library System) wich provides Catalog,
 * Circulation and User's Management. It's written in Perl, and uses Apache2
 * Web-Server, MySQL database and Sphinx 2 indexing.
 * Copyright (C) 2009-2013 Grupo de desarrollo de Meran CeSPI-UNLP
 *
 * This file is part of Meran.
 *
 * Meran is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Meran is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Meran.  If not, see <http://www.gnu.org/licenses/>.
 */

var nro_socio_temp;var vDatosUsuario=0;function modificarDatosDeUsuario(){objAH=new AjaxHelper(updateModificarDatosDeUsuario);objAH.showOverlay=true;objAH.debug=true;objAH.url=URL_PREFIX+'/usuarios/reales/usuariosRealesDB.pl';objAH.debug=true;objAH.nro_socio=USUARIO.ID;nro_socio_temp=objAH.nro_socio;objAH.tipoAccion='MODIFICAR_USUARIO';objAH.sendToServer();}
function updateModificarDatosDeUsuario(responseText){if(!verificarRespuesta(responseText))
return(0);$('#modificar-datos-usuario').html(responseText);$('#modificar-datos-usuario').modal();}
function guardarModificacionUsuario(){$('#modificar-datos-usuario').modal('hide');objAH=new AjaxHelper(updateGuardarModificacionUsuario);objAH.url=URL_PREFIX+'/usuarios/reales/usuariosRealesDB.pl';objAH.debug=true;objAH.showOverlay=true;objAH.nro_socio=nro_socio_temp;objAH.sexo=$("input[@name=sexo]:checked").val();objAH.calle=$('#calle').val();objAH.nombre=$('#nombre').val();objAH.nacimiento=$('#nacimiento').val();objAH.email=$('#email').val();objAH.telefono=$('#telefono').val();objAH.cod_categoria=$('#categoria_socio_id').val();objAH.id_estado=$('#estado_id').val();objAH.ciudad=$('#id_ciudad').val();objAH.alt_calle=$('#alt_calle').val();objAH.alt_ciudad=$('#id_alt_ciudad').val();objAH.alt_telefono=$('#telefono_laboral').val();objAH.apellido=$('#apellido').val();objAH.id_ui=$('#id_ui').val();objAH.codigo_postal=$('#codigo_postal').val();objAH.tipo_documento=$('#tipo_documento_id').val();objAH.nro_documento=$('#nro_documento').val();objAH.legajo=$('#legajo').val();objAH.institucion=$('#institucion').val();objAH.carrera=$('#carrera').val();objAH.anio=$('#anio').val();objAH.division=$('#division').val();objAH.changepassword=($('#changepassword').attr('checked'))?'1':'0';objAH.cumple_requisito=($('#cumple_requisito').attr('checked'))?'1':'0';objAH.tipoAccion='GUARDAR_MODIFICACION_USUARIO';objAH.auth_nombre=$('#auth_nombre').val();objAH.auth_dni=$('#auth_dni').val();objAH.auth_telefono=$('#auth_telefono').val();objAH.sendToServer();startOverlay();}
function updateGuardarModificacionUsuario(responseText){var Messages=JSONstring.toObject(responseText);setMessages(Messages);detalleUsuario();}
function add(){agregarUsuario();return false;}
function save_modif(){guardarModificacionUsuario();return false;}
function eliminarUsuario(){bootbox.confirm(CONFIRMA_LA_BAJA,function(ok){if(ok){objAH=new AjaxHelper(updateEliminarUsuario);objAH.url=URL_PREFIX+'/usuarios/reales/usuariosRealesDB.pl';objAH.debug=true;objAH.showOverlay=true;objAH.nro_socio=USUARIO.ID;objAH.tipoAccion='ELIMINAR_USUARIO';objAH.sendToServer();startOverlay();}});}
function updateEliminarUsuario(responseText){if(!verificarRespuesta(responseText))
return(0);var Messages=JSONstring.toObject(responseText);setMessages(Messages);if(!(hayError(Messages))){window.location.href=URL_PREFIX+"/usuarios/potenciales/buscarUsuario.pl?token="+token;}}
function agregarUsuario(){objAH=new AjaxHelper(updateAgregarUsuario);objAH.url=URL_PREFIX+'/usuarios/reales/usuariosRealesDB.pl';objAH.showOverlay=true;objAH.debug=true;if((($.trim(nro_socio)).length==0)||($('#nro_socio').val()==AUTO_GENERAR_LABEL)){objAH.auto_nro_socio=1;}else{objAH.nro_socio=$('#nro_socio').val();}
objAH.sexo=$("input[@name=sexo]:checked").val();objAH.calle=$('#calle').val();objAH.nombre=$('#nombre').val();objAH.nacimiento=$('#nacimiento').val();objAH.email=$('#email').val();objAH.telefono=$('#telefono').val();objAH.cod_categoria=$('#categoria_socio_id').val();objAH.id_estado=$('#estado_id').val();objAH.ciudad=$('#id_ciudad').val();objAH.alt_ciudad=$('#id_alt_ciudad').val();objAH.alt_calle=$('#alt_calle').val();objAH.alt_telefono=$('#alt_telefono').val();objAH.apellido=$('#apellido').val();objAH.id_ui=$('#id_ui').val();objAH.tipo_documento=$('#tipo_documento_id').val();objAH.credential_type=$('#credential').val();objAH.nro_documento=$('#nro_documento').val();objAH.codigo_postal=$('#codigo_postal').val();objAH.legajo=$('#legajo').val();objAH.institucion=$('#institucion').val();objAH.carrera=$('#carrera').val();objAH.anio=$('#anio').val();objAH.division=$('#division').val();objAH.cumple_requisito=($('#cumple_requisito').attr('checked'))?'1':'0';objAH.changepassword=($('#changepassword').attr('checked'))?'1':'0';objAH.tipoAccion='AGREGAR_USUARIO';objAH.sendToServer();}
function updateAgregarUsuario(responseText){if(!verificarRespuesta(responseText))
return(0);var Messages=JSONstring.toObject(responseText);setMessages(Messages);if(!Messages.error){delay(function(){window.location=URL_PREFIX+'/usuarios/reales/datosUsuario.pl?nro_socio='+Messages.messages[0].params[0]+'&token='+token;},3);}}
function agregarAutorizado(){objAH=new AjaxHelper(updateAgregarAutorizado);objAH.showOverlay=true;objAH.url=URL_PREFIX+'/usuarios/reales/usuariosRealesDB.pl';objAH.tipoAccion="MOSTRAR_VENTANA_AGREGAR_AUTORIZADO";objAH.debug=true;objAH.sendToServer();}
function updateAgregarAutorizado(responseText){if(!verificarRespuesta(responseText))
return(0);$('#basic-modal-content').html(responseText);$('#basic-modal-content').modal();}
function confirmarAgregarAutorizado(){if(verificarDatos()){objAH=new AjaxHelper(updateConfirmarAgregarAutorizado);objAH.url=URL_PREFIX+'/usuarios/reales/usuariosRealesDB.pl';objAH.debug=true;objAH.showOverlay=true;objAH.nro_socio=NRO_SOCIO_AUTH;objAH.auth_nombre=$('#nombreAutorizado').val();objAH.auth_dni=$('#dniAutorizado').val();objAH.auth_telefono=$('#telefonoAutorizado').val();objAH.tipoAccion='AGREGAR_AUTORIZADO';objAH.sendToServer();}}
function updateConfirmarAgregarAutorizado(responseText){var Messages=JSONstring.toObject(responseText);setMessages(Messages);$('#basic-modal-content').modal('hide');detalleUsuario();}
function desautorizarTercero(claveUsuario,confirmeClave){bootbox.confirm(CONFIRMAR_ELIMINAR_AFILIADO,function(ok){if(ok){objAH=new AjaxHelper(updateDesautorizarTercero);objAH.debug=true;objAH.showOverlay=true;objAH.url=URL_PREFIX+'/usuarios/reales/usuariosRealesDB.pl';objAH.nro_socio=USUARIO.ID;objAH.tipoAccion='ELIMINAR_AUTORIZADO';objAH.sendToServer();}});}
function updateDesautorizarTercero(responseText){if(!verificarRespuesta(responseText))
return(0);var Messages=JSONstring.toObject(responseText);setMessages(Messages);detalleUsuario();}
function resetPassword(claveUsuario,confirmeClave){bootbox.confirm(RESET_PASSWORD,function(ok){if(ok){objAH=new AjaxHelper(updateResetPassword);objAH.showOverlay=true;objAH.url=URL_PREFIX+'/usuarios/reales/usuariosRealesDB.pl';objAH.nro_socio=USUARIO.ID;objAH.tipoAccion='RESET_PASSWORD';objAH.sendToServer();}});}
function updateResetPassword(responseText){if(!verificarRespuesta(responseText))
return(0);var Messages=JSONstring.toObject(responseText);setMessages(Messages);}
function clearInput(){$('#newpassword').val('');$('#newpassword1').val('');}
function cambiarPassword(){$('#formCambioPassword').submit();}
function eliminarFoto(foto){foto=user_picture_name;bootbox.confirm(CONFIRMAR_ELIMINAR_FOTO,function(ok){if(ok){objAH=new AjaxHelper(updateEliminarFoto);objAH.debug=true;objAH.showOverlay=true;objAH.url=URL_PREFIX+'/usuarios/reales/usuariosRealesDB.pl';objAH.tipoAccion='ELIMINAR_FOTO';objAH.foto_name=foto;objAH.nro_socio=USUARIO.ID;objAH.sendToServer();}});}
function updateEliminarFoto(responseText){if(!verificarRespuesta(responseText))
return(0);$('#foto').html('');var Messages=JSONstring.toObject(responseText);setMessages(Messages);$('#div_uploader').show();$('#div_boton_eliminar_foto').hide();detalleUsuario();}
function validarDatosCensales(){objAH=new AjaxHelper(updateValidarDatosCensales);objAH.debug=true;objAH.showOverlay=true;objAH.url=URL_PREFIX+'/usuarios/reales/usuariosRealesDB.pl';objAH.debug=true;objAH.nro_socio=USUARIO.ID;nro_socio_temp=objAH.nro_socio;objAH.tipoAccion='VALIDAR_DATOS_CENSALES';objAH.sendToServer();}
function updateValidarDatosCensales(responseText){if(!verificarRespuesta(responseText))
return(0);var Messages=JSONstring.toObject(responseText);setMessages(Messages);detalleUsuario();}
function cambiarCredencial(){objAH=new AjaxHelper(updateCambiarCredencial);objAH.url=URL_PREFIX+'/usuarios/reales/usuariosRealesDB.pl';objAH.debug=true;objAH.showOverlay=true;objAH.nro_socio=USUARIO.ID;objAH.tipoAccion='CAMBIAR_CREDENCIAL';objAH.sendToServer();}
function updateCambiarCredencial(responseText){if(!verificarRespuesta(responseText))
return(0);$('#basic-modal-content').html(responseText);$('#basic-modal-content').modal();}
function guardarModificacionCredenciales(){$('#basic-modal-content').modal('hide');objAH=new AjaxHelper(updateModificacionCredenciales);objAH.url=URL_PREFIX+'/usuarios/reales/usuariosRealesDB.pl';objAH.showOverlay=true;objAH.debug=true;objAH.nro_socio=USUARIO.ID;objAH.tipoAccion='GUARDAR_MODIFICACION_CREDENCIALES';objAH.credenciales=$('#credential').val();objAH.sendToServer();}
function updateModificacionCredenciales(responseText){if(!verificarRespuesta(responseText))
return(0);var Messages=JSONstring.toObject(responseText);setMessages(Messages);detalleUsuario(USUARIO.ID);}
function showModalCambiarNroSocio(){$('#modificar-nro-socio').modal('show');$('#nuevo_nro_socio').val(USUARIO.ID);}
function cambiarNroSocio(nuevo_nro_socio){$('#modificar-nro-socio').modal('hide');if(!nuevo_nro_socio)
nuevo_nro_socio=$('#nuevo_nro_socio').val();objAH=new AjaxHelper(updateGuardarModificacionUsuario);objAH.url=URL_PREFIX+'/usuarios/reales/usuariosRealesDB.pl';objAH.debug=true;objAH.showOverlay=true;objAH.nro_socio=USUARIO.ID;objAH.nuevo_nro_socio=nuevo_nro_socio;objAH.tipoAccion='CAMBIAR_NRO_SOCIO';nro_socio_temp=USUARIO.ID;USUARIO.ID=nuevo_nro_socio;objAH.sendToServer();startOverlay();}
function updateGuardarModificacionUsuario(responseText){var Messages=JSONstring.toObject(responseText);setMessages(Messages);if(Messages.error)
USUARIO.ID=nro_socio_temp;detalleUsuario();}
