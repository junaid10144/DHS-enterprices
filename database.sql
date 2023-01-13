CREATE TABLE account (
        cnic VARCHAR(13) PRIMARY KEY, 
        name VARCHAR ( 50 ) NOT NULL,
        password VARCHAR ( 150 ) NOT NULL, 
        email VARCHAR ( 128 ) UNIQUE NOT NULL,
		phone VARCHAR(10) UNIQUE NOT NULL, 
		country VARCHAR ( 50 ) NOT NULL,   
		city VARCHAR ( 50 ) NOT NULL,
		address VARCHAR ( 255 ) NOT NULL,
		created_at DATE NOT NULL DEFAULT NOW()
);

CREATE TABLE password_reset_tokens (
        user_id VARCHAR(13) UNIQUE REFERENCES account(cnic) ON DELETE CASCADE, 
        token VARCHAR ( 64 ) UNIQUE, --not null primary key , reset token ki lenth  64 h
        expiration_time TIMESTAMPTZ  --DATE NOT NULL DEFAULT NOW()
);