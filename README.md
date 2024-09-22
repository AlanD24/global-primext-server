# gptx_test - DATA BASE

Name of the database: gptx_test

## Creating the Database and the Table

Please use the following SQL statement to generate the database and the table needed for the test:

```sql
CREATE DATABASE IF NOT EXISTS gptx_test;

USE gptx_test;

CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    paternal_surname VARCHAR(35) NOT NULL,
    maternal_surname VARCHAR(35) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(10) NOT NULL
);
```

# Create .env file

In the current project I chose to hide port number, in root create a `.env` file which contains:

```env
PORT=8080
```

Where:
- PORT: number of port where node app will be running