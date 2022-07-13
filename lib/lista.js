class Nodo{

    info=0;
    liga=null;
}
export class Lista{
  
   INICIO=null;
   canvas=null;

   constructor(canvas) {
    this.canvas = canvas;
   }///////////////////////////////////////////
   isVacio(){
     if(this.INICIO==null)
        return true;
     else 
        return false;
   }///////////////////////////////////////////
   buscar(DATO){
    var encontrado=false;
    var	tmp=this.INICIO;
    while(tmp!=null){
        if(tmp.info==DATO){
            encontrado=true;
            break;
        }
        tmp=tmp.liga;
    }
    
    return encontrado;
   }///////////////////////////////////////////
   inserta_inicio(DATO){

       var P=this.INICIO;
       var Q=new Nodo();
       Q.info=DATO;
       Q.liga=P;
       P=Q;

       this.INICIO=P;
   }///////////////////////////////////////////
   inserta_final(DATO){
        var P=this.INICIO;
        
        var T=P;
        while(T.liga!=null){
            T=T.liga; 
        }
        var Q=new Nodo();
        Q.info=DATO;
        Q.liga=null;
        T.liga=Q;
        
        this.INICIO=P;
    }/////////////////////////////////////////////
    dibujarNodosLog(){

        var	tmp=this.INICIO;
        var cad="";
        while(tmp!=null){
            cad+=tmp.info+"::";
            tmp=tmp.liga;
        }
        console.log(cad);
    }
    inserta_antes_X (DATO,X){
        let P=this.INICIO;
        
        let Q=P;
        let BAND=1;
        let T;
        while ( Q.info!=X && BAND==1 ){
            if(Q.liga!=null){
                T=Q;
                Q=Q.liga;
            }
            else{
                BAND=0;
            }
        }
        if(BAND==1){
            var X1=new Nodo();
            X1.info=DATO;
            if(P==Q){
                X1.liga=P;
                P=X1;
            }
            else{
                T.liga=X1;
                X1.liga=Q;
            }
        }
        else{

            throw new Error("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
        }
        
        this.INICIO=P;
    }
    inserta_despues_X(DATO, X){
        let P=this.INICIO;
        
        let Q=P;
        let BAND=1;
        while (Q.info!=X && BAND==1 ){
            if(Q.liga!=null){
                Q=Q.liga;
            }
            else{
                BAND=0;
            }
        }
        if(BAND==1){
            var T=new Nodo();
            T.info=DATO;
            T.liga=Q.liga;
            Q.liga=T;
        }else{
            throw new Error("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA :V");
        }
        
        this.INICIO=P;
    }
    elimina_inicio(){
        var Q= this.INICIO;
        if(this.INICIO.liga==null){
            this.INICIO = null;
        } 
        else{
            this.INICIO=this.INICIO.liga;
    
        }   
    }
    elimina_ultimo(){
        var Q= this.INICIO;
        var T;
        if(this.INICIO.liga==null){
            this.INICIO=null;
        }else{
            while(Q.liga !=null){
                T=Q;
                Q=Q.liga;
    
            }
            T.liga=null;
        }
    }
    elimina_X(X){
        var Q=this.INICIO;
        var T;
        var BAND=1;
        while (Q.info!=X && BAND==1){
            if(Q.liga!=null){
                T=Q;
                Q=Q.liga;
            }else{
                BAND=0;
            }
        }
    
        if (BAND==0){
            throw new Error("El elemento con informacion X no se encuentra en la lista ");
        }else{
            if (this.INICIO==Q){
                this.INICIO=Q.liga;
            }else{
                T.liga=Q.liga;
            }
        }
    }
    elimina_antes_X(X){
        var Q;
        var T;
        var R;
        var BAND;
        if (this.INICIO.info==X) {
            throw new Error("No existe un nodo que preceda al que contiene a X");
        } else {
            Q=this.INICIO;
            T=this.INICIO;
            BAND=1;

            while (Q.info!=X && BAND==1) {
                if (Q.liga!=null) {
                    R=T;
                    T=Q;
                    Q=Q.liga;
                } else {
                    BAND=0;
                }
            }

            if (BAND==0) {
                throw new Error("El elemento no se encuentra en la lista");
            } else {
                if (this.INICIO.liga==Q) {
                    this.INICIO=Q;
                } else {
                    R.liga=Q;
                }
            }
        }
    }
    elimina_despues_X(X){
        let Q=this.INICIO;
        let T=null;
        let R=null;
        let BAND=2;

        while (BAND==2 || (Q.info!=X && BAND==1)) {
            if (Q.liga!=null) {
                if (BAND!=2) {
                    Q=Q.liga;
                }
                T=Q.liga;
                BAND=1;
                if (R!=null) {
                    R=T.liga;
                }
            } else {
                BAND=0;
            }
        }

        if (BAND==0) {
            throw new Error("El elemento no se encuentra en la lista");
        } else {
            if (BAND==1 && T==null) {
                throw new Error("No existe un nodo despues del que contiene X");
            } else {
                if (R!=null) {
                    Q.liga=R;
                } else {
                    Q.liga=null;
                }
            }
        }
    }
    dibujarNodos(valor){

        var canvas=this.canvas;
        var ctx = canvas.getContext('2d');
        var	tmp=this.INICIO;
        
        var x=0;
        var y=0;
        var ctd=0;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);//limpia el canva 

        var nodo=null;

        while(tmp!=null){
            
            if(valor != undefined && tmp.info==valor){
                //Dibujar rectangulo
                ctx.beginPath();
                ctx.fillStyle = "rgb(51,51,0)";//GRIS
                ctx.fillRect (x,y, 55,30);
                
                nodo={};
                nodo.x=x;
                nodo.y=y;
                nodo.width=55;
                nodo.height=30;
                nodo.info=tmp.info;

            }
            else{
             //Dibujar rectangulo
             ctx.beginPath();
             ctx.fillStyle = "rgb(200,0,0)";  //ROJO
             ctx.fillRect (x,y, 55,30);
            }    

            //texto
            ctx.fillStyle="white";
            ctx.font = '15px Arial';
            ctx.fillText(tmp.info,x+20,y+20);
            ctx.closePath();

            //Dibujar flecha
            //linea de la flecha
            ctx.beginPath();
            ctx.moveTo(x+55,y+15);
            ctx.lineTo(x+55+20,y+15);
            ctx.closePath();
            ctx.stroke();
            //cabeza de la flecha
            ctx.beginPath();
            ctx.fillStyle="black";
            ctx.moveTo(x+55+20,y+10);
            ctx.lineTo(x+55+20+5,y+15);
            ctx.lineTo(x+55+20,y+20);
            ctx.closePath();
            ctx.fill();

            x=80*++ctd;
            tmp=tmp.liga;
        }

        if(nodo!=null){

            setTimeout(function(){

                ctx.beginPath();
                ctx.fillStyle = "rgb(200,0,0)";//ROJO
                ctx.fillRect (nodo.x,nodo.y,nodo.width,nodo.height);
    
                //texto
                ctx.fillStyle="white";
                ctx.font = '15px Arial';
                ctx.fillText(nodo.info,nodo.x+20,nodo.y+20);
                ctx.closePath();

            },2000);
           
        }
        
    }
}