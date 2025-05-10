<<<<<<< HEAD
# kroaks
=======
# Drosera Node Setup CLI

A simple CLI tool to automate the setup of Drosera Network operator on a VPS.

## Installation

You can install this package globally via npm:

```bash
npm install -g drosera-node-setup
```

Alternatively, you can use it without installing globally using `npx`:

```bash
npx drosera-node-setup
```

## Usage

Run the following command to start the setup process:

```bash
drosera-node-setup
```

This will generate the required configuration files for your Drosera Node setup in the current directory.

## Configuration

After the setup is complete, you will need to:

1. Edit the `.env.example` file and provide the correct values for your Ethereum wallet and other configurations.
2. Run the `setup.sh` script to configure your Drosera node.

## Files Generated

- `.env.example` - Environment variables for your Drosera node.
- `docker-compose.yaml` - Docker configuration for running the node.
- `drosera.service` - SystemD service file for running the Drosera node.
- `scripts/setup.sh` - Automated setup script for the Drosera node.

## Dependencies

This CLI tool requires the following dependencies:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)

## License

MIT
>>>>>>> 70e2a32 (Initial commit for drosera-node-setup CLI)
