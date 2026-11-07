const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

    res.end(`
        <!DOCTYPE html>
        <html lang="vi">
        <head>
            <meta charset="UTF-8">
            <title>Ứng dụng Node.js đầu tiên</title>
        </head>
        <body>
            <h1>Xin chào!</h1>
            <h2>Họ và tên: Lê Ngọc Khôi</h2>
            <p>Đây là HTTP Server đầu tiên của tôi bằng Node.js.</p>
        </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log("Server dang chay tai http://localhost:3000");
});