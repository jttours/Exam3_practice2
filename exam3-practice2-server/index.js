const express = require ('express');
const cors = require('cors');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
   user: 'root',
   password: '12345678',
   database: 'yaakov_real_estate'
})

const PORT = 6789;
const app = express();
app.use(cors());
app.use(express.json());

app.get('/tenant/search', function(request,response) {
    const phoneNumber = (request.query.phone);
    if (phoneNumber) {
        connection.query('SELECT tenant_id FROM tenants WHERE tenant_mobile = ?',[phoneNumber], function (err,res){
            if (err) return response.status(400).send();
            if (res.length == 0) return response.status(404).send();

           //console.log ('the tenant ID is -',(res[0].tenant_id));
            return response.send(res[0].tenant_id.toString());
        })
    } else {
        return response.status(400).send();
    }
});




app.listen(PORT, () => console.log(`listening at ${PORT}`));