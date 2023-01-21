

const calculateInvest = async(req,res)=>{
    try{
        let {invest,time,rate} = req.body;
        if(!invest || !time || !rate){
            return res.status(404).send('not found')
        }
        invest = +invest;
        time = +time;
        rate = +rate;

        let p=invest;
        let i = rate/100 +1;
        i= i**15;
        i = i-1;
        let maturityValue= p*(i/0.071);

        let totalInvestGain = maturityValue - p;

        res.send({MaturityValue:maturityValue,InvestGain:totalInvestGain})


    }catch(err){
        res.status(500).send({msg:"Internal Server Error",Error:err.message})
    }
}

module.exports = calculateInvest