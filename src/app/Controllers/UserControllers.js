class UserController {
    index(req, res){
        console.log(req.body);
    }
    show(req, res){
        var users =["Kaio", "Larissa", "Igor"]
        return res.status(200).json({
            error: false,
            users
        })
    }
}

module.exports = new UserController();