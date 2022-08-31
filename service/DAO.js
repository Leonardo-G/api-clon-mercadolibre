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
            console.log(error)
            return null
        }

    }
}

export default MethodsApi;