import "dotenv/config";

import server from "./lib/server";

const PORT = process.env.PORT || 3000;

server().listen(PORT, () => console.log(`Server running on PORT : ${PORT}`))

export default server