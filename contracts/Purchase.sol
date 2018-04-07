pragma solidity 0.4.21;

contract Purchase {
    struct Tx {
        address buyerAddress;
        string uniqueId;
        uint256 amount;
    }
    mapping(address => uint256) public buyer;
    mapping(address => Tx[]) public txToSeller;
    Tx[] public transactions;
    uint256 public totalBalance;
    uint256 public totalBuyer;

    function Purchase() public {}

    // function getTotalAmount() public view returns(uint256) {
    //     return this.balance;
    // }

    function getTotalBuyer() public view returns(uint256) {
        return totalBuyer;
    }

    // function getTransactions() public view returns(Tx[]) {
    //     return transactions;
    // }

    // function getTransactionsWithBuyer(address _address) public view returns(Tx[]) {
    //     return txToSeller[_address];
    // }

    function buyerDepositToContract() public payable {
        buyer[msg.sender] = msg.value;
        totalBuyer += 1;
    }

    function sendMoney(address _addressSeller, string _uniqueId, uint256 _amount) public payable {
        require(_amount <= buyer[msg.sender]);
        txToSeller[_addressSeller].push(Tx(msg.sender, _uniqueId, _amount));
        transactions.push(Tx(msg.sender, _uniqueId, _amount));
        _addressSeller.transfer(_amount);
    }
}
