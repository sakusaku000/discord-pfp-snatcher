require("dotenv").config();

const {get} = require("axios");

module.exports = async (req, res) => {
    if (req.method === "GET") {
        const {id} = req.query;
        try {
            const user = await get(`https://discord.com/api/v9/users/${id}`, {headers:{"Authorization": `Bot ${process.env.VUE_APP_BOT_TOKEN}`}});
            return res.status(200).send(user.data.avatar);
        } catch (err) {
            return res.status(400).send();
        }
    } else {
        return res.status(405).send();
    };
};