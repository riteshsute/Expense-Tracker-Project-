const Expense = require('../models/expense');
const { JSON } = require('sequelize');

exports.postExpense = ('/expense/add-expense' , async (req, res, next) => {
    try {
        if(!req.body.Amount){
            throw new Error('amount is mandatory')
        }
    const Amount = req.body.Amount;
    const expense = req.body.expense;
    const option = req.body.option;

    const data = await Expense.create( { Amount: Amount, expense: expense, option: option, } );
    res.status(201).json({ showNewExpenseDetail: data })
    } catch(err){
        console.log(err)
        res.status(500).json({
            error: err
        })
    }
})

exports.getExpense = ('/expense/get-expense' , async (req, res, next) => {
    try {
    const expenses = await Expense.findAll(); 
        res.status(200).json({ allUsers: expenses })  
    }
    catch(err){
        console.log('get expense is failing', JSON.stringify(err));
        return res.status(500).json({error: err})
    }
    })


exports.deleteExpense = ('/expense/delete-expense/:id', async (req, res, next) => {
    console.log('destroying id')
    try {
        // if(req.params.id == 'undefined'){
        //     console.log( 'error is here')
        // res.status(400).json(err)
        // }

        const expenseId = req.params.id;
        console.log(expenseId);
        await Expense.destroy({where: {id: expenseId}});
        res.status(200).json({success: true });
     } 
     catch(err){
            console.log(err, 'error is here')
            return res.status(400).json({error: 'id is missing'})
  }
})


exports.editExpense  = ('/expense/edit-expense/:id', async (req, res, next) => {
    try{const expenseEdit = req.params.id;
    await Expense.update({where: {id: expenseEdit}})
    res.status(200).json({success: true})
    } catch(err){
        return res.status(400).json({error: 'id is missing'})
}
})