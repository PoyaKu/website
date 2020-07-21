var abiVote = [
    {
        constant: false,
        inputs: [{ name: "_option", type: "uint256" }],
        name: "vote",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [{ name: "", type: "address" }],
        name: "isVote",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "endTime",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [{ name: "_option", type: "uint256" }],
        name: "getTotalVote",
        outputs: [{ name: "result", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [{ name: "_endTime", type: "uint256" }],
        name: "setEndTime",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "token",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [{ name: "_token", type: "address" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor"
    }
];


const abiDF = [{
    "constant": false,
    "inputs": [{
        "name": "_owner",
        "type": "address"
    },
    {
        "name": "value",
        "type": "uint256"
    }
    ],
    "name": "allocateTo",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "constant": false,
    "inputs": [{
        "name": "_spender",
        "type": "address"
    },
    {
        "name": "_value",
        "type": "uint256"
    }
    ],
    "name": "approve",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "constant": false,
    "inputs": [{
        "name": "_spender",
        "type": "address"
    },
    {
        "name": "_subtractedValue",
        "type": "uint256"
    }
    ],
    "name": "decreaseApproval",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "constant": false,
    "inputs": [{
        "name": "_spender",
        "type": "address"
    },
    {
        "name": "_addedValue",
        "type": "uint256"
    }
    ],
    "name": "increaseApproval",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "constant": false,
    "inputs": [{
        "name": "_to",
        "type": "address"
    },
    {
        "name": "_value",
        "type": "uint256"
    }
    ],
    "name": "transfer",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "constant": false,
    "inputs": [{
        "name": "_from",
        "type": "address"
    },
    {
        "name": "_to",
        "type": "address"
    },
    {
        "name": "_value",
        "type": "uint256"
    }
    ],
    "name": "transferFrom",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [{
        "name": "_initialAmount",
        "type": "uint256"
    },
    {
        "name": "_tokenName",
        "type": "string"
    },
    {
        "name": "_decimalUnits",
        "type": "uint8"
    },
    {
        "name": "_tokenSymbol",
        "type": "string"
    }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
},
{
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "owner",
        "type": "address"
    },
    {
        "indexed": true,
        "name": "spender",
        "type": "address"
    },
    {
        "indexed": false,
        "name": "value",
        "type": "uint256"
    }
    ],
    "name": "Approval",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "from",
        "type": "address"
    },
    {
        "indexed": true,
        "name": "to",
        "type": "address"
    },
    {
        "indexed": false,
        "name": "value",
        "type": "uint256"
    }
    ],
    "name": "Transfer",
    "type": "event"
},
{
    "constant": true,
    "inputs": [{
        "name": "_owner",
        "type": "address"
    },
    {
        "name": "_spender",
        "type": "address"
    }
    ],
    "name": "allowance",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [{
        "name": "_owner",
        "type": "address"
    }],
    "name": "balanceOf",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [{
        "name": "",
        "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [{
        "name": "",
        "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [{
        "name": "",
        "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}
];

// test
var addressDF = "0x5d378961e9d31c0ee394d34741fa1a18144f6fb5";
var addressVote = "0x9934A1C447f348E8CEc7A3C8F455b280058d5126";


// var addressDF = "0x431ad2ff6a9C365805eBaD47Ee021148d6f7DBe0";
// var addressVote = "0xD4573F462d4Fc4b0f0932Ab9315d194A58a7427E";
