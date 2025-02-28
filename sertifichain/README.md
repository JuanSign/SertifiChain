# SertifiChain Backend

## Requirements
To run ICP with Rust on Windows, ensure you have the following installed:

1. **Windows Subsystem for Linux (WSL)** with Ubuntu
2. **Rust & Cargo**
   - Install Rust using [rustup](https://rustup.rs/)
   - Ensure Rust is up to date: `rustup update`
3. **DFX SDK**
   - Install using: `sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"`
   - Verify installation: `dfx --version`
4. **Node.js & npm**
   - Install from [Node.js official website](https://nodejs.org/)
   - Verify installation: `node -v` and `npm -v`
5. **Additional Dependencies**
   - TypeScript: `sudo npm install -g typescript`
   - Cargo audit: `cargo install cargo-audit`

## Steps to Run

1. **Open Ubuntu CLI (WSL)**
2. **Navigate to the Project Directory**
   ```sh
   cd /mnt/c/<your-path>
   ```
3. **Setup Rust Target for WebAssembly**
   ```sh
   rustup target add wasm32-unknown-unknown
   ```
4. **Install Dependencies**
   ```sh
   cargo install cargo-audit
   sudo npm install -g typescript
   sudo npm install --save-dev typescript
   ```
5. **Start DFX Local Network**
   ```sh
   dfx start --background
   ```
6. **Create Canisters**
   ```sh
   dfx canister create --all
   ```
7. **Build the Canisters**
   ```sh
   dfx build
   ```
8. **Deploy the Canisters**
   ```sh
   dfx deploy
   ```

## Usage

### Issue a Land Certificate
```sh
dfx canister call sertifichain_backend issue_certificate '(1, "Alice", "New York", 500.0, "Gov Authority")'
```

### Transfer Ownership
```sh
dfx canister call sertifichain_backend transfer_ownership '(1, "Bob")'
```

### Get Certificate Details
```sh
dfx canister call sertifichain_backend get_certificate '(1)'
```

## Notes
- Ensure `dfx` is running before executing any commands.
- Replace `<your-path>` with the actual project directory path.
- Use `dfx stop` to stop the local network when done.

Enjoy developing on ICP with Rust! 🚀