import mongoose from "mongoose"

class MethodsApi {
    constructor(schema = mongoose.Model){
        this.schema = schema;
    }

    async getAllObjs(){
        try {
            const objs = await this.schema.find({});
            
            return objs;
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async findDocumentsWithFields ( fields ) {
        //El campo field tiene que ser un campo de busqueda valida por mongoose.
        //Ejemplo, queremos buscar el siguiente documento: ----->     {
        //                                                               category: {
        // Tenemos que pasar el siguiente objeto de busqueda      ||       code: "herramientas",
        //  ---{ "category.code": "herramientas" }----            ||       title: "herramientas"
        //  Esto es un campo de busqueda válido por mongoose      ||    } 
        //  para encontrar el valor de un propiedad dentro de     ||  }                          
        //  un objeto, en caso que asi se desea.                  || 
        
        if ( typeof fields !== "object" ){
            return null
        }

        try {
            const obj = await this.schema.find( fields ).exec()
            return obj
        } catch (error) {
            console.log(error)
            return "ERROR"
        }

    }

    async findObjByField( field ){

        if ( typeof field !== "object" ){
            return null
        }

        try {
            const obj = await this.schema.findOne( field )
            return obj
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async newObj( body ){
        try {

            const obj = new this.schema( body )
            await obj.save();
            
            return obj

        } catch (error) {
            
            return null
        }

    }

    async documentUpdate( id, field ){
        if ( typeof field !== "object" ){
            return null
        }

        try {
            const document = this.schema.findByIdAndUpdate( id, { $set: field }, { new: true } ).exec();
            return document;
        } catch (error) {
            console.log(error)
            return "ERROR"
            
        }
    }
}

export default MethodsApi;