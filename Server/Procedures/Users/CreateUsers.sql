-- Create a new table called 'TableName' in schema 'SchemaName'
-- Drop the table if it already exists

IF OBJECT_ID('Users.users', 'U') IS NOT NULL
DROP TABLE Users.users
GO
-- Create the table in the specified schema
CREATE TABLE users
(
    username [VARCHAR](50) NOT NULL PRIMARY KEY, -- primary key column
    email [VARCHAR](4500) NOT NULL ,
    CONSTRAINT AK_TransactionID UNIQUE(email),
    password [NVARCHAR](MAX) NOT NULL,
    hobbies [NVARCHAR](MAX) NOT NULL 

    -- specify more columns here
);
GO