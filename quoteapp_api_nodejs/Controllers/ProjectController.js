import Quote from '../Models/ProjectModel';
let controller = {
    addQuote: async (req, res) =>{
        const {id, name, lastname,address,datebirth,city,neighborhood,phonenumber,date} = req.body;
        const newQuote= new Quote({id, name, lastname,address,datebirth,city,neighborhood,phonenumber,date});
        await newQuote.save();
        return res.status(200).json({
            response: "Quote added successfully"
        });
    },
    getQuote: async (req,res) =>{
        const id = req.query.id;
        //console.log(name);
        const quote = await Quote.findById({_id: id});
        return res.status(200).json({quote});
    },
    listQuote: async (req,res) =>{
        const quote = await Quote.find({});
        return res.status(200).json({quote});
    },
    updateQuote: async (req,res) =>{
        const {id, name, lastname,address,datebirth,city,neighborhood,phonenumber,date} = req.body;
        await Quote.findByIdAndUpdate(id,{id, name, lastname,address,datebirth,city,neighborhood,phonenumber,date});
        return res.status(200).json({
            response: "Task updated successfully"
        });
    },
    deleteQuote: async (req,res) =>{
        const {id} = req.body;
        await Quote.findByIdAndDelete(id);
        return res.status(200).json({
            response: "Quote deleted successfully"
        });
    },
}

module.exports = controller;