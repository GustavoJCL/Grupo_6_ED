import {Lista} from './lista.js';
import {bootbox_prompt,bootbox_alert} from './dialog.js';

let lista=null;

export async function insertar_al_inicio(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
    
    var DATO = await bootbox_prompt("ingrese valor de nodo");
    if(DATO==null)
        return;

    try{
        if(lista.buscar(DATO)==true)
            throw new Error("EL NODO YA SE INGRESO");

        lista.inserta_inicio(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
    
    }catch(e){

        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////
export async function insertar_al_final(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
    
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        var DATO = await bootbox_prompt("ingrese valor de nodo");
        if(DATO==null)
            return;

        if(lista.buscar(DATO)==true)
                throw new Error("EL NODO YA SE INGRESO");

        lista.inserta_final(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
    
    }catch(e){

       await bootbox_alert(e.message);
    }

}//////////////////////////////////////////////////////////
export async function insertar_antes_x(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
    
    try{

        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        
        var DATO = await bootbox_prompt("ingrese valor de DATO");
        if(DATO==null)
                return;

        if(lista.buscar(DATO)==true)
                throw new Error("EL NODO YA SE INGRESO");

        var X = await bootbox_prompt("ingrese valor de X");
        if(X==null)
                return;
        
        lista.inserta_antes_X(DATO,X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
        
    }catch(e){

        await bootbox_alert(e.message);
    }

}/////////////////////////////////////////////////////////
export async function insertar_despues_x(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }

    try{
        if(lista.isVacio()==true){
            throw new Error("La lista esta vacia");
        }

        var DATO=await bootbox_prompt("Ingrese valor de Dato");
        if (DATO==null){
            return;
        }

        if (lista.buscar(DATO)==true) {
            throw new Error("El nodo ya se ingreso");
        }

        var X=await bootbox_prompt("ingrese el valor de X");
        if (X==null) {
            return;
        }
        lista.inserta_despues_X(DATO, X);
        lista.dibujarNodosLog();
        lista.dibujarNodos();
    }catch(f){
        await bootbox_alert(f.message);
    }
}//////////////////////////////////////////////////////////

export async function elimina_inicio(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }

    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        lista.elimina_inicio();
        lista.dibujarNodosLog();	
        lista.dibujarNodos();

        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    
    }catch(e){

        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////
export async function eliminar_ultimo(){
    var canvas=document.getElementById('tutorial');
    if (lista==null) {
        lista=new Lista(canvas);
    }
    try{
        if (lista.isVacio()==true) {
            throw new Error("La lista esta vacia");
        }

        lista.elimina_ultimo();
        lista.dibujarNodosLog();
        lista.dibujarNodos();

    }catch(e){
        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////
export async function eliminar_x(){
    var canvas=document.getElementById('tutorial');
    if (lista==null) {
        lista=new Lista(canvas);
    }
    try{
        if (lista.isVacio()==true) {
            throw new Error("La lista esta vacia");
        }
        var X=await bootbox_prompt("Ingrese el valor de X");
        if (X==null) {
            return;
        }

        lista.elimina_X(X);
        lista.dibujarNodosLog();
        lista.dibujarNodos();
    }catch(e){
        await bootbox_alert(e.message);
    }
}///////////////////////////////////////////////////////
export async function eliminar_antes_x(){
    var canvas=document.getElementById('tutorial');
    if (lista==null) {
        lista=new Lista(canvas);
    }

    try {
        if (lista.isVacio()==true) {
            throw new Error("La lista esta vacia");
        }

        let X=await bootbox_prompt("Ingrese el valor de X");
        if(X==null){
            return;
        }

        lista.elimina_antes_X(X);
        lista.dibujarNodosLog();
        lista.dibujarNodos();
    } catch (e) {
        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////
export async function eliminar_despues_x(){
    var canvas=document.getElementById('tutorial');
    if (lista==null) {
        lista=new Lista(canvas);
    }

    try {
        if(lista.isVacio()==true){
            throw new Error("La lista esta vacio ");
        }

        let X=await bootbox_prompt("Ingrese el valor de X");
        if(X==null){
            return;
        }

        lista.elimina_despues_X(X);
        lista.dibujarNodosLog();
        lista.dibujarNodos();
    } catch (e) {
        await bootbox_alert(e.message);
    }
}