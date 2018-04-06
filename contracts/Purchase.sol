pragma solidity 0.4.20;

contract Purchase {
    struct Tx {
        address buyerAddress;
        string uniqueId;
        uint256 amount;
    }
    mapping(address => uint256) public buyer;
    mapping(address => Tx[]) public txToSeller;
    uint256 public totalBalance;

    function Purchase() public {}

    function setTotalAmount() public payable {
        totalBalance = this.balance;
    }

    function buyerDepositToContract() public payable {
        buyer[msg.sender] = msg.value;
    }

    function sendMoney(address _addressSeller, string _uniqueId, uint256 _amount) public payable {
        require(_amount <= buyer[msg.sender]);
        txToSeller[_addressSeller].push(Tx(msg.sender, _uniqueId, _amount));
        _addressSeller.transfer(_amount);
    }
}
