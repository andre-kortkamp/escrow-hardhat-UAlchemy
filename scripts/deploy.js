async function main() {
    let depositor;
    let beneficiary;
    let arbiter;
    const deposit = ethers.utils.parseEther('1');
    
    depositor = await ethers.provider.getSigner(0);
    beneficiary = await ethers.provider.getSigner(1);
    arbiter = await ethers.provider.getSigner(2);
  
    //Escrow.sol
    const Contract = await ethers.getContractFactory(
      "Escrow"
    );
    const contract = await Contract.deploy();
    await contract.deployed(
        arbiter.getAddress(),
        beneficiary.getAddress(),
        {
            value: deposit,
        }
    );
    console.log(`Escrow deployed to ${contract.address}`);
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}