# Getting Started

To get started with this project, install the dependencies with `npm install`.

## Compilation

Compile the contracts using `npx buidler compile`. This will create artifacts that will be placed into the `/client` folder.

## Starting the Client

Start the client application by navigating to the `/client` folder in your terminal and running `parcel index.html`.

## Configure the Client

Configure the client application to point to the ERC20 Smart Contract that you have deployed. You can configure this by opening up `client/config.js`. This file will contain an address of an ERC20 Smart Contract.

Point it at the ERC20 Token of your choice and then you will be able to view your balance and send tokens within the interface.
