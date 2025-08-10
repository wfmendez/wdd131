const currentYear = new Date().getFullYear();

document.getElementById('currentyear').textContent = currentYear;


const lastModifiedDate = document.lastModified;

document.getElementById('lastModified').textContent = `Last Modification: ${lastModifiedDate}`;

const useCases = [
    {
        useCasesName: "DeFi",
        description: "DeFi protocols use Chainlink oracles for accurate and secure asset prices, vital for lending, trading, and liquidations.",
        imageIcon:
            "images/icons/money-bill.svg"
    },
    {
        useCasesName: "NFTs & Gaming",
        description: "Chainlink VRF generates on-chain verifiable randomness for NFTs, rewards, and gameplay mechanics, ensuring fairness and transparency.",
        imageIcon:
            "images/icons/gamepad.svg"
    },
    {
        useCasesName: "Supply Chain",
        description: "Smart contracts can track and verify the movement of goods in the supply chain in real-time, improving efficiency and transparency.",
        imageIcon:
            "images/icons/parachute-box.svg"
    },
    {
        useCasesName: "Parametric Insurance",
        description: "Chainlink oracles trigger automatic payouts based on external data, like weather, without the need for manual claims.",
        imageIcon:
            "images/icons/umbrella.svg"
    },
    {
        useCasesName: "Cross-Chain Interoperability (CCIP)",
        description: "CCIP enables the secure transfer of data and tokens across different blockchains, allowing for multi-chain applications.",
        imageIcon:
            "images/icons/cubes.svg"
    },
    {
        useCasesName: "Real-World Assets (RWA)",
        description: "Oracles connect real-world assets like real estate or stocks to the blockchain, verifying their value and ownership for use in DeFi.",
        imageIcon:
            "images/icons/house-lock.svg"
    },
    {
        useCasesName: "Proof of Reserve (PoR)",
        description: "Automates the execution of smart contract functions based on pre-defined conditions, such as triggering a trade at a specific time.",
        imageIcon:
            "images/icons/vault.svg"
    },
    {
        useCasesName: "Automation",
        description: "Automates the execution of smart contract functions based on pre-defined conditions, such as triggering a trade at a specific time.",
        imageIcon:
            "images/icons/gears.svg"
    },
    {
        useCasesName: "Functions",
        description: "Allows smart contracts to connect to any web2 API, providing a secure and flexible way to fetch data or trigger actions off-chain.",
        imageIcon:
            "images/icons/code.svg"
    },
]

const cardsContainer = document.querySelector('.use-cases-cards-container');

useCases.forEach(useCase => {
  const cardHtml = `
    <div class="use-case-card">
      <img src="${useCase.imageIcon}" alt="${useCase.useCasesName} Icon" class="use-case-icon">
      <h3 class="use-case-title">${useCase.useCasesName}</h3>
      <p class="use-case-description">${useCase.description}</p>
    </div>
  `;
  cardsContainer.insertAdjacentHTML('beforeend', cardHtml);
});