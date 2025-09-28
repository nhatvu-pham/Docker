const GREETING = 'Hello Docker!';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
