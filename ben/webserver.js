// include http module in the file
var http = require('http');
const lineByLine = require('n-readlines');
const liner = new lineByLine('budgetbytes_backup.csv');
// create a server
http.createServer(function (req, res) {
        if (req.method === 'POST') {
		    let body = '';
		    const obj = JSON.parse(req);

		 //    let line;
		 //    listOfUserInput.forEach(element => {})
			// while (line = liner.next()) {
			//     if(line.includes())
			// }

		    req.on('end', () => {
		        console.log(
		            "ddd"
		        );
		        res.end('ok');
		    });        	
    	}
}).listen(9000); //the server object listens on port 9000