const controller = {};

controller.list = (req, res) =>{
    req.getConnection((err, conn) => {
        conn.query("Select * from customers",(err, customers) =>{
            if(err){
                res.json(err);
            }
            res.render("customer", {
                data: customers
            })
        });
    });
}

controller.save = (req, res) => {
    console.log(req.body);
    const data = req.body;
    req.getConnection((err,conn) => {
        conn.query("INSERT INTO customers SET ?", [data], (err, customer) => {
            res.redirect("/");
        })
    })
}

controller.delete = (req, res) =>{
    const { id } = req.params;
    req.getConnection((err, conn)=>{
        conn.query("DELETE FROM customers WHERE id = ?", [id], (err, rows) => {
            res.redirect("/");
        });
    });
}

controller.edit = (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM customers where id = ? ", [id], (err, customer) => {
            res.render("customerEdit", {
                data: customer[0]
            });
        });
    });
}

controller.update = (req, res) => {
    const {id}  = req.params;
    const newCust = req.body;
    req.getConnection((err, conn) => {
        conn.query("UPDATE customers SET ? WHERE id = ? ", [newCust, id], (err, rows) =>{
            res.redirect("/");
        });
    });
}

module.exports = controller;