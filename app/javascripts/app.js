// Import the page's CSS. Webpack will know what to do with it.
// import "../stylesheets/app.css";


// Import libraries we need.
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'

// Import our contract artifacts and turn them into usable abstractions.
import lotto_artifacts from '../../build/contracts/Lotto.json'

// MetaCoin is our usable abstraction, which we'll use through the code below.
var Lotto = contract(lotto_artifacts);

// The following code is simple to show off interacting with your contracts.
// As your needs grow you will likely need to change its form and structure.
// For application bootstrapping, check out window.addEventListener below.
var accounts;
var account;

window.App = {
  start: function() {
    var self = this;

    // Bootstrap the MetaCoin abstraction for Use.
    Lotto.setProvider(web3.currentProvider);

    // Get the initial account balance so it can be displayed.
    web3.eth.getAccounts(function(err, accs) {
      if (err != null) {
        alert("There was an error fetching your accounts.");
        return;
      }

      if (accs.length == 0) {
        alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
        return;
      }
console.log(accs);
      accounts = accs;
      account = accounts[0];


    });
  },
    
  buyAnonymously(){
      var self = this;


      var anonySender = document.getElementById("anonTicket").value;
      var ticketNumber = document.getElementById("ticket").value;

      this.setStatus("Purchasing the ticket... (please wait)");

      var meta;
      Lotto.deployed().then(function(instance) {
console.log(anonySender,ticketNumber)
          meta = instance;
          return meta.buyAnnoyTicket(anonySender, ticketNumber, {from: account});
      }).then(function() {
          self.setStatus("Transaction complete!");
      }).catch(function(e) {
          console.log(e);
          self.setStatus("Error sending coin; see log.");
      });
  },
  buyEmail(){
      var self = this;


      var emailSender = document.getElementById("email").value;
      var ticketNumber = document.getElementById("ticket").value;

      this.setStatus("Purchasing the ticket... (please wait)");

      var meta;
      Lotto.deployed().then(function(instance) {
          meta = instance;
          return meta.buyEmailTicket(emailSender, ticketNumber, {from: account});
      }).then(function() {
          self.setStatus("Transaction complete!");
      }).catch(function(e) {
          console.log(e);
          self.setStatus("Error sending coin; see log.");
      });
  },
  checkWinner(){
      var self = this;


      var meta;
      Lotto.deployed().then(function(instance) {
          meta = instance;
          return meta.checkWinner("rahul@accubits.com", {from: account});
      }).then(function(result) {
          self.setStatus("Transaction complete!");
      }).catch(function(e) {
          console.log(e);
          self.setStatus("Error sending coin; see log.");
      });
  },
    getWinnerShare(){
      var self = this;


      var meta;
      Lotto.deployed().then(function(instance) {
          meta = instance;
          return meta.getWinnerShare({from: account});
      }).then(function(result) {
          console.log(result.toNumber())
          self.setStatus("Transaction complete!",result,result.toNumber());
      }).catch(function(e) {
          console.log(e);
          self.setStatus("Error sending coin; see log.");
      });
  },
    lottoEnd(){
      var self = this;


      var meta;
      Lotto.deployed().then(function(instance) {
          meta = instance;
          return meta.lottoEnd('2', {from: account});
      }).then(function(result) {

          self.setStatus("Transaction complete.. loto End!",result);
      }).catch(function(e) {
          console.log(e);
          self.setStatus("Error sending coin; see log.");
      });
  },
  setStatus: function(message) {
    var status = document.getElementById("status");
    status.innerHTML = message;
  },


  buyAnnonymously: function() {


    var self = this;

    var amount = 1;
    var receiver = accounts[1];
    var fromAccount= document.getElementById('address').value;
    var lotoNo = document.getElementById('ticket').value;

      this.setStatus("Initiating transaction... (please wait)");

    var meta;
      Lotto.deployed().then(function(instance) {
      meta = instance;
      return meta.buyAnnoyTicket(fromAccount, lotoNo,{from : account});
    }).then(function() {
          document.getElementById('address').value = '';
          document.getElementById('ticket').value = '';
      self.setStatus("Successfully purchased your ticket");
      // self.refreshBalance();
    }).catch(function(e) {
      console.log(e);
      self.setStatus("Error sending coin; see log.");
    });
  },

  buyEmail : function () {


      var self = this;

      var amount = 1;
      var receiver = accounts[1];
      var email= document.getElementById('address').value;
      var lotoNo = document.getElementById('ticket').value;

      this.setStatus("Initiating transaction... (please wait)");

      var meta;
      Lotto.deployed().then(function(instance) {
          meta = instance;
          return meta.buyEmailTicket(email, lotoNo,{from : account});
      }).then(function() {
          document.getElementById('address').value = '';
          document.getElementById('ticket').value = '';
          self.setStatus("Successfully purchased your ticket \n email : "+ email);
          // self.refreshBalance();
      }).catch(function(e) {
          console.log(e);
          self.setStatus("Error sending coin; see log.");
      });
  }  ,
    
  randomTicket : function () {
      var randomFixedInteger = function (length) {
          return Math.floor(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1));
      }
      document.getElementById('ticket').value =   randomFixedInteger(1);
      return randomFixedInteger(1);
  }  ,

  resetTicket : function () {
      document.getElementById('ticket').value =  '';
  },

    checkNumber : function () {
        var checkItem = document.getElementById('check').value;
        var winnerEmails = [
            'aj@accubits.com',
            'rahular@accubits.com',
            'arunjayakumar07@gmail.com',
            'amal@accubits.com'
        ];

        var winnerAddress = [
            '0xa3fe091c3ccc8d804cc631193a66ba0146eeee1f',
            '0x2a4dcb8de1203c690e37cc5eeeac05fef20dc454',
            '0x193eda59dc599ca5ddd368b3471104245432e6fd',
            '0x5d16158b5de5bd5c4e80b7736237e44b8d3cf6e3',
            '0x9b56ea5cacd121a0d9a5b5ebbd99c3633cee3dfc'
        ];

        var checkArray ;

        var text = document.getElementById('checkspan').innerText;

        if(text == 'Address'){
            checkArray = winnerAddress;
        }
        else if(text == 'Email') {
            checkArray = winnerEmails
        }

        if(checkArray.indexOf(checkItem)<0){
            alert('Sorry Better Luck Next Time.');
        }
        else
        {
            alert('Hurray.. You have won .\n' + checkItem)
        }


    }


};

window.addEventListener('load', function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  // if (typeof web3 !== 'undefined') {
  //   console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 MetaCoin, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
  //   // Use Mist/MetaMask's provider
  //   window.web3 = new Web3(web3.currentProvider);
  // } else {
  //   console.warn("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  // }

  App.start();
});
