
DROP PROCEDURE IF EXISTS dbo.insertUser;  
GO  
CREATE procedure [dbo].[insertUser]  
(  
@username varchar(50),  
@email varchar(50),  
@password varchar(50),
@hobbies nvarchar(max)    
)  
AS  
BEGIN  
insert into users (username,email,password,hobbies) values( @username, @email, @password,@hobbies)  
END  