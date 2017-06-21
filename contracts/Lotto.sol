pragma solidity ^0.4.0;

contract Lotto{
    address public beneficiary;
    uint public startTime;
    uint public drawTime;
    uint public ticketPrize;
    uint public winnerShare;
    uint public totalMoney;

    struct BuyerAnony{
    uint selectedBall;
    address buyerAddress;
    }

    struct BuyerEmail{
    uint selectedBall;
    string buyerAddress;
    }

    BuyerAnony[] public paidAnony;
    BuyerEmail[] public paidEmail;

    address[] public winnersAnony;
    string[] public winnersEmail;

    bool ended;

    // Events that will be fired on changes.
    event LottoPurchased(address bidder, uint amount);
    event LottoDrawCompleted(address winner, uint amount);


    //    function Lotto(
    //    uint _drawTime,
    //    address _beneficiary,
    //    uint _ticketPrize
    //    ) {
    //        beneficiary = _beneficiary;
    //        startTime = now;
    //        drawTime = _drawTime;
    //        ticketPrize = _ticketPrize;
    //    }

    function buyAnnoyTicket(address userIdent , uint myBall) returns (uint)  {

        /*if (now > startTime + drawTime) {
            throw;
        }*/

        //    if(ticketprice !=1){
        //    throw;
        //    }

        paidAnony.push(BuyerAnony({
        selectedBall : myBall,
        buyerAddress : userIdent
        }));

        return 1;


    }

    function buyEmailTicket(string userIdent , uint myBall)  returns (uint)  {

        /*if (now > startTime + drawTime) {
            throw;
        }*/

        //    if(ticketprice !=1){
        //    throw;
        //    }

        paidEmail.push(BuyerEmail({
        selectedBall : myBall,
        buyerAddress : userIdent
        }));

        return 1;

    }

    function getWinnerShare() constant returns(uint){
        return winnerShare;
    }

    // function buyAnony(string anonyAddress , uint myBall) payable {

    //     /*if (now > startTime + drawTime) {
    //         throw;
    //     }*/

    //     paidLotto.push(Buyer({
    //         selectedBall : myBall,
    //         buyerAddress : anonyAddress
    //     }));

    // }

    // function getLottoNumber() constant returns(uint){
    //     var lottoNumber = paidLotto[msg.sender];
    //     return lottoNumber;
    // }

    //Get RNG for finding the winner
    function lottoEnd(uint winningBall) {

        /*if (now <= startTime + drawTime)
            throw; // auction did not yet end
        if (ended)
            throw;

        ended = true;*/

        totalMoney = paidAnony.length + paidEmail.length;

        winnerShare = paidEmail[0].selectedBall;
        /*if(sha3(winningBall) == sha3(paidAnony[i].selectedBall)){
            winnersAnony.push(paidAnony[i].buyerAddress);
        }*/

        /*for(uint i=0; i< paidAnony.length; i++){

            if(sha3(winningBall) == sha3(paidAnony[i].selectedBall)){
                winnersAnony.push(paidAnony[i].buyerAddress);
            }
        }

        for(uint j=0; j< paidEmail.length; j++){

            if(sha3(winningBall) == sha3(paidEmail[j].selectedBall)){
                winnersEmail.push(paidEmail[j].buyerAddress);
            }
        }

        winnerShare = winnersAnony.length + winnersEmail.length;*/

        /*uint winnerCount = winnersEmail.length + winnersAnony.length;
        if(winnerCount > 0){
            winnerShare = totalMoney/winnerCount;

            // for(uint j=0; j< winners.length; j++){
            //     winners[j].transfer(winnerShare);
            //     if(!winners[j].send(winnerShare)){
            //         throw;
            //     }

            // }
        }*/

    }

    function checkWinner(string checkingAddress) constant returns(uint){
        for(uint i=0; i< winnersEmail.length; i++){
            if(sha3(checkingAddress) == sha3(winnersEmail[i])){
                return 1;
            }else{
                return 0;
            }
        }
    }
}