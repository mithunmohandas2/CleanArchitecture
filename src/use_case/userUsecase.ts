import User from "../domain/user";
import userRepository from "../infrastructure/repository/userRepository";

class Userusecase{
    private userRepository : userRepository
    constructor(userRepository:userRepository){
        this.userRepository = userRepository
    }

    async signIn(user:User){
        console.log('inside useCase')
        const userFound = await this.userRepository.findByEmail(user.email)
        if(userFound){
            return{
                status:200,
                data : 'user already exist'
            }
        }
        else{
            await this.userRepository.save(user)
            return{
                status:200,
                data: 'user saved'
            }
        }
    }
    

}

export default Userusecase