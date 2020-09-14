const http = require("http");
const fs = require("fs");
const lameFile = fs.readFile("lame-bonus-redirect.html", "utf8", (err, data) => {
	if (err) throw err;
});

http.createServer(function (req, res) {
	if (req.url === "/OK") {
		console.log("Inbound 'OK' request being processed...");
		res.writeHead(200);
		res.end();
	}
	if (req.url === "/Bad-Request") {
		// console.log("Inbound 'OK' request being processed...");
		res.writeHead(400);
		res.end();
	}
	if (req.url === "/Bonus/Redirect") {
		res.writeHead(302, {
			Location: "http://localhost:3000/Forbidden"
		});
		res.end();
	}

	if (req.url === "/Bonus/Webpage") {
		res.writeHead(302, { "Content-Type": "text/html" });
		res.write(lameFile);
		res.end();
	}

	if (req.url === "/Created") {
		// console.log("Inbound 'OK' request being processed...");
		res.writeHead(201);
		res.end();
	}
	if (req.url === "/Bonus/Created") {
		if (req.method === "POST") {
			// console.log("Inbound 'OK' request being processed...");
			res.writeHead(201);
			res.end();
		} else {
			console.log("NOT ALLOWED YOU DUMMYFACE!");
			res.writeHead(404);
			res.end();
		}
	}
	if (req.url === "/Forbidden") {
		// console.log("Inbound 'OK' request being processed...");
		res.writeHead(403);
		res.end();
	}
	if (req.url === "/Found") {
		// console.log("Inbound 'OK' request being processed...");
		res.writeHead(302);
		res.end();
	}
	if (req.url === "/Gateway-Timeout") {
		// console.log("Inbound 'OK' request being processed...");
		res.writeHead(504);
		res.end();
	}
	if (req.url === "/Internal-Server-Error") {
		// console.log("Inbound 'OK' request being processed...");
		res.writeHead(500);
		res.end();
	}
	if (req.url === "/Moved-Permanently") {
		// console.log("Inbound 'OK' request being processed...");
		res.writeHead(301);
		res.end();
	}
	if (req.url === "/Unauthorized") {
		// console.log("Inbound 'OK' request being processed...");
		res.writeHead(401);
		res.end();
	}
	if (req.url === "/Not-Found") {
		console.log("go find it somewhere else");
		res.writeHead(404);
		res.end();
	}
}).listen(3000, function () {
	console.log("!this project is lame || I didn't forget the port number");
});
