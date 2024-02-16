# MySQL Backup to R2

This project leverages the innovative Bun runtime to provide a fast and efficient solution for backing up MySQL databases directly to Cloudflare's R2 storage, ensuring your data is securely stored and easily accessible.


## Getting Started

### Prerequisites

- Bun runtime installed on your system
- MySQL server installed on your system
- Cloudflare account with R2 storage enabled


### Installation

1. Clone this repository to your local machine using Bun:

    ```
    bun clone https://github.com/yourusername/bun-mysql-r2-backup.git
    ```

2. Navigate to the project directory:

    ```
    cd bun-mysql-r2-backup
    ```

3. Install dependencies:

    ```
    bun install
    ```

### Configuration

1. Rename the `.env.example` file to `.env` and fill in your MySQL and Cloudflare R2 details.

### Usage

Run the backup script with Bun:

    ```
    # Production
    bun run start
    # Development
    bun run dev
    ```
